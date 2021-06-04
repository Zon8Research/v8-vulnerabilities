Detailed Report: https://clusterfuzz.com/testcase?key=5130038779641856

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  effect_edges > 0 in verifier.cc
  v8::platform::PrintStackTrace
  v8::internal::compiler::Verifier::Visitor::Check
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=70063:70064

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5130038779641856

Issue filed automatically.

