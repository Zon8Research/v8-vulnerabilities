This is working in the latest version with ASan.
I'm using the pre-built ASan binary from 
       https://commondatastorage.googleapis.com/chromium-browser-asan/index.html
And ASan stacktrace comes from this version  
       asan-win32-release-482506
Linux version should has the same issue.

<b>VULNERABILITY DETAILS</b>
The issue is quite simple so I didn't translate the stacktrace to source file.
The issue is in function DecodeCodeSection() of module-decoder.cc,

      uint32_t size = consume_u32v("body size");
      function->code_start_offset = pc_offset();
      function->code_end_offset = pc_offset() + size;
      if (verify_functions) {
        ModuleBytesEnv module_env(module_.get(), nullptr,
                                  ModuleWireBytes(start_, end_));
        VerifyFunctionBody(module_->signature_zone->allocator(),
                           i + module_->num_imported_functions, &module_env,
                           function);
      }

Where size comes from user input without sanity check.
So the following VerifyFunctionBody will surely run out of the buffer boundary.

<b>VERSION</b>
Chrome Version: [61.0.3142.0] + [dev]
Operating System: [Windows 7, Service Pack 7]

<b>REPRODUCTION CASE</b>
Open the attach test.html with ASan enabled.

<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: [tab]
Crash State: [see link above: stacktrace.txt]

