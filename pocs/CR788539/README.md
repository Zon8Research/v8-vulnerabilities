Detailed report: https://clusterfuzz.com/testcase?key=5786307229122560

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  frame_state->opcode() == IrOpcode::kFrameState || (node->opcode() == IrOpcode::k
  v8::platform::PrintStackTrace
  v8::internal::compiler::Verifier::Visitor::Check
  
Sanitizer: address (ASAN)

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5786307229122560

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.