Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5826437828837376

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8
Platform Id: linux

Crash Type: Stack-buffer-underflow READ 5
Crash Address: 0x7f8afcdafd00
Crash State:
  v8::internal::QuickCheckDetails::Advance
  v8::internal::Trace::AdvanceCurrentPositionInTrace
  v8::internal::TextNode::Emit
  
Regressed: V8: r32829:32830

Minimized Testcase (0.05 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv95tWPiuan-EX5noqAhFxtbvNdPhc-D4l16Hy-UN9b66QrLqERYuoeVLHKhR1_b3-mASxzs7UlA6xOb5Roln1Ok6eoDe2Vg_1rA-bjnDLPM0KecIwlwnG_0IG0h1r_HrSChj2IhMS8LkGI9W6k5sDcBAqvJJbw
"ab".match(/()(?<=\-3370\-1073741824\-1073741825)/);


Filer: hablich

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.