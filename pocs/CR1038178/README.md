<b>-------------------------</b>

<b>VULNERABILITY DETAILS</b>
The following testcase crashes the latest debug build of d8.

<b>VERSION</b>
Chrome Version: d8-linux-debug-v8-component-65565
Operating System: Linux 64bit

<b>REPRODUCTION CASE</b>
function opt(){
    (new (function(){
        try{
            r.c>new class extends(W.y.h){}
            l.g.e._
            function _(){}[]=({[l](){}}),c()
        }catch(x){}
    }));
    (((function(){})())?.v)()
}
%PrepareFunctionForOptimization(opt)
try{opt()}catch{}
try{opt()}catch{}
%OptimizeFunctionOnNextCall(opt)
try{opt()}catch{}

<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>

Crash State:

#
# Fatal error in ../../src/execution/frames.cc, line 1560
# Missing deoptimization information for OptimizedFrame::Summarize.
#
#
#
#FailureMessage Object: 0x7ffe3f1bd570
==== C stack trace ===============================

    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8_libbase.so(v8::base::debug::StackTrace::StackTrace()+0x13) [0x7f25dec7a903]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8_libplatform.so(+0x1425d) [0x7f25dec4725d]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8_libbase.so(V8_Fatal(char const*, int, char const*, ...)+0x153) [0x7f25dec70da3]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8.so(v8::internal::OptimizedFrame::Summarize(std::__Cr::vector<v8::internal::FrameSummary, std::__Cr::allocator<v8::internal::FrameSummary> >*) const+0xc7d) [0x7f25dfe55f9d]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8.so(+0x11e3498) [0x7f25dfe63498]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8.so(v8::internal::Isolate::CaptureAndSetSimpleStackTrace(v8::internal::Handle<v8::internal::JSReceiver>, v8::internal::FrameSkipMode, v8::internal::Handle<v8::internal::Object>)+0x68) [0x7f25dfe64cf8]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8.so(v8::internal::ErrorUtils::Construct(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::FrameSkipMode, v8::internal::Handle<v8::internal::Object>, v8::internal::ErrorUtils::StackTraceCollection)+0x1f8) [0x7f25dfe8eea8]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8.so(v8::internal::ErrorUtils::MakeGenericError(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSFunction>, v8::internal::MessageTemplate, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::FrameSkipMode)+0x210) [0x7f25dfe8f480]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8.so(v8::internal::Factory::NewError(v8::internal::Handle<v8::internal::JSFunction>, v8::internal::MessageTemplate, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>)+0xd3) [0x7f25dfeeca13]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8.so(+0x197b7b4) [0x7f25e05fb7b4]
    /home/nils/browser/chrome/d8-linux-debug-v8-component-65565/libv8.so(+0xaa0a9f) [0x7f25df720a9f]
Received signal 4 ILL_ILLOPN 7f25dec78c32

