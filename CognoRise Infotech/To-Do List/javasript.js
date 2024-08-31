const button = document.getElementById('button')
const inputField = document.getElementById('inputField')
const addbutton = document.getElementById('addbtn')
const taskList = document.getElementById('taskList')

loadTasks()

function addbtn() {
    const task = inputField.value.trim();

    if (task) {
        createTaskElement(task);
        inputField.value = "";
        saveTask()
    } else {
        alert("Plese enter a task")
    }
}

addbutton.addEventListener('click', addbtn)

function createTaskElement(task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<p class="text-width">${task}</p>`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTask'

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', function(){
        taskList.removeChild(listItem);
        saveTask()
    })




    taskList.appendChild(listItem);
}

function saveTask() {
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item) {
        tasks.push(item.textContent.replace('Delete', '').trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    tasks.forEach(createTaskElement);
}