// Takes in an array and returns a sorted array, using a recursive merge sort methodology.
function mergeSort(arr) {
  const middle = arr.length / 2;

  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, middle);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([213, 12323, 53, 12, 453, 231, 12]));
