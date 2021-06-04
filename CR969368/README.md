Detailed report: https://clusterfuzz.com/testcase?key=5739229554016256

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  (location_) != nullptr in maybe-handles.h
  Check
  ToHandleChecked
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=61115:61116

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5739229554016256

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.