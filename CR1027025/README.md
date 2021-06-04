Detailed Report: https://clusterfuzz.com/testcase?key=5190165177696256

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  *(maybe_code_handler.object()) == *StoreHandler::StoreSlow(GetIsolate()) in feed
  v8::platform::PrintStackTrace
  v8::internal::FeedbackNexus::GetKeyedAccessStoreMode
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=65085:65086

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5190165177696256

Issue filed automatically.

