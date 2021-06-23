function isEqual(a, b) {
  let FristArrayKeys = [];
  let SecondArrayKeys = [];

  let FristArrayValues = [];
  let SecondArrayValues = [];

  try {
    FristArrayKeys = Object.keys(a);
    SecondArrayKeys = Object.keys(b);

    FristArrayValues = Object.values(a);
    SecondArrayValues = Object.values(b);
  } catch {
    return false;
  }

  if (FristArrayKeys.length !== SecondArrayKeys.length) {
    return false;
  }
  for (let i = 0; i <= FristArrayKeys.length - 1; i++) {
    
    if (!SecondArrayKeys.includes(FristArrayKeys[i])) {
      return false;
    }
    const j = SecondArrayKeys.indexOf(FristArrayKeys[i]);

    if (FristArrayValues[i] !== SecondArrayValues[j]) {
      return false;
    }
  }
  return true;
}

window.isEqual = isEqual;

export default isEqual;
