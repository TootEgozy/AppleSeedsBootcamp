// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

function calcAverage (arr) {
    let sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr[ i ];
    }
    return sum ;
}


console.log(calcAverage ([ 85 , 90 , 92 ]));

//1. Line 9
//2. Dev tools debugger
//3. Sum was not initialized with a number, so by defalt it was
//formed as a string. When we tried to add a number we got NaN.