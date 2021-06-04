Detailed report: https://clusterfuzz.com/testcase?key=6034059942952960

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x7fd55f102634
Crash State:
  v8::internal::Invoke
  v8::internal::CallInternal
  v8::Script::Run
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6034059942952960

Issue manually filed by: ishell

See https://github.com/google/clusterfuzz-tools for more information.