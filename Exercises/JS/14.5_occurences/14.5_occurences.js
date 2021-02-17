// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

function countOccurrences (str, char) {
    let counter = 0 ;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
        counter++;
        }
    }
    return counter;
}

console.log(countOccurrences ( "ini mini miny moe" , "i" ));

//1. Line 12
//2. Debugger
//3. "counter+1" is not valid. Should be counter++ / counter+=1 / counter = counter +1