// You are given two arrays:
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.


const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives", "Apples"];
const food1 = ["Fries", "Ice-cream", "Pizza", "apples", "Olives", "Hamburgers"];


//arr1 should be the longer of the two
function compareArrays(arr1, arr2) {

    let result = [];
    for(i = 0; i < arr1.length; i++) {
        for(j = 0; j < arr2.length; j++) {
            if (arr1[i].toLowerCase() === arr2[j].toLowerCase()) result.push(arr1[i]);
        }
    }
    if (result.length > 0) {
        return result;
    }
    else return false;
}

console.log(compareArrays(food, food1));