Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6138775275307008

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: UNKNOWN READ
Crash Address: 0xdeadbeee
Crash State:
  v8::internal::NewSpace::Verify
  v8::internal::Heap::Verify
  v8::internal::Heap::GarbageCollectionPrologue
  
Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=windows_asan_d8&range=415049:415582

Minimized Testcase (0.21 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96qQ30azSdh_3V9ODOxut1WxhnpHdcDINJlUc3x_bR8IE81BDYfZP7TCwoZHWEGkTpfjTM-9Q9ix1B4MbARtLjQ9NVBVWzEgHJT201y3Bob-k0ZsN2P9GbogGzyl8giv1GJVoLYvW2E_eU4R46HM3z_zUZIVw?testcase_id=6138775275307008
function __f_1(a) {
  var __v_1 = 1 + a;
}
function __f_0() {
  __f_1();
  var __v_0 = {x : __f_1()};
  return [__v_0];
}
try {
__f_0();
__f_0();
%OptimizeFunctionOnNextCall(__f_0);
__f_0();
} catch(e) {; }
  gc();


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.