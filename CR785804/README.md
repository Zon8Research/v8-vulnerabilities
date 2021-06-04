Detailed report: https://clusterfuzz.com/testcase?key=5882233008422912

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !IsSmi() == Internals::HasHeapObjectTag(this) in objects.h
  IsHeapObject
  v8::internal::Object::VerifyPointer
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48861:48862

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5882233008422912

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.