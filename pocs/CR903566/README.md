Detailed report: https://clusterfuzz.com/testcase?key=5630085480316928

Fuzzer: v8_builtins_generator
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  array->HasFastPackedElements() in js-list-format.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=57249:57250

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5630085480316928

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.