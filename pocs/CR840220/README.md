Detailed report: https://clusterfuzz.com/testcase?key=5341673501229056

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Type cast failed in CAST(TypedArraySpeciesConstructor(context, exemplar)) at ../
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=52845:52846

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5341673501229056

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.