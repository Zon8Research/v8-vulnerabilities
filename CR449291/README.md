Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6134706385977344

Fuzzer: Mbarbella_js_mutation
Job Type: Windows_asan_d8

Crash Type: Global-buffer-overflow READ 4
Crash Address: 0x02d5dae0
Crash State:
  v8::internal::MarkCompactCollector::EmptyMarkingDeque
  v8::internal::RootMarkingVisitor::MarkObjectByPointer
  v8::internal::RootMarkingVisitor::VisitPointer
  

Minimized Testcase (4.38 Kb): https://cluster-fuzz.appspot.com/download/AMIfv94UkOgHlzOzrkOH9Infrh9YTc0YbBd76WnFOJPDFFvYvKdCmvnEuqlNXI8Gt0P1h3Rkz4ImfyNLY2eJrvnohyo8e-0Q7SpPhgAXtGNTyhviqDaHyk9LyPHoeWIpemDLq9jpw0OteSAGCY7wDPYwYIdZeaMx1w

Filer: mbarbella