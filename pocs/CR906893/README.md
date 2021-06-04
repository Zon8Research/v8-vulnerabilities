Detailed report: https://clusterfuzz.com/testcase?key=6127262774329344

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: ASSERT
Crash Address: 
Crash State:
  CSA_ASSERT failed: IsFastRegExpWithOriginalExec(context, regexp)
  builtins-regexp-gen.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=57595:57596

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6127262774329344

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.