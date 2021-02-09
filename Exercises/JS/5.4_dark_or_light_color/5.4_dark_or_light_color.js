// Instructions
// Create a function that receives one argument, a string color.
// Create a switch statement that:
// 1. If the color is yellow, pink or orange return from the function “light color”.
// 2. If the color is blue, purple, brown return from the function “dark color”.
// 3. If the color is none of the above return “Unknown color”.
// Note:
// It shouldn’t be case sensitive

let myColor = prompt("Enter a color");

function colorType(color) {

    color = color.toLowerCase();
    switch (color) {

        case ("yellow"):
        case ("pink"): 
        case ("orange"):
            return console.log ("Light color");
            
        case ("blue"):
        case ("purple"):
        case ("brown"):
            return console.log("Dark color");

        default:
            return console.log("Unknown color");
    }
}

colorType(myColor);