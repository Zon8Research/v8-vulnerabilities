Detailed report: https://clusterfuzz.com/testcase?key=6385328481632256

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: ASSERT
Crash Address: 
Crash State:
  CSA_ASSERT failed: IsStrong(object)
  code-stub-assembler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=57303:57304

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6385328481632256

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.