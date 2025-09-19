import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { countBs } from "../../src/chapter3/exercise3.js";

describe("Chapter 3, Exercise 3", () => {
  it("zero Bs in Apple Pie", async () => {
    assert.equal(countBs("Apple Pie"), 0);
  });

  it("zero Bs in Rhubarb Crumble", async () => {
    assert.equal(countBs("Rhubarb Crumble"), 0);
  });

  it("one B in Blueberry Muffin", async () => {
    assert.equal(countBs("Blueberry Muffin"), 1);
  });

  it("one B in Strawberry Blancmange", async () => {
    assert.equal(countBs("Strawberry Blancmange"), 1);
  });

  it("four Bs in BlackBerry CoBBler", async () => {
    assert.equal(countBs("BlackBerry CoBBler"), 4);
  });

  it("ten Bs in BBBaBBBBBBbB", async () => {
    assert.equal(countBs("BBBBBBBBBbB"), 10);
  });
});
