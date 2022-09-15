// higher-order function to concatenate arrays in an array
let arrays = [[1, 2, 3], [4, 5], [6]];
const flat = arrays.reduce((flat, current) => {
  return flat.concat(current);
}, []);
console.log(flat);

// → [1, 2, 3, 4, 5, 6]
