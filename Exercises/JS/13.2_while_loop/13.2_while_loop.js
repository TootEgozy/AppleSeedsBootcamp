// 1. Recreate the challenge from the exercise 6.4-
// looping_with_arrays ,but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the
// for loop or the while loop?

/////////////////////////////////////////////////////////

// 1. Create an array containing 4 population values of 4 countries of
// your choice.
// Store this array into a variable called 'populations'
// 2. Create a function called ‘populationPercentages’ that takes the
// population array as an argument.
// 3. Inside the function, create an empty array called ‘percentages’.
// 4. Use a for loop to iterate over the population array you received
// as an argument..
// 5. On each iteration use the function we created earlier (module 3,
// ex.3.3-declarations vs expressions) for each element of the array.
// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array


//The function from ex3.3, recives a population and returns the precentage from the world population (according to feb 2021).
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}


//Populations of the countries Yemen, Poland, Mongolia, Guinea, china.
let populations = [28.5, 38, 3, 12.5, 1442];

//A function that recives an array of populations and returns an array of the precentages of the populations. 
function populationPrecentages(array) {
    let precentages = [];
    let arrIndex = 1;
    while (arrIndex < array.length) {
        precentages.push(percentageOfWorld1(array[arrIndex]));
        arrIndex++;  
    }
    return precentages;
}

console.log(populationPrecentages(populations));


//It was much easier to use a for loop for this exercise, because the for loop has a build-in counter,
//while the while loop needs to have a flag/ counter entered manually. The same upplies to the index.