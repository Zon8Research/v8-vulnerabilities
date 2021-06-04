Detailed Report: https://clusterfuzz.com/testcase?key=5740763968241664

Fuzzer: inferno_js_fuzzer
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: ASSERT
Crash Address: 
Crash State:
  CSA_ASSERT failed: SmiBelow(effective_index, LoadFixedArrayBaseLength(array))
  code-stub-assembler.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=65918:65919

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5740763968241664

Issue filed automatically.

