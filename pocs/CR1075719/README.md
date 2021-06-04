Detailed Report: https://clusterfuzz.com/testcase?key=5174250411982848

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_code_fuzzer
Job Type: windows_libfuzzer_chrome_asan
Platform Id: windows

Crash Type: Use-after-poison READ 1
Crash Address: 0x118d5e51115c
Crash State:
  v8::internal::wasm::SideTable::SideTable
  v8::internal::wasm::ThreadImpl::InitFrame
  v8::internal::wasm::WasmInterpreter::Thread::InitFrame
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=windows_libfuzzer_chrome_asan&range=762244:762257

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5174250411982848

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.