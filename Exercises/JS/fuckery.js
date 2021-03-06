const starWarsEndPoint = `https://swapi.dev/api`;

 async function getPerson() {
    const peopleArr = [];
    const response = await fetch(`${starWarsEndPoint}/people/1/`);
    const data = await response.json();
    peopleArr.push(data);
    return peopleArr;
}

 function failureCallback(err) {
    console.error("Error: "+err);
}

 function successCallback(result) {
    const nameField = document.createElement("div");
    nameField.id = "jedi";
    nameField = document.getElementById("jedi");
    document.body.appendChild(nameField);
    console.log(result);
    nameField.innerHTML = result[0].name;
}

const promise = getPerson();
const promise2 = promise.then(successCallback,failureCallback);

let jedi = document.getElementById("jedi");
console.log("Jedi name: "+jedi.innerHTML);


//console.log("Person details: "+myPerson);

//console.log(myData);
//async function getPromise () {
//    console.log(await getPerson());
//}



