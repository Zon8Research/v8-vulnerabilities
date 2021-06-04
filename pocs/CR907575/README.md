Detailed report: https://clusterfuzz.com/testcase?key=6084393388736512

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  binop->op() == Token::COMMA in parser.cc
  v8::internal::Parser::AddArrowFunctionFormalParameters
  v8::internal::Parser::DeclareArrowFunctionFormalParameters
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=57683:57684

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6084393388736512

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.