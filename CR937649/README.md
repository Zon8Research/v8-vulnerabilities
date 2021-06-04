Detailed report: https://clusterfuzz.com/testcase?key=5109033418752000

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

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=58087:58088

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5109033418752000

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.