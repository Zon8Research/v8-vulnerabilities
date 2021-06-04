Detailed report: https://clusterfuzz.com/testcase?key=5769513035759616

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  bytecode->IsBytecodeEqual( *outer_function_job->compilation_info()->bytecode_arr
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=59594:59595

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5769513035759616

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.