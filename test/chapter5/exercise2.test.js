import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { loop } from "../../src/chapter5/exercise2.js";

describe("Chapter 5, Exercise 2", () => {
  it("Use loop to sum 1 to 10", async () => {
    let total = 0;
    const test = (value) => value <= 10;
    const update = (value) => value + 1;
    const body = (value) => {
      total += value;
    };

    loop(0, test, update, body);
    assert.strictEqual(total, 55);
  });
});
