const f = eval(`(function f(i) {
    if (i == 0) {
        class Derived extends Object {
            constructor() {
                super();
                ${"this.a=1;".repeat(0x3fffe-8)}
            }
        }

        return Derived;
    }

    class DerivedN extends f(i-1) {
        constructor() {
            super();
            ${"this.a=1;".repeat(0x40000-8)}
        }
    }

    return DerivedN;
})`);

let a = new (f(0x7ff))();
console.log(a);
