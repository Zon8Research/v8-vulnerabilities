Detailed report: https://clusterfuzz.com/testcase?key=6011620131864576

Fuzzer: binaryen_wasm_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !load_dst_regs_.has(dst) in liftoff-assembler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=58586:58587

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6011620131864576

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.