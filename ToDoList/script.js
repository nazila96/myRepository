const taskForm = document.querySelector("#task-form");
const task = document.querySelector("#task");
const searchTask = document.querySelector("#search-task");
const taskList = document.querySelector("#task-list");
const clearTasks = document.querySelector("#clear-list");

loadEventListeners();

function loadEventListeners() {

    document.addEventListener('DOMContentLoaded', getTasks);
    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearTasks.addEventListener('click', clearAll);
    searchTask.addEventListener('keyup', search);
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center';
        li.appendChild(document.createTextNode(task));
        const i = document.createElement('i');
        i.className = 'fas fa-times text-danger mr-auto delete-item';
        li.appendChild(i);
        taskList.appendChild(li);
    })
}



function addTask(e) {

    if (task.value === '') {
        alert("لطفا تسک مورد نظر را وارد کنید");

    } else {

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center';
        li.appendChild(document.createTextNode(task.value));
        const i = document.createElement('i');
        i.className = 'fas fa-times text-danger mr-auto delete-item';
        li.appendChild(i);
        taskList.appendChild(li);

        storeTaskInLocalStorage(task.value);


        task.value = '';

    }
    e.preventDefault();
}

function storeTaskInLocalStorage(mytask) {
    console.log(mytask);
    let tasks = [];
    if (localStorage.getItem('tasks') === null) {} else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(mytask);
    localStorage.setItem('tasks', JSON.stringify(tasks))
}



function removeTask(e) {
    if (e.target.classList.contains('delete-item')) {
        if (confirm("تسک انتخابی حذف شود؟")) {
            e.target.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem) {
    let tasks = [];
    if (localStorage.getItem('tasks') === null) {

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task, index) {
        if (taskItem.textContent == task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function clearAll() {
    if (taskList.innerText === '') {
        alert("هیچ تسکی ندارید");
    } else {
        if (confirm("از حذف تمامی تسک ها مطمئنید؟")) {
            taskList.innerHTML = '';
            clearTaskFromLocalStorage();
        }
    }
}

function clearTaskFromLocalStorage() {
    localStorage.clear();
}


function search(e) {

    const text = e.target.value.toLowerCase();
    // console.log(text);

    document.querySelectorAll(".list-group-item").forEach(function(task) {
        // console.log(task);
        const item = task.textContent;
        // console.log(item);
        if (item.toLowerCase().indexOf(text) != -1) {
            task.classList.add('d-flex');
        } else {
            task.classList.remove('d-flex');
            task.style.display = 'none';
        }
    });
}