Detailed report: https://clusterfuzz.com/testcase?key=6585627176992768

Fuzzer: binaryen_wasm_fuzzer
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  node->opcode() == IrOpcode::kParameter || node->opcode() == IrOpcode::kProjectio
  v8::internal::compiler::Verifier::Visitor::Check
  v8::internal::compiler::Verifier::Run
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=57622:57623

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6585627176992768

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.