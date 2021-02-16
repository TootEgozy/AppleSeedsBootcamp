const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
                    },
    },

    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
                     },
    },

    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
                    },
    },

    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
                  },
    },

    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
                 },
    },
    ];

//1
function getNames(personObject) {
    return personObject.name;
}

function wrapGetNames(myData) {
    return myData.map(getNames);
}

console.log("EXERCISE 1:")
console.log(wrapGetNames(data));
console.log("============================================================");

//2

function getYear(birthdate) {
    let bd = new Date(birthdate);
    return bd.getFullYear();
}

function bornBefore1990(personObject) {
    return (Number(getYear(personObject.birthday)) < 1990)
}

function wrapBornBefore1990(myData) {
    let result = [];
    
    function callbackFilterObjects (personObject) {
        if (bornBefore1990(personObject)) { result.push(personObject);}
    }

    myData.forEach(callbackFilterObjects);
    return result;
}
console.log("EXERCISE 2:")
console.log(wrapBornBefore1990(data));
console.log("============================================================");

function getPersonFoods(personObject) {
    return personObject.favoriteFoods;
}

function mergePersonFoods(personFoodsObject) {
    return personFoodsObject.meats.concat(personFoodsObject.fish);
}

function countFoods(myData) {
    result = {};

    let foodsData = myData.map(getPersonFoods);
    let foodArrays = foodsData.map(mergePersonFoods);

    bigFoodArray = [];
    function callbackBuildBigFoodArray(array) {
        bigFoodArray = bigFoodArray.concat(array);
    }
    foodArrays.forEach(callbackBuildBigFoodArray);

    function callbackBuildResultObj(foodItem) {
        if (foodItem in result) result[foodItem] += 1;  //add 1 to the value count
        else result[foodItem] = 1; //create a new key and the matching value of 1
    }
    bigFoodArray.forEach(callbackBuildResultObj);

    return result;
}

console.log("EXERCISE 3:")
console.log(countFoods(data));
console.log("============================================================");

