// 1. Fill an array with 100 of a same object using array fill
// method.
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
// 3. Convert only values of an object into one array.
// 4. Convert an array into one object.
// 5. Find out if an array is an array.
// 6. Copy an array.
// • Create a copy of an array that won’t effect the original
// array if modified.
// • Create a copy of an array that will effect the original
// array if modified.

//1)

let hundred = new Array(100).fill("hi");


//2)

let arr =[];
//create an array of numbers 1-100

let start = 1;
let stop = 100;
let step = 1;

let range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

console.log(range(1, 100, 1));


//5)
console.log(Array.isArray("d"));

//6)
let letters = ["a", "b", "c"];

//non-modifying
let lettersCopy = [...letters];

//modifying
let letters2 = letters;

