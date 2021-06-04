Detailed report: https://clusterfuzz.com/testcase?key=5681042311872512

Fuzzer: libFuzzer_javascript_parser_proto_fuzzer
Job Type: libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  kNoSourcePosition != start_position() in scopes.cc
  v8::internal::Scope::CheckScopePositions
  v8::internal::Scope::CheckScopePositions
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan_debug&range=512947:512975

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5681042311872512

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.