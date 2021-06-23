function isEqual(a, b) {
  let FristArrayKey = [];
  let SecondArrayKey = [];

  let FristArrayValues = [];
  let SecondArrayValues = [];

  try {
    FristArrayKey = Object.keys(a);
    SecondArrayKey = Object.keys(b);

    FristArrayValues = Object.values(a);
    SecondArrayValues = Object.values(b);
  } catch {
    return false;
  }

  if (FristArrayKey.length !== SecondArrayKey.length) {
    return false;
  }
  for (let i = 0; i <= FristArrayKey.length - 1; i++) {
    if (!SecondArrayKey.includes(FristArrayKey[i])) {
      return false;
    }
    let j = SecondArrayKey.indexOf(FristArrayKey[i]);

    if (FristArrayValues[i] !== SecondArrayValues[j]) {
      return false;
    }
  }
  return true;
}

window.isEqual = isEqual;

export default isEqual;
