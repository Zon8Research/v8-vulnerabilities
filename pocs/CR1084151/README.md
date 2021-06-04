Detailed Report: https://clusterfuzz.com/testcase?key=4716605618061312

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_code_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm64_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  register_move(dst)->src == src in liftoff-assembler.cc
  V8_Dcheck
  v8::internal::wasm::StackTransferRecipe::MoveRegister
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_debug_linux_arm64_sim&range=757914:757925

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4716605618061312

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.