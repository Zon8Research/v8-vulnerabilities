Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6472715503665152

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

Regressed: V8: r42196:42197

Minimized Testcase (0.10 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv977dxHTohpgvpQmCKkkMJMulnLNUFZrz2_qV_14I-4BK6Az3SXio6pm7qTGiHSIOHNf5iwu4JyR-4PEfo0h7atBRlA8zQKLGVuDJzBuXH-z4YN3Fxd3UeZTgIAjflsHSm7aRGiBGC-AwmDkJE026lm57cyJkqiU3gbJ0S2AB7EiBCeedHNbIho_chF2B6gc6q7qtFwBUNgK6WbdOJfcNtG9ofhiEz5K7cQB7AVbKB7lxM8k8VqzWg64ZlYZBkf8dAMDVc-q0ldSCc4UYGTrALllj2e9iZqCGidrM-67g9jbYaXTVJrjfaFLO7_EFhxR07UnNZpouz5ymFtoiFF4vHdgFcd0eIXJsUnUcdH_nlHZFReqfcq8qgwcRvX-Ld2fAkF_R2rNSU3vT2RjKef9AEsaAYICIQ?testcase_id=6472715503665152
var v10 = {};
 v15 = new Uint8ClampedArray(); 
 v16 = new WebAssembly.Memory(v15); 
 v18 = v16.grow(v10); 


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.