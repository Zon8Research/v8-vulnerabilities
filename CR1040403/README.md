Detailed Report: https://clusterfuzz.com/testcase?key=4640060599238656

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  mode == JSHeapBroker::BrokerMode::kSerialized implies kind == kUnserializedReadO
  v8::platform::PrintStackTrace
  v8::internal::compiler::operator<<
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=65630:65631

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4640060599238656

Issue filed automatically.

