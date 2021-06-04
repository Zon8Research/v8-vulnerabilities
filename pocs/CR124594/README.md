<b>VULNERABILITY DETAILS</b>
The JavaScript code below crashes the D8 shell (version as in Chrome 20.0.1105.0 dev, rev 11316) in function v8::internal::Marking::MarkBitFrom with an invalid read from a non-null address (0x100000018).

<b>VERSION</b>
Chrome Version: 20.0.1105.0 dev
Operating System: Ubuntu 11.10 64 bit

Note: I was not able to test this in the specified Chrome revision itself because I don't have a debug build available that supports --expose_gc for testing. However, the D8 revision used is exactly that in the given Chrome version.


<b>REPRODUCTION CASE</b>
function f(x, y) {
  if (x == 149999) { 
        x+''; 
        gc(); 
  }
}
for (var i = 0; i < 150000; i++) {
  new f(i);
}


<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: tab

Trace from D8 with Valgrind:

==5979== Invalid read of size 8
==5979==    at 0x52D830: v8::internal::Marking::MarkBitFrom(unsigned char*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0x537B2D: v8::internal::MarkCompactCollector::PrepareThreadForCodeFlushing(v8::internal::Isolate*, v8::internal::ThreadLocalTop*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0x539E44: v8::internal::MarkCompactCollector::PrepareForCodeFlushing() (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0x53A024: v8::internal::MarkCompactCollector::MarkLiveObjects() (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0x53EAB8: v8::internal::MarkCompactCollector::CollectGarbage() (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0x4ABF17: v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::internal::GCTracer*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0x4AC733: v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollector, char const*, char const*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0x4ACF5A: v8::internal::Heap::CollectAllGarbage(int, char const*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0x46DC41: v8::internal::GCExtension::GC(v8::Arguments const&) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0x43DBED: v8::internal::Builtin_HandleApiCall(v8::internal::(anonymous namespace)::BuiltinArguments<(v8::internal::BuiltinExtraArguments)1>, v8::internal::Isolate*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==5979==    by 0xCDFC4906361: ???
==5979==    by 0xCDFC493D484: ???
==5979==  Address 0x100000018 is not stack'd, malloc'd or (recently) free'd
==5979== 

