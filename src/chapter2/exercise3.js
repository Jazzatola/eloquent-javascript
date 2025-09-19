// Write a program that creates a string that represents an 8×8 grid, using
// newline characters to separate lines. At each position of the grid there is
// either a space or a "#" character. The characters should form a chessboard.

const size = 8;

Array.from({ length: size }, (_, row) =>
  Array.from({ length: size }, (_, col) => ((row + col) % 2 ? " " : "#")),
)
  .map((row) => row.join(""))
  .forEach((row) => console.log(row));
