Detailed report: https://clusterfuzz.com/testcase?key=5459844512612352

Fuzzer: inferno_js_fuzzer
Job Type: linux_cfi_d8
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  args[1]->IsJSReceiver() in runtime-object.cc
  
Sanitizer: cfi (CFI)

Regressed: https://clusterfuzz.com/revisions?job=linux_cfi_d8&range=481287:481360

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5459844512612352


Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.