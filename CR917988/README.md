Detailed report: https://clusterfuzz.com/testcase?key=4908245998895104

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  outer_scope_ == scope->outer_scope() in bytecode-generator.cc
  V8_Dcheck
  v8::internal::interpreter::BytecodeGenerator::VisitInScope
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=48037:48038

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4908245998895104

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.