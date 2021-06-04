Detailed Report: https://clusterfuzz.com/testcase?key=5651409639636992

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_code_fuzzer
Job Type: windows_libfuzzer_chrome_asan
Platform Id: windows

Crash Type: Heap-buffer-overflow READ 1
Crash Address: 0x1168126302c0
Crash State:
  v8::internal::wasm::LiftoffAssembler::MergeFullStackWith
  v8::internal::wasm::WasmFullDecoder<v8::internal::wasm::Decoder::kBooleanValidat
  v8::internal::wasm::WasmFullDecoder<v8::internal::wasm::Decoder::kBooleanValidat
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=windows_libfuzzer_chrome_asan&range=846504:846510

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5651409639636992

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.