Detailed Report: https://clusterfuzz.com/testcase?key=4856536456626176

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  bytecode->IsBytecodeEqual( *outer_function_job->compilation_info()->bytecode_arr
  v8::platform::PrintStackTrace
  v8::internal::Compiler::CollectSourcePositions
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=63051:63052

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4856536456626176

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.