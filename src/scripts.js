document.addEventListener("DOMContentLoaded", function() {
    // Función para el modo oscuro
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      document.getElementById("modeToggle").textContent =
        document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
    }

    // Verifica si el modo oscuro está habilitado en localStorage (si es la primera vez, no lo estará)
    if(localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById("modeToggle").textContent = "🌞"; // Icono de modo claro
    }

    // Event listener para cambiar el modo oscuro
    const modeToggleBtn = document.getElementById("modeToggle");
    if(modeToggleBtn) {
        modeToggleBtn.addEventListener("click", function() {
            toggleDarkMode();
            // Guardamos la preferencia en localStorage
            if(document.body.classList.contains("dark-mode")) {
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                localStorage.setItem('dark-mode', 'disabled');
            }
        });
    }
  
    // Función para el botón "Back to Top"
    const backToTopBtn = document.getElementById("backToTop");
    window.onscroll = () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };
    backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  
    // Función para escribir el texto de forma animada
    const text = "¡Hi! I'm Jose Miguel 👋";
    let i = 0;
  
    function typeText() {
      if (i < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 100);
      }
    }
  
    // Inicializa el texto cuando el DOM se haya cargado
    typeText();
  
    // Inicializa AOS para las animaciones
    AOS.init();

    // Funcionalidad de la imagen del header (fade in)
    const headerImage = document.getElementById('headerImage');
  
    // Cuando la imagen esté completamente cargada, agregamos la clase 'loaded' para que se haga visible
    headerImage.onload = function() {
        headerImage.classList.add('loaded');
    }

    // Si la imagen ya está en cache, activamos directamente la animación
    if (headerImage.complete) {
        headerImage.classList.add('loaded');
    }
});
