Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5070278512607232

Fuzzer: inferno_layout_test_unmodified
Job Type: mac_asan_chrome
Platform Id: mac

Crash Type: Attempting free
Crash Address: add
Crash State:
  v8::internal::Heap::FreeDeadArrayBuffersHelper
  v8::internal::Heap::FreeDeadArrayBuffers
  v8::internal::MarkCompactCollector::SweepSpaces
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=mac_asan_chrome&range=337003:337025

Unminimized Testcase: https://cluster-fuzz.appspot.com/download/AMIfv96_9ob9kbSwMVwAwm-3kG0iJRWJK16DCN7S841tDmAp91f05zLXsHpH4IwtQxWMfnoHBc1TIxeO58F9bbEJcJBeYeCQ_12WkoNCZGJS26EW8L-t_MRZoF5fAJkw-T19Qwff5jzPx5kfauNLZrNSXxuxS5aRHA


Filer: mbarbella