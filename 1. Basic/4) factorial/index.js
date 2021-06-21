let count = 1;
function factorial(n) {
  if (n == 1) {
    return count;
  } else {
    count *= n;
    return factorial(n - 1);
  }
}

window.factorial = factorial;

export default factorial;
