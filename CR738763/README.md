Detailed report: https://clusterfuzz.com/testcase?key=6342771542851584

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !field_type->NowStable() || field_type->NowContains(value) || (!FLAG_use_allocat
  v8::internal::JSObject::JSObjectVerify
  v8::internal::Object::SetDataProperty
  
Sanitizer: address (ASAN)

Regressed: V8: 45974:45975

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6342771542851584


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.