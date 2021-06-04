Detailed report: https://clusterfuzz.com/testcase?key=5711168077430784

Fuzzer: libFuzzer_v8_wasm_compile_fuzzer
Fuzz target binary: v8_wasm_compile_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  lsb == base::bits::CountTrailingZeros32(value) in instruction-selector-arm.cc
  V8_Dcheck
  v8::internal::compiler::InstructionSelector::VisitWord32Shr
  
Sanitizer: address (ASAN)

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5711168077430784

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.