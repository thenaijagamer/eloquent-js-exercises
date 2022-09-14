// function to compare two objects

function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  }
  if (
    typeof val1 != "object" ||
    typeof val2 != "object" ||
    val1 == null ||
    val2 == null // ignoring typeof null which is also an object
  )
    return false;

  let obj1 = Object.keys(val1);
  let obj2 = Object.keys(val2);

  if (obj1.length != obj2.length) return false;

  for (let obj of obj1) {
    if (!obj2.includes(obj) || !deepEqual(val1[obj], val2[obj])) {
      return false;
    }
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
