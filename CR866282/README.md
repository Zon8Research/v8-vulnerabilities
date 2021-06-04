Detailed report: https://clusterfuzz.com/testcase?key=6227679641337856

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (object->IsJSReceiver()) in objects-i
  cast
  at<v8::internal::JSReceiver>
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=54594:54595

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6227679641337856

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.