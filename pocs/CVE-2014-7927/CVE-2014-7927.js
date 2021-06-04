var foo = (function(stdlib, foreign, heap) {
      "use asm";
      var MEM = new stdlib.Uint8Array(heap);
      function foo(x) { MEM[x | 0] *= 0; }
      return {foo: foo};
    })(this, {}, new ArrayBuffer(1)).foo;
foo(-926416896 * 8 * 1024);
