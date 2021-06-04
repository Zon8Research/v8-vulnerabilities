Detailed report: https://clusterfuzz.com/testcase?key=6523934780162048

Fuzzer: libFuzzer_v8_wasm_fuzzer
Job Type: libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  pc <= end_ in decoder.h
  unsigned int v8::internal::wasm::Decoder::read_leb_tail<unsigned int,
  v8::internal::wasm::MemoryAccessImmediate<
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan_debug&range=608313:608325

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6523934780162048

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reference.md for more information.