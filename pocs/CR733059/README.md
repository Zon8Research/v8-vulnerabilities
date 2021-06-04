Detailed report: https://clusterfuzz.com/testcase?key=6309710805598208

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (!owned || FindObject(address)->IsHea
  v8::internal::LargeObjectSpace::Contains
  v8::internal::Heap::Contains
  
Sanitizer: address (ASAN)

Regressed: V8: 45646:45647

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6309710805598208


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.