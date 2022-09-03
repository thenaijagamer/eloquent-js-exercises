function arrayToList(arr) {
  let list = null;
  for (let i = 0, counter = 1; i < arr.length; i++) {
    list = { value: arr[arr.length - counter], rest: list };
    counter++;
  }
  return list;
}

// console.log(listToArray(arrayToList([1, 2, 3, 4, 5, 5])));

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
// console.log(prepend(5, arrayToList([3, 4])));

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
console.log(nthRecursion(arrayToList([1, 2]), 1));

// Recursive solution for nth function
function nthRecursion(list, num) {
  let element;
  let arr = listToArray(list);
  if (num >= 0 && num < arr["length"]) {
    element = arr[num];
    return element;
  } else if (num >= arr.length) {
    return element;
  } else {
    return nthRecursion(list, num + 1);
  }
}
