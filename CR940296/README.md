Detailed report: https://clusterfuzz.com/testcase?key=5736864045727744

Fuzzer: mbarbella_js_mutation
Job Type: linux_cfi_d8
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x3b9cc1ba9d70
Crash State:
  unsigned long v8::base::AsAtomicImpl<long>::Relaxed_Load<unsigned long>
  v8::internal::FullObjectSlot::Relaxed_Load
  v8::internal::FixedArray::get
  
Sanitizer: cfi (CFI)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_cfi_d8&range=60114:60115

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5736864045727744

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.