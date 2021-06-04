Detailed report: https://clusterfuzz.com/testcase?key=6315075819012096

Fuzzer: libFuzzer_v8_script_parser_fuzzer
Job Type: libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  is_async implies classifier()->is_valid_async_arrow_formal_parameters() in parse
  v8::internal::ParserBase<v8::internal::Parser>::ValidateArrowFormalParameters
  v8::internal::ParserBase<v8::internal::Parser>::ParseAssignmentExpression
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan_debug&range=601636:601648

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6315075819012096

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.