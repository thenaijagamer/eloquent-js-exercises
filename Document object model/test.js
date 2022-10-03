let arrayish = { 0: "one", 1: "two", 2: "2", length: 3 };
let array = Array.from(arrayish);
console.log(array.map((s) => s.toUpperCase()));
