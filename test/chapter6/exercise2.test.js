import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { Group } from "../../src/chapter6/exercise2.js";

describe("Chapter 6, Exercise 2", () => {
  it("groups are initially empty", () => {
    assert.strictEqual(new Group().length, 0);
  });

  it("adds element to group", () => {
    const group = new Group();
    group.add(3);
    assert.strictEqual(group.length, 1);
    assert.ok(group.has(3));
  });

  it("adds existing element to group", () => {
    const group = new Group();
    group.add(3);
    group.add(3);
    assert.strictEqual(group.length, 1);
    assert.ok(group.has(3));
  });

  it("deletes element from group", () => {
    const group = new Group();
    group.add(3);
    group.delete(3);
    assert.strictEqual(group.length, 0);
    assert.ok(!group.has(3));
  });

  it("deletes non-existing element from group", () => {
    const group = new Group();
    group.add(3);
    group.delete(9);
    assert.strictEqual(group.length, 1);
    assert.ok(group.has(3));
    assert.ok(!group.has(9));
  });

  it("creates group from iterable", () => {
    const elements = [4, 782, 9, 212, 4, 33];
    const group = Group.from(elements);

    assert.strictEqual(group.length, 5);
    elements.forEach((element) => {
      assert.ok(group.has(element));
    });
  });
});
