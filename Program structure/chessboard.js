let chessBoard = "";
const size = 8;

for (let lineCount = 1; lineCount <= size; lineCount++) {
  for (let charCount = 1; charCount <= size; charCount++) {
    if ((charCount + lineCount) % 2 === 0) {
      chessBoard += " ";
    } else {
      chessBoard += "#";
    }
  }
  chessBoard += "\n";
}
console.log(chessBoard);
