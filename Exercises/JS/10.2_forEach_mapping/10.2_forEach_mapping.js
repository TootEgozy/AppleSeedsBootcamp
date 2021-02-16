// Instructions
// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.
// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)


//1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function - doubled.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["hey", "hello", "howdy"];

function doubled (char) {  
    if (typeof char === "number") return char * 2; 
    else return char.repeat(2); 
}

console.log(arr1.map(doubled));
console.log(arr2.map(doubled));


// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function buildEvenArray(val,arr) {
    if (val % 2 == 0) arr.push(val);
}

function isEven(arr) {
    let result = [];
    arr.forEach( val => buildEvenArray(val,result));
    return result;
}

console.log(isEven(arr3));


// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.

const arr5 = ['Toot','Egozy','Sliman', 4, 'Al-Shafi','Bill','Clinton'];


function showFirstAndLast(arr) {
    let result = [];

    function callbackBuildResult(val,index,originalArray) {
        if ((index == 0 || index == originalArray.length -1) && typeof val == "string") {
            result.push(val);
        }
    }

    arr.forEach(callbackBuildResult);
    return result;
}

console.log(showFirstAndLast(arr5));



// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

const words = "A brown fox jumped over a big fancy yellow fence";

//A function that recives an array of words, and returns an object with the vowels count.
function vowelCount(str) {
    let vowelsData = {};
    let vowels = ["a", "e", "i", "o", "u"];
    let tempArr = str.toLowerCase().split("");

    //an inner function that recives a letter, and modifies the object that contain the vowles count.
    function buildVowelsObj(letter) {
        if (vowels.includes(letter)) {
            if (letter in vowelsData) vowelsData[letter] += 1;  //add 1 to the value count
            else vowelsData[letter] = 1; //create a new key and the matching value of 1
        }
    }
    
    tempArr.forEach(buildVowelsObj);
    return vowelsData;
}

console.log(vowelCount(words));

//5. Write a function capitalize that takes a string as an
//argument and will return the whole string capitalized.

function isLetter(letter) {
    const regex = RegExp('[a-zA-Z]','g');
    return regex.test(letter);
}

function capitalizeLetter(char) {
    if (isLetter(char)) { return char.toUpperCase(); }
    else return char;
}

function capitalize(str) {
    let result = [];
    let tempArr = str.split("");

    function callbackCapitalize(letter) {
        result.push(capitalizeLetter(letter));
    }
    tempArr.forEach(callbackCapitalize);

    return result.join("");
}

//6. Write a function called shiftLetters that takes a string as
//an argument and return’s an encoded string with each
//letter shifted down the alphabet by one.


function nextLetter(char) {
    if (isLetter(char)) {
//      'a' -> 'b'
//      'A' -> 'B'
//      'z' -> 'a'
//      'Z' -> 'A'
        if (char === 'Z') {
            return 'A';
        } else if (char === 'z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }
    }
    else return char;
}

function shiftLetters(str) {
    let result = [];

    function callbackShiftLetters(letter) {
        result.push(nextLetter(letter));
    }

    str.split("").forEach(callbackShiftLetters);

    return result.join("");
}

console.log(shiftLetters("Hello how are you doing this fine day, good Sir?"));

//7. Create a function called swapCase that takes a string as
//an argument and returns a string that every other word is
//capitalized.

function swapCase(str) {
    let result = [];
    let tempArr = str.split(" ");

    function callbackSwapCase(word, index) {
        if (index % 2 === 0) {
            result.push(capitalize(word));
        } else {
            result.push(word);
        }
    }

    tempArr.forEach(callbackSwapCase);

    return result.join(" ");
} 

console.log(swapCase("hElLo goodbye My friend so long bla bla la la ha ha"));