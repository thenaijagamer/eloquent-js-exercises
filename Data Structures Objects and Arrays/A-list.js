// Converting array to linked list
function arrayToList(arr) {
  let list = null; // last list is going to be pointing to null
  for (let i = arr.length - 1; i >= 0; i--) {
    // Adding list in form of stack by revesing array
    list = { value: arr[i], rest: list };
  }
  return list;
}

//Converting linked list to array
function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    //looping over the list
    arr.push(node.value);
  }
  return arr;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

// looping solution for nth function
function nthLoop(list, num) {
  let element;
  let arr = listToArray(list); // converting to array first
  for (let i = 0; i < arr.length; i++) {
    if (num === i) {
      element = arr[i];
      break;
    }
  }
  return element;
}

// Recursive solution for nth function
function nth(list, num) {
  if (!list) return undefined; // or if list equals to null
  else if (num == 0) return list.value;
  else return nth(list.rest, num - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
