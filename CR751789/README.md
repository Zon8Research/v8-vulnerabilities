Detailed report: https://clusterfuzz.com/testcase?key=4547312893558784

Fuzzer: libFuzzer_v8_script_parser_fuzzer
Job Type: libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !is_async_function() in parser-base.h
  v8::internal::ParserBase<v8::internal::PreParser>::ExpectSemicolon
  v8::internal::ParserBase<v8::internal::PreParser>::ParseExpressionOrLabelledStat
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan_debug&range=489626:489690

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4547312893558784


Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for more information.