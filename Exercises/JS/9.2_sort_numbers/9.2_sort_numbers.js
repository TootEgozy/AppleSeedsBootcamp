// Use the array of numbers below and answer the following
// questions:
// 1. Sort the array of numbers from descending to ascending
// order
// 2. Sort the array of numbers from descending to ascending
// order.



const numbers = [1, -5, 666, 2, 400, 11];

//1.

numbers.sort(function(a, b){return a-b});
console.log(numbers);

//2.
numbers.sort(function(a, b){return b-a});
console.log(numbers);