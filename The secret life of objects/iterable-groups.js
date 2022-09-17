// Your code here (and the code from the previous exercise)
class Group {
  constructor() {
    this.arr = [];
  }
  add(val) {
    if (!this.has(val)) this.arr.push(val);
  }
  delete(val) {
    this.arr = this.arr.filter((el) => el !== val);
  }
  has(val) {
    return this.arr.includes(val);
  }
  static from(arr) {
    let group = new Group(arr);
    for (const e of arr) {
      group.add(e);
    }
    return group;
  }
}

class IterableGroups {}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
