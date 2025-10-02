import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { goalOrientedRobot } from "../../src/chapter7/robot.js";
import { compareRobots } from "../../src/chapter7/exercise1.js";
import { myRobot } from "../../src/chapter7/exercise2.js";

describe("Chapter 7, Exercise 1", () => {
  it("my robot is faster than goalOrientedRobot", () => {
    const output = compareRobots(myRobot, [], goalOrientedRobot, []);
    assert.ok(output[myRobot] < output[goalOrientedRobot]);
  });
});
