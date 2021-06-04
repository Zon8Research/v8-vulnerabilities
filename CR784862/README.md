Detailed report: https://clusterfuzz.com/testcase?key=5458811845607424

Fuzzer: v8_builtins_generator
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  size <= kMaxRegularHeapObjectSize in runtime-internal.cc
  
Sanitizer: memory (MSAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_d8&range=49342:49343

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5458811845607424

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.