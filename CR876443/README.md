Detailed report: https://clusterfuzz.com/testcase?key=5644985740034048

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Type cast failed in CAST(p_o) at ../../src/code-stub-assembler.h:351 in code-ass
  v8::internal::CheckObjectType
  libv8.so
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=55262:55263

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5644985740034048

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.