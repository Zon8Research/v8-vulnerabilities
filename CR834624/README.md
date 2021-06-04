Detailed report: https://clusterfuzz.com/testcase?key=4972243399213056

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !trap_handler::IsThreadInWasm() in wasm-interpreter.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=52626:52627

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4972243399213056

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.