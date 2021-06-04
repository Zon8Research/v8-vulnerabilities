Detailed report: https://clusterfuzz.com/testcase?key=6413699569680384

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: Heap-use-after-free READ 8
Crash Address: 0x11b9df903418
Crash State:
  v8::internal::Isolate::UnregisterFromReleaseAtTeardown
  v8::internal::Managed<struct v8::internal::wasm::WasmModule>::GCDelete
  v8::internal::GlobalHandles::DispatchPendingPhantomCallbacks
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8&range=52309:52310

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6413699569680384

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.