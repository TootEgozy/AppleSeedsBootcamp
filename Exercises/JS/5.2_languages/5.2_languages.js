// 1. Create a function that takes one parameter, a language.
// 2. Use a switch statement to log the following string for the
// given 'language':
// mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Not in the top 5'

function checklang(){

let lang = prompt("Please enter a language");

console.log(lang);

switch (lang) {
    case ("Mandarin"):
        console.log("Most number of native speakers!");
        break;
    
    case ("Spanish"):
        console.log("2nd place in number of native speakers");
        break;

    case ("English"):
        console.log("3rd place");
        break;

    case ("Hindi"):
        console.log("Number 4");
        break;

    case ("Arabic"):
        console.log("5th most spoken language");   
        break;
        
    default:
        console.log(`Not in top 5.
        Note: the program is case-sensitive.`);
}
}
checklang();
