Detailed report: https://clusterfuzz.com/testcase?key=6306889587228672

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !std::isnan(value) in js-operator.h
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=49024:49025

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6306889587228672

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.