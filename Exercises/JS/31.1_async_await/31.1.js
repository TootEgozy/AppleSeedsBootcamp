// Lets change the code below to use async await instead of .then and .catch
// Understanding the code
// We are faking an API request to a food recipe database.
// Here we are requesting for food recipe Ids.
// We get an array of Ids once consumed.

// wait 1.5 sec and resolve an array of Id's
const getIDs = () =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve([532, 543, 753, 1, 5]);
    }, 1500);
 });
// Here we are fetching a recipe with a given Id.
// We are getting a recipe as an object once consumed.
// Here we are consuming the promise.
// Getting the Ids, then getting a recipe with the id in the index 2.

//get a recpie Id, wait 1.5 sec, then resolve a pseudo object property of
//`ID: recepie title` (in string).
const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
    setTimeout(
        (ID) => {
            const recipe = {
            title: "Fresh tomato pasta",
            publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
    }, 
    1500,
    recipeID
    );
 });
};

// Here we are consuming the promise.
// Getting the Ids, then getting a recipe with the id in the index 2.

async function getRecipeByID () {
    try {
        const IDs = await getIDs();
        console.log("recipie ID: "+IDs[2]);
        const recipe = await getRecipe(IDs[2]);
        console.log(recipe);
    }
    catch(error) {
        console.log("It's an error!");
    }
}
getRecipeByID();

// getIDs()
//     .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//  })
//     .then((recipe) => {
//     console.log(recipe);
//  })
//     .catch((error) => {
//     console.log("It is an error!");
//  });
