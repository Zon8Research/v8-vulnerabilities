Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4537506710159360

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x7fd84a01ca8c
Crash State:
  - crash stack -
  v8::internal::Invoke
  v8::Script::Run
  v8::Shell::ExecuteString
  
Regressed: V8: r21576:21587

Minimized Testcase (0.80 Kb): https://cluster-fuzz.appspot.com/download/AMIfv97RVmj6EA_yMjarW1R7Qzjv4mJ1gcOkOIDXPdEmp_QMq_A9GS1w7p7X_6rhtD1FmerO0XT4LXAhgjNDcg5WYkMzuV5fktJ_H607wQLzFz75sLN2S8uab7KOyvsK9sIcC8qLckWT-TIVpEJsA5w_jCBg4-v3rA