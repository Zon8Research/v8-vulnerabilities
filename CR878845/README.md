Detailed report: https://clusterfuzz.com/testcase?key=6405163611586560

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

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=55450:55451

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6405163611586560

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.