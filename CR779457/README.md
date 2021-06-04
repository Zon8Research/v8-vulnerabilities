Detailed report: https://clusterfuzz.com/testcase?key=6658585231884288

Fuzzer: libFuzzer_javascript_parser_proto_fuzzer
Job Type: libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  outer_scope_ == scope->outer_scope() in bytecode-generator.cc
  CurrentScope
  v8::internal::interpreter::BytecodeGenerator::VisitInScope
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan_debug&range=510082:510099

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6658585231884288

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.