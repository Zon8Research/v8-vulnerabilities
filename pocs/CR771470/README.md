Detailed report: https://clusterfuzz.com/testcase?key=4924073259040768

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (object->IsJSObject()) in objects-inl
  cast
  v8::internal::Context::initial_async_generator_prototype
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48067:48068

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4924073259040768

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.