import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  reverseArray,
  reverseArrayInPlace,
} from "../../src/chapter4/exercise2.js";

describe("Chapter 4, Exercise 2", () => {
  it("reverses an array", () => {
    assert.deepStrictEqual(
      reverseArray([4, 782, 9, 212, 33]),
      [33, 212, 9, 782, 4],
    );
  });

  it("reverses an array in-place", () => {
    assert.deepStrictEqual(
      reverseArrayInPlace([4, 782, 9, 212, 33]),
      [33, 212, 9, 782, 4],
    );
  });
});
