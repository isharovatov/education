function asyncSum(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a !== "number" || typeof b !== "number") return reject(new Error("reject"));
    setTimeout(() => resolve(console.log(a + b)), 1000);
  });
}

window.asyncSum = asyncSum;

export default asyncSum;
