poc1:
a / ((b * c * d) * e => f * g * h)
crash log:
# Fatal error in ../../src/parsing/parser.cc, line 2340
# Debug check failed: nary->op() == Token::COMMA (38 vs. 29).
#
#
#
#FailureMessage Object: 0x7fff752c3800
==== C stack trace ===============================

    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8_libbase.so(v8::base::debug::StackTrace::StackTrace()+0x13) [0x7f65e11f7fd3]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8_libplatform.so(+0xd6db) [0x7f65e11cd6db]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8_libbase.so(V8_Fatal(char const*, int, char const*, ...)+0x148) [0x7f65e11ef178]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8_libbase.so(+0x17ee5) [0x7f65e11eeee5]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(v8::internal::Parser::AddArrowFunctionFormalParameters(v8::internal::ParserFormalParameters*, v8::internal::Expression*, int)+0xbe) [0x7f65e0$17a2e]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(v8::internal::Parser::DeclareArrowFunctionFormalParameters(v8::internal::ParserFormalParameters*, v8::internal::Expression*, v8::internal::Sc$nner::Location const&)+0x45) [0x7f65e0617d25]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc0f73c) [0x7f65e062273c]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc136cb) [0x7f65e06266cb]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc15564) [0x7f65e0628564]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc1157e) [0x7f65e062457e]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc104ac) [0x7f65e06234ac]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc10937) [0x7f65e0623937]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc0f0ad) [0x7f65e06220ad]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc136cb) [0x7f65e06266cb]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc1eb5c) [0x7f65e0631b5c]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xc1e83e) [0x7f65e063183e]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0xbf79e9) [0x7f65e060a9e9]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(v8::internal::Parser::DoParseProgram(v8::internal::Isolate*, v8::internal::ParseInfo*)+0x453) [0x7f65e0609b43]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(v8::internal::Parser::ParseProgram(v8::internal::Isolate*, v8::internal::ParseInfo*)+0x1c7) [0x7f65e06092d7]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(v8::internal::parsing::ParseProgram(v8::internal::ParseInfo*, v8::internal::Isolate*)+0x135) [0x7f65e06366d5]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(+0x4fe270) [0x7f65dff11270]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(v8::internal::Compiler::GetSharedFunctionInfoForScript(v8::internal::Isolate*, v8::internal::Handle<v8::internal::String>, v8::internal::Comp$ler::ScriptDetails const&, v8::ScriptOriginOptions, v8::Extension*, v8::internal::ScriptData*, v8::ScriptCompiler::CompileOptions, v8::ScriptCompiler::NoCacheReason, v8::internal::NativesFlag)+0x286) [0x$f65dff13196]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(v8::ScriptCompiler::CompileUnboundInternal(v8::Isolate*, v8::ScriptCompiler::Source*, v8::ScriptCompiler::CompileOptions, v8::ScriptCompiler:$NoCacheReason)+0x4fb) [0x7f65dfd9609b]
    /root/Workspace/browser/v8/v8/out.gn/x64.debug/./libv8.so(v8::ScriptCompiler::Compile(v8::Local<v8::Context>, v8::ScriptCompiler::Source*, v8::ScriptCompiler::CompileOptions, v8::ScriptCompiler::NoCa$heReason)+0x5d) [0x7f65dfd96bed]
    ./d8(+0x192b1) [0x56503309b2b1]
    ./d8(+0x22030) [0x5650330a4030]
    ./d8(+0x24281) [0x5650330a6281]
    ./d8(+0x25db0) [0x5650330a7db0]
    /lib/x86_64-linux-gnu/libc.so.6(__libc_start_main+0xf0) [0x7f65df143830]
    ./d8(_start+0x2a) [0x56503309502a]
Received signal 4 ILL_ILLOPN 7f65e11f6572

poc2:
a / ((b * c * d) * 1 => f * g * h)
crash log:
Received signal 11 SEGV_MAPERR 00000000007c

==== C stack trace ===============================

 [0x7f924b56af24]
 [0x7f9249b7a390]
 [0x7f924a9956ba]
 [0x7f924a9996cb]
 [0x7f924a99b564]
 [0x7f924a99757e]
 [0x7f924a9964ac]
 [0x7f924a996937]
 [0x7f924a9950ad]
 [0x7f924a9996cb]
 [0x7f924a9a4b5c]
 [0x7f924a9a483e]
 [0x7f924a97d9e9]
 [0x7f924a97cb43]
 [0x7f924a97c2d7]
 [0x7f924a9a96d5]
 [0x7f924a284270]
 [0x7f924a286196]
 [0x7f924a10909b]
 [0x7f924a109bed]
 [0x56289e3c72b1]
 [0x56289e3d0030]
 [0x56289e3d2281]
 [0x56289e3d3db0]
 [0x7f92494b6830]
 [0x56289e3c102a]
[end of stack trace]