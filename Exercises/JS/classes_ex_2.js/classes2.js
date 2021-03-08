class Car {
    constructor(_brand,_speed) {
        this.brand = _brand;
        this.speed = _speed;
    }
    getBrand() {return this.brand;}
    getSpeed() {return this.speed;}
    print() {
        console.log(`brand: ${this.brand}, speed: ${this.speed}`);
    }
    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }

}

class Storage {
    constructor() {
        this.list = [];        
    }
    addCars(_carBrand, _carSpeed) {
      const car = new Car(_carBrand, _carSpeed);
      this.list.push(car);  
    }
    sortCars() {
        this.list.sort((a, b) => (a.speed > b.speed) ? 1 : -1)
    }
}



const myStorage = new Storage;
// const porsh = new Car("Porsh", 300);
// const tarante = new Car("Tarante", 90);
// const suzuki = new Car("Suzuki", 200);
// const mercedes = new Car("Mercedes", 280);

//const cars = [porsh, tarante, suzuki, mercedes];

//return the fastest car (full object)
// const fastest = cars.reduce((acc, car) => {
//     if (car.speed > acc) return car.speed;
//     else return acc;
// });

myStorage.addCars("porsh", 300);
myStorage.addCars("tarante", 80);
myStorage.addCars("suzuki", 150);
myStorage.addCars("mercedes", 250);
myStorage.sortCars();
console.log(myStorage.list);
