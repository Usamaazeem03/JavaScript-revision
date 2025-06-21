// DOM + Events
//  Select by Multiple Elements
const containerEl = document.querySelectorAll(".example-container");
containerEl.forEach((el) => {
  rendemColor();
  el.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      e.target.style.backgroundColor = rendemColor();
    } else {
      e.target.style.backgroundColor = "";
    }
  });
});

function rendemColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// select by class name
const titel = document.querySelector(".example-title");
titel.style.color = "red";
// select by id
const classEl = document.getElementById("big");
classEl.style.color = "blue";
// add event mouseover
classEl.addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "2rem";
});
// select by tag name
const emoji = document.getElementsByTagName("span");
const emojiBox = document.querySelector(".emoji-container");
emojiBox.style.fontSize = "2rem";
for (let i = 0; i < emoji.length; i++)
  emoji[i].addEventListener("click", (e) => {
    e.target.style.opacity = "0";
    setTimeout(() => {
      e.target.style.opacity = "1";
    }, 1000);
  });

// change the text/emoji
emojiBox.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.textContent = "😎";
  }
});

// Change Text
const btn = document.getElementById("changeTextBtn");
btn.textContent = "Add New Element";

// add Class
const addClassBtn = document.querySelector(".action-btn");
addClassBtn.addEventListener("click", () => {
  const newEl = document.createElement("div");
  newEl.classList.add("new-element"); // Add a class to the new element for removal
  newEl.textContent = "New Element";
  newEl.style.backgroundColor = rendemColor();
  containerEl[0].appendChild(newEl);
});

// remove Class
const removeClassBtn = document.querySelector(".remove-btn");
removeClassBtn.addEventListener("click", () => {
  const newEl = document.querySelector(".new-element");
  if (newEl) {
    newEl.remove();
  } else {
    alert("No element to remove");
  }
});

// Toggle Class
const toggleClassBtn = document.querySelector(".toggle-btn");
// click event
toggleClassBtn.addEventListener("click", () => {
  const newEl = document.querySelector(".new-element");
  if (newEl) {
    newEl.classList.toggle("active");
    if (newEl.classList.contains("active")) {
      newEl.style.backgroundColor = rendemColor();
    } else {
      newEl.style.backgroundColor = "";
    }
  } else {
    alert("No element to toggle");
  }
});

// keydown event
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const newEl = document.createElement("div");
    newEl.classList.add("new-element");
    newEl.textContent = "New Element";
    newEl.style.backgroundColor = rendemColor();
    containerEl[0].appendChild(newEl);
  }
});
