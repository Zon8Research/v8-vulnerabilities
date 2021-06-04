Detailed report: https://clusterfuzz.com/testcase?key=5651003002847232

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  (function_) == nullptr in scopes.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=57541:57542

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5651003002847232

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.