function opt() {
  var arr = [0, 0, 0];
  var j = 11;
  for (let i = 0; i < 100; i++) {
    if (i == 90) {
      i = j.toPrecision().trimLeft();
      ++arr[i];
      arr[Math.atan(i)] = 1;
    }
  }
}

function main() {
  for (let i = 0; i < 100; i++) {
    opt();
  }
}

main();