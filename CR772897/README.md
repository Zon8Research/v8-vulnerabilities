Detailed report: https://clusterfuzz.com/testcase?key=5094728617164800

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !has_pending_exception() in isolate.cc
  v8::internal::Isolate::Throw
  v8::internal::Isolate::StackOverflow
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=47759:47760

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5094728617164800

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.