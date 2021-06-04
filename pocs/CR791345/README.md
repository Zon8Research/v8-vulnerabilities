<b>VULNERABILITY DETAILS</b>
https://cs.chromium.org/chromium/src/v8/src/builtins/builtins-array-gen.cc?rcl=fc33dfbebfb1cb800d490af97bf1019e9d66be33&l=1114
  Node* HandleFastSlice(Node* context, Node* array, Node* from, Node* count,
                        Label* slow) {
    VARIABLE(result, MachineRepresentation::kTagged);
    Label done(this);

    GotoIf(TaggedIsNotSmi(from), slow);
    GotoIf(TaggedIsNotSmi(count), slow);

    [...]

    int max_fast_elements =
        (kMaxRegularHeapObjectSize - FixedArray::kHeaderSize - JSArray::kSize -
         AllocationMemento::kSize) /
        kPointerSize;
    GotoIf(SmiAboveOrEqual(count, SmiConstant(max_fast_elements)),
           &try_simple_slice);

    GotoIf(SmiLessThan(from, SmiConstant(0)), slow);

    Node* end = SmiAdd(from, count); //***1***

    Node* unmapped_elements = LoadFixedArrayElement(
        sloppy_elements, SloppyArgumentsElements::kArgumentsIndex);
    Node* unmapped_elements_length =
        LoadFixedArrayBaseLength(unmapped_elements);

    GotoIf(SmiGreaterThan(end, unmapped_elements_length), slow); //***2***

    Node* array_map = LoadJSArrayElementsMap(HOLEY_ELEMENTS, native_context);
    result.Bind(AllocateJSArray(HOLEY_ELEMENTS, array_map, count, count,
                                nullptr, SMI_PARAMETERS));

    index_out.Bind(IntPtrConstant(0));
    Node* result_elements = LoadElements(result.value());
    Node* from_mapped = SmiMin(parameter_map_length, from);
    Node* to = SmiMin(parameter_map_length, end); //***3***
    Node* arguments_context = LoadFixedArrayElement(
        sloppy_elements, SloppyArgumentsElements::kContextIndex);
    VariableList var_list({&index_out}, zone());
    BuildFastLoop(
        var_list, from_mapped, to,
        [this, result_elements, arguments_context, sloppy_elements,
         unmapped_elements, &index_out](Node* current) {
          Node* context_index = LoadFixedArrayElement(
              sloppy_elements, current,
              kPointerSize * SloppyArgumentsElements::kParameterMapStart,
              SMI_PARAMETERS); //***4***
          Label is_the_hole(this), done(this);
          GotoIf(IsTheHole(context_index), &is_the_hole);
          Node* mapped_argument =
              LoadContextElement(arguments_context, SmiUntag(context_index));
          StoreFixedArrayElement(result_elements, index_out.value(),
                                 mapped_argument, SKIP_WRITE_BARRIER); //***5***
[...]


An integer overflow can occur in (1), and |end| can end up being a negative number.
Since the sanity checks in (2) and (3) are implemented using signed integer arithmetic,
a negative |end| passes both checks leading to out-of-bounds access later in (4) and (5).

Replacing |SmiGreaterThan()| with |SmiAbove()| should be enough to fix the issue.

<b>VERSION</b>
Google Chrome 64.0.3278.0 (Official Build) dev (64-bit)
Google Chrome 64.0.3282.3 (Official Build) canary (32-bit)
The stable and beta branches are not affected.

<b>REPRODUCTION CASE</b>
<script>
(function(a) {
    var len = navigator.userAgent.includes("x64") ? 0x80000000 : 0x40000000;
    arguments.length = len;
    Array.prototype.slice.call(arguments, len - 1, len);
}('a'))
</script>