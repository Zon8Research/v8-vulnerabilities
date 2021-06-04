Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4750211944546304

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_v8_arm

Crash Type: CHECK failure
Crash Address: 
Crash State:
  CHECK(start <= end) failed: ../../v8/src/heap/spaces.cc(1722)
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_asan_d8_v8_arm&range=293090:293185

Minimized Testcase (9.06 Kb): https://cluster-fuzz.appspot.com/download/AMIfv95SpcL7JENJ9SS-uA_9fkQ5t8Wj65PNAhhn23jSmTH14Jwo9R6i9QkRW0i621_T7ER4TvcT6qO6kbx3wog1gP8jltSiX-r4BwLzaW7RhvartwZRBUP2TVhLj04l4EXCpQr-2S6Xzg7wTVinT-I0dktlAY2eDw

Filer: jarin