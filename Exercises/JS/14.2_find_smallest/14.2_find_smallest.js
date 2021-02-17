// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

function findSmallest(a, b, c){
    if (a, b > c) {
    return c;
    } else if (c, b > a) {
    return a;
   } else {
    return b;
    }
}

console.log(findSmallest(52, 66 ,2 ));


//1. Line 17, line 8, line 10
//2. Dev tools + console log
//3. At line 17 there was a spelling error. At lines 8, 10 the condition was wrong 
