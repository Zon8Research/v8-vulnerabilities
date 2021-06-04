Detailed Report: https://clusterfuzz.com/testcase?key=6566073722011648

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_compile_fuzzer
Job Type: x86_libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  src.is_byte_register() in assembler-ia32.cc
  V8_Dcheck
  v8::internal::Assembler::cmpxchg_b
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=x86_libfuzzer_chrome_asan_debug&range=792498:792509

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6566073722011648

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.