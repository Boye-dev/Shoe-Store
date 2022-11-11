// check for saved 'darkMode' in localStorage
let lightMode = localStorage.getItem("lightMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableLightMode = () => {
  // 1. Add the class to the body

  document.getElementById("body-dark").classList.add("light-mode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  // 1. Remove the class from the body
  document.getElementById("body-dark").classList.remove("light-mode");

  // 2. Update darkMode in localStorage
  localStorage.setItem("lightMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (lightMode === "enabled") {
  enableLightMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  lightMode = localStorage.getItem("lightMode");

  // if it not current enabled, enable it
  if (lightMode !== "enabled") {
    enableLightMode();
    // if it has been enabled, turn it off
  } else {
    disableLightMode();
  }
});

// Add or remove a unit from an item
let remove_copy1 = document.getElementById("remove_copy1");
let add_copy1 = document.getElementById("add_copy1");
let remove_copy2 = document.getElementById("remove_copy2");
let add_copy2 = document.getElementById("add_copy2");

add_copy1.addEventListener("click", addCopy1);
add_copy2.addEventListener("click", addCopy2);
remove_copy1.addEventListener("click", removeCopy1);
remove_copy2.addEventListener("click", removeCopy2);

let num_copies1 = document.getElementById("num_copies1");
let num_copies2 = document.getElementById("num_copies2");

let num;

function addCopy1(e) {
  num = parseInt(num_copies1.textContent);
  num = num + 1;
  num_copies1.textContent = num;
}

function addCopy2(e) {
  num = parseInt(num_copies2.textContent);
  num = num + 1;
  num_copies2.textContent = num;
}

function removeCopy1(e) {
  num = parseInt(num_copies1.textContent);
  if (num >= 2) {
    num = num - 1;
    num_copies1.textContent = num;
  }
}

function removeCopy2(e) {
  num = parseInt(num_copies2.textContent);
  if (num >= 2) {
    num = num - 1;
    num_copies2.textContent = num;
  }
}

// Cart show or hide functionality
let cart = document.getElementById("cartID");
let nav_reveal = document.getElementById("nav_reveal");
let nav_reveal1 = document.getElementById("nav_reveal1");

nav_reveal.addEventListener("click", cartReveal);
nav_reveal1.addEventListener("click", cartReveal);

function cartReveal() {
  cart.classList.toggle("nav_show");
}

// Search button functionality

let shoe_search = document.getElementById("shoe_search");
let search_box = document.getElementById("search_box");

shoe_search.addEventListener("click", searchClicked);

function searchClicked(e) {
  search_box.classList.toggle("search_show");
}
