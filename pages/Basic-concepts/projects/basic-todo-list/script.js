"use strict";
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const lists = document.querySelector("#todo-list");

// Function to add a new task
function addNewTask(event) {
  event.preventDefault(); // Prevent form submission

  const todoText = input.value.trim(); // Get the input value

  // Create a new list item
  const todoItem = document.createElement("li");
  todoItem.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "p-2",
    "border",
    "border-gray-200",
    "rounded-lg"
  );

  todoItem.textContent = todoText;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "delete-button",
    "text-red-500",
    "hover:text-red-700",
    "transition"
  );
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    lists.removeChild(todoItem); // Remove the task when delete is clicked
  });

  // Append the delete button to the list item
  todoItem.appendChild(deleteButton);

  // Add the list item to the task list
  lists.appendChild(todoItem);

  // create a checkbox
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox", "mr-2");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      todoItem.style.textDecoration = "line-through"; // Strike through the text
    } else {
      todoItem.style.textDecoration = "none"; // Remove the strike through
    }
    saveTasks();
  });
  // Append the checkbox to the list item
  todoItem.prepend(checkbox); // Add checkbox to the beginning of the list item
  // Append the list item to the task list
  lists.appendChild(todoItem);

  // Clear the input field
  input.value = "";
  saveTasks();
}

// Add event listener to the form
form.addEventListener("submit", addNewTask);

// save the tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", lists.innerHTML);
}
function loadTasks() {
  lists.innerHTML = localStorage.getItem("tasks") || ""; // Load tasks from local storage

  const deleteButtons = lists.querySelectorAll(".delete-button"); // Select all delete buttons
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      lists.removeChild(button.parentElement); // Remove the task when delete is clicked
      saveTasks(); // Save the updated tasks to local storage
    });
  });
}
loadTasks();
