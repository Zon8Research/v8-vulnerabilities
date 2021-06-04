Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6124318079582208

Fuzzer: Mbarbella_js_mutation_test262
Job Type: Linux_asan_d8_dbg

Crash Type: UNKNOWN
Crash Address: 0x000000000000
Crash State:
  - crash stack -
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::Script::Run
  
Regressed: V8: r21848:21855

Minimized Testcase (7.42 Kb): https://cluster-fuzz.appspot.com/download/AMIfv954HmFiF5NMD26fHU0Z7iGoVzk7pqoO0MkqVEusL03N90BNqVfNn5nCwTb6KJvA3QUWrNNpOdIcxamGIWK4GmzGdPf2ts887WG35Zw6aTwHxcKMF3BIcvTOIYDDk4ieTQ0kCdZfrb2bOA87dieZp-z7L8vdGQ