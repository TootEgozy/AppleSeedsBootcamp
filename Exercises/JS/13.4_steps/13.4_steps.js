// Write a function that has one argument, a positive integer.
// Lets call it N.

// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right hand side if empty!

// Examples:

// steps(2)
// ‘# ‘
// ‘##’
// steps(3)
// ‘# ‘
// ‘## ‘
// ‘###’
// steps(4)
// ‘# ‘
// ‘## ‘
// ‘### ‘
// ‘####’

// Notice that if each step is not populated by a step it should
// consist an empty space. For example if n = 3:

// steps(3)
// ‘# ‘ ←-- 2 empty spaces
// ‘## ‘ ←-- 1 empty space
// ‘###’

// Ninja:
// You are not allowed to use the repeat method. Use 2 loops
// instead


function dashes (n) {

    for(i = 1; i <= n; i++) {
            console.log("#".repeat(i) + " ".repeat(n-i));
    }
}

function steps (n) {

    let step = [];
    for (i = 0; i< n; i++) step.push(" ");
    // creates an array with n spaces: [" ", " ", " "]

    for (i = 0; i<n; i++) {
        step[i] = '#';
        console.log(step.join(""));
    }
}

steps(33);