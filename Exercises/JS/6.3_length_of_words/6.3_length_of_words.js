// Write a function that will receive an array of strings and will return a new
// array containing all the lengths of all the strings in the array it got as a
// parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

//for each string return arr.length.
//push into an array.
//return the new array.

let strings = ["booo", "doooo", "", "ro"];
let numArray = [];


//A function that recives a string and returns the string length.
strLength = (string) => string.length


//A function that recives an array of strings and returns an array of the lengths of the strings. 
function stringsLength(array) {

    for (i = 0; i < array.length; i++) {
        
        numArray.push(strLength(array[i]));
    }
    return numArray;
}



console.log(stringsLength(strings));