import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { countBs } from "../../src/chapter3/exercise3.js";

describe("Chapter 3, Exercise 3", () => {
  it("zero Bs in Apple Pie", () => {
    assert.equal(countBs("Apple Pie"), 0);
  });

  it("zero Bs in Rhubarb Crumble", () => {
    assert.equal(countBs("Rhubarb Crumble"), 0);
  });

  it("one B in Blueberry Muffin", () => {
    assert.equal(countBs("Blueberry Muffin"), 1);
  });

  it("four Bs in BlackBerry CoBBler", () => {
    assert.equal(countBs("BlackBerry CoBBler"), 4);
  });
});
