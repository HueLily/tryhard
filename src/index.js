import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let todos = [];

  const todoList = document.getElementById("todos");

  const addTodoForm = document.getElementById("add-todo-form");

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function loadTodos() {
    if (localStorage.getItem("todos")) {
      todos = JSON.parse(localStorage.getItem("todos"));
        displayTodos();
      }
    }

    addTodoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const newTodoInput = document.getElementById("new-todo");

      if (!newTodoInput.value) {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.innerText = "Please enter a task";
        document.body.appendChild(toast);

        setTimeout(() => {
        toast.classList.add("show");
        setTimeout(() => {
          toast.classList.remove("show");
          setTimeout(() => {
            document.body.removeChild(toast);
            }, 200);
          }, 2000);
        }, 100);

        return;
        }

        todos.push({
          id: todos.length + 1,
          text: newTodoInput.value,
          completed: false,
        });

        saveTodos();

        newTodoInput.value = "";

        displayTodos();
      });

      function displayTodos() {
        todoList.innerHTML = "";

        todos.forEach((todo) => {
          const listItem = document.createElement("li");

          if (todo.completed) {
            listItem.classList.add("completed");
          }

          listItem.innerHTML = `
            <input type="checkbox" id="todo-${todo.id}" onchange="toggleCompleted(${
            todo.id
            })" ${todo.completed ? "checked" : ""}>
            <label for="todo-${todo.id}">${todo.text}</label>
            <button onclick="editTask(event)" data-task-id="${todo.id}">Edit</button>
            <button onclick="deleteTask(event)" data-task-id="${
            todo.id
        }">Delete</button>
      `;
          todoList.appendChild(listItem);
        });
      }

      function editTask(event) {
        event.preventDefault();

        const taskId = event.target.getAttribute("data-task-id");

        const todo = todos.find((todo) => todo.id == taskId);

        const newText = prompt("Edit task", todo.text);

        if (newText === null) {
          return;
        }

        todo.text = newText;

        saveTodos();

        displayTodos();
      }

      function deleteTask(event) {
        event.preventDefault();

        const taskId = event.target.getAttribute("data-task-id");

        todos = todos.filter((todo) => todo.id != taskId);

        saveTodos();

        displayTodos();
      }

      function toggleCompleted(id) {
        const todo = todos.find((todo) => todo.id == id);

        todo.completed = !todo.completed;

        saveTodos();

        displayTodos();
      }

      loadTodos();

    
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }

//TO DO LIST 
window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list_el = document.querySelector('#tasks');

  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const task = input.value;

    if (!task) {
      alert("Please add a task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text")
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div")
    task_actions_el.classList.add("actions");
    
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener('click', () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener('click',() =>{
      list_el.removeChild(task_el);
    })

  })
})
      
//Set time count down
var countDownDate = new Date ("Nov 17, 2023 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance/(1000*60*60*24));
  var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  var min = Math.floor((distance%(1000*60*60))/(1000*60));

  document.getElementById("time").innerHTML = days + " Days " + hours + " Hours " + min + "Minutes" ;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "RUN OUT OF SWIPES";
  }
}, 1000)


//calendar

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
 
const day = document.querySelector(".calendar-dates");
 
const currdate = document
  .querySelector(".calendar-current-date");
 
const prenexIcons = document
  .querySelectorAll(".calendar-navigation span");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
 



