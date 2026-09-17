let newTaskButton = document.getElementById("new-task-btn")
let newTaskForm = document.getElementById("new-task-form") 
let newTaskDialog = document.querySelector("#new-task-dialog")
let closeBtn = document.querySelector("#close-btn")
let taskSection = document.querySelector("#task-render-section")
let taskInput = document.querySelector("#task-input")

let taskList = []

function renderTasks() {
    const list = document.createElement("ul")
    list.setAttribute("id", "task-list")

    let id = 1
    for (const taskObject of taskList) {
        list.append(createTask(taskObject))
        taskObject.id = id
        id ++
    }
    taskSection.replaceChildren(list)


}

function createTask(taskObject) {
    const task = document.createElement("li")
    const taskText = document.createElement("span")
    const completeButton = document.createElement("button")
    task.setAttribute("class", "task")
    completeButton.type = "button"

    if (taskList.length == 0) {
        taskObject.id = 1
    } else {
        taskList[taskList.length-1].id = taskObject.id = taskList[taskList.length-1].id + 1
    }
    completeButton.setAttribute("class", "complete-btn")
    completeButton.setAttribute("id", taskObject.id)
    task.setAttribute("id", taskObject.id)

    taskText.textContent = taskObject.name
    task.append(completeButton, taskText)

    completeButton.addEventListener("click", () => {
        taskList.splice(taskObject.id - 1, 1)
        renderTasks()
    } )

    return task
}

// shows dialog box
newTaskButton.addEventListener("click", () => {
    newTaskDialog.showModal();
    taskInput.focus();
})

// closes dialog box
closeBtn.addEventListener("click", () => {
    newTaskDialog.close();
})

newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    if (!taskName) return;

    taskList.push({id: null, name: taskName, completed: false})
    renderTasks();
    newTaskForm.reset();
    newTaskDialog.close();
})

renderTasks()