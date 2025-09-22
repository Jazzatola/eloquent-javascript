import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { min } from "../../src/chapter3/exercise1.js";

describe("Chapter 3, Exercise 1", () => {
  it("the first is smaller", () => {
    assert.equal(min(5, 7), 5);
  });

  it("the second is smaller", () => {
    assert.equal(min(8, 3), 3);
  });

  it("both are the same", () => {
    assert.equal(min(2, 2), 2);
  });
});
