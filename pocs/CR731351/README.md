Detailed report: https://clusterfuzz.com/testcase?key=5083182063157248

Fuzzer: inferno_js_fuzzer
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: UNKNOWN READ
Crash Address: 0x26b10000
Crash State:
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::Script::Run
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8&range=460544:464119

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5083182063157248


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.