Detailed report: https://clusterfuzz.com/testcase?key=4833324337725440

Fuzzer: binaryen_wasm_fuzzer
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  is_fp() in liftoff-register.h
  V8_Dcheck
  v8::internal::wasm::LiftoffAssembler::Fill
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=58434:58435

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4833324337725440

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.