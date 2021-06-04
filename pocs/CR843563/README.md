Scenario: A wasm module exports an imported function.

During compilation of the module, we create js-to-wasm wrappers for the exports.

During instantiation, we create a wasm-to-js wrapper for each import which is a JS object (i.e. not a wasm export).
We then patch the js-to-wasm wrapper to call this wasm-to-js wrapper.

Problem:
The wasm-to-js wrapper does not embed the JS object (which would be even worse); instead it calls via the ImportedFunctionCallables on the instance.
However, the wrapper is specialized to the import: We generate different code depending on whether it's a JSFunction with matching argument count, or other callable JS objects.
The shared js-to-wasm wrapper will always call the latest created wasm-to-js wrapper, even though other instances might require different code, because they have other imports. This can lead to arbitrary read and write access to the stack.

Reproducer:

load('test/mjsunit/wasm/wasm-constants.js');
load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
sig1 = makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]);
const imp_idx = builder.addImport('q', 'imp', kSig_i_i);
builder.addExport('exp', imp_idx);
const module = builder.toModule();

function bad(a, b, c, d, e, f, g, h) {
  print(JSON.stringify([a, b, c, d, e, f, g, h]));
}
const instance1 = new WebAssembly.Instance(module, {q: {imp: bad}});
const instance2 = new WebAssembly.Instance(module, {q: {imp: i => i}});

print(instance1.exports.exp(5));
