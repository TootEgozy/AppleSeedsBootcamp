// Create a function that takes one argument, an array.
// Use this array:
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive
// const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
// "hamburgers"];
// Extra:
// return the letter with the most occurrences as well

const words = ["Heeeello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

function filterLetters(arr) {
    let letters ={};

    //de-construct the array into a new array of single letters in lowercase
    let tempStr = arr.join("").toLowerCase();
    let tempArr = Array.from(tempStr);
   
    //a loop to go over the letters array and sort the letters;
    for(i = 0; i < tempArr.length; i++) {
        if (tempArr[i] in letters) letters[tempArr[i]]++;
        else letters[tempArr[i]]=1;
    }

    delete letters[' '];
    return letters;
}


function maxLetter(letterObject) {
    let frequencies = [];
    for (letter in letterObject) {
        frequencies.push(letterObject[letter]);
    }

    let maxFreq = Math.max(...frequencies);
    let result = {};

    for (letter in letterObject) {
        if (letterObject[letter] == maxFreq) 
            result[letter] = maxFreq;
    }

    return result;
}

let letters = filterLetters(words);
console.log(letters);
console.log(maxLetter(letters));


