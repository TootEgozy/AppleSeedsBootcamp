// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function.


//1)
let myStr = "Hello"

function callbackfunc(str) {
    console.log(str);
}

function isString(str, callback) {
    if (typeof str == "string") {
    callback(str);
    }
    else console.log("no");

}
isString(myStr, callbackfunc);

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

let myStr2 = "primum non nocere";


function firstWordUpperCase (str, callback) {
    let strArr = str.split(" ");
    strArr[0] = strArr[0].toUpperCase();
    return console.log(callback(strArr));
}

function addDashes(arr) { return arr.join("-");}

firstWordUpperCase(myStr2,addDashes);


// 4. Create your own function that will receive from one of its
// arguments a callback function.

function stars(num, callback) {
    let arrNum = [];
    for(i = 0; i < num; i ++) {
        arrNum.push("star"+ [i + 1]);
    }
    return console.log(callback (arrNum));
}

function addStars(arr) { return arr.join("*");}

stars(5, addStars);