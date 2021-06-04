Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5394722806038528

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  long v8::internal::Simulator::AddWithCarry<long>
  void v8::internal::Simulator::AddSubHelper<long>
  v8::internal::Simulator::CallVoid
  
Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_msan_d8&range=384282:384380

Minimized Testcase (0.66 Kb): https://cluster-fuzz.appspot.com/download/AMIfv96vV1X4MtRKYM3Cr-bKsw7LeatMY3zkCSLsuxLN1fq3SEkeBf-FlvUv-sDkejKr46PO9wv2zyG-F4HTZXaIcyvr9I-xxEH6OyjmQn09vp6F7sL5aLOf84KssA8yfOSkArElOEIRiopk1usbG03H2JCQJFzDVg

Filer: inferno

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.