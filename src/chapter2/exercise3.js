// Write a program that creates a string that represents an 8×8 grid, using
// newline characters to separate lines. At each position of the grid there is
// either a space or a "#" character. The characters should form a chessboard.

const size = 8;

for (let row = 0; row < size; row++) {
  let line = "";
  for (let col = 0; col < size; col++) {
    line += (row + col) % 2 ? " " : "#";
  }
  console.log(line);
}
