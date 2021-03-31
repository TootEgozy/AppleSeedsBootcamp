//you get an array of duplicated values and a single value:
// example: [1,2,5,1,5]
// write a function that returns the odd value, in the most efficiant way
// and least memory consumed.
// do not use build-in functions.


findOddOne = (arr) => {
    const copiedArr = [];
    const foundArr = [];
    for(i=0; i< arr.length; i++) {
        if (copiedArr.contains(arr[i])) foundArr.push(arr[i]);
        
    }
} 