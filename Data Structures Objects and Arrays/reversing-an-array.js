function reverseArray(array) {
  let newArray = [];
  let counter = 1;
  for (let i = 0; i < array["length"]; i++) {
    newArray.push(array[array["length"] - counter]);
    counter++;
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  let newArray = [];
  let counter = 1;
  for (let i = 0; i < array["length"]; i++) {
    newArray.push(array[array["length"] - counter]);
    counter++;
  }
  return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
// -> [ 5, 4, 3, 2, 1 ]

console.log(reverseArrayInPlace(reverseArray([1, 2, 3, 4, 5])));
// -> [ 1, 2, 3, 4, 5 ]
