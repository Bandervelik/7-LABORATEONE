// Check if the user has a preferred color scheme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Set the initial theme based on user preference or default to light
const currentTheme = localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light");
document.body.classList.toggle("dark-mode", currentTheme === "dark");

// Toggle between light and dark themes
function toggleTheme() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  const theme = isDarkMode ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

// Attach the toggleTheme function to a button or any other trigger
// Example: <button onclick="toggleTheme()">Toggle Theme</button>
