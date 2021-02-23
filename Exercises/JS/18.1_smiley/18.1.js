//function that recives a number that is inputed by the user,
//and sets new html elements "img" for that number.

let imgSrc = 'smiley.png';
let inputFiled = document.querySelector('.input-filed');
let submitBtn = document.querySelector('.submit');
let myP = document.createElement('p');
myP.textContent = "Please enter a positive number";



function handleInput () {
    let input = document.querySelector('.input-filed').value;
    if (typeof Number(input) == "number" && input > 0) {

        console.log(input);
        console.log("creating img");
        for(i = 0; i < input; i++) {
            let myImg = document.createElement('img');
            myImg.src = imgSrc;
            myImg.style.width = '150px';
            document.body.insertAdjacentElement('afterend', myImg);
        }
    }
    else {
        console.log(input);
        console.log("else condition");
           
        //    let myPFragment = document.createRange().createContextualFragment(myP);
        //     myPFragment.classList.add('.error'); this doesnwt work. why?
        //     inputFiled.classList.add('.error');
        document.body.insertAdjacentElement('afterend', myP);
        // inputFiled.style.border = "2px solid red";
        inputFiled.classList.add('.error');
        console.log(inputFiled.classList);
    }
}

function tests () {
    inputFiled.style.border = "2px solid red";
    //inputFiled.classList.add('.error'); this doesnt work. why?

    //let myPFragment = document.createRange().createContextualFragment(myP);

    //document.body.insertAdjacentElement('afterend', myPFragment);
    //myPFragment.classList.add('.error');
    console.log(p);

   

}

submitBtn.addEventListener('click', handleInput);