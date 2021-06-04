Detailed Report: https://clusterfuzz.com/testcase?key=5184055600349184

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  static_cast<unsigned>(index) < static_cast<unsigned>(length()) in fixed-array-in
  v8::platform::PrintStackTrace
  v8::internal::WasmInstanceObject::GetWasmExternalFunction
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=63339:63340

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5184055600349184

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.