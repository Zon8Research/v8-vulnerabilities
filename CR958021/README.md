Detailed report: https://clusterfuzz.com/testcase?key=4800210742673408

Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  UpdateType error for node 69: SpeculativeNumberLessThanOrEqual[Number](14, 66, 3
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=57675:57676

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4800210742673408

Issue manually filed by: saelo

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.