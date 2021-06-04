Detailed report: https://clusterfuzz.com/testcase?key=6290423347412992

Fuzzer: libFuzzer_v8_script_parser_fuzzer
Job Type: libfuzzer_chrome_asan
Platform Id: linux

Crash Type: Heap-use-after-free READ 2
Crash Address: 0x625000034ea9
Crash State:
  v8::internal::Scope::Snapshot::RestoreEvalFlag
  v8::internal::ParserBase<v8::internal::PreParser>::~ParserBase
  v8::internal::Parser::~Parser
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan&range=611653:611656

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6290423347412992

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.