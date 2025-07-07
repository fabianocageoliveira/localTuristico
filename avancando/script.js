  const btn = document.getElementById("toggle-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  function setTheme(mode) {
    document.body.classList.toggle("dark-mode", mode === "dark");
    btn.textContent = mode === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", mode);
  }

  // Inicializar com o tema salvo ou do sistema
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme("dark");
  }

  // Alternar tema ao clicar
  btn.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
