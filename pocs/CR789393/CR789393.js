function gc() {
    for (let i = 0; i < 20; i++)
        new ArrayBuffer(0x1000000);
}

function trigger() {
    function* generator() {
    }

    for (let i = 0; i < 1022; i++) {
        generator.prototype['b' + i];
        generator.prototype['b' + i] = 0x1234;
    }

    gc();

    for (let i = 0; i < 1022; i++) {
        generator.prototype['b' + i] = 0x1234;
    }
}

trigger();
