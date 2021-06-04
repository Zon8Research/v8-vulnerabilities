Detailed report: https://clusterfuzz.com/testcase?key=5926756985602048

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Type cast failed in CAST(LoadObjectField(data_view, JSDataView::kByteLengthOffse
  v8::internal::CheckObjectType
  v8::internal::Simulator::SoftwareInterrupt
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=53552:53553

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5926756985602048

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.