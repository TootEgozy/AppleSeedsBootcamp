

class Points {
    constructor(_x,_y) {
        this.x = _x;
        this.y =_y;
    }
    get X () {
        return this.x;
    }
    get Y () {
        return this.y;
    }
    addToX (val) {
      this.x += val; 
    }
    addToY (val) {
        this.y += val;
    }
    setX (newX) {
        this.x = newX;
    }
    setY (newY) {
        this.y = newY;
    }
    addPoint (point) {
        this.x += point.x;
        this.y += point.y;
    }
    isSame (point) {
        if(point.x === this.x && point.y === this.y) 
            return true;
        else return false;
    }
    print () {
        console.log(`x: ${this.x}, y: ${this.y}`);
    }
}

//  console.log(point1.X);
//     point1.addToX(3);
// console.log(point1);
// point1.setX(10);
// point1.setY("hey");
// console.log(point1);
// console.log(point1);
// console.log(point2);
// point1.addPoint(point2);
// console.log(point2.isSame(point1));
// point3.print();
 //console.log(point1.Y);

 class PointWorld {
     constructor () {
         this.pointsList = [];
     }
     addPoint (point) {
         this.pointsList.push(point);
     }
     printList () {
         console.log(this.pointsList);
     }
     sortByY () {
        this.pointsList.sort((a, b) => (a.y - b.y));
     }
     removeDoubles () {
       const newPoints = [];
       for (let i = 0; i<this.pointsList.length; i++) {
        if (!myIncludes(this.pointsList[i], newPoints)) {
            console.log("not included: ");
            console.log(this.pointsList[i]);
            newPoints.push(this.pointsList[i]);
        }
       }
       return newPoints;
     }
     sumX () {
        let sum = 0;
         for(let i = 0; i<this.pointsList.length; i++) {
            let currentX = this.pointsList[i].x;
            sum += currentX;   
         }
        return sum;
     }
     isIncluded (point) {
        for( let i = 0; i<this.pointsList.length; i++) {
            if(this.pointsList[i].isSame(point)) return true;
        }
        return false;
     }
 }


 function myIncludes (point, arr) {
     for (i = 0; i<arr.length; i++) {
        if(arr[i].isSame(point)) return true;
     }
     return false;
 }
 
const point1 = new Points(3, 5);
const point2 = new Points(2, 1);
const point3 = new Points(2, 2);
const point4 = new Points(8, 0);
const point5 = new Points(4, 7);
const point6 = new Points(2, 2);
const point7 = new Points(8, 0);
const point100 = new Points(50, 50);

const points = new PointWorld;
points.addPoint(point1);
points.addPoint(point2);
points.addPoint(point3);
points.addPoint(point4);
points.addPoint(point5);
points.addPoint(point6);
points.addPoint(point7);
//points.printList();
points.sortByY();
//points.printList();
console.log("_________________8_____________________");
//points.printList();
//console.log(points.removeDoubles());
points.printList();
//console.log(points.sumX());
console.log(points.isIncluded(point100));
console.log(points.isIncluded(point2));



