Detailed Report: https://clusterfuzz.com/testcase?key=4714965806153728

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Bytecode mismatch at offset 10 in interpreter.cc
  v8::platform::PrintStackTrace
  v8::internal::interpreter::InterpreterCompilationJob::CheckAndPrintBytecodeMisma
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=65390:65391

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4714965806153728

Issue filed automatically.

