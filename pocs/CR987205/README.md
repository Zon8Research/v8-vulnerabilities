Detailed report: https://clusterfuzz.com/testcase?key=5735048987148288

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: Unknown signal
Crash Address: 0x000000000000
Crash State:
  Builtins_JSEntryTrampoline
  Builtins_JSEntry
  Call
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=62097:62098

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5735048987148288

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.