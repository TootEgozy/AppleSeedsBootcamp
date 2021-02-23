
let textBox = document.querySelector(".text-box");

let button = document.querySelector(".submit");

let errorText = document.querySelector(".error");

button.addEventListener('click', submit);

function submit() {

    if (textBox.value.length < 100) {
        errorText.innerHTML = "Please enter at least 100 chars";
        textBox.style.border = "2px solid red";
    }
}



