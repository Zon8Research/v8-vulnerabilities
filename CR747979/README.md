Detailed report: https://clusterfuzz.com/testcase?key=5939555751690240

Fuzzer: decoder_langfuzz
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !IsInplaceGeneralizableField(details.constness(), details.representation(), desc
  v8::internal::Map::EquivalentToForElementsKindTransition
  v8::internal::Map::FindElementsKindTransitionedMap
  
Sanitizer: address (ASAN)

Regressed: V8: 46829:46830

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5939555751690240


Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.