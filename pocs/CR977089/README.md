Detailed report: https://clusterfuzz.com/testcase?key=5641385008562176

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  fresh->bit_field3() & ~IsInRetainedMapListBit::kMask == new_map->bit_field3() & 
  v8::internal::Map::Normalize
  Normalize
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=62278:62279

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5641385008562176

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.