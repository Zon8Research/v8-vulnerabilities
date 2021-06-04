Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6483509057421312

Fuzzer: v8_builtins_generator
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: UNKNOWN READ
Crash Address: 0x15c88344
Crash State:
  v8::internal::LocalArrayBufferTracker::Free<1>
  v8::internal::ArrayBufferTracker::FreeAll
  v8::internal::PagedSpace::TearDown
  
Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=windows_asan_d8&range=403457:403667

Minimized Testcase (0.21 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv940IQyOKx8G9HvHN6wExn7ihDgFjwqzedRgA_SEEEh6F_5VEvrvK__KXpiOZkUVWg25XkU6yNPjlFuF9ABJH7c6SbXI93eCN_kIGBQ6E2Ah5-G_BCySawKS_GSp5zqIyACpefGwn8MVdCj3aFRL_ll7Xl9_cg?testcase_id=6483509057421312
 v3 = Math.floor(0xFFFFFFFF / 4) + 1; 
Object.prototype.__defineGetter__(1, function() { 
this[1] = Array(0x8000).join();
})
 v38 = new ArrayBuffer(v3); 
try { v41 = new Intl.DateTimeFormat(); } catch (e) {  }


Filer: inferno

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.