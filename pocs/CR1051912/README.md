Detailed Report: https://clusterfuzz.com/testcase?key=5638266326941696

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  1 == map_.count(key) in wasm-engine.cc
  v8::platform::PrintStackTrace
  v8::internal::wasm::NativeModuleCache::StreamingCompilationFailed
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=66154:66155

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5638266326941696

Issue filed automatically.

