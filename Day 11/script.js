const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const toDoList = document.querySelector(".toDoList");
const clearBtn = document.querySelector("#clear .clearBtn");

document.addEventListener("DOMContentLoaded", function () {
  const toDoList = document.querySelector(".toDoList");
  toDoList.innerHTML = JSON.parse(localStorage.getItem("tasks")) || "";
  const tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    addTaskListeners(task);
  });
});

window.addEventListener("beforeunload", function () {
  localStorage.setItem("tasks", JSON.stringify(toDoList.innerHTML));
});

const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
  toDoList.innerHTML = JSON.parse(savedTasks);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<span> ${input.value} 
  <div class="icons">
    <i class="far fa-check-circle circle"></i>
    <i class="far fa-edit edit"></i>
    <i class="far fa-trash-alt delete"></i>
  </div>
</span>`;

  toDoList.appendChild(li);
  addTaskListeners(li);
  input.value = "";
});

const addTaskListeners = (task) => {
  const checkButton = task.querySelector(".fa-check-circle");
  checkButton.addEventListener("click", () => {
    if (task.style.textDecoration === "line-through") {
      task.style.textDecoration = "none";
      task.style.color = "black";
    } else {
      task.style.textDecoration = "line-through";
      task.style.color = "green";
      alert("Task Completed");
    }
  });

  const deleteBtn = task.querySelector(".fa-trash-alt");
  deleteBtn.addEventListener("click", () => {
    task.remove();
  });

  const editButton = task.querySelector(".fa-edit");
  editButton.addEventListener("click", () => {
    let taskText = task.querySelector("span");
    let newTask = prompt("Enter new task:", taskText.textContent);
    if (newTask) {
      taskText.innerHTML = `${newTask}
    <div class="icons">
      <i class="far fa-check-circle circle"></i>
      <i class="far fa-edit edit"></i>
      <i class="far fa-trash-alt delete"></i>
    </div>`;
      addTaskListeners(task);
    }
  });
};

const tasks = document.querySelectorAll("li");
tasks.forEach((task) => {
  addTaskListeners(task);
});

clearBtn.addEventListener("click", function () {
  const toDoList = document.querySelector(".toDoList");
  toDoList.innerHTML = "";
});

// Set time interval to 1 day

const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds

window.setInterval(() => {
  const currentTime = new Date().getTime();
  const tasks = document.querySelectorAll("li");
  tasks.forEach((task) => {
    const taskTime = task.dataset.time;
    if (currentTime - taskTime >= oneDay) {
      task.remove();
    }
  });
}, oneDay);


const li = document.createElement("li");
const taskTime = new Date().getTime();
li.dataset.time = taskTime;
li.innerHTML = `${input.value} 
  <div class="icons">
    <i class="far fa-check-circle circle"></i>
    <i class="far fa-edit edit"></i>
    <i class="far fa-trash-alt delete"></i>
  </div>`;

toDoList.appendChild(li);