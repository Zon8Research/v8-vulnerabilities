Detailed report: https://clusterfuzz.com/testcase?key=5369668023615488

Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !IsSmi() == Internals::HasHeapObjectTag(ptr()) in objects.h
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=57303:57304

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5369668023615488

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.