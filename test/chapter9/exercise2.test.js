import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { pattern } from "../../src/chapter9/exercise2.js";

describe("Chapter 9, Exercise 2", () => {
  it("replaces dialogue quotes with double quotes", () => {
    const text = "'I'm the cook,' he said, 'it's my job.'";
    const expected = '"I\'m the cook," he said, "it\'s my job."';
    assert.strictEqual(text.replace(pattern, '"'), expected);
  });
});
