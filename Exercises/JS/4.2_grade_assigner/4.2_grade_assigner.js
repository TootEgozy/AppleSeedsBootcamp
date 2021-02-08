// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A
// Submit the file to Hive.

myGrade = (grade) => {
    grade = prompt("Enter your numeral grade:");
    
    
    // if (grade !== 0 && (Number.isInteger(grade) === false || grade === null || grade === "")) return console.log("Error - no grade was enterd");
    // I will solve this challenge later :)
    if ( Number(grade) <= 64) return console.log("F");
    else if (Number(grade) <= 69) return console.log("D");
    else if (Number(grade) <= 79) return console.log("C");
    else if (Number(grade) <= 89) return console.log("B");
    else if (Number(grade) <= 100) return console.log("A");
    else if (Number(grade) > 100) return console.log("NO way");
}
myGrade();