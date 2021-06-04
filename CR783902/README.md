Detailed report: https://clusterfuzz.com/testcase?key=5071599916285952

Fuzzer: ochang_js_fuzzer
Job Type: linux_cfi_d8
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  method->map()->instance_descriptors()->GetKey(kHomeObjectPropertyIndex) == isola
  
Sanitizer: cfi (CFI)

Regressed: https://clusterfuzz.com/revisions?job=linux_cfi_d8&range=49290:49291

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5071599916285952

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.