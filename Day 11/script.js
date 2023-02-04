
// If the user write task into the input field and click submit or press enter key, the task will be added to the li tag in toDoList

const form = document.querySelector(".form");
const toDoList = document.querySelector(".toDoList");
const inputField = document.querySelector(".form__input");
const clearButton = document.querySelector("#clear .button");

form.addEventListener("submit", addTask);
clearButton.addEventListener("click", clearList);

function addTask(event) {
  event.preventDefault();
  let inputValue = inputField.value;
  let task = document.createElement("li");
  task.innerHTML = inputValue;
  toDoList.appendChild(task);
  inputField.value = "";
}

function clearList() {
  toDoList.innerHTML = "";
}

toDoList.addEventListener("click", toggleTaskCompletion);

function toggleTaskCompletion(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}
toDoList.addEventListener("dblclick", function(event) {
  if (event.target.tagName === "LI") {
    let confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete === true) {
      event.target.remove();
    }
  }
});







