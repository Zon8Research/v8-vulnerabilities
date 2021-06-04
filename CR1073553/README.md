Detailed Report: https://clusterfuzz.com/testcase?key=5225079923867648

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: Heap-buffer-overflow READ 1
Crash Address: 0x11c392b03895
Crash State:
  v8::internal::wasm::Decoder::read_prefixed_opcode<1>
  v8::internal::wasm::WasmFullDecoder<v8::internal::wasm::Decoder::kValidate,v8::i
  v8::internal::wasm::WasmFullDecoder<v8::internal::wasm::Decoder::kValidate,v8::i
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=67185:67186

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5225079923867648

Issue filed automatically.

