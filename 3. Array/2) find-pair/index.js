function findPair(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const j = i + 1;
    if (arr.includes(arr[i], j)) {
      return arr[i];
    }
  }
  return null;
}

window.findPair = findPair;

export default findPair;
