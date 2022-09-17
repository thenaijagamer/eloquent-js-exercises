// Given solution
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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// My solution || alternative
class GroupAlt {
  constructor(arr) {
    this.arr = arr; // different initializatiom from Group class
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
    return new GroupAlt(arr);
  }
}

let groupAlt = GroupAlt.from([10, 20]);
console.log(groupAlt.has(10));
// → true
console.log(groupAlt.has(30));
// → false
groupAlt.add(15);
console.log(groupAlt.has(15));
// → true
groupAlt.delete(10);
console.log(groupAlt.has(10));
// → false
