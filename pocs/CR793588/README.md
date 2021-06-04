Detailed report: https://clusterfuzz.com/testcase?key=5092815569944576

Fuzzer: libFuzzer_v8_regexp_parser_fuzzer
Job Type: libfuzzer_chrome_msan
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::TextNode::GetQuickCheckDetails
  v8::internal::TextNode::GetQuickCheckDetails
  v8::internal::RegExpNode::EmitQuickCheck
  
Sanitizer: memory (MSAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_msan&range=515946:515953

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5092815569944576

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.