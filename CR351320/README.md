Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5262604716998656

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0xffffffffffffffff
Crash State:
  - crash stack -
  v8::internal::Invoke
  v8::Script::Run
  v8::Shell::ExecuteString
  
Regressed: https://cluster-fuzz.appspot.com/revisions?range=19769:19777

Minimized Testcase (6.94 Kb): https://cluster-fuzz.appspot.com/download/AMIfv95bCsnNFMzteifAnIiAtJ22-j66rh4hZABxyk6Tqs91GM4NbLUNRZCTyazTKLovUlFWOPN2xp8_H6nnc8X_GT6pG6XWlr3_cUP8Z9XBlmpSP9IEZLEKRcEAJW8_yC2GKxycHFnFqQI3U605yR7SIKzlD-Osyg