document.addEventListener('DOMContentLoaded', function () {
  const typed = new Typed('#typed', {
    strings: [
      "> Iniciando sistema...",
      "> Cargando perfil de jugador...",
      "> Bienvenida, Verónica.",
      "> Misión disponible. ¿Quieres continuar?"
    ],
    typeSpeed: 40,
    backSpeed: 0,
    backDelay: 1500,
    startDelay: 500,
    loop: false,
    showCursor: true,
    cursorChar: '▍'
  });
});