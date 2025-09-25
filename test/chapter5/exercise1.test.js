import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { flatten } from "../../src/chapter5/exercise1.js";

describe("Chapter 5, Exercise 1", () => {
  it("Flatten array of arrays", async () => {
    assert.deepStrictEqual(
      flatten([[1], [], [2, 3], [4, 5, 6], [7]]),
      [1, 2, 3, 4, 5, 6, 7],
    );
  });
});
