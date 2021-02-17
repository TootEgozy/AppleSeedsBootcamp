// Instructions
// Write the following functions using the reduce built-in function.
// 1. max
// 2. sum of even numbers
// 3. average

const arr = [11, 32, 3, 58, 51, 600, 7, 10];

//1.

function maxNumber(acc, currentNum) {
    return Math.max(acc,currentNum);
}

// console.log(arr.reduce(maxNumber));

//2.

let sumEven = arr.reduce(function(acc, currentNum) {

    if (currentNum%2 === 0) acc += currentNum;
    // console.log("currentNum = "+currentNum);
    // console.log("currentAcc = "+acc);
    // console.log("_____________");
    return acc;
}, 0); //Always initialize the accemulator to something, so we won't get wierd results

// console.log(sumEven);

//3.

let averageOfArr = arr.reduce(function(acc, currentNum, index, originalArr) {
   let finalIndex = originalArr.length -1;

   if (index < finalIndex) {
       acc += currentNum;
   }
   else {
       acc += currentNum;
       acc = acc / originalArr.length;
   }

    // console.log("acc = "+acc);
    // console.log("currentNum = "+currentNum);
    // console.log("current index = "+index);
    // console.log("______________________________________________");
    return acc;
}, 0);

// console.log("////////////////////////////////////////////////");
// console.log("The average is "+averageOfArr);

