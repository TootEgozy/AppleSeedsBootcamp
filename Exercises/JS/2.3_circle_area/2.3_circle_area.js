function circleArea (radius) {
    area = Math.PI * radius * radius;
    return area;
}

console.log(`the area is ${circleArea(5)}`);
console.log(`rounded ${parseFloat(area).toFixed(2)}`);