Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5398736020701184

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_v8_arm

Crash Type: UNKNOWN
Crash Address: 0xf2108080
Crash State:
  - crash stack -
  int v8::internal::FlexibleBodyVisitor<v8::internal::NewSpaceScavenger, v8::internal::JSObject::BodyD
  v8::internal::Heap::DoScavenge
  v8::internal::Heap::Scavenge
  

Minimized Testcase (2.90 Kb): https://cluster-fuzz.appspot.com/download/AMIfv97ZtenbyysGA7JdW1HLOXETMik0-dXPfnGIhtKioUsYnPbX69b_ArHcgho8kkAfGY2xTYkHhpexIhuEuv-lkixkVGViI0_C-sjaQwCc3itSXjSBVOQtMmbOLGftW7FBWXU9dB3r25cDUG8RTrWflYV2OQDAHQ