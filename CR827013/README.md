Detailed report: https://clusterfuzz.com/testcase?key=5476500258947072

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Type cast failed in CAST(LoadFixedArrayElement( descriptors, DescriptorArray::To
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=52280:52281

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5476500258947072

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.