function findPair(arr) {
  arr
    .sort(function (a, b) {
      return a - b;
    })
    .forEach(function (element, i, arr) {
      if (element === arr[i + 1]) {
        return element;
      }
    });
  return null;
}

window.findPair = findPair;

export default findPair;
