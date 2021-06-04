Detailed report: https://clusterfuzz.com/testcase?key=4659345337090048

Fuzzer: mbarbella_js_mutation
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  __isolate__->has_scheduled_exception() in runtime-proxy.cc
  v8::internal::__RT_impl_Runtime_CheckProxyHasTrap
  v8::internal::Runtime_CheckProxyHasTrap
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=47371:47372

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4659345337090048

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.