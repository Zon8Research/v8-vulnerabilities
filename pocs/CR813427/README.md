Detailed report: https://clusterfuzz.com/testcase?key=5754965478604800

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  constructor_initial_map->instance_size() <= instance_size in objects.cc
  FastInitializeDerivedMap
  v8::internal::JSFunction::GetDerivedMap
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=51254:51255

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5754965478604800

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.