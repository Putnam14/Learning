/**
 * Class of persistent groups.
 * Adding to or deleting from an existing group does not modify the group.
 */

class PGroup {
  constructor(collection) {
    this.collection = collection;
  }

  add(val) {
    if (this.has(val)) return this;
    return new PGroup(this.collection.concat([val]));
  }

  delete(val) {
    if (!this.has(val)) return this;
    return new PGroup(this.collection.filter(m => m !== val));
  }

  has(val) {
    return this.collection.includes(val);
  }
}

PGroup.empty = new PGroup([]);

const a = PGroup.empty.add('a');
const ab = a.add('b');
const b = ab.delete('a');

console.log(b.has('b'));
// → true
console.log(a.has('b'));
// → false
console.log(b.has('a'));
// → false
