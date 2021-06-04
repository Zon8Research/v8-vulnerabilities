Detailed Report: https://clusterfuzz.com/testcase?key=6253322509549568

Fuzzing Engine: libFuzzer
Fuzz Target: v8_wasm_code_fuzzer
Job Type: v8_libfuzzer_asan_debug_linux_arm_sim
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  heap_type != HeapType::kBottom && HeapType(heap_type).is_valid() in value-type.h
  V8_Dcheck
  v8::internal::wasm::ValueType::Ref
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_libfuzzer_asan_debug_linux_arm_sim&range=784554:784571

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6253322509549568

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for instructions on reproducing this bug locally.