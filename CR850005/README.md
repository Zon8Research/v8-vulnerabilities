Detailed report: https://clusterfuzz.com/testcase?key=5509183479480320

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Type cast failed in CAST(var_elements.value()) at ../../src/builtins/builtins-ca
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=53471:53472

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5509183479480320

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.