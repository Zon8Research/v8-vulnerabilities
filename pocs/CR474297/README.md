Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5108752320036864

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8_v8_arm

Crash Type: UNKNOWN
Crash Address: 0x0beefdb4
Crash State:
  v8::internal::PropertyCell::UpdateCell
  v8::internal::LookupIterator::WriteDataValue
  v8::internal::Object::SetDataProperty
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_asan_d8_v8_arm&range=322562:322588

Minimized Testcase (8.49 Kb): https://cluster-fuzz.appspot.com/download/AMIfv94Y-dLZI6LlffAJJ1E9SoxNjwABPAB_QqsQdG8d0f2ROSiKiCYyZWZ8KAwCyod4muMyhJswL2GxcPpvKt-_rkYFFt6DsypyOR69vdrfEuJxg0a2DII51QG1ZyK9KOKD4NnVblI7LorQpCRGhRUJwy6p1NNy2Q

Filer: inferno