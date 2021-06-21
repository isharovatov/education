function factorial(n) {
  let count = 1;
  for (let i=1; i<=n; i++){
    count *= i;
  }
  return count;
}

window.factorial = factorial;

export default factorial;
