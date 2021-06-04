Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6192417483259904

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: Heap-buffer-overflow READ 4
Crash Address: 0xe3813410
Crash State:
  v8::internal::Simulator::DecodeType3
  v8::internal::Simulator::InstructionDecode
  v8::internal::Simulator::Execute
  
Recommended Security Severity: Medium

Regressed: V8: r37469:37470

Minimized Testcase (0.35 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv94pJIBeltUYhNmfFosSlu1ji1N08she7389ltaoMf6pxygK3grzkgWLTaPecsbrUx2LPBO4nOXHRleikNGtUodVO4eGNehFbL8rr-GZY_VDyN0P9Zs_Iut1RE1wunVCpX5EU6Mv-2-1kH4X0KwZXk0U4-Fmnw?testcase_id=6192417483259904
var __v_8 = {};
function __f_58(expected, __f_75, __f_7) {
 __f_75(__v_8, __f_7, new ArrayBuffer(1)).__f_19();
}
function __f_105(__v_8, __v_36, buffer) {
  "use asm";
  var __v_34 = new __v_8.Int32Array(buffer);
  function __f_19() {
    var __v_31 = 4;
    __v_34[__v_31 >> 2] = ((__v_34[0]|0) + 1) | 0;
  }
  return {__f_19: __f_19};
}
__f_58(7, __f_105);


Issue manually filed by: ishell

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.