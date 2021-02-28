// 1. Create three instances of the Pokemon and save them in a variable.

// 2. Using prototype properties, add the following methods:

// • A method called callPokemon that will print the following: “I choose
// you, <pokemon name>

// • A method called attack that takes one parameter, an attack number,
// that will print the specific attack method from the pokemonAttackList
// array as the following: “<pokemon name> used <attack method>”

// Call each pokemon with the 2 methods you created.

function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

let picka = new Pokemon("picka", "electricity", ["lightning", "storm"]);
let flowie = new Pokemon("flowie", "plant", ["poison", "thorn"]);
let cloudiu = new Pokemon("cloudiu", "water", ["overflow", "cry"]);

Pokemon.prototype.callPokemon = function () {
    return this.name+`, I choose you!`;
}

Pokemon.prototype.attack = function (attackIndex) {
    this.attack = this.attackList[attackIndex];
    return this.name+" used "+this.attack;
}

console.log(picka.callPokemon());
console.log(picka.attack(0));

console.log(flowie.callPokemon());
console.log(flowie.attack(1));

console.log(cloudiu.callPokemon());
console.log(cloudiu.attack(1));