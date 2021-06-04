Detailed report: https://clusterfuzz.com/testcase?key=5703881291726848

Fuzzer: libFuzzer_v8_wasm_code_fuzzer
Fuzz target binary: v8_wasm_code_fuzzer
Job Type: x86_libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  src.is_reg_only() implies src.reg().is_byte_register() in assembler-ia32.cc
  V8_Dcheck
  v8::internal::Assembler::movsx_b
  
Sanitizer: address (ASAN)

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5703881291726848

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.