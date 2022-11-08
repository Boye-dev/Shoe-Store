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
let remove_copy = document.getElementById("remove_copy");
let add_copy = document.getElementById("add_copy");

add_copy.addEventListener("click", addCopy);
remove_copy.addEventListener("click", removeCopy);
let num;

function addCopy(e) {
  num = parseInt(num_copies.textContent);
  num = num + 1;
  num_copies.textContent = num;
}

function removeCopy(e) {
  num = parseInt(num_copies.textContent);
  if (num >= 2) {
    num = num - 1;
    num_copies.textContent = num;
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
  console.log(cart.classList);
}
