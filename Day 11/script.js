const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const toDoList = document.querySelector(".toDoList");
const clearBtn = document.querySelector("#clear .clearBtn");

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
      taskText.textContent = newTask;
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