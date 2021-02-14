// 1. Who can add key and value pairs faster in a for loop?
// • Create an empty Object and assign it to a variable.
// • Create a start timer for your object to be measured.
// • Create a for loop that will iterate a million times. Inside
// your for loop on each iteration create a new key, value
// pair to your object using the variable I.
// • Do the same procedure for a Map object.
// • Compare the times.
// You may be surprised from the results :)
// 2. Who can find faster a specific property from itself?
// Now that we populated 100000 properties to our
// object’s find the following:
// • Find out how long time would it take for the Object to
// find a specific property from itself.
// • Find out how long time would it take for the Map to find
// a specific property from itself.
// 3. Who is faster in adding a single entry?
// 4. Who is faster in deleting a single entry?

//1)
//million properties for an object
let obj = {};

console.time();
for(i = 0; i < 1000000; i++) {
    obj[i] = [i]
}
console.log("million for obj");
console.timeEnd();


//Million properties for a map
let myMap = new Map();
console.log(myMap);

console.time();
for(i = 0; i < 1000000; i++) {
    myMap.set([i], [i]);
}
console.log("million for map");
console.timeEnd();

//2)
//Get middle propertie for an object:
console.time();
console.log(obj[500000]);
console.log(" middle prop for obj");
console.timeEnd();


//get middle propertie for a map:
console.time();
console.log(myMap[500000]);
console.log("middle prop for map");
console.timeEnd();

//3)
//Add a single entry for an object

console.time();
obj.foo="bar";
console.log("set a new entry for object");
console.timeEnd();


//Add a single entry for a map
console.time();
myMap.set("a", "AAA");
console.log("set a new entry for map");
console.timeEnd();

//5)
//Delete a property from an object
console.time();
delete obj.foo;
console.log("delete a property from object");
console.timeEnd();

//Delete a property from a map
console.time();
myMap.delete("a");
console.log("delete a property from map");
console.timeEnd();

//results
// million for obj
// 8.2_performance.js:29 default: 406.076171875 ms
// 8.2_performance.js:40 million for map
// 8.2_performance.js:41 default: 243.63720703125 ms

// 8.2_performance.js:47  middle prop for obj
// 8.2_performance.js:48 default: 0.370849609375 ms
// 8.2_performance.js:54 middle prop for map
// 8.2_performance.js:55 default: 0.259033203125 ms

// 8.2_performance.js:62 set a new entry for object
// 8.2_performance.js:63 default: 0.1220703125 ms
// 8.2_performance.js:69 set a new entry for map
// 8.2_performance.js:70 default: 0.10205078125 ms

// 8.2_performance.js:76 delete a property from object
// 8.2_performance.js:77 default: 0.157958984375 ms
// 8.2_performance.js:82 delete a property from map
// 8.2_performance.js:83 default: 0.092041015625 ms