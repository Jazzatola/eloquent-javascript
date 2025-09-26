// A Vector Type
//
// Write a class Vec that represents a vector in two-dimensional space. It
// takes x and y parameters (numbers), that it saves to properties of the same
// name.
//
// Give the Vec prototype two methods, plus and minus, that take another vector
// as a parameter and return a new vector that has the sum or difference of the
// two vectors’ (this and the parameter) x and y values.
//
// Add a getter property length to the prototype that computes the length of
// the vector—that is, the distance of the point (x, y) from the origin (0, 0).

export class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }
}
