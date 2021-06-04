Detailed report: https://clusterfuzz.com/testcase?key=5073137061593088

Fuzzer: inferno_js_fuzzer
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !__isolate__->has_pending_exception() in runtime-proxy.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=47771:47772

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5073137061593088

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.