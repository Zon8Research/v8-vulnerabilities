Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4652429828161536

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x000096e78009
Crash State:
  - crash stack -
  v8::internal::MemoryChunk::heap
  v8::internal::HeapObject::GetIsolate
  v8::internal::Map::GeneralizeAllFieldRepresentations
  

Minimized Testcase (7.02 Kb): https://cluster-fuzz.appspot.com/download/AMIfv95GVd_daHndzusx5oP6_2rxYESa-IFVfqCwqQBZrKRLhC-AOER8Bg3UCVL57A5SfEiMgR0oNa36LY4Jw20Mxism_tNmComN53t9y0TX3txPDNVQdjNgIl7Bs6Hr1851tpXx-Zp7jG6BSC88haYZn2dNrmd_8w