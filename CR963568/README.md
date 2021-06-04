Detailed report: https://clusterfuzz.com/testcase?key=5647305963864064

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  descriptor_number < number_of_descriptors() in descriptor-array-inl.h
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=61532:61533

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5647305963864064

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.