// Write a function that takes one argument n, an integer.
// Print out all the numbers between 1 to n.
// If the number is only divisible by 7 print “BOOM”
// If the number is divisible by 7 and also includes the digit 7 print “BOOMBOOM”
// If either of the above cases print the number.
// Example of numbers between 1 to 18:
// 1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18

function boom(num) {
    if (num % 7 == 0) {
        if (String(num).includes("7")) return "BOOM-BOOM";
        else return "BOOM";
    }
    else return String(num);
}

function sevenBoom(n) {
    let result = "1";  
    for (i = 2; i <= n; i++) result += ", "+boom(i);
    return result;
}

let num = prompt("Enter en integer");

if (Number.isInteger(Number(num)) && num > 0 ) {
    console.log(sevenBoom(num));
}
else console.log("Error: Invalid input - "+num);
