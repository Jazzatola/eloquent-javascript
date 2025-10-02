import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { routeRobot, goalOrientedRobot } from "../../src/chapter7/robot.js";
import { compareRobots } from "../../src/chapter7/exercise1.js";

describe("Chapter 7, Exercise 1", () => {
  it("compare two robots", () => {
    const output = compareRobots(routeRobot, [], goalOrientedRobot, []);
    assert.ok(output[routeRobot] > 0);
    assert.ok(output[goalOrientedRobot] > 0);
  });
});
