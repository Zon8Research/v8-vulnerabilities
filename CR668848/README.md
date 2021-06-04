Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4696891016347648

Fuzzer: inferno_twister
Job Type: mac_asan_content_shell
Platform Id: mac

Crash Type: Use-after-poison READ 4
Crash Address: 0x7e9232a91294
Crash State:
  blink::EventListenerIterator::nextListener
  blink::EventTarget::traceWrappers
  blink::ScriptWrappableVisitor::AdvanceTracing
  
Recommended Security Severity: High

Regressed: https://cluster-fuzz.appspot.com/revisions?job=mac_asan_content_shell&range=434476:434480

Minimized Testcase (0.14 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv969tNjSREvwH9Cbrchsmyhz2sqaHfeqRRnbESukPPf6QP-IF3dj7G2X2VCluQl5hbkDIkzDAyCYnEjNjD3JpZ_V-CiHZkgqB6S-dD6q_fZlvTdf-OOysd7MY-Fw5e8N80MNGoaZYYdGP9b4TCxVQqo5z4nyEA?testcase_id=4696891016347648
<script>
    canvas = new OffscreenCanvas(10, 10);
    canvas.addEventListener("webglcontextlost", function() {
    });
gc()
gc()
</script>


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.