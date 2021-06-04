Detailed report: https://clusterfuzz.com/testcase?key=5080578994077696

Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  object->FitsRepresentation(representation) in objects.cc
  v8::internal::Object::WrapForRead
  v8::internal::JSObject::FastPropertyAt
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=54681:54682

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5080578994077696

Issue manually filed by: saelo

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.