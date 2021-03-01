// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.
// Submit the file to Hive.

const rightArr = ["Hey", "my", "NAMe", "is", "toot"];
const wrongArr = ["my", "AGe", "is", 26, "years"];

function makeAllCaps(arr) {
    return capPromise = new Promise(function(resolve) {
        resolve (arr.join(" ").toUpperCase().split(" "));
    }  
)};


function sortAndCheck (arr) {
    return sortCheckPromis = new Promise(function(resolve, reject) {
        let result = true;
        
        sortedArr = arr.sort();
        sortedArr.forEach(word => {
            if (typeof (word) !== "string") result = false; 
        });

        if(result == true) resolve(sortedArr);
        else reject(arr);
    })
}

makeAllCaps(rightArr)
    .then(function(arr) {
        sortAndCheck(arr)
    .then(function (arr) {
        console.log(`${arr} is all words!`)})
    .catch(function(arr) {
            console.log(`${arr} includes items that are not words!`)
       })
 });

makeAllCaps(wrongArr)
    .then(function(arr) {
        sortAndCheck(arr)
    .then(function (arr) {
        console.log(`${arr} is all words!`)})
    .catch(function(arr) {
            console.log(`${arr} includes items that are not words!`)
       })
 });





callbackThen = function() {console.log("Works")};
callbackCatch = function() {console.log("Error")};



