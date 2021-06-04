Detailed report: https://clusterfuzz.com/testcase?key=5662435375316992

Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x7ffe114b1718
Crash State:
  Builtins_MovExtraWideHandler
  Builtins_JSEntryTrampoline
  Call
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=53446:53447

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5662435375316992

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.