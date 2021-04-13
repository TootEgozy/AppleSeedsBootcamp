const fs = require("fs");
const express = require("express");
const http = require('http');
const router = express.Router();

const studentsMethods = require("./functions");

// creating my json file
const students = [
    {
        id: 1,
        name: 'Toot',
        capsule: 5,
        email: "tootegozy@gmail.com"
    },
    {
        id: 2,
        name: 'Mirale',
        capsule: 5,
        email: "mirale@gmail.com"
    },
    {
        id: 3,
        name: 'Zehava',
        capsule: 5,
        email: "zehava@walla.com"
    },
    {
        id: 4,
        name: "Foad",
        capsule: 5,
        email: "foad@yahoo.co.il"
    },
    {
        id: 5,
        name: "Nethanel",
        capsule: 5,
        email: "nethanel@gmail.com"
    },
    {
        id: 6,
        name: "Yana",
        capsule: 5,
        email: "yana@yahoo.co.il"
    }
];
const studentsJson = JSON.stringify(students);
fs.writeFileSync('studentsData.json', studentsJson);

// const list = studentsMethods.getStudents();
// console.log(list);
// studentsMethods.addStudent(100, "lili", 18, "email");
// studentsMethods.deleteStudent();
// console.log(studentsMethods.readStudent(3));
// studentsMethods.editStudent(6, "YAYA", 8, "YAYA@gmail.com");
// studentsMethods.editStudent(6, "Yana", 5, "yana@yahoo.co.il");
// console.log(studentsMethods.isStudent(5));
// console.log(studentsMethods.isStudent(100));

//starting up my server

let currID=6;

function newID() {
    return(++currID);
}



const app = express();

app.get('', (req, res)=> {
    res.send(studentsMethods.getStudents());
})

app.get('/read/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = studentsMethods.readStudent(id);
    res.send(student);
  })
  
app.post('/create/:name/:capsule/:email', (req, res) => {
    const id = newID();
    const name = req.params.name;
    const capsule = parseInt(req.params.capsule);
    const email = req.params.email;

    const newStudent = {
        id: id,
        name: name,
        capsule: capsule,
        email: email
    }
    studentsMethods.addStudent(newStudent);
    res.send("New student created!");
  })

app.post('/edit/:id/:name/:capsule/:email', (req, res) => {
    const id = parseInt(req.params.id);
    const name = req.params.name;
    const capsule = parseInt(req.params.capsule);
    const email = req.params.email;

    if (studentsMethods.isStudent(id)) {

        const newStudent = {
            id: id,
            name: name,
            capsule: capsule,
            email: email
        }

        studentsMethods.deleteStudent(id);
        studentsMethods.addStudent(newStudent);
        res.send("Student updated!");
    } else {
        res.send("Student with id "+id+" does not exist.");
    }
  })

  app.delete('/delete/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    studentsMethods.deleteStudent(id);

    res.send("deleted");
  })
    
  

  app.listen(3000, () => {console.log("working")})

