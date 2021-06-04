Detailed report: https://clusterfuzz.com/testcase?key=4841365024014336

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  TypeError: node #169:DeadValue[kRepTagged](input @0 = CheckString:CheckString) t
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=53629:53630

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4841365024014336

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.