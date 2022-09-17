let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
// console.log(map.hasOwnProperty("one"));

// Answer
console.log(Object.prototype.hasOwnProperty.call(map, "one"));

// → true
