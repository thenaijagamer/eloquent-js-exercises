// loop version
function every(array, test) {
  for (const arr of array) {
    if (!test(arr)) return false;
  }
  return true;
}

// some array method version
function every(array, test) {
  if (array.some((e) => !test(e))) return false;
  return true;
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
