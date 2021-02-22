// Without running the code below, explain in your own words what the result
// of each block of code will be and why.

//Block 1

var b = 1;
function someFunction(number) {
 function otherFunction(input) {
 return b;
 }
 b = 5;
 return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
//Nothing will be logged. this is not the correct way to write a closure. 

//Block 2

var a = 1;

function b2() {
 a = 10;
 return;
 function a() { }
}

b2();
console.log(a);
// will log 1, a does not get updated because the function treats a as an innet variable.

//Block 3

let i;
for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100);
}
// will log i 3 times, because there is a delay on the log function, it might show
//i in the final value only. 