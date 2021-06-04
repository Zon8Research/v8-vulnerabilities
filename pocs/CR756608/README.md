Detailed report: https://clusterfuzz.com/testcase?key=5958699981209600

Fuzzer: decoder_langfuzz
Job Type: linux_asan_d8
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0xffffffffffffffff
Crash State:
  v8::internal::Invoke
  v8::internal::CallInternal
  v8::Script::Run
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8&range=47371:47372

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5958699981209600

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.