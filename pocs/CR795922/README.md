Detailed report: https://clusterfuzz.com/testcase?key=5273760310755328

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !has_null_prototype() in ast.cc
  v8::internal::ObjectLiteral::InitDepthAndFlags
  ObjectLiteral
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=50167:50168

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5273760310755328

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.