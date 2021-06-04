Detailed Report: https://clusterfuzz.com/testcase?key=5640725462319104

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

Regressed: https://clusterfuzz.com/revisions?job=x86_libfuzzer_chrome_asan_debug&range=840119:840139

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5640725462319104

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.