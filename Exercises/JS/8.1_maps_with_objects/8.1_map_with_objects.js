// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
// 3. Iterate over the Map object with the for..of loop.
// - log the name and id

let obj1 = {name: "Lily"};
let obj2 = {name: "Looloo"};
let obj3 = {name: "Lala"};


let myMap = new Map([[1, obj1], [2, obj2], [3, obj3]]);

myMap.set (1, obj1);
myMap.set (2, obj2);
myMap.set (3, obj3);

for(let elem of myMap.entries()) {
    console.log(`${elem[0]}: ${elem[1].name}`)
}

