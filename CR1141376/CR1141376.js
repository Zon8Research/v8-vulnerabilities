const wasmMagic = [0x00, 0x61, 0x73, 0x6d];
const version = [0x01, 0x00, 0x00, 0x00];
const i32const = 0x41;
const i64const = 0x42;
const arrayNewWithRTT = [0xfb, 0x11];
const arrayGet = [0xfb, 0x13];
const rttCanon = [0xfb, 0x30];
const functionKind = 0x00;
const typeSection = 0x01;
const importSection = 0x02;
const functionSection = 0x03;
const exportSection = 0x07;
const codeSection = 0x0a;
const functionType = 0x60;
const arrayType = 0x5e;
const i64Type = 0x7e;

String.prototype.wasmBytes = function() {
    let res = [this.length];
    for (let i = 0; i < this.length; i++) {
        res.push(this.charCodeAt(i));
    }
    return res;
}

const functions = [
  { name: "run", index: 0 }
];

function leb(val) {
    let bytes = [];
    while (val != 0) {
        let byte = val & 0x7f;
        val >>= 7;
        if (val) {
            byte |= 0x80;
        }
        bytes.push(byte);
    }
    return bytes;
}

const code = [i64const, 0x00, i32const, ...leb(0x40003fff), ...rttCanon, 0x1, ...arrayNewWithRTT, 0x1, i32const, ...leb(0x31313131/8), ...arrayGet, 0x1];

const moduleBytes = [];
moduleBytes.push(...wasmMagic);
moduleBytes.push(...version);

const types = [
  [functionType, 0x00, 0x01, i64Type],
  [arrayType, i64Type, /*mutability=*/0x01],
];
const typesSectionLength = 1 + types.reduce((sum, bytes)=>sum+bytes.length, 0);
moduleBytes.push(...[typeSection, typesSectionLength, types.length]);
for (const type of types) {
  moduleBytes.push(...type);
}

moduleBytes.push(...[importSection, 0x0f, 0x01, ..."env".wasmBytes(), ..."mem".wasmBytes(), 0x02, 0x01, 0x80, 0x40, 0x80, 0x40]);

moduleBytes.push(...[functionSection, 0x02, 0x01, /*type=*/0x00]);

// export section
const functionBytes = [];
for (const f of functions) {
    functionBytes.push([...f.name.wasmBytes(), functionKind, f.index]);
}
const exportSectionLength = 1 + functionBytes.reduce((sum, bytes)=>sum+bytes.length, 0);
moduleBytes.push(...[exportSection, exportSectionLength, functions.length]);
for (const bytes of functionBytes) {
    moduleBytes.push(...bytes);
}

// code section
const locals = [0x00];
moduleBytes.push(codeSection);
moduleBytes.push(code.length+locals.length+3);
moduleBytes.push(0x01); // function body count
moduleBytes.push(code.length+locals.length+1);
moduleBytes.push(...locals);
moduleBytes.push(...code);
moduleBytes.push(0x0b); // end marker

const mem = new WebAssembly.Memory({initial: 8192, maximum: 8192});
const wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array(moduleBytes)), {env: {mem: mem}});

print("running");
print(wasm.exports.run().toString(16));
print("done");
