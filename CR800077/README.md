Detailed report: https://clusterfuzz.com/testcase?key=5259545244073984

Fuzzer: v8_builtins_generator
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Type cast failed in CAST(key) at ../../src/code-stub-assembler.cc:7137 in code-a
  v8::platform::PrintStackTrace
  v8::internal::CheckObjectType
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=50413:50414

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5259545244073984

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.