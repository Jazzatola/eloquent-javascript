// Persistent group
//
// Write a new class PGroup, similar to the Group class from Chapter 6, which
// stores a set of values. Like Group, it has add, delete, and has methods. Its
// add method, however, should return a new PGroup instance with the given
// member added and leave the old one unchanged. Similarly, delete should
// create a new instance without a given member.
//
// The class should work for values of any type, not just strings. It does not
// have to be eﬀicient when used with large numbers of values.
//
// The constructor shouldn’t be part of the class’s interface (though you’ll
// definitely want to use it internally). Instead, there is an empty instance,
// PGroup.empty, that can be used as a starting value.

export class PGroup {
  static empty = new PGroup();

  #elements;

  constructor(elements = []) {
    this.#elements = elements;
  }

  get length() {
    return this.#elements.length;
  }

  add(element) {
    if (!this.has(element)) return new PGroup(this.#elements.concat(element));
    else return this;
  }

  delete(element) {
    if (this.has(element))
      return new PGroup(this.#elements.filter((value) => value != element));
    else return this;
  }

  at(index) {
    return this.#elements[index];
  }

  has(element) {
    return this.#elements.indexOf(element) >= 0;
  }
}
