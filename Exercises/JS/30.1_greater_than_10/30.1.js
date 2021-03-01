// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.
// Submit the file to Hive.

isGreaterThan10 = function (num) {
    return myPromise = new Promise (function (resolve, reject) {
        if (num > 10) resolve (num);
        else if (num < 10) reject (num); 
        } 
    )

}
//`${num} is greater than 10!`;
//`${num} is less than 10!`;

let checkSeven = isGreaterThan10(7);
let checkten = isGreaterThan10(10);
let checktwelve = isGreaterThan10(12);

checkSeven.then(result => console.log(`${result} is greater then 10!`))
.catch(result => console.log(`${result} is smaller then 10`));

checkten.then(result => console.log(`${result} is greater then 10!`))
.catch(result => console.log(`${result} is smaller then 10`));

checktwelve.then(result => console.log(`${result} is greater then 10!`))
.catch(result => console.log(`${result} is smaller then 10`));

