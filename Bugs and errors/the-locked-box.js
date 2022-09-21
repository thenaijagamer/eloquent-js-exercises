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

function withBoxUnlocked(arr) {
  let progress = 0;
  try {
    let content = box.content;
    progress = 1;
    arr(content);
    box.unlock();
  } catch (error) {
    console.log(error);
  } finally {
    if (progress == 1) {
      box.lock();
    }
  }
}
let func = (e) => {
  e.push(Math.floor(Math.random() * 10));
};
withBoxUnlocked(func);
console.log(box);
