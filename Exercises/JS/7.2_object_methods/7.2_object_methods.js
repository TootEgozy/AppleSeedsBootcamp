// 1. Create an object called ‘mycountry’ for a country of your choice,
// containing properties ‘country’, ‘capital’, ‘language’, ‘population’
// and ‘neighbours’ (an array)
// 2. Add a method to the object called 'describe' to the 'myCountry'
// object. With the help of the ‘this’ keyword, this method will log a
// string like this to the console:
// ‘Finland has 6 million people, their mother tongue is Finnish, they
// have 3 neighbouring countries and a capital called Helsinki’.
// 3. Call the ‘descrbie method’.
// 4. Add a method called 'checkIsland' to the 'myCountry' object.
// This method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and
// false if there are. Use the ternary operator to set the property.

let myCountry = {
    country: "USA",
    capital: "Washington D.C.",
    language:"English",
    population: 328,
    neighbours: ["Canada", "Mexico"],
    checkIsland: function () {this.neighbours.length == 0 ? this.isIsland=true : this.isIsland=false},
    describe: function() {
        return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}’.`
    }
}

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);