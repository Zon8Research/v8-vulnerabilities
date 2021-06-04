Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4597325974732800

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: UNKNOWN READ
Crash Address: 0x7847e118
Crash State:
  v8::internal::HeapObject::SizeFromMap
  v8::internal::BodyDescriptorBase::IteratePointers<class v8::internal::MarkCompac
  v8::internal::FlexibleBodyVisitor<class v8::internal::MarkCompactMarkingVisitor,
  
Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=windows_asan_d8&range=414942:414943

Minimized Testcase (0.18 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv97IsOlcUUjpPy4Wu9bu5qfm1hZXmd5ynRAopW93HlO2CS7RMnXFukn3OQGh7VM2w_E7AW_eanYYmcrL6tz_YCsoS2C3Gh511jVfrKLIn026qA7vWN4qqP1f67N0Y6vFMiOxyB6bGBdNkGxWhWgzC9Z5IKviuw?testcase_id=4597325974732800
  var __v_1 = new Array();
  var __v_2 = __v_1;
  gc(); gc();
  for (var __v_0 = -1073741825; __v_0 < 1073741824; __v_0++) {
    __v_2[1] = new Array(1000);
    __v_2 = __v_2[1];
  }


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.