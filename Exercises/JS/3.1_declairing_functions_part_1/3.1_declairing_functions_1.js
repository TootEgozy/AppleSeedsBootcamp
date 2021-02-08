/*
JavaScript - Declaring Functions
The following exercise contains the following subjects:
    * functions

Instructions
    * Please reformat the following function declarations to function expression.
    * Please reformat the following function expressions to function declarations.
Submit the file to Hive
*/

// From function declarations to function expressions

let welcome = () => 'Welcome to Appleseeds Bootcamp!';
// console.log(welcome());

let result = (a) => Math.pow(a, 2);
// console.log(result(3));

let add = (a, b=5) => a + b ;
// console.log(add(5));


// From function expressions to function declarations

function hello() {
    console.log("Hello!");
}
// hello();

function squareRoot(a) { return Math.sqrt(a); }
// console.log(squareRoot(9));

function randomNumbers(a, b) {
    return Math.random() * (a-b) + b;
}
// console.log(randomNumbers(2, 3));


