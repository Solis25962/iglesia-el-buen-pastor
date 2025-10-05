// Confirmación del formulario
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const confirmacion = document.getElementById("confirmacion");

  confirmacion.textContent = `Gracias, ${nombre}. Hemos recibido su mensaje. ¡Dios le bendiga!`;
  confirmacion.style.color = "green";

  this.reset();
});

// Animación al hacer scroll
const elementos = document.querySelectorAll(".fade-in");

function mostrarElementos() {
  elementos.forEach(el => {
    const posicion = el.getBoundingClientRect().top;
    const alturaVentana = window.innerHeight;

    if (posicion < alturaVentana - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();
