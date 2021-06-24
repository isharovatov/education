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

  let non = 0;
  if (
    !FristArrayKeys.some((r) => {
      if (SecondArrayKeys.indexOf(r) >= 0) {
        console.log("yes1");
        const i = FristArrayKeys.indexOf(r);
        const j = SecondArrayKeys.indexOf(r);
        if (FristArrayValues[i] !== SecondArrayValues[j]) {
          non = 5;
        }
      } else {
        console.log("no1");
        non = 5;
      }
    }
    )
  ) 
  {
    console.log("yes2");
  } else {
    console.log("no2");
  }
  console.log(non);
  if (non === 5) {
    return false;
  }

  return true;
}

window.isEqual = isEqual;

export default isEqual;
