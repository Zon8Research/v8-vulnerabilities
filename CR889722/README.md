Detailed report: https://clusterfuzz.com/testcase?key=5805956104192000

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  (data_) != nullptr in js-heap-broker.h
  v8::platform::PrintStackTrace
  v8::internal::compiler::NativeContextRef::script_context_table
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=55579:55580

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5805956104192000

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.