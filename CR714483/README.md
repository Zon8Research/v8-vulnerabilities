Chrome Version: 60.0.3079.0 (Developer Build) (64-bit) with dcheck_always_on=1
OS: Linux

<b>What steps will reproduce the problem?</b>
<b>(1)</b> inbox.google.com
<b>(2)</b>
<b>(3)</b>

<b>What is the expected result?</b>
<b>What happens instead?</b>

#
# Fatal error in ../../v8/src/compiler/schedule.cc, line 254
# Check failed: BasicBlock::kNone == block->control() (none vs. throw).
#
#0 0x7ffff7a46ba7 base::debug::StackTrace::StackTrace()
#1 0x7ffff2b5bed5 gin::(anonymous namespace)::PrintStackTrace()
#2 0x7fffe877930d V8_Fatal
#3 0x7ffff21f7676 v8::internal::compiler::Schedule::AddBranch()
#4 0x7ffff21fc982 v8::internal::compiler::CFGBuilder::ConnectBranch()
#5 0x7ffff21fae4b v8::internal::compiler::CFGBuilder::Run()
#6 0x7ffff21f96b8 v8::internal::compiler::Scheduler::BuildCFG()
#7 0x7ffff21f93e1 v8::internal::compiler::Scheduler::ComputeSchedule()
#8 0x7ffff21da1d3 v8::internal::compiler::EffectControlLinearizationPhase::Run()

#9 0x7ffff21d25e4 v8::internal::compiler::PipelineImpl::OptimizeGraph()
#10 0x7ffff21d22c4 v8::internal::compiler::PipelineCompilationJob::ExecuteJobImp
l()
#11 0x7ffff20bb0ce v8::internal::CompilationJob::ExecuteJob()
#12 0x7ffff20b9a18 v8::internal::OptimizingCompileDispatcher::CompileNext()
#13 0x7ffff20baa68 v8::internal::OptimizingCompileDispatcher::CompileTask::Run()

#14 0x7ffff7a47691 _ZNO4base8CallbackIFvvELNS_8internal8CopyModeE0ELNS2_10Repeat
ModeE0EE3RunEv
#15 0x7ffff7aee957 base::(anonymous namespace)::WorkerThread::ThreadMain()
#16 0x7ffff7ae1a6c base::(anonymous namespace)::ThreadFunc()
#17 0x7ffff7bc4184 start_thread
#18 0x7fffec0cdbed clone
Received signal 4 ILL_ILLOPN 7fffe877b77f
Received signal 11 SEGV_MAPERR 003000000020


<b>Please use labels and text to provide additional information.</b>


<b>For graphics-related bugs, please copy/paste the contents of the about:gpu</b>
<b>page at the end of this report.</b>
