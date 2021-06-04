Detailed Report: https://clusterfuzz.com/testcase?key=6199521028931584

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_compile_fuzzer
Job Type: x86_libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  IsSimd128Register() in instruction.h
  V8_Dcheck
  v8::internal::compiler::LocationOperand::GetSimd128Register
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=x86_libfuzzer_chrome_asan_debug&range=838607:838611

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6199521028931584

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.