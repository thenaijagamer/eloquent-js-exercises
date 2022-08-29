/*Write a function countBs that takes a string as its only 
argument and returns a number that indicates how many uppercase
 “B” characters there are in the string. Next, write a function
  called countChar that behaves like countBs, except it takes a 
  second argument that indicates the character that is to be 
  counted (rather than counting only uppercase “B” characters).
   Rewrite countBs to make use of this new function.
*/

function countBs(arg) {
  let totalBs = 0;
  for (let i = 0; i < arg.length; i++) {
    const element = arg[i];
    if (element == "B") {
      totalBs += 1;
    }
  }
  return totalBs;
}

function countChar(arg, char) {
  let totalChar = 0;
  for (let i = 0; i < arg.length; i++) {
    const element = arg[i];
    if (element == char) {
      totalChar += 1;
    }
  }
  return totalChar;
}

console.log(countChar("happy", "p"));
// -> 2
