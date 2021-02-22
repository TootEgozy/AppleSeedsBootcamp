class Person {
    constructor (_name, _age, _friends = 5, _enemies = 2) {
        this.name = _name;
        this.age = _age;
        this.friends = _friends;
        this.enemies = _enemies;
    }

    toString() {
        return `Name: ${this.name}; Age: ${this.age}`;
    }

    get description() {
        if (this.age > 50) return "old";
        else return "young";
    }
    
    set description(text) {
        if (text === "old") this.age = 55;
        else this.age = 25; 
    }

    set last_interaction(text) {
        if (text === "nice") {
            this.friends++;
            this.enemies--;
        } 
        else if (text === "hostile") {
            this.friends--;
            this.enemies++;
        }
    }

    get mood() {
        if (this.friends > this.enemies)
            return "happy :)";
        else   
            return "grumpy :(";
    }

    static equals(pers1, pers2) {
        return (pers1.mood === pers2.mood && pers1.description === pers2.description)
    }
}

let toot = new Person("Toot",26);
let naama = new Person("Naama",66,6,1);

console.log(toot);
console.log(naama);
console.log(Person.equals(toot,naama));

