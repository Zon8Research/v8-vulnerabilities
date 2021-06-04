<b>VULNERABILITY DETAILS</b>
	Steps to reproduce:
	
	1.Open repro UAP_IterateNewSpaceWeakUnmodifiedRoots_Repro.html in Chrome browser ASAN build.
	2. ASAN reports a use-after-poison in v8::internal::GlobalHandles::IterateNewSpaceWeakUnmodifiedRoots():

		==278300==ERROR: AddressSanitizer: use-after-poison on address 0x0dc959a0 at pc 0x82689225 bp 0xdeadbeef sp 0x049fc92c
		WRITE of size 4 at 0x0dc959a0 thread T0

<b>VERSION</b>
	Chrome Version: 54.0.2790.0 (Developer Build) (32-bit)
	https://www.googleapis.com/download/storage/v1/b/chromium-browser-asan/o/win32-release%2Fasan-coverage-win32-release-403906.zip?generation=1467827800967000&alt=media
	
	Operating System: Windows 10

<b>REPRODUCTION CASE</b>
	UAP_IterateNewSpaceWeakUnmodifiedRoots_Repro.html.

<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: tab
Crash State:

=================================================================
==246068==ERROR: AddressSanitizer: use-after-poison on address 0x5857eb90 at pc 0x82689225 bp 0xdeadbeef sp 0x0116cb2c
WRITE of size 4 at 0x5857eb90 thread T0
    #0 0x82689224 in v8::internal::GlobalHandles::IterateNewSpaceWeakUnmodifiedRoots+0x3c4 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x2699224)
    #1 0x8cd88036 in v8::internal::Heap::Scavenge+0x44c6 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xcd98036)
    #2 0x8cd7e9db in v8::internal::Heap::PerformGarbageCollection+0x104b (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xcd8e9db)
    #3 0x8cd7be52 in v8::internal::Heap::CollectGarbage+0x792 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xcd8be52)
    #4 0x8f18923b in v8::internal::ScavengeJob::IdleTask::RunInternal+0x2bb (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xf19923b)
    #5 0x8e280c54 in scheduler::WebSchedulerImpl::runIdleTask+0x104 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe290c54)
    #6 0x8e261cc5 in base::internal::FunctorTraits<void (__cdecl*)(std::unique_ptr<blink::WebThread::IdleTask,std::default_delete<blink::WebThread::IdleTask> >,base::TimeTicks)>::Invoke<std::unique_ptr<blink::WebThread::IdleTask,std::default_delete<blink::WebThread::IdleTask> >,base::TimeTicks>+0xc5 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe271cc5)
    #7 0x8e2619db in base::internal::Invoker<base::internal::BindState<void (__cdecl*)(std::unique_ptr<blink::WebThread::IdleTask,std::default_delete<blink::WebThread::IdleTask> >,base::TimeTicks),base::internal::PassedWrapper<std::unique_ptr<blink::WebThread::IdleTask,std::default_delete<blink::WebThread::IdleTask> > > >,void __cdecl(base::TimeTicks)>::Run+0x14b (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe2719db)
    #8 0x8e283d70 in scheduler::SingleThreadIdleTaskRunner::RunTask+0x430 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe293d70)
    #9 0x8e284ec4 in base::internal::FunctorTraits<void (__thiscall scheduler::SingleThreadIdleTaskRunner::*)(base::Callback<void __cdecl(base::TimeTicks),1>)>::Invoke<base::WeakPtr<scheduler::SingleThreadIdleTaskRunner>,base::Callback<void __cdecl(base::TimeTicks),1> const &>+0x74 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe294ec4)
    #10 0x8e284cd2 in base::internal::Invoker<base::internal::BindState<void (__thiscall scheduler::SingleThreadIdleTaskRunner::*)(base::Callback<void __cdecl(base::TimeTicks),1>),base::WeakPtr<scheduler::SingleThreadIdleTaskRunner>,base::Callback<void __cdecl(base::TimeTicks),1> >,void __cdecl(void)>::RunImpl<void (__thiscall scheduler::SingleThreadIdleTaskRunner::*const &)(base::Callback<void __cdecl(base::TimeTicks),1>),std::tuple<base::WeakPtr<scheduler::SingleThreadIdleTaskRunner>,base::Callback<void __cdecl(base::TimeTicks),1> > const &,0,1>+0x1c2 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe294cd2)
    #11 0x8e284ac0 in base::internal::Invoker<base::internal::BindState<void (__thiscall scheduler::SingleThreadIdleTaskRunner::*)(base::Callback<void __cdecl(base::TimeTicks),1>),base::WeakPtr<scheduler::SingleThreadIdleTaskRunner>,base::Callback<void __cdecl(base::TimeTicks),1> >,void __cdecl(void)>::Run+0x80 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe294ac0)
    #12 0x805e34c1 in base::debug::TaskAnnotator::RunTask+0x3f1 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x5f34c1)
    #13 0x8e2ac183 in scheduler::TaskQueueManager::ProcessTaskFromWorkQueue+0x993 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe2bc183)
    #14 0x8e2a6bdb in scheduler::TaskQueueManager::DoWork+0x54b (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe2b6bdb)
    #15 0x8e2b3962 in base::internal::Invoker<base::internal::BindState<void (__thiscall scheduler::TaskQueueManager::*)(base::TimeTicks,bool),base::WeakPtr<scheduler::TaskQueueManager>,base::TimeTicks,bool>,void __cdecl(void)>::RunImpl<void (__thiscall scheduler::TaskQueueManager::*const &)(base::TimeTicks,bool),std::tuple<base::WeakPtr<scheduler::TaskQueueManager>,base::TimeTicks,bool> const &,0,1,2>+0x222 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe2c3962)
    #16 0x8e2b36f0 in base::internal::Invoker<base::internal::BindState<void (__thiscall scheduler::TaskQueueManager::*)(base::TimeTicks,bool),base::WeakPtr<scheduler::TaskQueueManager>,base::TimeTicks,bool>,void __cdecl(void)>::Run+0x80 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0xe2c36f0)
    #17 0x805e34c1 in base::debug::TaskAnnotator::RunTask+0x3f1 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x5f34c1)
    #18 0x8049f43b in base::MessageLoop::RunTask+0x6eb (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x4af43b)
    #19 0x804a12c5 in base::MessageLoop::DoWork+0x675 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x4b12c5)
    #20 0x805ec1f8 in base::MessagePumpDefault::Run+0x378 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x5fc1f8)
    #21 0x8049e4b5 in base::MessageLoop::RunHandler+0x45 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x4ae4b5)
    #22 0x805ec86f in base::RunLoop::Run+0x1df (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x5fc86f)
    #23 0x874cde47 in content::RendererMain+0x567 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x74dde47)
    #24 0x8035e907 in content::RunNamedProcessTypeMain+0x557 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x36e907)
    #25 0x80360836 in content::ContentMainRunnerImpl::Run+0x2c6 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x370836)
    #26 0x8035da24 in content::ContentMain+0x74 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x36da24)
    #27 0x7fff1130 in ChromeMain+0x130 (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x1130)
    #28 0x124cba5 in MainDllLoader::Launch+0x485 (E:\ChromeBuilds\asan-win32-release-403906\chrome.exe+0xcba5)
    #29 0x1242589 in main+0x1299 (E:\ChromeBuilds\asan-win32-release-403906\chrome.exe+0x2589)
    #30 0x2828a6c in __scrt_common_main_seh f:\dd\vctools\crt\vcstartup\src\startup\exe_common.inl:255
    #31 0x749d38f3 in BaseThreadInitThunk+0x23 (C:\WINDOWS\SYSTEM32\KERNEL32.DLL+0x138f3)
    #32 0x77cb5de2 in RtlUnicodeStringToInteger+0x252 (C:\WINDOWS\SYSTEM32\ntdll.dll+0x65de2)
    #33 0x77cb5dad in RtlUnicodeStringToInteger+0x21d (C:\WINDOWS\SYSTEM32\ntdll.dll+0x65dad)

AddressSanitizer can not describe address in more detail (wild memory access suspected).
SUMMARY: AddressSanitizer: use-after-poison (E:\ChromeBuilds\asan-win32-release-403906\chrome_child.dll+0x2699224) in v8::internal::GlobalHandles::IterateNewSpaceWeakUnmodifiedRoots+0x3c4
Shadow bytes around the buggy address:
  0x3b0afd20: 00 00 00 00 00 00 00 00 00 04 00 00 00 00 00 00
  0x3b0afd30: 00 00 00 00 00 00 00 04 f7 f7 f7 f7 f7 f7 f7 f7
  0x3b0afd40: f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7
  0x3b0afd50: f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7
  0x3b0afd60: f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 f7
=>0x3b0afd70: f7 f7[f7]f7 f7 f7 f7 f7 f7 f7 f7 f7 f7 00 00 00
  0x3b0afd80: 00 00 00 00 00 00 00 04 f7 f7 f7 f7 f7 f7 f7 f7
  0x3b0afd90: f7 00 00 00 00 00 00 00 00 00 00 00 04 00 00 00
  0x3b0afda0: 00 00 00 00 00 00 00 00 00 04 00 00 00 00 00 00
  0x3b0afdb0: 00 00 04 00 00 00 00 00 00 00 00 00 00 04 f7 f7
  0x3b0afdc0: f7 f7 f7 f7 f7 f7 f7 f7 f7 00 00 00 00 00 00 00
Shadow byte legend (one shadow byte represents 8 application bytes):
  Addressable:           00
  Partially addressable: 01 02 03 04 05 06 07 
  Heap left redzone:       fa
  Heap right redzone:      fb
  Freed heap region:       fd
  Stack left redzone:      f1
  Stack mid redzone:       f2
  Stack right redzone:     f3
  Stack partial redzone:   f4
  Stack after return:      f5
  Stack use after scope:   f8
  Global redzone:          f9
  Global init order:       f6
  Poisoned by user:        f7
  Container overflow:      fc
  Array cookie:            ac
  Intra object redzone:    bb
  ASan internal:           fe
  Left alloca redzone:     ca
  Right alloca redzone:    cb
==246068==ABORTING
