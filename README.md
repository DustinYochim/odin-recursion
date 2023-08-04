# odin-recursion

This repository contains JavaScript implementations of two classic algorithms: Recursive Fibonacci and Merge Sort. Both algorithms showcase the power and elegance of recursive programming techniques.

## Fibonacci

The `fibonacci.js` file contains a recursive implementation of the Fibonacci sequence. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. The implementation uses a recursive approach to calculate Fibonacci numbers. It demonstrates how recursion can be utilized to efficiently solve problems that have overlapping subproblems.

To use the Fibonacci function, simply import it into your JavaScript code and call `fib(n)` where `n` is the index of the desired Fibonacci number.

## Merge Sort

The `merge-sort.js` file implements the Merge Sort algorithm using recursion. Merge Sort is a divide-and-conquer sorting algorithm that divides an array into two halves, sorts them separately, and then merges them back together in a sorted manner. The recursive implementation of Merge Sort elegantly handles the sorting process by breaking it down into smaller subarrays.

To utilize the Merge Sort implementation, import the `mergeSort` function into your JavaScript code and call it with an unsorted array as the argument. It will return a new array containing the elements in sorted order.

## Usage

Here's how you can use the provided implementations:

### Fibonacci Example:

```javascript
const fibonacci = require('./fibonacci');

const n = 10;
const result = fibonacci(n);
console.log(`The ${n}-th Fibonacci number is: ${result}`);
```

### Merge Sort Example
```javascript
const mergeSort = require('./merge_sort');

const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = mergeSort(unsortedArray);
console.log(`Sorted array: ${sortedArray}`);
```

Feel free to explore, learn from, and adapt these implementations for your projects. If you have any suggestions for improvements or additional algorithms, please feel free to contribute by submitting pull requests. Happy coding!
