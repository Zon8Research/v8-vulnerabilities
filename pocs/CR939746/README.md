Detailed report: https://clusterfuzz.com/testcase?key=5654543196094464

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  TypeError: node #171:StringCharCodeAt(input @1 = PoisonIndex:PoisonIndex) type (
  v8::platform::PrintStackTrace
  v8::internal::compiler::Verifier::Visitor::CheckValueInputIs
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=60090:60091

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5654543196094464

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.