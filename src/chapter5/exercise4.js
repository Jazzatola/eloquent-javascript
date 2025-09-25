// Dominant Writing Direction
//
// Write a function that computes the dominant writing direction in a string of
// text. Remember that each script object has a direction property that can be
// "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
//
// The dominant direction is the direction of a majority of the characters that
// have a script associated with them. The characterScript and countBy
// functions defined earlier in the chapter are probably useful here.

import { SCRIPTS } from "./scripts.js";

const characterScript = (code) => {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
};

const countBy = (items, groupName) => {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find((c) => c.name == name);
    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
};

export const dominantWritingDirection = (text) => {
  const direction = (char) => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  };
  const notNone = ({ name }) => name != "none";
  const maxCount = (item1, item2) =>
    item1.count > item2.count ? item1 : item2;

  return countBy(text, direction).filter(notNone).reduce(maxCount).name;
};
