// Program to find th factorial of a number

// Using recursion
function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Using loop
function factorial(n) {
  let total = 1;
  for (n; n >= 0; n--) {
    if (n == 0) {
      total *= 1;
    } else {
      total *= n;
    }
  }
  return total;
}

console.log(factorial(4));
