Detailed report: https://clusterfuzz.com/testcase?key=5725787276836864

Fuzzer: ochang_js_fuzzer
Job Type: linux_cfi_d8
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x000400010008
Crash State:
  v8::internal::Object::Number
  v8::internal::DictionaryElementsAccessor::FilterKey
  v8::internal::DictionaryElementsAccessor::CollectElementIndicesImpl
  
Sanitizer: cfi (CFI)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_cfi_d8&range=60467:60468

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5725787276836864

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.