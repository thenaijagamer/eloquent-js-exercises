let chessBoard = "";
const size = 8;

for (let lineCount = 1; lineCount <= size; lineCount++) {
  if (lineCount % 2 === 0) {
    // Run if line number is even
    for (let charCount = 1; charCount <= size; charCount++) {
      if (charCount % 2 === 0) {
        // Run if char number is even
        chessBoard += " ";
      } else {
        // Run if char number is odd
        chessBoard += "#";
      }
    }
  } else {
    // Run if line number is odd
    for (let charCount = 1; charCount <= size; charCount++) {
      if (charCount % 2 === 0) {
        chessBoard += "#";
      } else {
        chessBoard += " ";
      }
    }
  }
  chessBoard += "\n";
}
console.log(chessBoard);
