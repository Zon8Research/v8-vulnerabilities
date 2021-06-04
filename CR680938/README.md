Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5556368460480512

Fuzzer: v8_builtins_generator
Job Type: linux_asan_d8
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x00000b400038
Crash State:
  v8::internal::MemoryChunk::heap
  v8::internal::HeapObject::GetIsolate
  Handle
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: V8: r42266:42267

Minimized Testcase (0.08 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv95hpIrwbhkHFvzHsn6zrlaosk54zL5MAKc6f6Efpbeu3vaONcQO7xdqdY8sjlnkLCEZfDRhS0V_ranUdUqv3r3YrKbPvgxOrtYb27SX_C7YNHx9fTMdulgNOmCJSu_P2fQp_uMly7qowB_tml87Uo90phIwbu-OSU28tUHpJHIiY_3wafcQXbfzEGOQjGvQq6_bIC_T0gl1I-TTER6ra1JEnxJA1RspHKczU7duYXhx8mynH0xgEfqDyX4b8roT1LmVtDA2MhIf0VHW8w-BB_wlfduSZnLXZh5rFElr-wGfOYLAqJ-QfBdGW2IJosIaV3nDj_yTE0QBwV0yoTsWqDaP-TWNcHSm-uK1kLfFHSZA6CImgJu116Z17WiN8CpmdGpQWcDZmWn8aSSEg7Ikkim2ASS9zg?testcase_id=5556368460480512
var v17 = {};
var v32 = {};
 v39 = new WebAssembly.Memory(v32); 
 v49 = v39.grow(v17); 


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.