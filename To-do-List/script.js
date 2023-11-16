//Select Elements

const todoBox = document.querySelector("#todo-box");
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#to-do-input");
const todoList = document.getElementById("todoList");
const todoTasks = document.querySelector(".todo");
const editForm = document.querySelector(".edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEdit = document.querySelector("#cancelBtn");
const searchForm = document.querySelector(".search-filter-box");
const doneBtn = document.querySelector("#doneEdit");

let oldInputValue;

//Functions

const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerHTML = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("doneBtn");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();

};


const getTodosLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  return todos;
};
//Events

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");

  let todoTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText;
  }

  if (targetEl.classList.contains("doneBtn")) {
    parentEl.classList.toggle("done");
  }

  if (targetEl.classList.contains("deleteBtn")) {
    parentEl.remove();
    todoInput.focus();
  }
});
