Detailed report: https://clusterfuzz.com/testcase?key=5848054258466816

Fuzzer: inferno_js_fuzzer_c
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (object->IsJSReceiver()) in objects-i
  v8::internal::JSReceiver::cast
  cast<v8::internal::Object>
  
Sanitizer: address (ASAN)

Regressed: V8: 43441:43442

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5848054258466816


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.