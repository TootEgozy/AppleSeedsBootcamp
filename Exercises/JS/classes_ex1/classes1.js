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
        console.log(`name: ${this.name}, sound: ${this.sound}`);
    }
}

const alligator = new Animal("Alligator", "hisssSS");
const snake = new Animal("Snake", "sSSssSSs");
const guinapig = new Animal("Guina Pig", "Squill");
const pika = new Animal("Pika", "Eee!");

pika.print();
snake.print();
guinapig.print();
alligator.print();
