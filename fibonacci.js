// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.
function fibs(numCount) {
  let arr = [0, 1];
  for (let i = 2; i < numCount; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}
console.log(fibs(8)); // Expected Output: [0, 1, 1, 2, 3, 5, 8, 13]

// Using recursion, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.
function fibsRec(num, sequence = [0, 1]) {
  if (sequence.length >= num) {
    return sequence.slice(0, num);
  }

  const newNumber = sequence.at(-1) + sequence.at(-2);
  sequence.push(newNumber);

  return fibsRec(num, sequence);
}
console.log(fibsRec(8)); // Expected Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(0)); // Expected Output: []
console.log(fibsRec(1)); // Expected Output: [0]
console.log(fibsRec(2)); // Expected Output: [0, 1]
console.log(fibsRec(3)); // Expected Output: [0, 1, 1]
