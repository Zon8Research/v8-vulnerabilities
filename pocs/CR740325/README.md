Detailed report: https://clusterfuzz.com/testcase?key=5327306519478272

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  is_api_object in objects.cc
  v8::internal::JSObject::WasConstructedFromApiFunction
  v8::internal::JSObject::IsUnmodifiedApiObject
  
Sanitizer: address (ASAN)

Regressed: V8: 46474:46475

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5327306519478272


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.