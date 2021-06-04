Chrome Version: 28.0.1500.5 dev-m
Operating System: Windows 7

(8b4.f90): Access violation - code c0000005 (!!! second chance !!!)
eax=00000000 ebx=00000018 ecx=2eeffff8 edx=2e67422c esi=00259008 edi=00000017
eip=71631f76 esp=005aeca8 ebp=005aecac iopl=0         nv up ei pl zr na pe nc
cs=0023  ss=002b  ds=002b  es=002b  fs=0053  gs=002b             efl=00010246
chrome_70ee0000!v8::internal::Heap::ShouldBePromoted+0x11:
71631f76 8b500c          mov     edx,dword ptr [eax+0Ch] ds:002b:0000000c=????????
3:057> .exr -1
ExceptionAddress: 71631f76 (chrome_70ee0000!v8::internal::Heap::ShouldBePromoted+0x00000011)
   ExceptionCode: c0000005 (Access violation)
  ExceptionFlags: 00000000
NumberParameters: 2
   Parameter[0]: 00000000
   Parameter[1]: 0000000c
Attempt to read from address 0000000c
3:057> kp
ChildEBP RetAddr  
005aecac 71640fb7 chrome_70ee0000!v8::internal::Heap::ShouldBePromoted(unsigned char * old_address = 0x00000000 "", int object_size = 32)+0x11 [c:\b\build\slave\win\build\src\v8\src\heap-inl.h @ 372]
005aecd0 71643151 chrome_70ee0000!v8::internal::ScavengingVisitor<0,0>::EvacuateObject<1,0,4>(class v8::internal::Map * map = 0x2e67422c, class v8::internal::HeapObject ** slot = 0x2edfa0f1, class v8::internal::HeapObject * object = 0x00000018, int object_size = 32)+0x2a [c:\b\build\slave\win\build\src\v8\src\heap.cc @ 1914]
005aece8 70fa95bc chrome_70ee0000!v8::internal::ScavengingVisitor<0,0>::ObjectEvacuationStrategy<1>::VisitSpecialized<32>(class v8::internal::Map * map = 0x2e67422c, class v8::internal::HeapObject ** slot = 0x2edfa0f1, class v8::internal::HeapObject * object = 0x00000018)+0x16 [c:\b\build\slave\win\build\src\v8\src\heap.cc @ 2101]
005aed20 71665990 chrome_70ee0000!v8::internal::IncrementalMarking::Step(int allocated_bytes = 65544, v8::internal::IncrementalMarking::CompletionAction action = GC_VIA_STACK_GUARD (0))+0x1c0 [c:\b\build\slave\win\build\src\v8\src\incremental-marking.cc @ 908]
005aed44 7111c83c chrome_70ee0000!v8::internal::NewSpace::SlowAllocateRaw(int size_in_bytes = 24)+0x5d [c:\b\build\slave\win\build\src\v8\src\spaces.cc @ 1391]
005aed54 711aa08c chrome_70ee0000!v8::internal::Heap::AllocateRaw(int size_in_bytes = 787480568, v8::internal::AllocationSpace space = NEW_SPACE (0), v8::internal::AllocationSpace retry_space = OLD_DATA_SPACE (2))+0x28 [c:\b\build\slave\win\build\src\v8\src\heap-inl.h @ 231]
005aed60 7128b31f chrome_70ee0000!v8::internal::Heap::AllocateRawOneByteString(int length = 12, v8::internal::PretenureFlag pretenure = NOT_TENURED (0))+0x52 [c:\b\build\slave\win\build\src\v8\src\heap.cc @ 5127]
005aed78 7128b271 chrome_70ee0000!v8::internal::ConvertCase<v8::internal::`anonymous namespace'::ToLowerTraits>(class v8::internal::Arguments args = class v8::internal::Arguments, class v8::internal::Isolate * isolate = 0x00259000, class unibrow::Mapping<unibrow::ToLowercase,128> * mapping = 0x0025ad9c)+0xa7 [c:\b\build\slave\win\build\src\v8\src\runtime.cc @ 5837]
005aed8c 005aedac chrome_70ee0000!v8::internal::Runtime_StringToLowerCase(int args_length = 1, class v8::internal::Object ** args_object = 0x005aedb4, class v8::internal::Isolate * isolate = 0x00259000)+0x1e [c:\b\build\slave\win\build\src\v8\src\runtime.cc @ 5870]
WARNING: Frame IP not in any known module. Following frames may be wrong.
005aedb4 25046085 0x5aedac
005aedb8 250402f1 0x25046085
005aedbc 005aedf8 0x250402f1
005aedc0 242ab87c 0x5aedf8
005aedf8 242acf7b 0x242ab87c
005aee18 242acce5 0x242acf7b
005aee30 242abe23 0x242acce5
005aee54 242abc2a 0x242abe23
005aee70 242aba6d 0x242abc2a
005aee88 242aadc9 0x242aba6d
005aeea8 34740c77 0x242aadc9




(e20.1394): Access violation - code c0000005 (first chance)
First chance exceptions are reported before any exception handling.
This exception may be expected and handled.
eax=186b18fb ebx=d0d3f418 ecx=d0d3f418 edx=186b18fc esi=186b18fc edi=0049a600
eip=7117a22e esp=0029f734 ebp=0029f760 iopl=0         nv up ei ng nz ac po nc
cs=0023  ss=002b  ds=002b  es=002b  fs=0053  gs=002b             efl=00010292
DBGHELP: chrome_70ee0000 - private symbols & lines 
         e:\symbols\chrome\chrome.dll.pdb\766DFA8187EE47248E1DCB6B5DE5D2941\chrome.dll.pdb
chrome_70ee0000!v8::internal::HeapObject::SizeFromMap:
7117a22e 0fb64103        movzx   eax,byte ptr [ecx+3]       ds:002b:d0d3f41b=??
3:056> g
ModLoad: 75290000 75310000   C:\Windows\SysWOW64\uxtheme.dll
(e20.1394): Access violation - code c0000005 (!!! second chance !!!)
eax=186b18fb ebx=d0d3f418 ecx=d0d3f418 edx=186b18fc esi=186b18fc edi=0049a600
eip=7117a22e esp=0029f734 ebp=0029f760 iopl=0         nv up ei ng nz ac po nc
cs=0023  ss=002b  ds=002b  es=002b  fs=0053  gs=002b             efl=00010292
chrome_70ee0000!v8::internal::HeapObject::SizeFromMap:
7117a22e 0fb64103        movzx   eax,byte ptr [ecx+3]       ds:002b:d0d3f41b=??
3:056> g
(e20.1394): Access violation - code c0000005 (first chance)
First chance exceptions are reported before any exception handling.
This exception may be expected and handled.
eax=186b18fb ebx=d0d3f418 ecx=d0d3f418 edx=186b18fc esi=186b18fc edi=0049a600
eip=7117a22e esp=0029f734 ebp=0029f760 iopl=0         nv up ei ng nz ac po nc
cs=0023  ss=002b  ds=002b  es=002b  fs=0053  gs=002b             efl=00010292
chrome_70ee0000!v8::internal::HeapObject::SizeFromMap:
7117a22e 0fb64103        movzx   eax,byte ptr [ecx+3]       ds:002b:d0d3f41b=??
3:056> g
(e20.1394): Access violation - code c0000005 (!!! second chance !!!)
eax=186b18fb ebx=d0d3f418 ecx=d0d3f418 edx=186b18fc esi=186b18fc edi=0049a600
eip=7117a22e esp=0029f734 ebp=0029f760 iopl=0         nv up ei ng nz ac po nc
cs=0023  ss=002b  ds=002b  es=002b  fs=0053  gs=002b             efl=00010292
chrome_70ee0000!v8::internal::HeapObject::SizeFromMap:
7117a22e 0fb64103        movzx   eax,byte ptr [ecx+3]       ds:002b:d0d3f41b=??
3:056> g
(e20.1394): Access violation - code c0000005 (first chance)
First chance exceptions are reported before any exception handling.
This exception may be expected and handled.
eax=186b18fb ebx=d0d3f418 ecx=d0d3f418 edx=186b18fc esi=186b18fc edi=0049a600
eip=7117a22e esp=0029f734 ebp=0029f760 iopl=0         nv up ei ng nz ac po nc
cs=0023  ss=002b  ds=002b  es=002b  fs=0053  gs=002b             efl=00010292
chrome_70ee0000!v8::internal::HeapObject::SizeFromMap:
7117a22e 0fb64103        movzx   eax,byte ptr [ecx+3]       ds:002b:d0d3f41b=??
3:056> .exr -1
ExceptionAddress: 7117a22e (chrome_70ee0000!v8::internal::HeapObject::SizeFromMap)
   ExceptionCode: c0000005 (Access violation)
  ExceptionFlags: 00000000
NumberParameters: 2
   Parameter[0]: 00000000
   Parameter[1]: d0d3f41b
Attempt to read from address d0d3f41b
3:056> kp
ChildEBP RetAddr  
0029f730 70fa954c chrome_70ee0000!v8::internal::HeapObject::SizeFromMap(class v8::internal::Map * map = 0xd0d3f418) [c:\b\build\slave\win\build\src\v8\src\objects-inl.h @ 3369]
0029f760 716382dc chrome_70ee0000!v8::internal::IncrementalMarking::Step(int allocated_bytes = 16384000, v8::internal::IncrementalMarking::CompletionAction action = NO_GC_VIA_STACK_GUARD (1))+0x150 [c:\b\build\slave\win\build\src\v8\src\incremental-marking.cc @ 908]
0029f778 71638559 chrome_70ee0000!v8::internal::Heap::AdvanceIdleIncrementalMarking(int step_size = 409671931)+0x13 [c:\b\build\slave\win\build\src\v8\src\heap.cc @ 5698]
0029f790 716436d9 chrome_70ee0000!v8::internal::Heap::IdleNotification(int hint = 1000)+0x216 [c:\b\build\slave\win\build\src\v8\src\heap.cc @ 5809]
0029f7a0 7160e66d chrome_70ee0000!v8::internal::V8::IdleNotification(int hint = 409671932)+0x2a [c:\b\build\slave\win\build\src\v8\src\v8.cc @ 195]
0029f7ac 7264843b chrome_70ee0000!v8::V8::IdleNotification(int hint = 1000)+0x3c [c:\b\build\slave\win\build\src\v8\src\api.cc @ 4928]
0029f7d4 70f450e8 chrome_70ee0000!content::RenderThreadImpl::IdleHandler(void)+0x45 [c:\b\build\slave\win\build\src\content\renderer\render_thread_impl.cc @ 872]
0029f7f4 70f45051 chrome_70ee0000!base::Timer::RunScheduledTask(void)+0x95 [c:\b\build\slave\win\build\src\base\timer.cc @ 181]
0029f7fc 70f17dbf chrome_70ee0000!base::BaseTimerTaskInternal::Run(void)+0x1b [c:\b\build\slave\win\build\src\base\timer.cc @ 47]
0029f890 70f1864b chrome_70ee0000!base::MessageLoop::RunTask(struct base::PendingTask * pending_task = 0x0029f8c0)+0x34e [c:\b\build\slave\win\build\src\base\message_loop.cc @ 486]
0029f8f4 70eeab02 chrome_70ee0000!base::MessageLoop::DoDelayedWork(class base::TimeTicks * next_delayed_work_time = 0x0048b8d0)+0xcb [c:\b\build\slave\win\build\src\base\message_loop.cc @ 726]
0029f8fc 70f17ef8 chrome_70ee0000!`anonymous namespace'::RolloverProtectedNow(void)+0x5e [c:\b\build\slave\win\build\src\base\time_win.cc @ 322]
0029f92c 70f16786 chrome_70ee0000!base::MessagePumpDefault::Run(class base::MessagePump::Delegate * delegate = 0x0029fbb8)+0x3d [c:\b\build\slave\win\build\src\base\message_pump_default.cc @ 33]
0029f950 70f166de chrome_70ee0000!base::MessageLoop::RunInternal(void)+0x72 [c:\b\build\slave\win\build\src\base\message_loop.cc @ 442]
0029f960 70f5004f chrome_70ee0000!base::RunLoop::Run(void)+0x59 [c:\b\build\slave\win\build\src\base\run_loop.cc @ 46]
0029f988 70f701b6 chrome_70ee0000!base::MessageLoop::Run(void)+0x34 [c:\b\build\slave\win\build\src\base\message_loop.cc @ 322]
0029fd34 70efb315 chrome_70ee0000!content::RendererMain(struct content::MainFunctionParams * parameters = 0x0029fd68)+0x375 [c:\b\build\slave\win\build\src\content\renderer\renderer_main.cc @ 236]
0029fd48 70efb29c chrome_70ee0000!content::RunNamedProcessTypeMain(class std::basic_string<char,std::char_traits<char>,std::allocator<char> > * process_type = 0x0029fd78, struct content::MainFunctionParams * main_function_params = 0x0029fd68, class content::ContentMainDelegate * delegate = 0x0029fddc)+0x58 [c:\b\build\slave\win\build\src\content\app\content_main_runner.cc @ 431]
0029fdb4 70eeabe1 chrome_70ee0000!content::ContentMainRunnerImpl::Run(void)+0x85 [c:\b\build\slave\win\build\src\content\app\content_main_runner.cc @ 754]
0029fdc4 70eea8d3 chrome_70ee0000!content::ContentMain(struct HINSTANCE__ * instance = 0x003a0000, struct sandbox::SandboxInterfaceInfo * sandbox_info = 0x0029fe8c, class content::ContentMainDelegate * delegate = 0x0029fddc)+0x29 [c:\b\build\slave\win\build\src\content\app\content_main.cc @ 35]











First chance exceptions are reported before any exception handling.
This exception may be expected and handled.
eax=2eec5418 ebx=2eec5418 ecx=2ee00000 edx=02429008 esi=00fa0000 edi=0242a600
eip=7163eba5 esp=0039f394 ebp=0039f398 iopl=0         nv up ei pl nz na pe nc
cs=0023  ss=002b  ds=002b  es=002b  fs=0053  gs=002b             efl=00010206
DBGHELP: chrome_70ee0000 - private symbols & lines 
         e:\symbols\chrome\chrome.dll.pdb\766DFA8187EE47248E1DCB6B5DE5D2941\chrome.dll.pdb
chrome_70ee0000!v8::internal::ScavengingVisitor<1,1>::EvacuateShortcutCandidate+0x15:
7163eba5 8b4e0f          mov     ecx,dword ptr [esi+0Fh] ds:002b:00fa000f=????????
3:036> .exr -1
ExceptionAddress: 7163eba5 (chrome_70ee0000!v8::internal::ScavengingVisitor<1,1>::EvacuateShortcutCandidate+0x00000015)
   ExceptionCode: c0000005 (Access violation)
  ExceptionFlags: 00000000
NumberParameters: 2
   Parameter[0]: 00000000
   Parameter[1]: 00fa000f
Attempt to read from address 00fa000f
3:036> kp
ChildEBP RetAddr  
0039f398 70fa95bc chrome_70ee0000!v8::internal::ScavengingVisitor<1,1>::EvacuateShortcutCandidate(class v8::internal::Map * map = 0x2eec5418, class v8::internal::HeapObject ** slot = 0x20fcad55, class v8::internal::HeapObject * object = 0x00fa0000)+0x15 [c:\b\build\slave\win\build\src\v8\src\heap.cc @ 2063]
0039f3d0 716382dc chrome_70ee0000!v8::internal::IncrementalMarking::Step(int allocated_bytes = 16384000, v8::internal::IncrementalMarking::CompletionAction action = NO_GC_VIA_STACK_GUARD (1))+0x1c0 [c:\b\build\slave\win\build\src\v8\src\incremental-marking.cc @ 908]
0039f3e8 71638559 chrome_70ee0000!v8::internal::Heap::AdvanceIdleIncrementalMarking(int step_size = 787239960)+0x13 [c:\b\build\slave\win\build\src\v8\src\heap.cc @ 5698]
0039f400 716436d9 chrome_70ee0000!v8::internal::Heap::IdleNotification(int hint = 1000)+0x216 [c:\b\build\slave\win\build\src\v8\src\heap.cc @ 5809]
0039f410 7160e66d chrome_70ee0000!v8::internal::V8::IdleNotification(int hint = 37916680)+0x2a [c:\b\build\slave\win\build\src\v8\src\v8.cc @ 195]
0039f41c 7264843b chrome_70ee0000!v8::V8::IdleNotification(int hint = 1000)+0x3c [c:\b\build\slave\win\build\src\v8\src\api.cc @ 4928]
0039f444 70f450e8 chrome_70ee0000!content::RenderThreadImpl::IdleHandler(void)+0x45 [c:\b\build\slave\win\build\src\content\renderer\render_thread_impl.cc @ 872]
0039f464 70f45051 chrome_70ee0000!base::Timer::RunScheduledTask(void)+0x95 [c:\b\build\slave\win\build\src\base\timer.cc @ 181]
0039f46c 70f17dbf chrome_70ee0000!base::BaseTimerTaskInternal::Run(void)+0x1b [c:\b\build\slave\win\build\src\base\timer.cc @ 47]
0039f500 70f1864b chrome_70ee0000!base::MessageLoop::RunTask(struct base::PendingTask * pending_task = 0x0039f530)+0x34e [c:\b\build\slave\win\build\src\base\message_loop.cc @ 486]
0039f564 70eeab02 chrome_70ee0000!base::MessageLoop::DoDelayedWork(class base::TimeTicks * next_delayed_work_time = 0x0241b8d0)+0xcb [c:\b\build\slave\win\build\src\base\message_loop.cc @ 726]
0039f56c 70f17ef8 chrome_70ee0000!`anonymous namespace'::RolloverProtectedNow(void)+0x5e [c:\b\build\slave\win\build\src\base\time_win.cc @ 322]
0039f59c 70f16786 chrome_70ee0000!base::MessagePumpDefault::Run(class base::MessagePump::Delegate * delegate = 0x0039f82c)+0x3d [c:\b\build\slave\win\build\src\base\message_pump_default.cc @ 33]
0039f5c0 70f166de chrome_70ee0000!base::MessageLoop::RunInternal(void)+0x72 [c:\b\build\slave\win\build\src\base\message_loop.cc @ 442]
0039f5d4 70f5004f chrome_70ee0000!base::RunLoop::Run(void)+0x59 [c:\b\build\slave\win\build\src\base\run_loop.cc @ 46]
0039f5fc 70f701b6 chrome_70ee0000!base::MessageLoop::Run(void)+0x34 [c:\b\build\slave\win\build\src\base\message_loop.cc @ 322]
0039f9a8 70efb315 chrome_70ee0000!content::RendererMain(struct content::MainFunctionParams * parameters = 0x0039f9dc)+0x375 [c:\b\build\slave\win\build\src\content\renderer\renderer_main.cc @ 236]
0039f9bc 70efb29c chrome_70ee0000!content::RunNamedProcessTypeMain(class std::basic_string<char,std::char_traits<char>,std::allocator<char> > * process_type = 0x0039f9ec, struct content::MainFunctionParams * main_function_params = 0x0039f9dc, class content::ContentMainDelegate * delegate = 0x0039fa50)+0x58 [c:\b\build\slave\win\build\src\content\app\content_main_runner.cc @ 431]
0039fa28 70eeabe1 chrome_70ee0000!content::ContentMainRunnerImpl::Run(void)+0x85 [c:\b\build\slave\win\build\src\content\app\content_main_runner.cc @ 754]
0039fa38 70eea8d3 chrome_70ee0000!content::ContentMain(struct HINSTANCE__ * instance = 0x003a0000, struct sandbox::SandboxInterfaceInfo * sandbox_info = 0x0039fb00, class content::ContentMainDelegate * delegate = 0x0039fa50)+0x29 [c:\b\build\slave\win\build\src\content\app\content_main.cc @ 35]


