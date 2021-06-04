Detailed report: https://clusterfuzz.com/testcase?key=6310461707124736

Fuzzer: inferno_js_fuzzer
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  isolate->context() == nullptr || isolate->context()->IsContext() in runtime-inte
  v8::platform::PrintStackTrace
  v8::internal::Runtime_ThrowConstructorReturnedNonObject
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=56440:56441

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6310461707124736

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.