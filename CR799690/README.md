Detailed report: https://clusterfuzz.com/testcase?key=5976562116853760

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  total_offset == offset_table->get_int(kOTESize * left) in wasm-objects.cc
  v8::platform::PrintStackTrace
  v8::internal::WasmSharedModuleData::GetSourcePosition
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=49375:49376

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5976562116853760

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.