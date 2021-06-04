Detailed report: https://clusterfuzz.com/testcase?key=4561017198870528

Fuzzer: libFuzzer_v8_wasm_async_fuzzer
Job Type: libfuzzer_chrome_asan
Platform Id: linux

Crash Type: Heap-buffer-overflow READ 1
Crash Address: 0x607000000761
Crash State:
  unsigned char v8::internal::ReadUnalignedValue<unsigned char>
  v8::internal::wasm::CallIndirectOperand<
  v8::internal::wasm::WasmFullDecoder<
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan&range=524055:524066

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4561017198870528

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.