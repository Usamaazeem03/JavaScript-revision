const menuBtn = document.querySelector(".nav-btn-menu");
const closeBtn = document.querySelector(".nav-btn-close");
const linkList = document.querySelector(".pages-links-box");
menuBtn.addEventListener("click", function () {
  linkList.classList.add("active");
  menuBtn.style.display = "none";
  closeBtn.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  linkList.classList.remove("active");
  menuBtn.style.display = "flex";
  closeBtn.style.display = "none";
});

// A global function click outside the pages menu then menu close it
document.addEventListener("click", function (event) {
  if (!linkList.classList.contains("active")) return;
  if (
    event.target.closest(".pages-links-box") ||
    event.target.closest(".nav-btn-menu") ||
    event.target.closest(".nav-btn-close")
  )
    return;
  linkList.classList.remove("active");
  menuBtn.style.display = "flex";
  closeBtn.style.display = "none";
});
