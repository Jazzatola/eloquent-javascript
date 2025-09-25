import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { dominantWritingDirection } from "../../src/chapter5/exercise4.js";

describe("Chapter 5, Exercise 4", () => {
  it("All text is left to right", async () => {
    assert.strictEqual(dominantWritingDirection("Hello World!"), "ltr");
  });

  it("All text is right to left", async () => {
    assert.strictEqual(dominantWritingDirection("مرحبا بالعالم!"), "rtl");
  });

  it("All text is top to bottom", async () => {
    assert.strictEqual(dominantWritingDirection("𝠀"), "ttb");
  });

  it("Predominantly left to right", async () => {
    assert.strictEqual(dominantWritingDirection("Hello عالم!"), "ltr");
  });

  it("Predominantly right to left", async () => {
    assert.strictEqual(dominantWritingDirection("Say: مرحبا بالعالم!"), "rtl");
  });
});
