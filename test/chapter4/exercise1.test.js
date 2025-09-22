import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { range, sum } from "../../src/chapter4/exercise1.js";

describe("Chapter 4, Exercise 1", () => {
  it("a range from 1 to 10", () => {
    assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("a range from 1 to 10 with step 2", () => {
    assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
  });

  it("a range from 5 to 2 with step -1", () => {
    assert.deepStrictEqual(range(5, 2, -1), [5, 4, 3, 2]);
  });

  it("sum of range 1 to 10", () => {
    assert.equal(sum(range(1, 10)), 55);
  });
});
