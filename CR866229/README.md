Detailed report: https://clusterfuzz.com/testcase?key=6075410165792768

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !descriptors->GetKey(i)->IsInterestingSymbol() in objects-debug.cc
  v8::internal::Map::MapVerify
  v8::internal::Object::ObjectVerify
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=54594:54595

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6075410165792768

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.