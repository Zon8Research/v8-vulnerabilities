Detailed report: https://clusterfuzz.com/testcase?key=4790793915858944

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: UNKNOWN WRITE
Crash Address: 0x7f2507f8c013
Crash State:
  Call
  v8::internal::Invoke
  v8::internal::CallInternal
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=52626:52627

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4790793915858944

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.