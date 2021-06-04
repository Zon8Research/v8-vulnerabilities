Detailed report: https://clusterfuzz.com/testcase?key=6563746707931136

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: ASSERT
Crash Address: 
Crash State:
  CSA_ASSERT failed: Torque assert 'srcPos <= GetReceiverLengthProperty(sortState)
  array-sort.tq
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=57210:57211

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6563746707931136

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.