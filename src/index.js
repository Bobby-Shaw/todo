let newTaskButton = document.getElementById("new-task-btn")
let newTaskForm = document.getElementById("new-task-form") 
let popup = document.querySelector(".popup-overlay")

function createTask() {

}

// popup overlay
newTaskButton.addEventListener("click", function() {
    popup.style.display = "block"
})