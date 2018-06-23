/**
 * Iterable groups
 *
 * Make the Group class from the previous exercise iterable. Refer to the section about
 * the iterator interface earlier in the chapter if you aren’t clear on the exact form
 * of the interface anymore.
 *
 * If you used an array to represent the group’s members, don’t just return the iterator
 * created by calling the Symbol.iterator method on the array. That would work, but it
 * defeats the purpose of this exercise.
 *
 * It is okay if your iterator behaves strangely when the group is modified during iteration.
 */

class Group {
  constructor() {
    this.collection = [];
  }

  add(val) {
    if (!this.has(val)) this.collection.push(val);
  }

  delete(val) {
    this.collection.splice(this.collection.indexOf(val), 1);
  }

  has(val) {
    return this.collection.includes(val);
  }

  [Symbol.iterator]() {
    let index = -1;
    const data = this.collection;
    index += 1;
    return {
      next: () => ({ value: data[index], done: !(index in data) }),
    };
  }

  static from(arr) {
    const group = new Group();
    arr.forEach(val => group.add(val));
    return group;
  }
}

Object.values(Group.from(['a', 'b', 'c']).collection).forEach(value => console.log(value)); // airbnb does NOT like for .. in
// → a
// → b
// → c
