function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

// console.log(listToArray(arrayToList([1, 2, 3, 4, 5])));

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(element, list) {
  list = { value: element, rest: list };
  return list;
}
console.log(prepend(20, prepend(10, prepend(20, null))));

function nth(list, num) {
  let element;
  let arr = listToArray(list);
  for (let i = 0; i < arr.length; i++) {
    if (num === i) {
      element = arr[i];
      break;
    }
  }
  return element;
}

// Recursive solution for nth function
