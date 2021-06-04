Detailed report: https://clusterfuzz.com/testcase?key=4960746309681152

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  outer_scope_ == scope->outer_scope() in bytecode-generator.cc
  CurrentScope
  v8::internal::interpreter::BytecodeGenerator::VisitInScope
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=57880:57881

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4960746309681152

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.