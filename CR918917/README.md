Detailed report: https://clusterfuzz.com/testcase?key=4690767754559488

Fuzzer: binaryen_wasm_fuzzer
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  HasRegisterMove(dst, src, type) in liftoff-assembler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm64_dbg&range=58521:58522

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4690767754559488

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.