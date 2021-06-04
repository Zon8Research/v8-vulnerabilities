Detailed report: https://clusterfuzz.com/testcase?key=5738496878313472

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  number_of_own_descriptors > 0 in map-inl.h
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=62278:62279

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5738496878313472

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.