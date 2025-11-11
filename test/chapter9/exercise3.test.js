import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { pattern } from "../../src/chapter9/exercise3.js";

const contains = (text, pattern) => pattern.test(text);
const missing = (text, pattern) => !contains(text, pattern);

describe("Chapter 9, Exercise 3", () => {
  it("matches JavaScript-style numbers", () => {
    assert.ok(contains("1", pattern));
    assert.ok(contains("-1", pattern));
    assert.ok(contains("+15", pattern));
    assert.ok(contains("1.55", pattern));
    assert.ok(contains(".5", pattern));
    assert.ok(contains("5.", pattern));
    assert.ok(contains("1.3e2", pattern));
    assert.ok(contains("1E-4", pattern));
    assert.ok(contains("1e+12", pattern));
    assert.ok(missing("1a", pattern));
    assert.ok(missing("+-1", pattern));
    assert.ok(missing("1.2.3", pattern));
    assert.ok(missing("1+1", pattern));
    assert.ok(missing("1e4.5", pattern));
    assert.ok(missing(".5.", pattern));
    assert.ok(missing("1f5", pattern));
    assert.ok(missing(".", pattern));
  });
});
