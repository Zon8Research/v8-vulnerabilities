Detailed report: https://clusterfuzz.com/testcase?key=6659847247101952

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: ASSERT
Crash Address: 
Crash State:
  CSA_ASSERT failed: TaggedDoesntHaveInstanceType(value, JS_PROMISE_TYPE)
  builtins-async-generator-gen.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=53905:53906

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6659847247101952

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.