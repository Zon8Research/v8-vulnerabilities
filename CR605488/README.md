Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5397077835644928

Fuzzer: mbarbella_js_mutation
Job Type: linux_ubsan_vptr_d8
Platform Id: linux

Crash Type: Bad-cast
Crash Address: 0x0000048b51b8
Crash State:
  Bad-cast to v8::internal::AstNode from invalid vptr
  wasm-js.cc:138:7
  
Recommended Security Severity: High

Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_ubsan_vptr_d8&range=383126:383185

Minimized Testcase (18.29 Kb): https://cluster-fuzz.appspot.com/download/AMIfv94IvnVY4vzuBXULgigbKHFGw8fU-0w4O_v24HBhWEBaAplVq2E2KC5fbHo-jhcN8drf25ay4PgU_jVg47TA6L9kXfA3y48pgj0px0PECp8ozvk2ZwcHxVebl15s_eAcMTzJ59MCnZQ8lMP9D0eU9tXpHzUsctsf4yF2h-JpIs9OaEhnLaI

Filer: mmoroz

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.