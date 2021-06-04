Detailed report: https://clusterfuzz.com/testcase?key=5085453708165120

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  TypeError: node #28:JSToNumber type Numeric is not Number in verifier.cc
  v8::internal::compiler::Verifier::Visitor::CheckTypeIs
  v8::internal::compiler::Verifier::Visitor::Check
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=55555:55556

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5085453708165120

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.