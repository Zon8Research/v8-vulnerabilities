Detailed Report: https://clusterfuzz.com/testcase?key=5644609851883520

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_async_fuzzer
Job Type: windows_libfuzzer_chrome_asan
Platform Id: windows

Crash Type: Heap-buffer-overflow READ 1
Crash Address: 0x121657f012bc
Crash State:
  v8::internal::wasm::LiftoffCompiler::UnOp
  v8::internal::wasm::WasmFullDecoder<v8::internal::wasm::Decoder::kValidate,v8::i
  v8::internal::wasm::ExecuteLiftoffCompilation
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=windows_libfuzzer_chrome_asan&range=706138:706153

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5644609851883520

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.