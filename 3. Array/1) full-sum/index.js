function fullSum(...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      throw "Wrong arguments type!";
    } else count += args[i];
  }
  return count;
}

window.fullSum = fullSum;

export default fullSum;
