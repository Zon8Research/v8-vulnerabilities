Detailed report: https://clusterfuzz.com/testcase?key=5764878298775552

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  RegionObservability::kObservable == region_observability_ in effect-control-line
  v8::platform::PrintStackTrace
  v8::internal::compiler::EffectControlLinearizer::ProcessNode
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=55705:55706

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5764878298775552

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.