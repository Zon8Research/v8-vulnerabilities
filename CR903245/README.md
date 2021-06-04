Detailed report: https://clusterfuzz.com/testcase?key=5696049601314816

Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  index >= 0 && index < this->capacity() in fixed-array-inl.h
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=54480:54481

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5696049601314816

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.