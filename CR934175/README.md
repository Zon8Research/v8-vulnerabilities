<b>VULNERABILITY DETAILS</b>
The following testcase crashes the latest debug build of d8. It requires the --allow-natives-syntax flag

<b>VERSION</b>
Operating System: Linux 64bit

<b>REPRODUCTION CASE</b>

function opt(){
    return ar[1]+(NaN?0:'');
}
ar=new Float32Array;
opt();
%OptimizeFunctionOnNextCall(opt);
opt();



<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>

Crash State: 
#
# Fatal error in ../../src/compiler/verifier.cc, line 62
# TypeError: node #38:JSToString type NumericOrString is not String
#
#
#
#FailureMessage Object: 0x7fff774054d0
==== C stack trace ===============================

    /home/nils/js/v8/dbg/./libv8_libbase.so(v8::base::debug::StackTrace::StackTrace()+0x13) [0x7fd3e3618b53]
    /home/nils/js/v8/dbg/./libv8_libplatform.so(+0x106bb) [0x7fd3e35ea6bb]
    /home/nils/js/v8/dbg/./libv8_libbase.so(V8_Fatal(char const*, int, char const*, ...)+0x148) [0x7fd3e360faa8]
    /home/nils/js/v8/dbg/./libv8.so(+0xb6fa7e) [0x7fd3e23e9a7e]
    /home/nils/js/v8/dbg/./libv8.so(v8::internal::compiler::Verifier::Visitor::Check(v8::internal::compiler::Node*, v8::internal::compiler::AllNodes const&)+0x247b) [0x7fd3e23e7fab]
    /home/nils/js/v8/dbg/./libv8.so(v8::internal::compiler::Verifier::Run(v8::internal::compiler::Graph*, v8::internal::compiler::Verifier::Typing, v8::internal::compiler::Verifier::CheckInputs, v8::internal::compiler::Verifier::CodeType)+0xbe) [0x7fd3e23ea1ee]
    /home/nils/js/v8/dbg/./libv8.so(v8::internal::compiler::PipelineImpl::RunPrintAndVerify(char const*, bool)+0x10d) [0x7fd3e23558dd]
    /home/nils/js/v8/dbg/./libv8.so(v8::internal::compiler::PipelineImpl::OptimizeGraph(v8::internal::compiler::Linkage*)+0xa5) [0x7fd3e2353065]
    /home/nils/js/v8/dbg/./libv8.so(v8::internal::compiler::PipelineCompilationJob::ExecuteJobImpl()+0x23) [0x7fd3e2352f73]
    /home/nils/js/v8/dbg/./libv8.so(v8::internal::OptimizedCompilationJob::ExecuteJob()+0x80) [0x7fd3e2139740]
    /home/nils/js/v8/dbg/./libv8.so(+0x8c5207) [0x7fd3e213f207]
    /home/nils/js/v8/dbg/./libv8.so(v8::internal::Compiler::CompileOptimized(v8::internal::Handle<v8::internal::JSFunction>, v8::internal::ConcurrencyMode)+0x11b) [0x7fd3e214067b]
    /home/nils/js/v8/dbg/./libv8.so(+0x11b7b93) [0x7fd3e2a31b93]
    /home/nils/js/v8/dbg/./libv8.so(+0x1855069) [0x7fd3e30cf069]


