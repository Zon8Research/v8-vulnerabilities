Detailed Report: https://clusterfuzz.com/testcase?key=5645868457852928

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_compile_fuzzer
Job Type: x86_libfuzzer_chrome_asan
Platform Id: linux

Crash Type: Stack-buffer-overflow READ 1
Crash Address: 0xec7001c4
Crash State:
  v8::internal::wasm::LiftoffAssembler::VarState::is_reg
  v8::internal::wasm::LiftoffAssembler::SpillRegister
  v8::internal::wasm::LiftoffAssembler::AtomicStore
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=x86_libfuzzer_chrome_asan&range=737639:737640

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5645868457852928

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.