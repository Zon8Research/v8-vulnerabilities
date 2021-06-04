Detailed report: https://clusterfuzz.com/testcase?key=4921300048150528

Fuzzer: mbarbella_js_mutation
Job Type: mac_asan_d8
Platform Id: mac

Crash Type: Null-dereference READ
Crash Address: 0x000000000038
Crash State:
  heap
  GetHeap
  VerifyHeapPointer
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8&range=471691:471787

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4921300048150528


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.