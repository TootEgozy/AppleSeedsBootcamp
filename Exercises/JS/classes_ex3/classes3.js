class PrineNum {
    constructor() {
      this.numList = [];  
    }
    addNum(num) {
        for(let i = 2; i < num; i++) {
            if (num % i === 0) return false;
            else {
                this.numList.push(num);
                return true;
            }
        }
        
    }
    removeNum(num){
        const index = this.numList.indexOf(num);
        return (this.numList.splice(index,1))? true : false;
    }
    get all (){
        return this.numList;
    }
    print () {
        console.log(this.all);
    }
    share (primes) {
        const myList = this.numList;
        const otherList = primes.numList;
        let counter = 0;
        myList.forEach(num => {
            if (otherList.includes(num)) counter++
        })
        return counter;
    }
    union (primes) {
        const myList = this.numList;
        const otherList = primes.numList;
        for (let i = 0; i<myList.length; i++) {
            if(!otherList.includes(myList[i])) {
                otherList.push(myList[i]);
            }
        }
        return otherList;
    }
}

let primes1 = new PrineNum;
let primes2 = new PrineNum;
let primes3 = new PrineNum;
primes1.addNum(7);
primes1.addNum(11);
primes1.addNum(3);
primes1.addNum(5);

primes2.addNum(23);
primes2.addNum(17);

primes3.addNum(27);
primes3.addNum(31);
primes3.addNum(29);
primes3.addNum(7);
primes3.addNum(3);
primes3.addNum(5);

// console.log(prime.addNum(8));
// console.log(prime.removeNum(5));
// console.log(prime.removeNum(7));
// console.log(prime.all);
// primes1.print();
// primes2.print();
primes1.print();
primes3.print();
console.log(primes3.union(primes1));