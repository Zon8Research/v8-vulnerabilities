Detailed report: https://clusterfuzz.com/testcase?key=5349126364200960

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  UnusedPropertyFields() == map->UnusedPropertyFields() in map-inl.h
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm64_dbg&range=54594:54595

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5349126364200960

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.