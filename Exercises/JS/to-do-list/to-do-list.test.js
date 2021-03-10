const {Task,ToDoList,Lists} = require('./to-do-list');


const {get3rd} = require('./example');
const {sum} = require('./example');
const { test, expect } = require('@jest/globals');

test('properly log third', () => {
    const arr = [1,2,3,4,5];

    expect(get3rd(arr)).toBe(3);
});

test('properly sum a + b', ()=> {
    expect(sum(1, 2)).toBe(3);
});


test('make a new ToDoList', ()=> {
    const tasksList1 = new ToDoList("Groceries");
    const task1ID = tasksList1.newTask("Cucumber");
    const task2ID = tasksList1.newTask("Tomato");

    const task1 = tasksList1.getTaskById(task1ID);
    const task2 = tasksList1.getTaskById(task2ID);

    expect(task1.text).toBe("Cucumber");
    expect(task2.text).toBe("Tomato");

    tasksList1.editTask("Pineapple",task2ID);

    expect(task2.text).toBe("Pineapple");
    expect(tasksList1.getTaskById(task2ID).text).toBe("Pineapple");
});