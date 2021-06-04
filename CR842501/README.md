Detailed report: https://clusterfuzz.com/testcase?key=6679494744866816

Fuzzer: libFuzzer_v8_wasm_compile_fuzzer
Job Type: libfuzzer_chrome_asan
Platform Id: linux

Crash Type: Stack-buffer-overflow WRITE 8
Crash Address: 0x7fd2b81818b0
Crash State:
  v8::internal::compiler::VisitBinop
  v8::internal::compiler::VisitCompareZero
  v8::internal::compiler::InstructionSelector::VisitWordCompareZero
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan&range=557856:557860

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6679494744866816

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.