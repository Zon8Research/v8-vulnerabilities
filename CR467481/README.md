Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5764863842844672

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x000000000000
Crash State:
  v8::base::NoBarrier_Load
  v8::internal::HeapObject::map_word
  v8::internal::HeapObject::map
  
Regressed: V8: r21064:21106

Minimized Testcase (0.31 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv95pS11fq6X0URrLPH3ym_PmFmW5Y6QaAs23c1iqSmV8uz1BNPdfmYavP5DYKlwDBimOtxQ6-f7FGMx3tugChM2HGiP62bXuZAGUTSqS01Tp6kufWK8_uQTRib7LUfmJUbHRM5Ua6rYm9ei2UVvUnmNIGzVX1w
function __f_5(a1, a2) {
  var __v_7 = a2[0];
  var __v_8 = a1[0];
  a2[0] = 0.3;
}
__v_6 = new Array(1);
__v_6[0] = "tagged";
__f_5(__v_6, [1]);
__v_5 = new Array(1);
__v_5[0] = 0.1;
__f_5(__v_5, __v_5);
__v_5 = new Array(10);
__f_5(__v_5, __v_5);
%OptimizeFunctionOnNextCall(__f_5);
__f_5(__v_5, __v_5);
 __v_5[0];


Filer: jarin