Detailed Report: https://clusterfuzz.com/testcase?key=5194587500249088

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  has(reg.low()) == has(reg.high()) in liftoff-register.h
  V8_Dcheck
  v8::internal::wasm::LiftoffRegList::has
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_debug_linux_arm_sim&range=807040:807044

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5194587500249088

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.