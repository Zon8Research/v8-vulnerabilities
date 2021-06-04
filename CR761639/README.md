Detailed report: https://clusterfuzz.com/testcase?key=5137194284220416

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !receiver_map->IsJSGlobalObjectMap() in ic.cc
  v8::internal::StoreIC::StoreProxy
  v8::internal::StoreIC::GetMapIndependentHandler
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=47759:47760

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5137194284220416

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.