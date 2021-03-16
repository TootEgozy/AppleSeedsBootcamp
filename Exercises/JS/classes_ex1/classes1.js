class Animal {
    constructor(_name,_sound) {
        this.name = _name;
        this.sound = _sound;
    }
    getName() {
        return this.name;
    }
    getSound() {
        return this.sound;
    }
    print () {
        console.log(`Animal name: ${this.name}, sound: ${this.sound}`);
    }
}

class Fish extends Animal {
    constructor(_name, _numberOfFins) {
        super(_name,"quiet");
        this.numberOfFins = _numberOfFins;
    }
    
    print() {
        console.log(`Fish name: ${this.name}, sound: ${this.sound}, num of fins: ${this.numberOfFins}`);
        //super.print();
    }

    removeFin() {
        if (this.numberOfFins > 0) this.numberOfFins--;
    }

    numFins() {
        return this.numberOfFins;
    }
}

class Shark extends Fish {
    constructor (_name, _numberOfFins, _cartilageSize) {
        super(_name, _numberOfFins);
        this.cartilageSize = _cartilageSize;
    }

    print() {
        console.log(`Shark name: ${this.name}, sound: ${this.sound}, num of fins: ${this.numberOfFins}, cartilage: ${this.cartilageSize}`);
    }

    biteOffFin(victim) {
        if (victim instanceof Fish) {
            if (victim.numFins() > 0) {
                victim.removeFin();
                console.log("I bit this poor champ "+victim.name+" and took off a fin. They now have "+victim.numFins()+" fins remaining!");
            } else {
                console.log(victim.name+" has no fins left! We did a good job!");
            }
        }
        else {
            console.log(victim.name+" is not a fish so they have no fins! Try finding a fish!");
        }
    }
}

const allie_the_alligator = new Animal("Alligator", "hisssSS");
const samuel_snake = new Animal("Snake", "sSSssSSs");
const ginny = new Animal("Guinea Pig", "Squeel");
const pika = new Animal("Pika", "Eee!");

const myMutatedSalmon = new Fish("Salmie",2);
myMutatedSalmon.print();

const jaws = new Shark("Jawsie",100,15);
const joe = new Shark("joe",1,5);
jaws.print();

jaws.biteOffFin(ginny);
jaws.biteOffFin(myMutatedSalmon);
jaws.biteOffFin(myMutatedSalmon);
jaws.biteOffFin(myMutatedSalmon);

jaws.biteOffFin(joe);
jaws.biteOffFin(joe);
