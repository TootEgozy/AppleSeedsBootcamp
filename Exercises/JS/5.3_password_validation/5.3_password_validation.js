// Create a simple password validation function that takes a
// password string as an argument.
// If the passwords length is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.
// 1) Create a function that uses a if/else conditional
// expression.
// 2. Create a function that uses a ternary conditional
// expression.
// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”.

let password = prompt("please enter a password");

//1) if / else:
validety1 = (password) => 
{
    if (password.length >= 7) console.log("Strong");
    else console.log("Weak");
}

//2) ternary:
validety2 = (password) => (password.length >= 7)? console.log("Strong") : console.log("Weak");


//3) && logical operator:

validety3 = (password) => {
    if (password.length >= 7) return true 
    else return false;
}

validety3(password) && console.log("Strong");
!validety3(password) && console.log("Weak");


//4) Advanced function:

//Gets a string and return true if it contains am upper case English letter, else return false
hasUpperCase = (str) => (/[A-Z]/).test(str);

function validety4(password) {
    if (hasUpperCase(password) && password.length >= 7) console.log("Very Strong");
    else console.log("Not very strong");
}

validety4(password);