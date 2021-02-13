var readlineSync = require('readline-sync');
 
myPerson = {
    name:'Toot',
    numOfRabbits:2,
    female:true,
    city:'Pardes-Hana',
    jobs:{
        type:{
            location:'south',
            paygrade:3
        }
    }
}

myPerson.jobs.type.location 

myPerson[0] = 'blah';
myPerson[1] = 'lol';


myTree = ['blabla','shamaim'];
myTree.something = 'other';
myTree[2] = 'more values';

//console.log(myTree);

let myNumber = 5;
myNumber = 555;

function foo(obj) {
    obj.name = 'Different Name';
}


foo(myPerson);
console.log(myPerson);


//var index =  readlineSync.question("Which property do you want to see? ");
//console.log("Value of "+index+" is: "+myPerson[index]);


