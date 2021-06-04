Target : ASAN-D8-DBG Latest
Crash Type: Debug check failed
Crash State:

#
# Fatal error in ../../src/objects/slots.h, line 77
# Debug check failed: IsAligned(ptr, kSlotDataAlignment).
#
#
#
#FailureMessage Object: 0x7ffcca248080


POC:
<b>-------------------------</b>-

var v0 = ({"foo1" : ({"foo2" : ({"foo3" : ({"foo4" : ({"foo5" : ({"foo6" : ({"foo7" : []})})})})})})});
var v2 = Array.prototype;
(v2.__proto__) = v0;
for(var v3 in v2){
    (v4) = 'x1';
}

<b>-------------------------</b>-



----
*** This sample was found through context aware fuzzing .
