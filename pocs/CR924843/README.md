Detailed report: https://clusterfuzz.com/testcase?key=5699716595712000

Fuzzer: libFuzzer_v8_wasm_code_fuzzer
Fuzz target binary: v8_wasm_code_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm64_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  IsAligned(DistanceTo(target), kInstrSize) in instructions-arm64.cc
  v8::internal::Instruction::SetBranchImmTarget
  v8::internal::Assembler::bind
  
Sanitizer: address (ASAN)

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5699716595712000

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.