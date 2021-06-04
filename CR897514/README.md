Detailed report: https://clusterfuzz.com/testcase?key=6553871428878336

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: ASSERT
Crash Address: 
Crash State:
  CSA_ASSERT failed: Word32Equal(DecodeWord32<PropertyDetails::KindField>(details)
  accessor-assembler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=55805:55806

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6553871428878336

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.