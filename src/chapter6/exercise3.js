// Iterable Groups
//
// Make the Group class from the previous exercise iterable.
//
// If you used an array to represent the group’s members, don’t just return the
// iterator created by calling the Symbol.iterator method on the array. That
// would work, but it defeats the purpose of this exercise.
//
// It is okay if your iterator behaves strangely when the group is modified during iteration.

import { Group } from "./exercise2.js";

Group.prototype[Symbol.iterator] = function () {
  let index = 0;
  const length = this.length;
  const at = (index) => this.at(index);

  return {
    next() {
      if (index < length) {
        return { value: at(index++), done: false };
      } else {
        return { done: true };
      }
    },
  };
};
