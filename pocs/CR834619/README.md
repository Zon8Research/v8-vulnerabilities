Detailed report: https://clusterfuzz.com/testcase?key=4629797553307648

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  func_index == code->index() in wasm-code-manager.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=52525:52526

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4629797553307648

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.