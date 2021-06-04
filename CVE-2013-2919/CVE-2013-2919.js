        // recurse through obj and all its properties, and wrap any non-function value in a function expression (function () { return value; })
        function funcify(obj) {
            var type = typeof obj;
            if (type === "object") {
                var funcified = {}, foo = {}; // note: foo should be extraneous here, but without setting it below, bug doesn't occur
                for (var prop in obj) {
                    funcified[prop] = funcify(obj[prop]);
                    foo[prop] = true; // if this line is removed, bug doesn't occur
                }
                return funcified;
            } else if (type === "function") {
                return obj;
            } else {
                return function () { return obj; };
            }
        }

        var obj = {}; // note: if obj literal is initialized with properties (var obj = {A: 1, ...}, bug doesn't occur. Must start empty then have props added.

        obj.A = 1;
        obj.B = function () { return 2; };
        obj.C = 3;
        obj.D = 4;

        var funcified = funcify(obj);

        console.assert(typeof funcified.A === "function", "A is a function");
        console.assert(funcified.A() === 1, "The value of A() is 1");
        console.assert(typeof funcified.B === "function", "B is a function");
        console.assert(funcified.B() === 2, "The value of B() is 2.  Actual value is: " + funcified.B());
        console.assert(typeof funcified.C === "function", "C is a function. Actual value is: " + funcified.C);
        console.assert(typeof funcified.D === "function", "D is a function");
        console.assert(funcified.D() === 4, "The value of D() is 4");