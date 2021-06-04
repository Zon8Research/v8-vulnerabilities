Detailed report: https://clusterfuzz.com/testcase?key=5755508264534016

Fuzzer: mbarbella_js_mutation
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !has_error() implies !next_arrow_formals_parenthesized_ in parser-base.h
  v8::internal::ParserBase<v8::internal::PreParser>::ParseAssignmentExpression
  v8::internal::ParserBase<v8::internal::PreParser>::ParseExpressionCoverGrammar
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=57683:57684

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5755508264534016

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.