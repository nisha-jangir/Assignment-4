function isSubset(arr1, arr2) {
  const set = new Set(arr1);

  for (const elem of arr2) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

const arr1 = [11, 1, 13, 21, 3, 7];
const arr2 = [11, 3, 7, 1];

if (isSubset(arr1, arr2)) {
  console.log("arr2 is a subset of arr1");
} else {
  console.log("arr2 is not a subset of arr1");
}
