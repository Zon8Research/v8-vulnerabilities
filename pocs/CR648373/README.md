Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6145192757559296

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x0beefdb4
Crash State:
  v8::internal::SloppyArgumentsElementsAccessor<v8::internal::SlowSloppyArgumentsE
  v8::internal::ElementsAccessorBase<v8::internal::SlowSloppyArgumentsElementsAcce
  v8::internal::__RT_impl_Runtime_ArrayIncludes_Slow
  
Recommended Security Severity: Medium

Regressed: V8: r39415:39416

Minimized Testcase (1.02 Kb): https://cluster-fuzz.appspot.com/download/AMIfv95JN2Tuz13eDTKkgvxBD7NUzZBBV5ZimzoIk9k7ccvNloQVRnIRU0XbwaP1lPu3ico6qQDN3yuxN5Gsp48tD2S_3xdBTDBkjNyKafuq18yUESC0Kfk-yEejCwuuDaUtZMl44PPozBGFo3dERubMkwhCZa06bA?testcase_id=6145192757559296

Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.