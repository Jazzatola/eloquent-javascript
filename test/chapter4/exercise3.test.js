import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { arrayToList, listToArray, nth } from "../../src/chapter4/exercise3.js";

describe("Chapter 4, Exercise 3", () => {
  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  };

  it("converts array to list", () => {
    assert.deepStrictEqual(arrayToList([1, 2, 3]), list);
  });

  it("converts list to array", () => {
    assert.deepStrictEqual(listToArray(list), [1, 2, 3]);
  });

  it("returns the nth element", () => {
    assert.strictEqual(nth(null, 0), undefined);
    assert.strictEqual(nth({ value: undefined, rest: null }, 0), undefined);
    assert.strictEqual(nth(list, 0), 1);
    assert.strictEqual(nth(list, 1), 2);
    assert.strictEqual(nth(list, 2), 3);
    assert.strictEqual(nth(list, 3), undefined);
  });
});
