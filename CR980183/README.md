Detailed report: https://clusterfuzz.com/testcase?key=6274911668928512

Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: Unknown signal
Crash Address: 0x000000000000
Crash State:
  Builtins_ArrayPrototypeFindIndex
  Builtins_InterpreterEntryTrampoline
  Builtins_InterpreterEntryTrampoline
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=61837:61838

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6274911668928512

Issue manually filed by: saelo

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.