import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { every, everyUsingSome } from "../../src/chapter5/exercise3.js";

describe("Chapter 5, Exercise 3", () => {
  it("not all are true", async () => {
    assert.ok(!every([1, 2, 3, 4], (n) => n > 2));
  });

  it("all are true", async () => {
    assert.ok(every([1, 2, 3, 4], (n) => n < 5));
  });

  it("not all are true (using some)", async () => {
    assert.ok(!everyUsingSome([1, 2, 3, 4], (n) => n > 2));
  });

  it("all are true (using some)", async () => {
    assert.ok(everyUsingSome([1, 2, 3, 4], (n) => n < 5));
  });
});
