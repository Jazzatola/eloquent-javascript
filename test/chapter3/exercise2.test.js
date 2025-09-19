import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { isEven } from "../../src/chapter3/exercise2.js";

describe("Chapter 3, Exercise 2", () => {
  it("50 is even", async () => {
    assert.ok(isEven(50));
  });

  it("75 is not even", async () => {
    assert.ok(!isEven(75));
  });

  it("-1 is not even", async () => {
    assert.ok(!isEven(-1));
  });
});
