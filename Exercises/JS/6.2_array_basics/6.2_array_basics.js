// For each of the questions below, answer the question’s with this array:
// const people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all of the people.
// 2. Write the command to remove "Greg" from the array.
// 3. Write the command to remove "James" from the array.
// 4. Write the command to add "Matt" to the front of the array.
// 5. Write the command to add your name to the end of the array.
// 6. Using a loop, iterate through this array and after console.log-ing "Mary",
// exit from the loop.
// 7. Write the command to make a copy of the array using slice. The copy
// should NOT include "Mary" or "Matt".
// 8. Write the command that gives the indexOf where "Mary" is located.
// 9. Write the command that gives the indexOf where "Foo" is located (this
// should return -1).
// 10. Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth"
// const people = ["Greg", "Mary", "Devon", "James"];
// and "Artie". Your array should look like this when you are done ["Greg",
// "Mary", "Elizabeth", "Artie", "James"].
// 11. Create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob".

let people = ["Greg", "Mary", "Devon", "James"];

//1)
//for (i = 0; i < people.length; i++) console.log(people[i]);

//2)
people.shift(1);

//3)
people.pop();

//4)
people.push("Matt");

//5)
people.push("Toot");

//6)

// for (i = 0; i < people.includes("Mary"); i++) {
//     console.log(people[i]);
    
// }

//7)
people1 = people.slice(1,2);
people2 = people.slice(3);

peopleNew = people1.concat(people2);

//8)
people.indexOf("Mary");


//9)
people.indexOf("foo");

//10) ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1, "Elizabeth", "Artie");

//11) Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

let withBob = people.concat("Bob");

console.log(withBob);