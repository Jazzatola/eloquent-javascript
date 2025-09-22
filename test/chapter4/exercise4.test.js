import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { deepEqual } from "../../src/chapter4/exercise4.js";

describe("Chapter 4, Exercise 4", () => {
  it("compares two values", () => {
    assert.ok(deepEqual(4, 4));
    assert.ok(!deepEqual(4, 7));
  });

  it("compares two identical objects", () => {
    let thing = { name: "Alice", city: "London" };
    assert.ok(deepEqual(thing, thing));
  });

  it("compares values that may be null", () => {
    let thing = { name: "Alice", city: "London" };
    assert.ok(!deepEqual(thing, null));
    assert.ok(!deepEqual(null, thing));
    assert.ok(deepEqual(null, null));
  });

  it("objects with different keys", () => {
    let thing1 = { name: "Alice", location: "London" };
    let thing2 = { name: "Bob", city: "London", country: "UK" };
    assert.ok(!deepEqual(thing1, thing2));
  });

  it("objects with different values", () => {
    let thing1 = { name: "Alice", city: "London", country: "UK" };
    let thing2 = { name: "Alice", city: "Cardiff", country: "UK" };
    assert.ok(!deepEqual(thing1, thing2));
  });

  it("objects with nested objects", () => {
    let thing1 = { name: "Alice", address: { city: "London", country: "UK" } };
    let thing2 = { name: "Alice", address: { location: "London" } };
    assert.ok(!deepEqual(thing1, thing2));
  });

  it("objects with different nested values", () => {
    let thing1 = { name: "Alice", address: { city: "London", country: "UK" } };
    let thing2 = { name: "Alice", address: { city: "Cardiff", country: "UK" } };
    assert.ok(!deepEqual(thing1, thing2));
  });

  it("different objects that are equal", () => {
    let thing1 = { name: "Alice", address: { city: "London", country: "UK" } };
    let thing2 = { name: "Alice", address: { city: "London", country: "UK" } };
    assert.ok(deepEqual(thing1, thing2));
  });
});
