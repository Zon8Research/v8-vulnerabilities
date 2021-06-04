Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5226402779496448

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_dbg

Crash Type: UNKNOWN
Crash Address: 0x7fb600000007
Crash State:
  - crash stack -
  v8::internal::NoBarrier_Load
  v8::internal::Map::instance_size
  v8::internal::HeapObject::SizeFromMap
  

Unminimized Testcase: https://cluster-fuzz.appspot.com/download/AMIfv95GEO1CBY0vyG5ivfuDVA99RRKh0uVpHHuQl0-9PBy-LfC3iWwKyXIFGiGCw7beyYugs0PHQddaMKrQP4v9OvcpdMRkMfK2LBEkvuPLVQh0TX3lpb3YO9HVfo8jTS47kwiOPsvdKF6nQtKyh7L2Wn7q_YHnDg