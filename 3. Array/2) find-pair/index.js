function findPair(arr) {
  let pair = null;
  arr.sort(function (a, b) {
    if (a === b) {
      pair = a;
    }
    return a - b;
  });

  return pair;
}

window.findPair = findPair;

export default findPair;
