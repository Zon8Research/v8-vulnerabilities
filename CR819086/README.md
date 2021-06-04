Detailed report: https://clusterfuzz.com/testcase?key=5863722472701952

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Node::New() Error: #392:DeoptimizeIf[1] is nullptr in node.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=51724:51725

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5863722472701952

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.