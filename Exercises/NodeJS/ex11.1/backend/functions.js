const fs = require("fs");

const getUsersList = function () {
    const dataBuffer = fs.readFileSync('./users.json');
    const dataJSON = dataBuffer.toString();
    const users = JSON.parse(dataJSON);
    return users;
}

const addUser = function(user) {
    const users = getUsersList();

    users.push(user);
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync("./users.json", dataJSON);
    return "user added";
}

const validateUser = function({id, cash=0, credit=0, isActive=false}) {
    
    const userExsists = isUser(id);

    if (userExsists) return false;

    else if(id == null) return false;

    else if (!id.length == 9) return false;

    else if(cash < (credit*(-1))) return false;

    else return true;
}

const deleteStudent = function(studentID) {
    const students = getStudentsList();
    const filtered = students.filter(student => {
       return student.id !== studentID;
    })
    
    const dataJSON = JSON.stringify(filtered);
    fs.writeFileSync("studentsData.json", dataJSON);
    return "student deleted";
}

const getUser = function(userId) {
    const users = getUsersList();
    const user = users.find(user => {
        return user.id === userId;
    });
    return user;
}

const editStudent = function(studentID, name, capsule, email) {
    const student = readStudent(studentID);
    if(name) student.name = name;
    if(capsule) student.capsule = capsule;
    if(email) student.email = email;

    deleteStudent(studentID);
    addStudent(student);
    console.log(getStudentsList());
}

const isUser = function(id) {
    const users = getUsersList();
    const user = users.find(s=> {
       return s.id == id
    });

    return (typeof(user)!=='undefined');
}


module.exports = {
    getUsersList: getUsersList,
    getUser: getUser,
    isUser: isUser,
    validateUser: validateUser,
    addUser : addUser

}