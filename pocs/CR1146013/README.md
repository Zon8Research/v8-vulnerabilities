Detailed Report: https://clusterfuzz.com/testcase?key=5651101912465408

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  function->is_compiled() in compiler.cc
  v8::platform::PrintStackTrace
  v8::internal::Compiler::CompileOptimized
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=70948:70949

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5651101912465408

Issue filed automatically.

