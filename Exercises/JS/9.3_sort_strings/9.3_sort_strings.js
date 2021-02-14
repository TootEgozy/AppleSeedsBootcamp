//a

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.sort());

console.log(foods.sort(function (first, second) {
    if (first > second) return -1;
    else if (first < second) return 1;
    else return 0;
}));

//b

const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

console.log(foodsWithUpperCase.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}));

console.log(foodsWithUpperCase.sort(function (a, b) {
    return b.toLowerCase().localeCompare(a.toLowerCase());
}));

//c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(words.sort((a, b) => a.length - b.length));
