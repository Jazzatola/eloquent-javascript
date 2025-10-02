import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { PGroup } from "../../src/chapter7/exercise3.js";

describe("Chapter 7, Exercise 3", () => {
  it("persistent groups are initially empty", () => {
    assert.strictEqual(PGroup.empty.length, 0);
  });

  it("adding element to persistent group creates a new group", () => {
    const group = PGroup.empty;
    const withAddition = group.add(3);
    assert.strictEqual(group.length, 0);
    assert.strictEqual(withAddition.length, 1);
    assert.ok(withAddition.has(3));
  });

  it("deleting element from persistent group creates a new group", () => {
    const group = PGroup.empty.add(3);
    const withDeletion = group.delete(3);
    assert.strictEqual(group.length, 1);
    assert.strictEqual(withDeletion.length, 0);
    assert.ok(!withDeletion.has(3));
  });

  it("adds element to persistent group", () => {
    const group = PGroup.empty.add(3);
    assert.strictEqual(group.length, 1);
    assert.ok(group.has(3));
  });

  it("adds existing element to persistent group", () => {
    const group = PGroup.empty.add(3).add(3);
    assert.strictEqual(group.length, 1);
    assert.ok(group.has(3));
  });

  it("deletes element from persistent group", () => {
    const group = PGroup.empty.add(3).delete(3);
    assert.strictEqual(group.length, 0);
    assert.ok(!group.has(3));
  });

  it("deletes non-existing element from persistent group", () => {
    const group = PGroup.empty.add(3).delete(9);
    assert.strictEqual(group.length, 1);
    assert.ok(group.has(3));
    assert.ok(!group.has(9));
  });
});
