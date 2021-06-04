Detailed report: https://clusterfuzz.com/testcase?key=5969756822437888

Fuzzer: afl_v8_wasm_fuzzer
Job Type: afl_chrome_asan
Platform Id: linux

Crash Type: Heap-buffer-overflow READ 1
Crash Address: 0x60b000000363
Crash State:
  int v8::internal::wasm::Decoder::read_leb_tail<int,
  v8::internal::wasm::BlockTypeImmediate<
  v8::internal::wasm::WasmDecoder<
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=afl_chrome_asan&range=583006:583014

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5969756822437888

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.