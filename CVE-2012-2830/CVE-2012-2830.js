var arrays = ['Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array']
var some=arrays[Math.floor(Math.random()*arrays.length)]
window[some].prototype.set = 0x3ffff
new window[some]([0], function() {})