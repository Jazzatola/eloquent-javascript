import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { multiply } from "../../src/chapter8/exercise1.js";

describe("Chapter 8, Exercise 1", () => {
  it("multiply never throws an exception", () => {
    try {
      assert.strictEqual(multiply(3, 4), 12);
    } catch (error) {
      assert.fail(error);
    }
  });
});
