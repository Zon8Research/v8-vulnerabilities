Detailed report: https://clusterfuzz.com/testcase?key=5400975855321088

Fuzzer: mbarbella_js_mutation
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !isolate->has_scheduled_exception() in builtins-console.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=54217:54218

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5400975855321088

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.