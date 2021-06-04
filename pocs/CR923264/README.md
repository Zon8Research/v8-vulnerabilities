Detailed report: https://clusterfuzz.com/testcase?key=5969429015953408

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  object->IsAbstractCode() || object->IsSeqString() || object->IsExternalString() 
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=58784:58785

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5969429015953408

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.