Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6750485365129216

Fuzzer: Inferno_layout_test_fuzzer
Job Type: Linux_asan_content_shell_drt

Crash Type: CHECK failure
Crash Address: 
Crash State:
  - crash stack -
  CHECK(is_valid) failed: ../../v8/src/v8conversions.h(107)
  
Regressed: https://cluster-fuzz.appspot.com/revisions?range=242208:242247

Minimized Testcase (0.51 Kb): https://cluster-fuzz.appspot.com/download/AMIfv97u7me9Bz2dZPdwHa3TbVVkf_lQ8G547F3NX_ENJ8pLhKbJEWyDcB49OsILEYdVikbwKtRVMv09cD5lh4rh8TLM1I3T5fAtJlplO95nCKR-2Jo2fZBRv_i8-BbWxw0IX7QuUBNafOWF609ZMOPCYyiXz_E1hA