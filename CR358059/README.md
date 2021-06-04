Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4634708298170368

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x00009fff8000
Crash State:
  - crash stack -
  v8::internal::HeapObject::map_word
  v8::internal::HeapObject::map
  v8::internal::Object::IsHeapNumber
  

Minimized Testcase (5.13 Kb): https://cluster-fuzz.appspot.com/download/AMIfv97-qwz_yY1CYW8VqQRs3KJ00Mj-bcLBsTXpql5R2V_7CXcmHDyO6gttJNpzZpiNuF1FhoD6H_pP9S8g6y7V0DIYdPxapZbvPhCrhyse-qX54U7lHEhVVS9QUpq4erG4dpvlDHz2fZxPmlAPa-SWa0Gbdsp9eA