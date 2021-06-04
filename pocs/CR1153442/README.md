Detailed Report: https://clusterfuzz.com/testcase?key=6270084030201856

Fuzzer: binaryen_wasm_fuzzer
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  UseScratchRegisterScope{this}.CanAcquire() in liftoff-assembler-arm.h
  V8_Dcheck
  v8::internal::wasm::LiftoffAssembler::Spill
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=68751:68752

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6270084030201856

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/6270084030201856 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.
