function toggleModoOscuro() {
    document.body.classList.toggle("dark-mode");
  
    const btn = document.getElementById("modo-btn");
    if (document.body.classList.contains("dark-mode")) {
      btn.textContent = "☀️ Modo claro";
    } else {
      btn.textContent = "🌙 Modo oscuro";
    }
  }
  