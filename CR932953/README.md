Detailed report: https://clusterfuzz.com/testcase?key=5756289202388992

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: CHECK failure
Crash Address: 
Crash State:
  transitions.SearchSpecial(roots.nonextensible_symbol()) == *old_map_ in map-upda
  v8::platform::PrintStackTrace
  v8::internal::MapUpdater::TrySaveIntegrityLevelTransitions
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=59439:59440

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5756289202388992

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.