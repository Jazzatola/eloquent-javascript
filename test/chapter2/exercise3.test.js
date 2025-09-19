import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { execute } from "../fixtures.js";

describe("Chapter 2, Exercise 3", () => {
  it("prints a chessboard pattern", async () => {
    const chessboard =
      "# # # # \n" +
      " # # # #\n" +
      "# # # # \n" +
      " # # # #\n" +
      "# # # # \n" +
      " # # # #\n" +
      "# # # # \n" +
      " # # # #\n";

    const output = await execute("src/chapter2/exercise3.js");
    assert.equal(output, chessboard);
  });
});
