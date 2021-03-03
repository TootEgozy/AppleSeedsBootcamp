const index = `people/1/`
const endPoint = `https://swapi.dev/api/${index}`;

async function getPersonObject () {
    const response = await fetch (endPoint);
    const data = await response.json();
    data.mass = 50;
    console.log(data);
}

function handleError (err) {
    console.log(`Oh no! an error`+err);
}

getPersonObject().then();

