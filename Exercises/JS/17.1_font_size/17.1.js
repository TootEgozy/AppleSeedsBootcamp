const text = document.querySelector('.text');
const plusButton = document.querySelector('.button-plus');
const minusButton = document.querySelector('.button-minus');

plusButton.addEventListener('click', larger);
minusButton.addEventListener('click', smaller);

let percent = 100;
let stepPercent = 10;
let maxPercent = 1000;
let minPercent = 60;

function check(newPercent) {
    if (newPercent > maxPercent) return maxPercent;
    else if (newPercent < minPercent) return minPercent;
    else return newPercent;
}

function larger () {
    percent = check(percent+stepPercent);
    text.style.fontSize = `${percent}%`;
}

function smaller() {
    percent = check(percent-stepPercent);
    text.style.fontSize = `${percent}%`;
}