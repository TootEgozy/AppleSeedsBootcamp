const fs = require("fs");

const getStudentsList = function () {
    const dataBuffer = fs.readFileSync("studentsData.json");
    const dataJSON = dataBuffer.toString();
    const students = JSON.parse(dataJSON);
    return students;
}

const addStudent = function(student) {
    const students = getStudentsList();

    students.push(student);
    const dataJSON = JSON.stringify(students);
    fs.writeFileSync("studentsData.json", dataJSON);
    return "student added";
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

const readStudent = function(studentID) {
    const students = getStudentsList();
    const student = students.find(student => {
        return student.id === studentID;
    });
    return student;
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

const isStudent = function(id) {
    const students = getStudentsList();
    const student = students.find(s=> {
       return s.id === id
    });

    return (typeof(student)!=='undefined');
}


module.exports = {
    getStudents: getStudentsList,
    addStudent: addStudent,
    deleteStudent: deleteStudent,
    readStudent: readStudent,
    editStudent: editStudent,
    isStudent: isStudent
}