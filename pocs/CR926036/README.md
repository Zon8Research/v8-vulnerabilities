Detailed report: https://clusterfuzz.com/testcase?key=5958612115652608

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  (decl.pattern) != nullptr in parser.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=59128:59129

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5958612115652608

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.