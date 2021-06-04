Detailed report: https://clusterfuzz.com/testcase?key=4871518595842048

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: ASSERT
Crash Address: 
Crash State:
  CSA_ASSERT failed: SmiBelow(effective_index, LoadFixedArrayBaseLength(array))
  code-stub-assembler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=55450:55451

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4871518595842048

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.