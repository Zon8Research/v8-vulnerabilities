Detailed report: https://clusterfuzz.com/testcase?key=5581496621727744

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (object->IsJSReceiver()) in objects-i
  cast
  cast<v8::internal::Object>
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48139:48140

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5581496621727744

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.