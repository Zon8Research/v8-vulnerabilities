Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4525749656092672

Fuzzer: mbarbella_js_mutation_test262
Job Type: linux_v8_d8_tot
Platform Id: linux

Crash Type: UNKNOWN
Crash Address: 0x00009fff8007
Crash State:
  v8::internal::Runtime_FunctionGetScript
  v8::internal::Invoke
  v8::internal::Execution::Call
  
Regressed: V8: r33043:33046

Minimized Testcase (0.19 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv9619B8vZRW1byZWIZ-DuDq0pBpraj2UvIbSGn-d7Jod3ScxE3HPnu4Ld2wrNv1QxeYrxXe5KMb2rbhsNatrxS9Wyx3EsWyVanpEymViYde5w96Lerz5_Lnx07AXp3mC87-nu6V1O2dIV1YmqF8EGrkYy2a-Tw
__v_6 = '{ "a1":1, "a2":1, "a3":1, "a4":1, "a5":1, "a6":1, "a7":1,\
               "a8":1, "a9":1, "a10":1, "a11":1, "a12":1, "a13":1}';
__v_7 = JSON.parse(__v_6);
%FunctionGetScript(__v_7);


Filer: inferno

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.