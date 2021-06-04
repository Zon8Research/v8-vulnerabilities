UserAgent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36

Steps to reproduce the problem:
1. Download the poc.html
2. Run chrome --js-flags="--wasm-grow-shared-memory" poc.html

What is the expected behavior?
Not crash.

What went wrong?
WasmMemoryTracker uses isolates_per_buffer_ to map each buffer to the isolates that share the backing store.

When using postMessage to share a WasmMemoryObject, it will call RegisterWasmMemoryAsShared, which insert current isolate to |isolates_per_buffer_[backing_store]|.

From https://cs.chromium.org/chromium/src/v8/src/wasm/wasm-memory.cc?l=281&rcl=0460fcded75a3fecb8375d55feeaf8d0d402c5cb
```
void WasmMemoryTracker::RegisterWasmMemoryAsShared(
    Handle<WasmMemoryObject> object, Isolate* isolate) {
  [...]
  if (!IsWasmMemory(backing_store)) return;
  {
    base::MutexGuard scope_lock(&mutex_);
    // Register as shared allocation when it is post messaged. This happens only
    // the first time a buffer is shared over Postmessage, and track all the
    // memory objects that are associated with this backing store.
    RegisterSharedWasmMemory_Locked(object, isolate);
    // Add isolate to backing store mapping.
    isolates_per_buffer_[backing_store].emplace(isolate);
  }
}
```

RegisterWasmMemoryAsShared will be called both serialize and deserialize. However, we can interrupt serialization by throwing an exception after the WasmMemoryObject getting serialized, and |isolates_per_buffer_[backing_store]| will only contain one isolate.

After calling WasmMemoryObject::Grow, gc should decide whether the backing store will be freed or not.

From https://cs.chromium.org/chromium/src/v8/src/wasm/wasm-memory.cc?l=455&rcl=0c53fce086cb01d4070013c3139f846d2477b3cc
```
void WasmMemoryTracker::FreeMemoryIfNotShared_Locked(
    Isolate* isolate, const void* backing_store) {
  RemoveSharedBufferState_Locked(isolate, backing_store); // ** 1 **
  if (CanFreeSharedMemory_Locked(backing_store)) {
    const AllocationData allocation =
        ReleaseAllocation_Locked(isolate, backing_store);
    CHECK(FreePages(GetPlatformPageAllocator(), allocation.allocation_base,
                    allocation.allocation_length));
  }
}

bool WasmMemoryTracker::CanFreeSharedMemory_Locked(const void* backing_store) {
  const auto& value = isolates_per_buffer_.find(backing_store);  
  // If no isolates share this buffer, backing store can be freed.
  // Erase the buffer entry.
  if (value == isolates_per_buffer_.end() || value->second.empty() /* ** 2 ** */) return true;  
  return false;
}
```
[1] will remove |isolate| in unordered_set isolates_per_buffer_[backing_store], because there are only one isolate in the set before [1], [2] will be true and backing store will be freed.

We still keep a reference to the freed memory region and UAF occured.

Note:
This looks very similar to https://bugs.chromium.org/p/project-zero/issues/detail?id=1819, but with different code path. In this case, SharedArrayBuffer in WasmMemoryObject gets externalized and Blink's GC takes responsible for managing the memory.

Did this work before? N/A 

Chrome version: 75.0.3770.80  Channel: stable
OS Version: 
Flash Version: