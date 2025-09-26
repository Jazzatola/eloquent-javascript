import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { Vec } from "../../src/chapter6/exercise1.js";

const vector1 = new Vec(3, 4);
const vector2 = new Vec(2, 1);

describe("Chapter 6, Exercise 1", () => {
  it("can add two vectors", () => {
    assert.deepStrictEqual(vector1.plus(vector2), new Vec(5, 5));
  });

  it("can subtract two vectors", () => {
    assert.deepStrictEqual(vector1.minus(vector2), new Vec(1, 3));
  });

  it("can get the length of a vector", () => {
    assert.deepStrictEqual(vector1.length, 5);
  });
});
