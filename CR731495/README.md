Detailed report: https://clusterfuzz.com/testcase?key=6566246584942592

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_v8_mipsel_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  args[0]->IsString() in runtime-strings.cc
  v8::internal::__RT_impl_Runtime_StringAdd
  v8::internal::Runtime_StringAdd
  
Sanitizer: address (ASAN)

Regressed: V8: 45785:45786

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6566246584942592


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.