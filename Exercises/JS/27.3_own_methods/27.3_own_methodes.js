//array.filter(function(currentValue, index, arr), thisValue)

//what does filter do?
//1.iterates over an array (use for loop)
//2. implementing a function on each array item
//3. the function should output true / false
//4.if true, filter pushes the item into new array
//5.returns the new array with some of the items

let myArr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

Array.prototype.myFilter = function (callbackFunc) {

    result = [];

    for(i = 0; i < this.length; i++) {
        if(callbackFunc(this[i], i, this))
            result.push(this[i]);
    }
    return result;
}

function checkEven (item) {
    return (item % 2 == 0 );    
}


Array.prototype.myFind = function (callbackFunc) {
    
    for(i = 0; i < this.length; i++) {
        console.log(callbackFunc(this[i]));
        if (callbackFunc(this[i], i, this)) return this[i];
    }
}

function dividesBy3 (item) {
    return (item % 3 == 0);
}

//arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
Array.prototype.myReduce = function (callbackFunc, initialValue = undefined) {
    
    if (this.length < 2) return this[0];

    let accumulator;
    let startIndex;
    if (initialValue === undefined) {
        startIndex = 1;
        accumulator = callbackFunc(this[0],this[1],startIndex,this);
    } else {
        startIndex = 0;
        accumulator = callbackFunc(initialValue,this[0],startIndex,this);
    }

    for(i = startIndex+1; i < this.length; i++) {
        accumulator = callbackFunc(accumulator,this[i],i,this);
    }

    return accumulator;
}




function sumArr (acc, currentVal) {
    return acc += currentVal;
}

console.log(myArr);
console.log(myArr.myFilter(checkEven));
console.log(myArr.myFind(dividesBy3));
console.log(myArr.myReduce(sumArr,5));

