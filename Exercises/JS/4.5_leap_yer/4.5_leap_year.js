// Create a JS function to determine whether or not a given year is a leap year.
// The function should take a year as an argument:
// 1) Determine whether or not it is a leap year
// * If the given year is a leap year, the program should print "It is indeed a
// leap year", otherwise the program will print "This is not a leap year."
// Help:
// every year that is divisible by 4 is a leap year except for the ones that are
// also divisible by 100, unless it is divisible by 400. Example: 2012 is a leap
// year 2100 is not But 2400 is.

// Check if its a leap year:
// must be divisible by 4.
// could be divisible by 100 only if its also divisible by 400.

let year = prompt("Enter a year to check if it's a leap year:")

function isLeap(year) {
    if (year % 4 == 0 && year != 0) {
        if (year % 100 == 0 ) {
            if ( year % 400 == 0) console.log("It is indeed a leap year");
            else console.log("I'ts not a leap year.");
        }
        console.log("It is indeed a leap year"); 
    }
    else console.log("I'ts not a leap year.");
}

isLeap(year);