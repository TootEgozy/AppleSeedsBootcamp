// Without running the code below, explain in your own words what the result
// of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.


//Block 1

function funcA() {
 console.log(a); //will not log, because JS hoists only the variable decleration itself and not the value 
 console.log(foo()); //will log
 var a = 
 function foo() {
 return 2;
 }
}
funcA();


//Block 2

var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName()); // will log only Aurelio De Rosa, because .this refers to the object prop,
//and this fullname is defined in the object last. 
var test = obj.prop.getFullName;
console.log(test());

//Block 3

var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName()); //will log only "Aurelio..." because its the only fullname on prop
var test = obj.prop.getFullName;
console.log(test()); // this is logging the method itself, will return undefined
function funcB() {
 let a = b = 0;
 a++;
 return a;
}
funcB(); // will log 1
console.log(typeof a); //will log a number
console.log(typeof b); // will log undefind, B is not declared

//Block 4

function funcC() {
    console.log("1"); 
   }
   funcC();
   function funcC() {
    console.log("2");
   }
   funcC(); // the second decleration of the function will get the execution. 
   //will log "2"

   //Block 5

   function funcD1() {
    d = 1;
   }
   funcD1();
   console.log(d);
   function funcD2() {
    var e = 1;
   }
   funcD2();
   console.log(e); // would not log "e", because it was declared inside a function and not in the global scope.

   //Block 6

   function funcE() {
    console.log("Value of f in local scope: ", f); // will log f, the function have access to the global variables
   }
   console.log("Value of f in global scope: ", f); // will log undefined, because when the console log is executed, the decleration  of f was hoisted,
   //but not the value.
   var f = 1;
   funcE();