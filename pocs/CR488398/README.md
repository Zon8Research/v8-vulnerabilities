Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5249907737231360

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_dbg

Crash Type: Fatal error
Crash Address: 
Crash State:
  ../../v8/src/deoptimizer.cc,
  
Regressed: V8: r28354:28391

Minimized Testcase (0.26 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv97kJBSz8f3NK9dpoxsktJb2FWwBw7Hp0izU5dCNqJQiHZ1UqbdUBwGrilnG8-vg05fnLGZTEJOuIYKf0NWUmgSGZvWtTu3MOKts4KQ-dGvp10GR4RNM4zEK1jnRcmkbS9VL3n2kdNuYcOBKQXTJOoFQwDSdQA
var __v_10 = 4294967295;
__v_0 = [];
__v_0.__proto__ = [];
__v_16 = __v_0;
function __f_17(__v_16, base) {
  __v_16[base + 1] = 1;
  __v_16[base + 4] = base + 4;
}
__f_17(__v_16, true);
__f_17(__v_16, 14);
%OptimizeFunctionOnNextCall(__f_17);
__f_17(__v_16, 2048);


Filer: machenbach