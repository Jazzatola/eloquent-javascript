// The Locked Box
//
// Write a function called withBoxUnlocked that takes a function value as
// argument, unlocks the box, runs the function, and then ensures that the box
// is locked again before returning, regardless of whether the argument
// function returned normally or threw an exception.
//
// For extra points, make sure that if you call withBoxUnlocked when the box is
// already unlocked, the box stays unlocked.

export const box = new (class {
  locked = true;
  #content = [];

  unlock() {
    this.locked = false;
  }

  lock() {
    this.locked = true;
  }

  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
})();

export const withBoxUnlocked = (fn) => {
  const wasLocked = box.locked;
  box.unlock();
  try {
    fn();
  } finally {
    if (wasLocked) box.lock();
  }
};
