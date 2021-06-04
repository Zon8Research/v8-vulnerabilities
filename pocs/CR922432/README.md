Detailed report: https://clusterfuzz.com/testcase?key=5416462914945024

Fuzzer: libFuzzer_v8_wasm_fuzzer
Fuzz target binary: v8_wasm_fuzzer
Job Type: libfuzzer_chrome_asan
Platform Id: linux

Crash Type: Heap-buffer-overflow READ 1
Crash Address: 0x61500008a6e3
Crash State:
  unsigned int v8::internal::wasm::Decoder::read_leb_tail<unsigned int,
  v8::internal::wasm::ExceptionIndexImmediate<
  v8::internal::wasm::WasmDecoder<
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan&range=623119:623120

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5416462914945024

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.