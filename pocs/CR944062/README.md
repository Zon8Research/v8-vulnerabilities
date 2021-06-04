Since commit https://chromium.googlesource.com/v8/v8.git/+/c22bb466d8934685d897708119543d099b9d2a9a turbofan supports inlining calls to array.includes and array.indexOf. The logic of the function is roughly:

1. Check the set of possible Maps of the array type (with NodeProperties::InferReceiverMaps).
2. If they are all fast arrays, find the correct CSA builtin to handle the fast path (`Callable const callable = search_variant == SearchVariant::kIndexOf ? GetCallableForArrayIndexOf(kind, isolate()) : GetCallableForArrayIncludes(kind, isolate());`).
3. Load the array length and call the builtin. The builtin will assume that the array is a FastArray with packed (dense) elements and directly search linearly through the backing memory.

The problem is that NodeProperties::InferReceiverMaps doesn't necessarily guarantee that the object will always have the inferred Map. In case it can't prove that the objects will always have the inferred Maps it will return kUnreliableReceiverMaps:

    // Walks up the {effect} chain to find a witness that provides map
    // information about the {receiver}. Can look through potentially
    // side effecting nodes.
    enum InferReceiverMapsResult {
      kNoReceiverMaps,         // No receiver maps inferred.
      kReliableReceiverMaps,   // Receiver maps can be trusted.
      kUnreliableReceiverMaps  // Receiver maps might have changed (side-effect),
                               // but instance type is reliable.
    };
    static InferReceiverMapsResult InferReceiverMaps(
        JSHeapBroker* broker, Node* receiver, Node* effect,
        ZoneHandleSet<Map>* maps_return);

In which case the caller is responsible for guarding any optimizations based on the inferred maps (e.g. by adding MapChecks). However, in this case the calling function fails to do so. As such, if the array is changed to dictionary mode before the inlined function call, the CSA builtin will read data out-of-bounds.

The following sample, found through fuzzing, triggers this case: 

    function v7(v8,v11) {
        function v14(v15,v16) { }
        // Transition to dictionary mode in the final invocation.
        const v17 = v11.__defineSetter__(v8, v14);
        // Will then read OOB.
        const v18 = v11.includes(1234);
        return v18;
    }
    v7([], []);
    v7([], []);
    %OptimizeFunctionOnNextCall(v7);
    v7([], []);

    const v57 = v7(String(0x1000000), []);

Note: the commit introducing this vulnerability does not appear to be included in Chrome release yet.

Please note: this bug is subject to a 90 day disclosure deadline. After 90 days elapse
or a patch has been made broadly available (whichever is earlier), the bug
report will become visible to the public.