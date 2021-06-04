Detailed report: https://clusterfuzz.com/testcase?key=5708246348988416

Fuzzer: libFuzzer_javascript_parser_proto_fuzzer
Job Type: windows_libfuzzer_chrome_asan
Platform Id: windows

Crash Type: UNKNOWN READ
Crash Address: 0xffffffffffffffff
Crash State:
  v8::internal::interpreter::BytecodeGenerator::BuildVariableAssignment
  v8::internal::interpreter::BytecodeGenerator::VisitAssignment
  v8::internal::interpreter::BytecodeGenerator::VisitNoStackOverflowCheck
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=windows_libfuzzer_chrome_asan&range=601106:601107

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5708246348988416

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.