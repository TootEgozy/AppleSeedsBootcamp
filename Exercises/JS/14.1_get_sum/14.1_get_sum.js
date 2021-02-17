// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    console.log(sum);
    }
    getSum([1,2,3],[5,66,23]);


//1. sum is a const
//2. Chrome dev tools console error
//3. you can not assign new value to a const