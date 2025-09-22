// Write a function deepEqual that takes two values and returns true only if
// they are the same value or are objects with the same properties, where the
// values of the properties are equal when compared with a recursive call to
// deepEqual.

export const deepEqual = (thing1, thing2) => {
  if (thing1 === thing2) return true;
  if (thing1 === null || thing2 === null) {
    return thing1 === thing2;
  }

  if (typeof thing1 === "object" && typeof thing2 === "object") {
    const keys1 = Object.keys(thing1);
    const keys2 = Object.keys(thing2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
      if (!deepEqual(thing1[key], thing2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
};
