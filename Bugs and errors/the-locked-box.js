const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

// My solution

function withBoxUnlocked(arr) {
  if (!box.locked) {
    return arr(box.content);
  }
  box.unlock();
  try {
    if (!box.locked) {
      return arr(box.content);
    }
  } catch (error) {
    console.log(error);
  } finally {
    box.lock();
  }
}

let func = (e) => {
  e.push(Math.floor(Math.random() * 10));
};
withBoxUnlocked(func);
console.log(box);

// Copied solution
// function withBoxUnlocked(body) {
//   let locked = box.locked;
//   if (!locked) {
//     return body();
//   }

//   box.unlock();
//   try {
//     return body();
//   } finally {
//     box.lock();
//   }
// }

// withBoxUnlocked(function() {
//   box.content.push("gold piece");
// });

// try {
//   withBoxUnlocked(function() {
//     throw new Error("Pirates on the horizon! Abort!");
//   });
// } catch (e) {
//   console.log("Error raised:", e);
// }

// console.log(box.locked);
// // → true
