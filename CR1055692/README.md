Detailed Report: https://clusterfuzz.com/testcase?key=5762269301506048

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_code_fuzzer
Job Type: windows_libfuzzer_chrome_asan
Platform Id: windows

Crash Type: Heap-buffer-overflow WRITE 1
Crash Address: 0x1213c0b81858
Crash State:
  v8::internal::wasm::ThreadImpl::Push
  v8::internal::wasm::ThreadImpl::Execute
  v8::internal::wasm::WasmInterpreter::Thread::Run
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=windows_libfuzzer_chrome_asan&range=742589:742613

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5762269301506048

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.