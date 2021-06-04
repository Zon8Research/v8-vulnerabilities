Detailed report: https://clusterfuzz.com/testcase?key=6290193756848128

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  *isolate->external_caught_exception_address() in wasm-engine.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=54939:54940

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6290193756848128

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.