class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // for (;;) {
  //   try {
  //     let product = primitiveMultiply(a, b);
  //     console.log("Falls to 20% case and answer is " + product);
  //     break;
  //   } catch (e) {
  //     if (e instanceof MultiplicatorUnitFailure) {
  //       console.log("Falls to 80% case Try again.");
  //     } else {
  //       throw e;
  //     }
  //   }
  // }
}

console.log(reliableMultiply(8, 8));
// → 64
