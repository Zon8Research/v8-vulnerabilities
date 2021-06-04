Detailed report: https://clusterfuzz.com/testcase?key=5709893049384960

Fuzzer: mbarbella_js_mutation
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: CHECK failure
Crash Address: 
Crash State:
  (map()->has_fast_smi_or_object_elements() || map()->has_frozen_or_sealed_element
  v8::internal::JSObject::JSObjectVerify
  v8::internal::TorqueGeneratedClassVerifiers::JSArrayVerify
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=61157:61158

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5709893049384960

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.