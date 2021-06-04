Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6661115622981632

Fuzzer: libfuzzer_v8_script_parser_fuzzer
Job Type: libfuzzer_chrome_ubsan
Platform Id: linux

Crash Type: Fatal error
Crash Address: 
Crash State:
  v8::Isolate::Dispose
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=libfuzzer_chrome_ubsan&range=399229:399350

Minimized Testcase (0.63 Kb): https://cluster-fuzz.appspot.com/download/AMIfv96jwb0p8vDGjghBfOd-dwDk0VHIq_vuaXnj1wtvXMHmrTzbGpsjO1YwMiW-AkwZWa_CIy0mzIMqYnDrmmzi_yObkCZfoB5tp-7Wbw1nvAEpJYcyfWDvkRyXi-J-BRyudpwk9cpvud8DcUGkhmxHZfUQ3WYrLg

Filer: mmoroz

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for more information.