Detailed report: https://clusterfuzz.com/testcase?key=5155133792059392

Fuzzer: v8_builtins_generator
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  ObjectInYoungGeneration(HeapObjectSlot(slot).ToHeapObject()) in heap.cc
  v8::platform::PrintStackTrace
  v8::internal::Heap::RecordEphemeronKeyWrite
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=60553:60554

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5155133792059392

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.