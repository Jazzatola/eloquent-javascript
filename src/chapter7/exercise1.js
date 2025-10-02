// Measuring a Robot
//
// Write a function compareRobots that takes two robots (and their starting
// memory). It should generate 100 tasks and let both of the robots solve each
// of these tasks. When done, it should output the average number of steps each
// robot took per task.
//
// For the sake of fairness, make sure you give each task to both robots, rather
// than generating different tasks per robot.

import { VillageState } from "./robot.js";

export const compareRobots = (robot1, memory1, robot2, memory2) => {
  const tasks = 100;
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < tasks; i++) {
    const state = VillageState.random();
    total1 += countSteps(robot1, state, memory1);
    total2 += countSteps(robot2, state, memory2);
  }

  return {
    [robot1]: total1 / tasks,
    [robot2]: total2 / tasks,
  };
};

const countSteps = (robot, state, memory) => {
  let count = 0;
  while (state.parcels.length > 0) {
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    count++;
  }
  return count;
};
