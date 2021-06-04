Detailed report: https://clusterfuzz.com/testcase?key=4745972801601536

Fuzzer: libFuzzer_v8_regexp_parser_fuzzer
Job Type: libfuzzer_chrome_asan
Platform Id: linux

Crash Type: Use-after-poison READ 8
Crash Address: 0x6250000169f8
Crash State:
  v8::internal::RegExpParser::GetCapture
  v8::internal::RegExpParser::ParseDisjunction
  v8::internal::RegExpParser::ParsePattern
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan&range=515946:515969

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4745972801601536

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.