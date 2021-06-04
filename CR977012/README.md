Detailed report: https://clusterfuzz.com/testcase?key=6287372249071616

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  descriptor_number < number_of_descriptors() in descriptor-array-inl.h
  v8::platform::PrintStackTrace
  v8::internal::UpdateDescriptorForValue
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=62278:62279

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6287372249071616

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.