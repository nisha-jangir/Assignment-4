function rotateMatrix(matrix) {
  let output = [];
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = 0; j < cols; j++) {
      if (output[j]) {
        output[j].push(matrix[i][j]);
      } else {
        output[j] = [matrix[i][j]];
      }
    }
  }

  return output;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let rotatedMatrix = rotateMatrix(matrix);

rotatedMatrix.forEach((row) => console.log(row));
