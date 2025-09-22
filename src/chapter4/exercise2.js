// Reversing an Array
//
// For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, should take an array as its
// argument and produce a new array that has the same elements in the inverse
// order. The second, reverseArrayInPlace, should do what the reverse method
// does: modify the array given as its argument by reversing its elements.
// Neither may use the standard reverse method.

export const reverseArray = (array) => {
  const length = array.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(array.pop());
  }
  return result;
};

export const reverseArrayInPlace = (array) => {
  const length = array.length;
  const midpoint = Math.floor(length / 2);

  for (let i = 0; i < midpoint; i++) {
    let item = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = item;
  }

  return array;
};
