function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === target) {
        return [i, j];
      }
    }
  }
}

const matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
const target = 29;

const result = searchMatrix(matrix, target);
if (!target) {
  console.log("Target not found");
} else {
  console.log("Target found at:", result);
}
