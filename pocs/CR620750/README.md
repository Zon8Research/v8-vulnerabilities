Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6648505599000576

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: UNKNOWN WRITE
Crash Address: 0xbebebebe
Crash State:
  v8::internal::Heap::AllocateHeapNumber
  v8::internal::Factory::NewHeapNumber
  v8::internal::Factory::NewNumberFromUint
  
Recommended Security Severity: High

Regressed: https://cluster-fuzz.appspot.com/revisions?job=windows_asan_d8&range=400026:400041

Minimized Testcase (0.15 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96XEhzaeCZtpwNwEEP_OJuR3j0_A2GV1ys7DxKM-KB3C98PVrd7GCthZwC-lVkUbhGFcypRAN4ca2rCEwgyoADPgOXmfEcOqgYmID4P3Ey0ppUgA2xVyZNg3AMHEFbyGSNaAXwH9p2LApkIANYcgER3wf7-yg
gc();
try {
 __v_2;
} catch(e) {; }
__v_5 = {
};
__v_4 = [];
__v_5 = {
};
for (var __v_3 = 1073741823; __v_3 < 4294967295; __v_3++) __v_4[__v_3] = __v_3;


Filer: inferno

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.