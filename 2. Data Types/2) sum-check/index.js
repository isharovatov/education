function sumCheck(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new SyntaxError("Wrong arguments type!");
  } else return a + b;
}

window.sumCheck = sumCheck;

export default sumCheck;
