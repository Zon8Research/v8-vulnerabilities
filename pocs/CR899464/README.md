Detailed report: https://clusterfuzz.com/testcase?key=4682225604624384

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: ASSERT
Crash Address: 
Crash State:
  CSA_ASSERT failed: Word32Or(Word32Equal(var_unicode.value(), zero), Word32Equal(
  builtins-regexp-gen.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=56322:56323

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4682225604624384

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.