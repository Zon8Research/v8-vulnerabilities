UserAgent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36

Steps to reproduce the problem:
POC：
a = this;
b = {};
a.length = 4294967296;
Array.prototype.join.call(a,b );

What is the expected behavior?
Please reproduce with v8 debug version x86.

In  Array-join.tq
  macro BufferInit(len: uintptr, sep: String): Buffer {
    const cappedBufferSize: intptr = len > kMaxNewSpaceFixedArrayElements ?
        kMaxNewSpaceFixedArrayElements :
        Signed(len);
    assert(cappedBufferSize > 0);
    const fixedArray: FixedArray = AllocateZeroedFixedArray(cappedBufferSize);
    const isOneByte: bool = HasOnlyOneByteChars(sep.instanceType);
    return Buffer{fixedArray, 0, 0, isOneByte};
  }

cappedBufferSize might be negative.

What went wrong?
abort: CSA_ASSERT failed: Torque assert 'cappedBufferSize > 0' failed [../../src/builtins/array-join.tq:171]

==== JS stack trace =========================================

    0: ExitFrame [pc: 07E24070]
    1: StubFrame [pc: 07E77A97]
Security context: 0x2300d5ad <JSObject>#0#
    2: join [23001975](this=0x1dd80a79 <JSGlobal Object>#1#,0x1dd85575 <Object map = 30F0022D>#2#)
    3: /* anonymous */ [23010365] [g:\poc\array\Overflow.js:9] [bytecode=230102F1 offset=52](this=0x1dd80a79 <JSGlobal Object>#1#)
    4: InternalFrame [pc: 07B2F781]
    5: EntryFrame [pc: 261020FC]

==== Details ================================================

[0]: ExitFrame [pc: 07E24070]
[1]: StubFrame [pc: 07E77A97]
[2]: join [23001975](this=0x1dd80a79 <JSGlobal Object>#1#,0x1dd85575 <Object map = 30F0022D>#2#) {
// optimized frame
--------- s o u r c e   c o d e ---------
<No Source>
-----------------------------------------
}
[3]: /* anonymous */ [23010365] [g:\poc\array\Overflow.js:9] [bytecode=230102F1 offset=52](this=0x1dd80a79 <JSGlobal Object>#1#) {
  // expression stack (top to bottom)
  [06] : 0x1dd85575 <Object map = 30F0022D>#2#
  [05] : 0x1dd80a79 <JSGlobal Object>#1#
  [04] : 0x1dd85575 <Object map = 30F0022D>#2#
  [03] : 0x1dd80a79 <JSGlobal Object>#1#
  [02] : 0x23001975 <JSFunction join (sfi = 0C7083B9)>#3#
  [01] : 0x23001345 <JSFunction call (sfi = 0C707DB1)>#4#
  [00] : 0x26280289 <undefined>
--------- s o u r c e   c o d e ---------
\x0a\x0aa = this;\x0ab = {};\x0a\x0a\x0aa.length = 4294967296;\x0a\x0aArray.prototype.join.call(a,b );\x0a\x0a\x0a\x0a\x0a\x0a
-----------------------------------------
}

[4]: InternalFrame [pc: 07B2F781]
[5]: EntryFrame [pc: 261020FC]
==== Key         ============================================

 #0# 2300D5AD: 0x2300d5ad <JSObject>
 #1# 1DD80A79: 0x1dd80a79 <JSGlobal Object>
 #2# 1DD85575: 0x1dd85575 <Object map = 30F0022D>
 #3# 23001975: 0x23001975 <JSFunction join (sfi = 0C7083B9)>
 #4# 23001345: 0x23001345 <JSFunction call (sfi = 0C707DB1)>
=====================

==== C stack trace ===============================

        (No symbol) [0x00000000]
        v8::base::OS::Abort [0x0F542C99+73] (G:\v8_1025\v8\src\base\platform\platform-win32.cc:932)
        v8::internal::__RT_impl_Runtime_AbortJS [0x075F7ED6+614] (G:\v8_1025\v8\src\runtime\runtime-test.cc:706)
        v8::internal::Runtime_AbortJS [0x075F7A7D+365] (G:\v8_1025\v8\src\runtime\runtime-test.cc:696)
        Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [0x07E24070+80]
        Builtins_ArrayJoinWithoutToLocaleString [0x07E77A97+9431]
        Builtins_ArrayPrototypeJoin [0x07E80180+3360]
        (No symbol) [0x26110F35]
        Builtins_JSEntryTrampoline [0x07B2F781+97]
        (No symbol) [0x261020FC]
        v8::internal::GeneratedCode<v8::internal::Object *,v8::internal::Object *,v8::internal::Object *,v8::internal::Object *,int,v8::internal::Object ***>::Call [0x06EA2FAC+108] (G:\v8_1025\v8\src\simulator.h:113)
        v8::internal::`anonymous namespace'::Invoke [0x06EA12D4+2244] (G:\v8_1025\v8\src\execution.cc:156)
        v8::internal::`anonymous namespace'::CallInternal [0x06EA0864+372] (G:\v8_1025\v8\src\execution.cc:192)
        v8::internal::Execution::Call [0x06EA06CD+157] (G:\v8_1025\v8\src\execution.cc:203)
        v8::Script::Run [0x06404369+1017] (G:\v8_1025\v8\src\api.cc:2110)
        v8::Shell::ExecuteString [0x00BBE2DA+2314] (G:\v8_1025\v8\src\d8.cc:534)
        v8::SourceGroup::Execute [0x00BCE89B+1019] (G:\v8_1025\v8\src\d8.cc:2478)
        v8::Shell::RunMain [0x00BD1DF9+393] (G:\v8_1025\v8\src\d8.cc:2956)
        v8::Shell::Main [0x00BD3D45+3189] (G:\v8_1025\v8\src\d8.cc:3506)
        main [0x00BD463C+44] (G:\v8_1025\v8\src\d8.cc:3541)
        invoke_main [0x00C1374E+30] (f:\dd\vctools\crt\vcstartup\src\startup\exe_common.inl:78)
        __scrt_common_main_seh [0x00C138B7+343] (f:\dd\vctools\crt\vcstartup\src\startup\exe_common.inl:288)
        __scrt_common_main [0x00C1398D+13] (f:\dd\vctools\crt\vcstartup\src\startup\exe_common.inl:331)
        mainCRTStartup [0x00C13998+8] (f:\dd\vctools\crt\vcstartup\src\startup\exe_main.cpp:17)
        BaseThreadInitThunk [0x766E8484+36]
        RtlValidSecurityDescriptor [0x771E305A+282]
        RtlValidSecurityDescriptor [0x771E302A+234]

Did this work before? N/A 

Chrome version: 70.0.3538.77  Channel: stable
OS Version: 10.0
Flash Version: