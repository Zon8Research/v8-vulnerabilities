Detailed report: https://clusterfuzz.com/testcase?key=5983551469912064

Fuzzer: libFuzzer_v8_script_parser_fuzzer
Fuzz target binary: v8_script_parser_fuzzer
Job Type: libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  IsAssignmentContext() in pattern-rewriter.cc
  v8::internal::PatternRewriter::VisitProperty
  v8::internal::PatternRewriter::RecurseIntoSubpattern
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan_debug&range=617482:617487

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5983551469912064

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.