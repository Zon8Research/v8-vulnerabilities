UserAgent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36

Steps to reproduce the problem:
I've tested this code in 6.5-lkgr and master branch, and this also can be reproduced in v8 6.4 if we turn on --wasm-jit-to-native flag.

Execute the following code using d8 with --allow-natives-syntax flag.
```
// Flags: --allow-natives-syntax

load('test/mjsunit/wasm/wasm-constants.js');
load('test/mjsunit/wasm/wasm-module-builder.js');
let kTableSize = 3;

var builder = new WasmModuleBuilder();
var sig_index1 = builder.addType(kSig_i_v);
builder.addFunction('main', kSig_i_ii).addBody([
    kExprGetLocal,
    0,
    kExprCallIndirect,
    sig_index1,
    kTableZero
]).exportAs('main');
builder.setFunctionTableBounds(kTableSize, kTableSize);
var m1_bytes = builder.toBuffer();
var m1 = new WebAssembly.Module(m1_bytes);

var serialized_m1 = %SerializeWasmModule(m1);
var m1_clone = %DeserializeWasmModule(serialized_m1, m1_bytes);
var i1 = new WebAssembly.Instance(m1_clone);

i1.exports.main(123123);
```

What is the expected behavior?
not crash

What went wrong?
This results in segfault.
```
$ ./out/x64.release/d8 wasm.js --allow-natives-syntax
Received signal 11 SEGV_MAPERR 000900000007

==== C stack trace ===============================

 [0x55d067044d95]
 [0x7f2e57b56390]
 [0x55d066f45d64]
 [0x55d066d28a5b]
 [0x55d0668f9b59]
 [0x55d0668d5fb3]
 [0x55d0668d5c01]
 [0x55d0668de219]
 [0x55d0668e0293]
 [0x55d0668e1677]
 [0x7f2e57074830]
 [0x55d0668d402a]
[end of stack trace]
[1]    22535 segmentation fault  ./out/x64.release/d8 wasm.js --allow-natives-syntax
```

Did this work before? N/A 

Chrome version:   Channel: beta
OS Version: OS X 10.13.3
Flash Version: