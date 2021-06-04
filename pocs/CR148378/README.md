<b>VULNERABILITY DETAILS</b>
The JavaScript code below crashes Chromium 23.0.1262.0 dev and d8 shell (trunk version as in Chrome 23.0.1262.0) with an invalid free in v8::internal::Runtime_RegExpExecMultiple.


<b>VERSION</b>
Chrome Version: 23.0.1262.0 dev
Operating System: Ubuntu 12.04 64 bit


<b>REPRODUCTION CASE</b>
var str = "ABX X";
str = str.replace(/(\w)?X/g, function(match, capture) {});
function test() {
  try {
    test(7, 'right');
  } catch(e) {
    "bar.foo baz......".replace(/(ba.).*?f/g, function() { return "x";});
  }
}
test();


<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: tab
Crash state:

third_party/tcmalloc/chromium/src/tcmalloc.cc:285] Attempt to free invalid pointer 0x55555a1eda81 

Program received signal SIGSEGV, Segmentation fault.
0x0000555555bbfdd0 in ?? ()
(gdb) bt
#0  0x0000555555bbfdd0 in ?? ()
#1  0x0000555555bc771c in ?? ()
[...]
(More stack frames follow...)
(gdb) x /i $pc
=> 0x555555bbfdd0:      movb   $0x21,0x39


Valgrind with d8:

==8067== Invalid free() / delete / delete[]
==8067==    at 0x4C2563E: operator delete[](void*) (vg_replace_malloc.c:409)
==8067==    by 0x5EBA56: v8::internal::Runtime_RegExpExecMultiple(v8::internal::Arguments, v8::internal::Isolate*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8067==    by 0xB31A8806361: ???
==8067==    by 0xB31A8841307: ???
[...]
==8067==  Address 0x7fef09d58 is on thread 1's stack
