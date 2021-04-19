const fs = require("fs");
const express = require("express");
const router = express.Router();

const employees = [
    {
        id:0,
        name: "Yosi Benayun",
        isActive: true
    },
    {
        id:1,
        name: "Avi Nimney",
        isActive: false
    }
];

const empJson = JSON.stringify(employees);
fs.writeFileSync('employees.json', empJson);

function getEmps () {
    const dataBuffer = fs.readFileSync("employees.json");
    const dataJSON = dataBuffer.toString();
    const emps = JSON.parse(dataJSON);
    return emps;
}

//helper
function addEmp(emp) {
    const emps = getEmps();
    emps.push(emp);

    const dataJSON = JSON.stringify(emps);
    fs.writeFileSync("employees.json", dataJSON);
}

// const newEmp = {
//     id: 8,
//     name: "dede h",
//     isActive: true
// }

function validateAddEmp (emp) {
    const emps = getEmps();
    let isValidId = true;
    let isValidName = true;

    (emp.isActive) ? "" : emp.isActive=false;

    emps.forEach(storedEmp=> {
        if(storedEmp.id === emp.id) {
            isValidId = false;
        }
    });

    let empName = emp.name.split(" ").join("");
    if (empName.length < 4) isValidName = false;

    if (isValidId && isValidName) {
        addEmp(emp);
        return `Employee ${emp.name} successfully added`;
    }
    else if(isValidId) return `Please enter a valid name`;
    else if(isValidName) return `This Id is already in use`;
}

function readEmp(id) {
    const emps = getEmps();

    let srcEmp = emps.find(storedEmp=> {
       return storedEmp.id === id
    });

    return (srcEmp === undefined) ? `Found no employee with id of ${id}` : srcEmp;
}

///Server

const app = express();

app.get('/read/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const emp = readEmp(id);
    res.send(emp);
  })

app.get('/', (req, res) => {
    const emps = getEmps();
    res.send(emps);
  })

  app.post('/add/:id/:name/:isActive', (req, res)=> {
    const newId = parseInt(req.params.id);
    const newName = req.params.name;
    let newIsActive = req.params.isActive;

    // if(newIsActive === 'true') newIsActive = true;
    // else if(newIsActive === 'false') newIsActive = false;
    // else newIsActive = "";

    const newEmp = {
        id: newId,
        name: newName,
        isActive: newIsActive
    }
    validateAddEmp(newEmp)
  })

  app.listen(3000, () => {console.log("working")})
