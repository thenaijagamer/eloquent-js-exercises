// function to compare two objects

function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  } else if (
    typeof val1 == "object" &&
    typeof val2 == "object" &&
    val1 != null &&
    val2 != null // ignoring typeof null which is also an object
  ) {
    let obj1 = Object.keys(val1); // object keys which returns an array
    let obj2 = Object.keys(val2);
    let objV1 = Object.values(val1); // object values which returns an array
    let objV2 = Object.values(val2);
    let val = false; //initializing the return value incase length of object are not equal
    if (obj1.length === obj2.length) {
      for (let i = 0; i < obj1.length; i++) {
        val = obj1[i] === obj2[i] && objV1[i] === objV2[i]; // comparing the arrays of values and keys
        if (!val) {
          break; // breaks the loop if it encounters values or keys that are not equal and then return false
        }
      }
    }

    return val;
  } else {
    return false;
  }
}
let a = { v: 1, b: 2 };
let b = { v: 1, b: 2 };
console.log(deepEqual(a, b));
