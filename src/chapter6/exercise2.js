// Groups
//
// Write a class called Group (since Set is already taken). Like Set, it has
// add, delete, and has methods. Its constructor creates an empty group, add
// adds a value to the group (but only if it isn’t already a member), delete
// removes its argument from the group (if it was a member), and has returns a
// Boolean value indicating whether its argument is a member of the group.
//
// Use the === operator, or something equivalent such as indexOf, to determine
// whether two values are the same.
//
// Give the class a static from method that takes an iterable object as its
// argument and creates a group that contains all the values produced by
// iterating over it.

export class Group {
  static from(iterable) {
    const group = new this();
    for (let element of iterable) {
      group.add(element);
    }
    return group;
  }

  #elements = [];

  get length() {
    return this.#elements.length;
  }

  add(element) {
    if (!this.has(element)) this.#elements.push(element);
  }

  delete(element) {
    if (this.has(element))
      this.#elements.splice(this.#elements.indexOf(element), 1);
  }

  at(index) {
    return this.#elements[index];
  }

  has(element) {
    return this.#elements.indexOf(element) >= 0;
  }
}
