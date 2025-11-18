// Tilføj din JavaScript her
const html = document.documentElement;
const btn = document.querySelector("#toggle");
const THEME_KEY = "bmo-theme";

if (btn) {
  // Apply stored theme preference before user interacts.
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "dark") {
    html.classList.add("dark");
    btn.setAttribute("aria-pressed", "true");
  } else {
    btn.setAttribute("aria-pressed", "false");
  }

  function setTheme(isDark) {
    html.classList.toggle("dark", isDark);
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  btn.addEventListener("click", () => {
    const isDark = !html.classList.contains("dark");
    setTheme(isDark);
  });
}
