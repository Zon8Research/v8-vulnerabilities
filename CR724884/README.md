Detailed report: https://clusterfuzz.com/testcase?key=4708647107297280

Fuzzer: inferno_js_fuzzer
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: Heap-use-after-free READ 4
Crash Address: 0x0b707af4
Crash State:
  v8::Shell::CreateRealm
  v8::Shell::RealmCreate
  v8::internal::FunctionCallbackArguments::Call
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4708647107297280


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.