Detailed report: https://clusterfuzz.com/testcase?key=6299346821316608

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (IsExternalOneByteString()) in string
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=60963:60964

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6299346821316608

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.