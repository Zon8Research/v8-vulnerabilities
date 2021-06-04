Detailed report: https://clusterfuzz.com/testcase?key=5672870372704256

Fuzzer: inferno_js_fuzzer
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  bcp47_length == parsed_length in intl-objects.cc
  v8::platform::PrintStackTrace
  v8::internal::Intl::CreateICULocale
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=56659:56660

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5672870372704256

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.