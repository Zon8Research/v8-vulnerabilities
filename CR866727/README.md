Detailed report: https://clusterfuzz.com/testcase?key=5847063531880448

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  2 == subnode->op()->ControlOutputCount() in js-inlining.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=54594:54595

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5847063531880448

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.