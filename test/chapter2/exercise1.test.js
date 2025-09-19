import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { execute } from "../fixtures.js";

describe("Chapter 2, Exercise 1", () => {
  it("prints a triangle", async () => {
    const triangle = "#\n##\n###\n####\n#####\n######\n#######\n";
    const output = await execute("src/chapter2/exercise1.js");
    assert.equal(output, triangle);
  });
});
