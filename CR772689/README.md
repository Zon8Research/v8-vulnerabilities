Detailed report: https://clusterfuzz.com/testcase?key=4784546079047680

Fuzzer: mbarbella_js_mutation
Job Type: linux_cfi_d8
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  0 == field_count_ in deoptimizer.cc
  
Sanitizer: cfi (CFI)

Regressed: https://clusterfuzz.com/revisions?job=linux_cfi_d8&range=48324:48325

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4784546079047680

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.