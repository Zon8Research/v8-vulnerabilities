Detailed report: https://clusterfuzz.com/testcase?key=5170330226917376

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  descriptor_number < number_of_descriptors() in objects-inl.h
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=48638:48639

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5170330226917376

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.