Detailed Report: https://clusterfuzz.com/testcase?key=5651034824572928

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  decoder->ok() in graph-builder-interface.cc
  V8_Dcheck
  v8::internal::wasm::WasmGraphBuildingInterface::BrOrRet
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_debug_linux_arm_sim&range=831033:831035

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5651034824572928

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.