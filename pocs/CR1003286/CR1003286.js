let builder = new WasmModuleBuilder();
let body = [];

const NUM_CASES = 0x40000-1;

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

for (let i=0; i<NUM_CASES; i++) {
    //body.push(...wasmI32Const(i));
    body.push(kExprReturn);
    body.push(kExprEnd); 
}

builder.addFunction('main', kSig_v_i)
    .addBody(body)
    .exportFunc();

let mod = new WebAssembly.Module(builder.toBuffer(true));
let inst = new WebAssembly.Instance(mod, {});
inst.exports.main(0);

