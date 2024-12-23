document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".quarto-theme-toggle");

  if (toggleButton) {
    // Cambia el ícono según el tema actual
    const updateIcon = () => {
      const isDark = document.documentElement.classList.contains("theme-dark");
      const icon = toggleButton.querySelector("i");
      if (icon) {
        icon.className = isDark ? "bi bi-brightness-high" : "bi bi-moon-stars";
      }
    };

    // Inicializa el ícono al cargar la página
    updateIcon();

    // Actualiza el ícono al hacer clic
    toggleButton.addEventListener("click", () => {
      setTimeout(updateIcon, 10); // Espera un poco para que el tema cambie
    });
  }
});
