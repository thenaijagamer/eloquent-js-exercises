/*For numbers divisible by 3, print "Fizz" instead of the number,
 and for numbers divisible by 5 (and not 3), print "Buzz" 
 instead. When you have that working, modify your program to
  print "FizzBuzz" for numbers that are divisible by both 3 and 5 
  (and still print "Fizz" or "Buzz" for numbers divisible by only 
  one of those).*/

//Normal solution
for (let num = 1; num <= 100; num++) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

//Cleverest and shortest solution
for (let num = 1; num <= 100; num++) {
  console.log(
    `${num % 3 == 0 ? "Fizz" : ""}` + `${num % 5 == 0 ? "Buzz" : ""}` || num
  );
}
