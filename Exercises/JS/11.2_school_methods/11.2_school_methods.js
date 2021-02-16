const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    {
    id: 3,
    name: "Michael",
    subjects: ["history","ethics","biology"],
    students: [],
    capacityLeft: 5,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
   };


/*
   school: object
   -> teachers: array of teacher objects
      -> teacher object:
         -> id: number
         -> name: string
         -> subjects: array of strings
         -> students: array of student objects
         -> capacityLeft: number
   -> students: array of student objects
       -> student object:
         -> id: number
         -> name: string 
         -> age: number
*/

///////Take the school object and create the following methods to that object:


// 1. A method called “findPerson” that takes two arguments,
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.

function findObject(array,ID) {
    return array.find(arrayObject => arrayObject.id === ID) 
}

school.findPerson = function(myType, myID) {
    if (myType === "teacher") {
        return findObject(this.teachers,myID);
    }
    else if (myType === "student") {
        return findObject(this.students,myID);
    }
    else return null;
}

//console.log(school.findPerson("student",10));

// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject.
// Assign all of the students to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left”.

// find a teacher with subject
// check capacityLeft > 0
// assign student to that teacher

school.findTeachersWithSubject = function(subjectToFind) {
    let result = [];

    function callbackFindTechers(teacherObject) {
        if (teacherObject.subjects.includes(subjectToFind)) {
            result.push(teacherObject);
        }
    }

    this.teachers.forEach(callbackFindTechers);

    return result;
}

school.assignStudent = function(studentID,subject) {
    let potentialTeachers = this.findTeachersWithSubject(subject);
    let teacherFound = false;
    let studentObj = this.findPerson("student", studentID);
    let teacherName = "";

    for (i = 0; i < potentialTeachers.length; i++) {
        if (potentialTeachers[i].capacityLeft > 0 && !teacherFound) {
            teacherFound = true;
            potentialTeachers[i].students.push(studentObj);
            potentialTeachers[i].capacityLeft--;
            teacherName = potentialTeachers[i].name;
        }
    }

    if (teacherFound) {
        console.log("Student "+studentObj.name+" successfully assigned to teacher "+teacherName);
    }
    else {
        console.log("Sorry, no available teacher found.");
    }
}

//console.log(school.findTeachersWithSubject("ethics"));

school.assignStudent(10,"history");
school.assignStudent(11,"history");
school.assignStudent(12,"history");
school.assignStudent(13,"history");

console.log(school.findPerson("teacher",2));

// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects

school.assignTeacherSubject = function(teacherID, subject) {
    let teacherObj = this.findPerson("teacher", teacherID);
    if (!teacherObj.subjects.includes(subject)) teacherObj.subjects.push(subject);
}

// 4. Create a new method of anything you want.

school.fireTeacher = function(teacherID) {
    let teacherIndex = -1;

    for(i = 0; i < this.teachers.length; i++) {
        if (this.teachers[i].id === teacherID)
        teacherIndex = i;
    }

    if (teacherIndex > -1) this.teachers.splice(teacherIndex, 1);
}

school.fireTeacher(2);
console.log(school.teachers);

// school.assignTeacherSubject(3, "biology");
// console.log(school.findPerson("teacher", 3));


