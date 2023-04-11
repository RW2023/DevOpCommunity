// ----------dark mode btn----------------

const darkMode = document.getElementById("dark-change");

const content = document.getElementsByTagName("body")[0];

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});
// ----------end dark mode btn----------------

// ----------dropdown menu----------------
const toggleBtn = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtn.classList = isOpen ? "fa solid fa-xmark" : "fa-solid fa-bars";
});
// ----------end dropdown menu----------------
