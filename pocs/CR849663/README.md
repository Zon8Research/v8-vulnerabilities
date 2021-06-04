Detailed report: https://clusterfuzz.com/testcase?key=6553622855548928

Fuzzer: v8_builtins_generator
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  x <= INT_MAX in conversions.h
  v8::platform::PrintStackTrace
  v8::internal::MakeDay
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=53515:53516

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6553622855548928

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.