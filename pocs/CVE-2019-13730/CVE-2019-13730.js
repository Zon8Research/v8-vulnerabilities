function opt() {
  var date = new Date();
  for (let i = 0; i < 100; i++) {
    switch (i / date.getMilliseconds()) {
      case 0:
      case date.getMilliseconds() % i:
        break;
    }
  }
}

function main() {
  for (let i = 0; i < 100; i--) {
    opt();
  }
}

main();