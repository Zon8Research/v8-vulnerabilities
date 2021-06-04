Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4890807282696192

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_dbg

Crash Type: UNKNOWN
Crash Address: 0x00000bad0042
Crash State:
  - crash stack -
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::internal::BinaryOpIC::Transition
  
Regressed: https://cluster-fuzz.appspot.com/revisions?range=20174:20220

Minimized Testcase (6.65 Kb): https://cluster-fuzz.appspot.com/download/AMIfv965WNG9ITmGMGz7OIVnhNQM57nR48l-ydMIEmY32-nc2pUy5EpkdaUfDnEwQWb3d8pKHBKK8_VDv8nei_hQZPBejNiAmJLzTYxBJ_BHN8GF4EqViLcz7ou_WF3uSFPAPhusSW2GykrUIBIusK_2pcLMWVdpkw