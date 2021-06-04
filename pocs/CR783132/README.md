Detailed report: https://clusterfuzz.com/testcase?key=5811474495963136

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  is_transitionable_fast_elements_kind implies !Map::IsInplaceGeneralizableField(d
  v8::internal::JSObject::JSObjectVerify
  v8::internal::JSArray::JSArrayVerify
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=49132:49133

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5811474495963136

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.