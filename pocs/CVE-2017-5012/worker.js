importScripts('asmcrypto.js');

sha = new asmCrypto.SHA1();

onmessage = function(e) {
  sha.process(e.data);
}