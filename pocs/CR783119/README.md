Detailed report: https://clusterfuzz.com/testcase?key=4865789311320064

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  nof_elements <= array_length in objects-debug.cc
  v8::internal::JSArray::JSArrayVerify
  v8::internal::Object::ObjectVerify
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48861:48862

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4865789311320064

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.