Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5684463616917504

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_dbg

Crash Type: UNKNOWN
Crash Address: 0x7f1a0000000b
Crash State:
  - crash stack -
  v8::internal::Map::instance_type
  v8::internal::ShortCircuitConsString
  v8::internal::MarkCompactMarkingVisitor::MarkObjectByPointer
  
Regressed: V8: r21415:21446

Minimized Testcase (4.34 Kb): https://cluster-fuzz.appspot.com/download/AMIfv974RHE6jlZzJbynDyeK_4X8hYesiul67eRYim28N4K9RiGgSxMpxB9Ba8Ww7IgtcgvBxOqQ6KmTbzYTXWM55H6hXaqRH_DAU2TDbwd34_STIw8lOtydNw2kPnwRbTMQrvW2Y_nsosUKcr1TJZ3DY4frrlZveQ