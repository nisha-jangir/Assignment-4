function findSaddlePoint(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    let minRowVal = matrix[i][0];
    let minColIndex = 0;
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] < minRowVal) {
        minRowVal = matrix[i][j];
        minColIndex = j;
      }
    }

    let isSaddlePoint = true;
    for (let k = 0; k < rows; k++) {
      if (matrix[k][minColIndex] > minRowVal) {
        isSaddlePoint = false;
        break;
      }
    }

    if (isSaddlePoint) {
      return { value: minRowVal, position: [i, minColIndex] };
    }
  }

  return null;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const saddlePoint = findSaddlePoint(matrix);
if (saddlePoint) {
  console.log(
    `Saddle Point: Value = ${saddlePoint.value}, Position = [${saddlePoint.position[0]}, ${saddlePoint.position[1]}]`
  );
} else {
  console.log("No saddle point found");
}
