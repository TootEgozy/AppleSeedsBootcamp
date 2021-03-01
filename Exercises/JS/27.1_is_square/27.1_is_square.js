//Using prototype properties, add a method to Square named isSquare that
//prints true if a Square object has equal edges and false if they are unequal.
//Here is the Square function:

function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function () {
    if (this.a == this.b == this.c == this.b) return true;
    else return false;
}

//adding a property just for testing.
Square.prototype.yummy = true;

//remember, you call the object *prototype* methods only
//on the objects that were created from the tamplate,
//not on the template itself

let mySquare = new Square(1,1,1,1);
let myRectangle = new Square(1,2,1,2);

let myYummySquare = new Square(4,4,4,4);

console.log(mySquare.isSquare());
console.log(myRectangle.isSquare());
