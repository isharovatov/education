function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}

window.factorial = factorial;

export default factorial;
