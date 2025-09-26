import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { Group } from "../../src/chapter6/exercise2.js";
import "../../src/chapter6/exercise3.js";

describe("Chapter 6, Exercise 3", () => {
  it("groups are iterable", () => {
    const elements = [4, 782, 9, 212, 4, 33];
    const group = Group.from(elements);

    let count = 0;
    for (let element of group) {
      assert.ok(elements.includes(element));
      count += 1;
    }

    assert.equal(count, group.length);
  });
});
