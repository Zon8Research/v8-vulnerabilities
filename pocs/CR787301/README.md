Detailed report: https://clusterfuzz.com/testcase?key=5335701809004544

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: Stack-overflow
Crash Address: 0x7fff3ca706c0
Crash State:
  v8::internal::TranslatedState::MaterializeAt
  FieldAt
  v8::internal::TranslatedState::MaterializeCapturedObjectAt
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48562:48563

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5335701809004544

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.