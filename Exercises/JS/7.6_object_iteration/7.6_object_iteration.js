let myObj = {
    key1:'value1',
    key2:'value2',
    key3:'value3',
   
}

function swapObject(obj) {
    let result = {};

    for (key in obj) {
        result[obj[key]] = key;
    }

    return result;
}

console.log(swapObject(myObj));