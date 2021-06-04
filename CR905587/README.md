Detailed report: https://clusterfuzz.com/testcase?key=4835228155379712

Fuzzer: libFuzzer_v8_regexp_builtins_fuzzer
Job Type: libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  token.invalid_template_escape_message == MessageTemplate::kNone in scanner.cc
  v8::internal::Scanner::SanityCheckTokenDesc
  v8::internal::Scanner::Scan
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan_debug&range=608138:608141

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4835228155379712

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.