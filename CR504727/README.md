Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4781767364444160

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x000092115c22
Crash State:
  v8::internal::Object::GetProperty
  v8::internal::Object::GetProperty
  v8::internal::Runtime::GetObjectProperty
  
Regressed: V8: r29304:29306

Minimized Testcase (0.10 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv94Thw6LlzVoHWhYm0UlEjwUtc8eROFe0n9VXgdMYy5jFEwjVP3YSSKF1aIjCoDzore3uuOMKLsom4xZ8GdGmF8M6didWnE8TRa5hP1mTPHGZXll5uIN_J4-tJZDI8VUQi6XWbAqjE7VASk1msz43dkC-if1fg
  function __f_4() {
  }
  var __v_2 = new Worker(__f_4);
(function() {
})();
for (var __v_6 of __v_5) {
}


Filer: machenbach