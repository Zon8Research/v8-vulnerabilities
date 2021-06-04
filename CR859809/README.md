Detailed report: https://clusterfuzz.com/testcase?key=5701543505166336

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !object->IsFiller() in mark-compact.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=53510:53511

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5701543505166336

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.