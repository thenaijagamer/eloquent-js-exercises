let arrays = [[1, 2, 3], [4, 5], [6]];
const flat = arrays.reduce((a, b) => {
  return a.concat(b);
});
console.log(flat);
// → [1, 2, 3, 4, 5, 6]
