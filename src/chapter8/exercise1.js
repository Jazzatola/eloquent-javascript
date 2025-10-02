// Retry
//
// Say you have a function primitiveMultiply that in 20 percent of cases
// multiplies two numbers and in the other 80 percent of cases raises an
// exception of type MultiplicatorUnitFailure. Write a function that wraps this
// clunky function and just keeps trying until a call succeeds, after which it
// returns the result.
//
// Make sure you handle only the exceptions you are trying to handle.

class MultiplicatorUnitFailure extends Error {}

export const multiply = (m, n) => {
  while (true) {
    try {
      return primitiveMultiply(m, n);
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure)) throw error;
    }
  }
};

const primitiveMultiply = (m, n) => {
  let chance = Math.random();
  if (chance < 0.8) {
    throw new MultiplicatorUnitFailure();
  } else {
    return m * n;
  }
};
