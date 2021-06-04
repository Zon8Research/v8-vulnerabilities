Detailed report: https://clusterfuzz.com/testcase?key=5746748846505984

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: Unknown signal
Crash Address: 0x000000000000
Crash State:
  Builtins_InterpreterEntryTrampoline
  Builtins_InterpreterEntryTrampoline
  Builtins_JSEntryTrampoline
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=57562:57563

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5746748846505984

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.