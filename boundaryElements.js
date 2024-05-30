function printBoundaryElements(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let boundaryElements = [];

  for (let i = 0; i < cols; i++) {
    boundaryElements.push(matrix[0][i]);
  }

  for (let i = 1; i < rows - 1; i++) {
    boundaryElements.push(matrix[i][cols - 1]);
  }

  if (rows > 1) {
    for (let i = cols - 1; i >= 0; i--) {
      boundaryElements.push(matrix[rows - 1][i]);
    }
  }

  for (let i = rows - 2; i > 0; i--) {
    boundaryElements.push(matrix[i][0]);
  }

  console.log("Boundary Elements:", boundaryElements);
}

const matrix = [
  [1, 2, 3],
  [5, 6, 7],
  [1, 2, 3],
];

printBoundaryElements(matrix);
