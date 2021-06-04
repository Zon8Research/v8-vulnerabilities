Detailed report: https://clusterfuzz.com/testcase?key=6321162667425792

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  HasIncomingBackEdges(block) implies block_effects.For(block->PredecessorAt(0), b
  v8::internal::compiler::EffectControlLinearizer::Run
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=53326:53327

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6321162667425792

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.