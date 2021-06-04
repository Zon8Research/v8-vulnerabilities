Detailed report: https://clusterfuzz.com/testcase?key=5725815625351168

Fuzzer: inferno_js_fuzzer
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  bytecode->IsBytecodeEqual( *outer_function_job->compilation_info()->bytecode_arr
  v8::platform::PrintStackTrace
  v8::internal::Compiler::CollectSourcePositions
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=59594:59595

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5725815625351168

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.