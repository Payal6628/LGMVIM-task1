// Task Data
let tasks = [];

// Add Task
function addTask() {
  const taskInput = document.getElementById("task-input");
  const prioritySelect = document.getElementById("priority-select");

  const title = taskInput.value;
  const priority = prioritySelect.value;

  if (title.trim() === "") {
    alert("Please enter a task title");
    return;
  }

  const task = {
    title: title,
    priority: priority,
    completed: false,
  };

  tasks.push(task);

  renderAllTasks();
  taskInput.value = "";
}

// Refresh Tasks
function refreshTasks() {
  tasks = [];
  renderAllTasks();
}

// Render All Tasks
function renderAllTasks() {
  const pendingTasksContainer = document.getElementById("pending-tasks");
  const completedTasksContainer = document.getElementById("completed-tasks");

  pendingTasksContainer.innerHTML = "";
  completedTasksContainer.innerHTML = "";

  for (const task of tasks) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    if (task.completed) {
      taskElement.classList.add("completed-task");
    }

    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = task.title;

    const priorityElement = document.createElement("div");
    priorityElement.classList.add("priority");
    priorityElement.textContent = task.priority;

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
      task.completed = true;
      renderAllTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);
      renderAllTasks();
    });

    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);

    taskElement.appendChild(titleElement);
    taskElement.appendChild(priorityElement);
    taskElement.appendChild(taskActions);

    if (task.completed) {
      completedTasksContainer.appendChild(taskElement);
    } else {
      pendingTasksContainer.appendChild(taskElement);
    }
  }
}

// Event Listeners
document.getElementById("add-task-button").addEventListener("click", addTask);
document
  .getElementById("refresh-button")
  .addEventListener("click", refreshTasks);

// Initial Render
renderAllTasks();
