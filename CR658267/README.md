Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6705199190376448

Fuzzer: libfuzzer_v8_script_parser_fuzzer
Job Type: libfuzzer_chrome_asan
Platform Id: linux

Crash Type: Use-after-poison READ 8
Crash Address: 0x6250000119a0
Crash State:
  v8::internal::List<v8::internal::FuncNameInferrer::Name, v8::internal::ZoneAlloc
  v8::internal::ParserBase<v8::internal::Parser>::ParseLeftHandSideExpression
  v8::internal::ParserBase<v8::internal::Parser>::ParseClassLiteral
  
Recommended Security Severity: High

Regressed: https://cluster-fuzz.appspot.com/revisions?job=libfuzzer_chrome_asan&range=423381:423433

Minimized Testcase (0.25 Kb): https://cluster-fuzz.appspot.com/download/AMIfv94eYGE_ca0gmpeeE34ahuswRrhM-b8LnaPuUtdXI0C-k-1GtlJ1lYmWLLOebyXZUoAzQumAxfFGbS8iR9rCYm62f9RKa36ufDe354a-xmwNUzV3gMnWm8PBfPjOkFCmqyJMMmfcVW2yPuiIBuP1gPFaH5fr2Q?testcase_id=6705199190376448

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for more information.