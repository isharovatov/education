function asyncSum(a, b) {
  return new Promise(function (resolve, reject) {
    if ((typeof a !== "number") || (typeof b !== "number"))
      return reject(new Error('reject'));

    return setTimeout(() =>resolve(a+b), 1000);
  });
}

window.asyncSum = asyncSum;

export default asyncSum;
