function arraysSort(arr) {
  arr.sort(function (a, b) {
    if (Math.max.apply(Math, a) < Math.max.apply(Math, b)) {
      return -1;
    }
  });
  return arr;
}

window.arraysSort = arraysSort;

export default arraysSort;
