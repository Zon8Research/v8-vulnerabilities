Detailed report: https://clusterfuzz.com/testcase?key=6390426767720448

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (object->IsFixedArray()) in objects-i
  cast
  v8::internal::TranslatedState::MaterializeCapturedObjectAt
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48063:48064

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6390426767720448

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.