load('test/mjsunit/wasm/wasm-constants.js');
load('test/mjsunit/wasm/wasm-module-builder.js');
const builder = new WasmModuleBuilder();
builder.addMemory(16, 32);
builder.addFunction("test", kSig_i_v).addBody([
  kExprI32Const, 12,         // i32.const 0
]);
let bla = 0;
let module = new WebAssembly.Module(builder.toBuffer());
module.then = (resolve) => {
  return resolve(0x41414141);
};
WebAssembly.instantiate(module);
