Detailed Report: https://clusterfuzz.com/testcase?key=5119424917471232

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_code_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm64_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  is_valid(value) in bit-field.h
  V8_Dcheck
  v8::base::BitField<unsigned int, 8, 24, unsigned int>::encode
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_debug_linux_arm64_sim&range=766354:766356

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5119424917471232

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.