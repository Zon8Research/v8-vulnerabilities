Detailed Report: https://clusterfuzz.com/testcase?key=6047907301949440

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm64_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  val.type == kWasmBottom || ValueTypes::MachineRepresentationFor(val.type) == Val
  v8::internal::wasm::WasmGraphBuildingInterface::MergeValuesInto
  v8::internal::wasm::WasmGraphBuildingInterface::PopControl
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_debug_linux_arm64_sim&range=708312:708320

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6047907301949440

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.