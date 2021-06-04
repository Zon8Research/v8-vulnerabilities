The attached PoC causes OOB writes from a call to Array.prototype.map.

In builtins/builtins-array-gen.cc,

 void GenerateIteratingArrayBuiltinBody(
      const char* name, const BuiltinResultGenerator& generator,
      const CallResultProcessor& processor, const PostLoopAction& action,
      const Callable& slow_case_continuation,
      ForEachDirection direction = ForEachDirection::kForward) {
  …

    merged_length.Bind(LoadJSArrayLength(o()));
    Goto(&has_length);
    ...
    BIND(&has_length);
    len_ = merged_length.value();

The length of the receiver JSArray (|o_|) is saved in |len_|.

Later on, 

  a_.Bind(generator(this));

Which creates and saves the result array of size |len_| to |a_|:

  Node* MapResultGenerator() {
    // 5. Let A be ? ArraySpeciesCreate(O, len).
    return ArraySpeciesCreate(context(), o(), len_);
  }

If the receiver is an array of a type extended from Array, we can override the species attribute to return another Array-extended type that allocates less than the requested |len_|.

Arrays created from these 2 types are still considered fast JSArrays, and later on as the map results are being written, we get OOB writes because the result JSArray is too small:

Node* MapProcessor(Node* k_value, Node* k) {
  ....
    BIND(&fast);
    {
      kind = EnsureArrayPushable(a(), &runtime);
      elements = LoadElements(a());
      GotoIf(IsElementsKindGreaterThan(kind, FAST_HOLEY_SMI_ELEMENTS),
             &object_push_pre);
      TryStoreArrayElement(FAST_SMI_ELEMENTS, mode, &runtime, elements, k,
                           mappedValue);
      Goto(&finished);
    }

