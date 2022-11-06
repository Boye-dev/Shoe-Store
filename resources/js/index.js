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
