1. create a class ToDoList with methods:
   createNewTask (recives a string, creates a task with an id (incrementing number), string(user input), isCompeleted (boolean - defalt false)),
   \*\*\* function to automatically add each new task, if not empty, into storage tasksList

2. each task is an object, that hase properties id, task
   string, isCompleted

3. have "ToDoList" class that hase a list of the tasks.

   has the properties:
   a. title: string, shorter then 30 chars
   b. id: automatic, incrementing
   c. tasksList (empty array)

   has the methods:
   a. "create new task" which recives a string, creates new task from it and adds it.
   b. "compelete task" searches the task is tasksList and set its "isCompelete" value to true.
   c. "uncompelete task" which does the opposite
   d. "delete task" which searches the task and deletes it
   e. "update task" which recives new string value and replaces it in task.
   f. "add task" adds the task to tasksList.
   g. "read" get a task id and console.log task.
   h. "search by id" get an id and find the task. return the task.
   i. "delete all" deletes all tasks
   j. "read all" console.log all of the tasksList

4. have a List storage class:
   has the properties:
   todolists(empty array)

   has the methods:
   a. create new list: get a string for title, create new todolist, push inito storage
   b. search by id: get an id and return the list (and log the list)
   c. read all: console log (and return) all the lists titles + id's
   d. update title: recives a new title, get list by id and replace title.
   e. delete list: get an id and remove the list

5. create a function that can set the object toDoList in the user's local storage.
   \*\*\*question: should i store this as a whole object or each task as an object?
   answer: all the lists storage object.

6. create a function that gets the object from local storage.
