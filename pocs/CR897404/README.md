Detailed report: https://clusterfuzz.com/testcase?key=5933277620469760

Fuzzer: v8_builtins_generator
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: ASSERT
Crash Address: 
Crash State:
  CSA_ASSERT failed: IntPtrOrSmiGreaterThan(capacity, IntPtrOrSmiConstant(0, mode)
  code-stub-assembler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=56698:56699

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5933277620469760

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.