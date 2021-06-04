Detailed report: https://clusterfuzz.com/testcase?key=6048335306948608

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  NodeProperties::GetType(val)->Is(NodeProperties::GetType(node)) in verifier.cc
  v8::internal::compiler::Verifier::Visitor::Check
  v8::internal::compiler::Verifier::Run
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=44001:44002

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6048335306948608

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.