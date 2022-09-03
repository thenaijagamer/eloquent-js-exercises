function reverseArray(array) {
  let newArray = [];
  for (let i = 0, counter = 1; i < array["length"]; i++, counter++) {
    newArray.push(array[array["length"] - counter]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  let newArray = [];
  for (let i = 0, counter = 1; i < array["length"]; i++, counter++) {
    newArray.push(array[array["length"] - counter]);
  }
  return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
// -> [ 5, 4, 3, 2, 1 ]

console.log(reverseArrayInPlace(reverseArray([1, 2, 3, 4, 5])));
// -> [ 1, 2, 3, 4, 5 ]
