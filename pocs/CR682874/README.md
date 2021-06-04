Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4814570096164864

Fuzzer: v8_builtins_generator
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: UNKNOWN READ
Crash Address: 0x7ff80003
Crash State:
  v8::internal::wasm::GrowWebAssemblyMemory
  v8::WebAssemblyMemoryGrow
  v8::internal::FunctionCallbackArguments::Call
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=windows_asan_d8&range=444720:444724

Minimized Testcase (0.09 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv95Aagpchj-8T5fPD3MMZN3GZEl0BKYQCebQrTbi2gjK700jwwHmlO59loUMdZr84ORIVzAOCVZm23J48Ei-S6Gj7m2nzxZvPTJscEzw5Ul6me59tyYsKrb2oI6EY3vcBy5-N93j-OHwizuNDE1ztj9cnmHTbizTwFKNY_RBe1wev6mbq-g6NQLYFUmkw65nd64S4ViC7Pl-Z5lWHm7-J1UMD8az2ubkuEGmAnPbhLr8P1zoN0kQ1vNVaGKWU7akIoHLF9kKbQjmrUsW2_paWazR9RpsWExmCZ4r8UoyhdpQlTDdLlWBKFxU6wypeKzjeRGQOOICpw1Fod3FZ48f6mKRmAHAuxAXleJKpQ5p1oi6tM_xi-Y?testcase_id=4814570096164864
var v3 = {};
var v57 = {};
 v68 = new WebAssembly.Memory(v57); 
 v72 = v68.grow( v3); 


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.