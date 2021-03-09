class Task {
    static counter = 0
    constructor (_taskStr) {
        this.id = Task.counter++,
        this.text = _taskStr,
        this.isCompeleted = false
    }
}

class ToDoList {
    static counter = 0;
    constructor(_titleStr) {
        this.id = ToDoList.counter++,
        this.title = _titleStr
        this.tasksList = []
    }
    newTask (taskStr) {
        const task = new Task(taskStr);
        this.tasksList.push(task);
        return task.id;
    }
    getTaskById(id) {
        for(let i = 0; i < this.tasksList.length; i++) {
            if (this.tasksList[i].id == id) {
                return this.tasksList[i];
            }
        }
        return null;
    }
    editTask(str, id) {
        const task = this.getTaskById(id);
        task.text = str; 
    }
    taskDone(id) {
        const task = this.getTaskById(id);
        task.isCompeleted = true;
    }
    taskUndone(id) {
        const task = this.getTaskById(id);
        task.isCompeleted = false;
    }
    getIndex(id) {
        let index = -1;
        for (let i = 0; i< this.tasksList.length; i++) {
            const task = this.tasksList[i];
            if(task.id == id) index = i;
        }
        return index;
    }
    deleteTask(id) {
        let index = this.getIndex(id);
        this.tasksList.splice(index, 1);
    }
}

class Lists {
    static counter = 0
    constructor() {
        this.id = Lists.counter++,
        this.lists = []
    }
    addList(list) {
        this.lists.push(list);
    }
    newlist (listTitle) {
        const list = new ToDoList(listTitle);
        this.lists.push(list);
        return list.id;
    }
    getListsByTitle(str) {
        let lists = [];
        for(let i = 0; i < this.lists.length; i++) {
            if (this.lists[i].title == str) {
                lists.push(this.lists[i]);
            }
        }
        return lists;
    }
    getlistById(id) {
        for(let i = 0; i < this.lists.length; i++) {
            if (this.lists[i].id == id) {
                return this.lists[i];
            }
        }
        return null;
    }
    editlistTitle(str, id) {
        const list = this.getlistById(id);
        list.title = str; 
    }
    getIndex(id) {
        let index = -1;
        for (let i = 0; i< this.lists.length; i++) {
            const list = this.lists[i];
            if(list.id == id) index = i;
        }
        return index;
    }
    deletelist(id) {
        let index = this.getIndex(id);
        this.lists.splice(index, 1);
    }
}
// const lists = new Lists;

// const tasksList1 = new ToDoList("Groceries");
// tasksList1.newTask("Cucamber");
// tasksList1.newTask("Tomato");
// const tasksList2 = new ToDoList("Chors");
// tasksList2.newTask("Clean room");
// tasksList2.newTask("Hang laundry");
// const tasksList3 = new ToDoList("Study");
// tasksList3.newTask("JS");
// tasksList3.newTask("HTML");

// lists.addList(tasksList1);
// lists.addList(tasksList2);
// lists.addList(tasksList3);

// lists.newlist("Help");

// log(lists);


// function testToDoList (str) {
//     const list = new ToDoList(str);
//     list.newTask('apple');
//     list.newTask('cucamber');
//     list.newTask('carrot');
//     list.newTask('chocolate');
//     list.newTask('bread');
//     list.newTask('kiwi');
// }

// function log(val) {
//     console.log("-----------------------------------------");
//     console.log(val);
// }


// function testTask(str) {
//     const task = new Task(str);
//     console.log(task);
// }

// // testTask("feed dog");
// // testTask("feed cat");
// // testTask("feed parrot");
// // testTask("feed mouse");

//colors for the lists
const listColors = ['powderblue', 'palegoldenrod', 'pink', 'aquamarine', 'lightgreen', 'plum'];

//on load, create a new storage
const storage = new Lists;

//flag for adding tasks
let adder = false;

//flag for adding a new list
newList = true;

////funtion for a creating a new list
function createNewList() {

    setTimeout(function () {createListButton.blur();},150);
    
        if(newList == true) {
        let form = document.querySelector('.new-list-input');
        const input = form.value;
        const listId = storage.newlist(input);
    
        const color = listColors[Math.floor(Math.random() * listColors.length)];

        const board = document.querySelector('.board');
        const phisicalList = document.createElement('div');
        const title = document.createElement('h3');
        const deleteList = document.createElement('div');

        
        title.classList.add('list-title');
        title.textContent = input;
        phisicalList.classList.add('list-box');
        phisicalList.id = listId;
        phisicalList.addEventListener('click', addTask);
        
        phisicalList.style.backgroundColor = color;
        board.insertAdjacentElement('beforeend', phisicalList);
        deleteList.classList.add('check-delete');
        deleteList.addEventListener('click', deleteAList);

        phisicalList.appendChild(deleteList);
        phisicalList.appendChild(title);

        form.value = "";
        newList = false;
        }
    
}

function deleteAList(event) {
    const listId = event.target.parentNode.id;
    const bool = confirm("Are you Sure?");
    if(bool) {
        list = document.getElementById(`${listId}`);

        list.remove();
        storage.deletelist(listId);
        newList = true;
        return true;
    }
    else return false;
}
function enterToAdd (event) {
    const inputFiled = event.target;
    const phisicalList = event.target.parentNode.parentNode;
    if (event.keyCode === 13) {
        const title = inputFiled.value;
        const list = storage.getlistById(phisicalList.id);
        list.newTask(title);
        console.log(list);
        const phisicalTask = document.createElement('div');
        phisicalTask.classList.add('task-box');
        phisicalList.appendChild(phisicalTask);
        const taskVi = document.createElement('div');
        taskVi.classList.add('task-compeleter');
        const taskText = document.createElement('div');
        taskText.textContent = title;
        taskText.classList.add('task');
        const taskX = document.createElement('div');
        taskX.classList.add('task-deleter');

       
        phisicalTask.appendChild(taskVi);
        phisicalTask.appendChild(taskText);
        phisicalTask.appendChild(taskX);




        inputFiled.remove();
        adder = false;   

    }

}

function addTask(event) {
    const list = event.target;
    console.log("clicked");
    if(adder == false) {
        const inputFiled = document.createElement('input');
        inputFiled.setAttribute("type","text");
        list.insertAdjacentElement('beforeend', inputFiled);
        inputFiled.classList.add('add-task-input');
        adder = true;

        inputFiled.addEventListener('keyup', enterToAdd);
    }
}

const createListButton = document.querySelector(".new-list-btn");
createListButton.addEventListener('click', createNewList);


