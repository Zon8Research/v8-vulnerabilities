Detailed Report: https://clusterfuzz.com/testcase?key=5710086619594752

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_code_fuzzer
Job Type: windows_libfuzzer_chrome_asan
Platform Id: windows

Crash Type: Stack-buffer-overflow READ 1
Crash Address: 0x1300cb6b53c0
Crash State:
  v8::internal::wasm::ThreadImpl::ExecuteSimdOp
  v8::internal::wasm::ThreadImpl::Execute
  v8::internal::wasm::WasmInterpreter::Thread::Run
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=windows_libfuzzer_chrome_asan&range=764823:764854

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5710086619594752

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.