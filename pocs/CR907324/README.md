Detailed report: https://clusterfuzz.com/testcase?key=6269233815879680

Fuzzer: libFuzzer_v8_wasm_code_fuzzer
Job Type: windows_libfuzzer_chrome_asan
Platform Id: windows

Crash Type: Heap-buffer-overflow READ 1
Crash Address: 0x12a751600ca4
Crash State:
  v8::internal::wasm::WasmDecoder<1>::OpcodeLength
  v8::internal::wasm::WasmDecoder<1>::AnalyzeLoopAssignment
  v8::internal::wasm::WasmFullDecoder<v8::internal::wasm::Decoder::kValidate,v8::i
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=windows_libfuzzer_chrome_asan&range=609714:609723

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6269233815879680

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing_on_windows.md for more information.