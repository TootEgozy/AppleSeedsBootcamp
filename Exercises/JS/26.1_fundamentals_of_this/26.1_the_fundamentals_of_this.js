// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)

console.log(this);

//"this" will point to the window object because there is
//no object binded to "this"

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.

 const myObj = {
  name: "Timmy",
  greet: () => {
  console.log(`Hello ${this.name}`);
  },
 };
 myObj.greet();

 const myObj2 = {
  name: "Timmy",
  greet: function () {
  console.log(`Hello ${this.name}`);
  },
 };
 myObj2.greet();

//the object methode is written in arrow sintax, meaning that the 
//"this" inside of the method doesnt recive the object myObj - but the
//window object. fixed code above


// Question 3:
// In your own words what will this point to and why?

const myFuncDec = function () {
       console.log(this);
};
myFuncDec();
//this will still point to the window becaust the function is not bounded
//to an element 


// Question 4:
// In your own words what will this point to and why?

const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();

//this will still point to the window becaust the function is not bounded
//to an element, and the element above it is the window


// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.

let elements = document.getElementsByTagName("*");

console.log("I'm element" +elements)
elements.addEventListener('click', function () {
    console.log(this);
});

//I guess "this" will point to the window because of the arrow
//syntax and no parent element / function.
//or mabye it will point to the "element" prototype.
//to fix the code I selected all the elements in the page
//and changed the synax to a function calling.


