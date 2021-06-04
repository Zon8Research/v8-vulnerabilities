Detailed report: https://clusterfuzz.com/testcase?key=4606656135299072

Job Type: linux_asan_chrome_mp
Platform Id: linux

Crash Type: Ill
Crash Address: 0x55dfc4c28ea8
Crash State:
  v8::internal::FullEvacuationVerifier::VerifyPointers
  void v8::internal::BodyDescriptorApply<v8::internal::CallIterateBody, void, v8::
  v8::internal::EvacuationVerifier::VerifyEvacuation
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_chrome_mp&range=536709:536711

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4606656135299072

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.