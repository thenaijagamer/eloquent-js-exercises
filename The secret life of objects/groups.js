class Group {
  constructor(arr) {
    this.arr = arr;
  }
  add(val) {
    if (!this.arr.includes(val)) this.arr.push(val);
  }
  delete(val) {
    this.arr = this.arr.filter((el) => el !== val);
  }
  has(val) {
    for (const e of this.arr) {
      if (e === val) return true;
    }
    return false;
  }
  static from(arr) {
    return new Group(arr);
  }
}

let group = Group.from([10, 20]);

console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(15);
console.log(group.has(15));
// → true
group.delete(10);
console.log(group.has(10));
// → false
