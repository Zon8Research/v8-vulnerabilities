Detailed report: https://clusterfuzz.com/testcase?key=6064891571208192

Fuzzer: libFuzzer_v8_wasm_async_fuzzer
Job Type: libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !it.done() in module-compiler.cc
  v8::internal::wasm::JSToWasmWrapperCache::CloneOrCompileJSToWasmWrapper
  v8::internal::wasm::AsyncCompileJob::CompileWrappers::RunInForeground
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=libfuzzer_chrome_asan_debug&range=495819:495825

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6064891571208192

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for more information.