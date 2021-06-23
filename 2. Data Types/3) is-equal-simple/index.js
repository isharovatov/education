function isEqual(a, b) {
  console.log(null === {});
  let FristMassivKey = [];
  let SecondMassivKey = [];

  let FristMassivValues = [];
  let SecondMassivValues = [];

  try {
    FristMassivKey = Object.keys(a);
    SecondMassivKey = Object.keys(b);

    FristMassivValues = Object.values(a);
    SecondMassivValues = Object.values(b);
  } catch {
    return false;
  }

  if (FristMassivKey.length !== SecondMassivKey.length) {
    return false;
  }
  for (let i = 0; i <= FristMassivKey.length - 1; i++) {
    if (!SecondMassivKey.includes(FristMassivKey[i])) {
      return false;
    }
  }
  for (let i = 0; i <= FristMassivKey.length - 1; i++) {
    let j = SecondMassivKey.indexOf(FristMassivKey[i]);

    if (FristMassivValues[i] !== SecondMassivValues[j]) {
      return false;
    }
  }
  return true;
}

window.isEqual = isEqual;

export default isEqual;
