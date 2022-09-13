function reverseArray(array) {
  let newArray = [];
  for (let i = array["length"] - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

let array = [1, 2, 3, 4, 5, "b", "c", 4];
function reverseArrayInPlace() {
  let newArray = [];
  for (let i = array["length"] - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  array = newArray;
}
console.log(reverseArray(["a", "b", "c"]));
// -> ["c", "b", "a"]

reverseArrayInPlace();
console.log(array);
// -> [4, "c", "b", 5, 4, 3, 2, 1];
