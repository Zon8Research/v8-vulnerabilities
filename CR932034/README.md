UserAgent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3679.0 Safari/537.36

Steps to reproduce the problem:
poc:
new BigInt64Array(1073741823);

What is the expected behavior?

What went wrong?
abort: CSA_ASSERT failed: Torque assert 'byteLength >>> this.sizeLog2 == length' failed [../../src/builtins/typed-array.tq:13]

==== JS stack trace =========================================

    0: ExitFrame [pc: 0xf6fedc70]
    1: StubFrame [pc: 0xf70ca3a9]
Security context: 0x5430d705 <JSObject>#0#
    2: new BigInt64Array(aka BigInt64Array) [0x54307659](this=0x51f80305 <the_hole>,1073741823)
    3: ConstructFrame [pc: 0xf6cd7b50]
    4: StubFrame [pc: 0xf714e298]
    5: /* anonymous */ [0x5430fe29] [(d8):1] [bytecode=0x5430fddd offset=16](this=0x51680bbd <JSGlobal Object>#1#)
    6: InternalFrame [pc: 0xf6ce0801]
    7: EntryFrame [pc: 0xf6ce05c9]

==== Details ================================================

[0]: ExitFrame [pc: 0xf6fedc70]
[1]: StubFrame [pc: 0xf70ca3a9]
[2]: new BigInt64Array(aka BigInt64Array) [0x54307659](this=0x51f80305 <the_hole>,1073741823) {
// optimized frame
--------- s o u r c e   c o d e ---------
<No Source>
-----------------------------------------
}
[3]: ConstructFrame [pc: 0xf6cd7b50]
[4]: StubFrame [pc: 0xf714e298]
[5]: /* anonymous */ [0x5430fe29] [(d8):1] [bytecode=0x5430fddd offset=16](this=0x51680bbd <JSGlobal Object>#1#) {
  // expression stack (top to bottom)
  [02] : 1073741823
  [01] : 0x54307659 <JSFunction BigInt64Array (sfi = 0x26b0ad19)>#2#
  [00] : 0x51f80289 <undefined>
--------- s o u r c e   c o d e ---------
new BigInt64Array(1073741823)
-----------------------------------------
}

[6]: InternalFrame [pc: 0xf6ce0801]
[7]: EntryFrame [pc: 0xf6ce05c9]
==== Key         ============================================

 #0# 0x5430d705: 0x5430d705 <JSObject>
 #1# 0x51680bbd: 0x51680bbd <JSGlobal Object>
 #2# 0x54307659: 0x54307659 <JSFunction BigInt64Array (sfi = 0x26b0ad19)>
 BYTES_PER_ELEMENT: 8
=====================

Received signal 4 ILL_ILLOPN 0000f4a5a781

==== C stack trace ===============================

 [0x0000f4a5d451]
 [0x0000f4a5d356]
 [0x0000f77d3bd0]
 [0x0000f4a5a781]
 [0x0000f67d2626]
 [0x0000f67d20f2]
 [0x0000f6fedc70]
 [0x0000f70ca3a9]
 [0x0000f6f986d8]
 [0x0000f6cd7b50]
 [0x0000f714e298]
 [0x0000f6ce92a0]
 [0x0000f6ce0801]
 [0x0000f6ce05c9]
 [0x0000f5f83ad2]
 [0x0000f5f80b6f]
 [0x0000f5f7ff51]
 [0x0000f56119c6]
 [0x0000565f3248]
 [0x000056602107]
 [0x000056606af6]
 [0x000056606f2c]
 [0x0000f464e637]
[end of stack trace]

Did this work before? N/A 

Chrome version: 73.0.3679.0  Channel: n/a
OS Version: 10.0
Flash Version: