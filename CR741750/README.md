Both of the following snippets validate and produce this output:
=============================================
wasm-function[0]:1: RuntimeError: unreachable
RuntimeError: unreachable
    at module_1.main (wasm-function[0]:1)
    at module_0.main (wasm-function[0]:3)
    at test.js:32:19
=============================================


Version 1 (which looks correct to me):
=============================================
let builder0 = new WasmModuleBuilder();
builder0.setName('module_0');
let sig_index = builder0.addType(kSig_i_i);
builder0.addFunction('main', kSig_i_i)
    .addBody([
      kExprGetLocal, 0,  // --
      kExprGetLocal, 0,  // --
      kExprCallIndirect, sig_index, kTableZero
    ])  // --
    .exportAs('main');
builder0.setFunctionTableLength(3);
builder0.addExportOfKind('table', kExternalTable);
let module0 = new WebAssembly.Module(builder0.toBuffer());
let instance0 = new WebAssembly.Instance(module0);

let builder1 = new WasmModuleBuilder();
builder1.setName('module_1');
builder1.addFunction('main', kSig_i_i).addBody([kExprUnreachable]);
builder1.addImportedTable('z', 'table');
builder1.addFunctionTableInit(0, false, [0], true);
let module1 = new WebAssembly.Module(builder1.toBuffer());
let instance1 =
    new WebAssembly.Instance(module1, {z: {table: instance0.exports.table}});
instance0.exports.main(0);
=============================================


Version 2 (which looks incorrect to me):
=============================================
let builder0 = new WasmModuleBuilder();
builder0.setName('module_0');
let sig_index = builder0.addType(kSig_i_v);
builder0.addFunction('main', kSig_i_i)
    .addBody([
      kExprGetLocal, 0,  // --
      kExprCallIndirect, sig_index, kTableZero
    ])  // --
    .exportAs('main');
builder0.setFunctionTableLength(3);
builder0.addExportOfKind('table', kExternalTable);
let module0 = new WebAssembly.Module(builder0.toBuffer());
let instance0 = new WebAssembly.Instance(module0);

let builder1 = new WasmModuleBuilder();
builder1.setName('module_1');
builder1.addFunction('main', kSig_i_i).addBody([kExprUnreachable]);
builder1.addImportedTable('z', 'table');
builder1.addFunctionTableInit(0, false, [0], true);
let module1 = new WebAssembly.Module(builder1.toBuffer());
let instance1 =
    new WebAssembly.Instance(module1, {z: {table: instance0.exports.table}});
instance0.exports.main(0);
=============================================


Notice the difference in the third line!

Tagging as security issue. If we really mess up signature checks here, this can have severe consequences.