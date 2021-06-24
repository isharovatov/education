function arraysSort(arr) {
  arr.sort(function (a, b) {
    if (Math.max(...a) < Math.max(...b)) {
      return -1;
    }
  });
  return arr;
}

window.arraysSort = arraysSort;

export default arraysSort;
