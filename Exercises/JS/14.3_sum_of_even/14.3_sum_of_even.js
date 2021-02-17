// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30

function getSumOfEven(arr) {
    console.log(arr[1]);
    let sum = arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
    return sum;
}
   
   
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

//1. Line 10
//2. Debugger
//3. The sum is not collected into a variable, so "return" does not
//return the sum but the action of adding numbers which is NaN. 
//Also the index of an array starts with 0 so the even numbers will be at
//the uneven indexes.