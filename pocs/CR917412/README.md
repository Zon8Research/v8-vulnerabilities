Detailed report: https://clusterfuzz.com/testcase?key=5767407582576640

Fuzzer: binaryen_wasm_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !move_dst_regs_.has(dst) in liftoff-assembler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=58434:58435

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5767407582576640

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.