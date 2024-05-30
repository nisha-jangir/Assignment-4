function transposeMatrix(matrix) {
  let output = [];

  for (let i = 0; i < matrix[0].length; i++) {
    output[i] = [];

    for (let j = 0; j < matrix.length; j++) {
      output[i][j] = matrix[j][i];
    }
  }

  return output;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let output = transposeMatrix(matrix);
output.forEach((row) => console.log(row));
