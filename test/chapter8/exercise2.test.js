import { afterEach, describe, it } from "node:test";
import assert from "node:assert/strict";

import { box, withBoxUnlocked } from "../../src/chapter8/exercise2.js";

describe("Chapter 8, Exercise 2", () => {
  afterEach(() => box.lock());

  it("function parameter is called", () => {
    let called = false;
    const fn = () => {
      called = true;
    };

    assert.ok(!called);
    withBoxUnlocked(fn);
    assert.ok(called);
  });

  it("box is unlocked during function call", () => {
    const fn = () => {
      assert.ok(!box.locked);
    };

    withBoxUnlocked(fn);
  });

  it("box remains locked after function call", () => {
    const fn = () => {
      return true;
    };

    assert.ok(box.locked);
    withBoxUnlocked(fn);
    assert.ok(box.locked);
  });

  it("box remains unlocked after function call", () => {
    const fn = () => {
      return true;
    };

    box.unlock();
    assert.ok(!box.locked);
    withBoxUnlocked(fn);
    assert.ok(!box.locked);
  });

  it("box remains locked even if function throws an error", () => {
    const expectedError = new Error();
    const fn = () => {
      throw expectedError;
    };

    assert.ok(box.locked);

    try {
      withBoxUnlocked(fn);
    } catch (error) {
      assert.strictEqual(error, expectedError);
    }

    assert.ok(box.locked);
  });

  it("box remains unlocked even if function throws an error", () => {
    const expectedError = new Error();
    const fn = () => {
      throw expectedError;
    };

    box.unlock();
    assert.ok(!box.locked);

    try {
      withBoxUnlocked(fn);
    } catch (error) {
      assert.strictEqual(error, expectedError);
    }

    assert.ok(!box.locked);
  });
});
