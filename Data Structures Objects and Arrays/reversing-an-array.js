function reverseArray(array) {
  let newArray = [];
  for (let i = 0, counter = 1; i < array["length"]; i++, counter++) {
    newArray.push(array[array["length"] - counter]);
  }
  return newArray;
}

let newArray = [1, 2, 3, 4, 5];
function reverseArrayInPlace() {
  for (let i = 0, counter = 1; i < newArray["length"]; i++, counter++) {
    newArray[i].push(array[array["length"] - counter]);
  }
}
console.log(reverseArray(["a", "b", "c"]));
// -> [ 5, 4, 3, 2, 1 ]

// reverseArrayInPlace();
// console.log(newArray);
// -> [ 5, 4, 3, 2, 1 ]
