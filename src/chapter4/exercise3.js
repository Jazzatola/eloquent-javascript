// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument. Also write a listToArray function
// that produces an array from a list. Add the helper functions prepend, which
// takes an element and a list and creates a new list that adds the element to
// the front of the input list, and nth, which takes a list and a number and
// returns the element at the given position in the list (with zero referring
// to the first element) or undefined when there is no element.
//
// If you haven’t already, also write a recursive version of nth.

export const arrayToList = (array) => {
  if (array.length === 0) return null;
  else return prepend(array[0], arrayToList(array.slice(1)));
};

export const listToArray = (list, array = []) => {
  if (list == null) return array;
  else {
    array.push(list.value);
    return listToArray(list.rest, array);
  }
};

const prepend = (element, list) => {
  return {
    value: element,
    rest: list,
  };
};

export const nth = (list, index) => {
  if (list === null) return undefined;
  if (index === 0) return list.value;
  else return nth(list.rest, index - 1);
};
