Detailed report: https://clusterfuzz.com/testcase?key=4741082707132416

Fuzzer: binaryen_wasm_fuzzer
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  *available != 0 in assembler-arm.cc
  V8_Dcheck
  v8::internal::UseScratchRegisterScope::Acquire
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=57967:57968

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4741082707132416

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.