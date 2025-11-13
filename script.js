document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const root = document.documentElement;

  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const errorInput = document.getElementById("errorEmail");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme);
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === "dark") {
      themeIcon.classList.remove("sun");
      themeIcon.classList.add("moon");
    } else {
      themeIcon.classList.remove("moon");
      themeIcon.classList.add("sun");
    }
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailValue = emailInput.value;
    console.log(emailValue);
    if(!emailValue.endsWith("@codechum.com")){
        errorInput.style.display = "flex";
    } else {
        errorInput.style.display = "none";
    }
  });
});
