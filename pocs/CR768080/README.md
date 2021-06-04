Detailed report: https://clusterfuzz.com/testcase?key=5050837557837824

Fuzzer: inferno_js_fuzzer
Job Type: linux_cfi_d8
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  args[1]->IsJSReceiver() in runtime-object.cc
  
Sanitizer: cfi (CFI)

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5050837557837824

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.