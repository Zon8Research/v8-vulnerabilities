Detailed Report: https://clusterfuzz.com/testcase?key=6258174921605120

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_compile_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  0 <= offset in assembler-arm.cc
  V8_Dcheck
  v8::internal::MemOperand::MemOperand
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_debug_linux_arm_sim&range=796751:796752

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6258174921605120

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.