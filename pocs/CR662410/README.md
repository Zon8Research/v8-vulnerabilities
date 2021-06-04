Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4615755334418432

Fuzzer: mbarbella_js_mutation
Job Type: linux_v8_d8_tot
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x0000ffffffff
Crash State:
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::Script::Run
  
Regressed: V8: r40719:40739

Minimized Testcase (0.64 Kb): https://cluster-fuzz.appspot.com/download/AMIfv94R_rU7FGDYg63vtDo1uWE7FMDqvJgIfk2EvaWl2GSnCQY5wNLsRWS5mWyAUGK78NIVfKS84svYmMEjWD8SlDGwL2Fu8lkzc3B-5TVSZKVGOJurx8h-k0YIyvMwWCZDv3h7uU0RtgIUheeFr3uEScxO97SBkQ?testcase_id=4615755334418432

Issue manually filed by: mstarzinger

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.