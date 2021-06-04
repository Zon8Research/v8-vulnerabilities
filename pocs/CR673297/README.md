We bake in the context in several location in wasm code:
1) boxing/unboxing in WASM_TO_JS and JS_TO_WASM
2) Throwing in stack checks
3) Throwing for traps

(1) is no issue since code for these stubs is recompiled on every instantiation.

For (2) and (3) the context is baked into the code of actual wasm functions, and is reused when instantiated in different contexts (via compilation cache for asm.js function, maybe also after deserialization). This gives access to foreign contexts.

We currently see two options to fix this:
1) Patch references to the context in all code objects during instantiation.
2) Don't directly include in the context in wasm code, instead call to stubs for throwing errors / triggering stack check errors.

Solution (2) has two advantages:
1) If we just recompile those stubs at instantiation, we never have to patch contexts anywhere.
2) We probably also reduce code size, since runtime calls are quite long (around 20 bytes on x64, where a raw call is just 5 bytes).