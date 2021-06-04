Detailed report: https://clusterfuzz.com/testcase?key=6739159914643456

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  pc == code->instruction_start() in wasm-code-manager.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=53828:53829

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6739159914643456

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.