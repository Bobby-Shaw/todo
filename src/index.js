let newTaskButton = document.getElementById("new-task-btn")
let newTaskForm = document.getElementById("new-task-form") 
let newTaskDialog = document.querySelector("#new-task-dialog")
let closeBtn = document.querySelector("#close-btn")
let taskSection = document.querySelector("#task-render-section")
let taskInput = document.querySelector("#task-input")

let taskList= []

function renderTasks() {
    const list = document.createElement("ul")
    list.setAttribute("id", "task-list")

    for (const task of taskList) {
        const item = document.createElement("li")
        item.textContent = task.name
        list.append(item)
    }
    taskSection.replaceChildren(list)
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

    console.log(taskName)

    taskList.push({name: taskName})
    renderTasks();
    newTaskForm.reset();
    newTaskDialog.close();
})

renderTasks()