Detailed Report: https://clusterfuzz.com/testcase?key=5684325137317888

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_compile_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm64_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  ref.stack_height >= target_stack_height in wasm-interpreter.cc
  V8_Dcheck
  v8::internal::wasm::SideTable::SideTable
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_debug_linux_arm64_sim&range=770762:770782

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5684325137317888

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.