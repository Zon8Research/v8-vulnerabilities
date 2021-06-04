function gc() {
    for (let i = 0; i < 20; i++)
        new ArrayBuffer(0x2000000);
}


class Derived extends Array {
    constructor(a) {
        const a = 1;
    }
}

// Derived is not a subclass of RegExp
let o = Reflect.construct(RegExp, [], Derived);
o.lastIndex = 0x1234;

gc();
