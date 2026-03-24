// ===== FORMULARIO DE CONTACTO =====
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const confirmacion = document.getElementById("confirmacion");
  confirmacion.textContent = `¡Gracias, ${nombre}! Hemos recibido tu mensaje. ¡Dios te bendiga!`;
  this.reset();
});

// ===== ANIMACIÓN FADE-IN AL SCROLL =====
const fadeEls = document.querySelectorAll(".fade-in");
function checkFade() {
  fadeEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", checkFade);
checkFade();

// ===== MENÚ HAMBURGUESA =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== BUSCADOR =====
function buscar() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  if (!query) return;
  const secciones = document.querySelectorAll("section, header");
  let encontrado = false;
  secciones.forEach(sec => {
    if (sec.textContent.toLowerCase().includes(query)) {
      sec.scrollIntoView({ behavior: "smooth", block: "start" });
      encontrado = true;
    }
  });
  if (!encontrado) alert(`No se encontraron resultados para "${query}".`);
}
document.getElementById("searchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") buscar();
});

// ===== NAVBAR SOMBRA AL SCROLL =====
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.style.boxShadow = window.scrollY > 10
    ? "0 4px 20px rgba(0,0,0,0.15)"
    : "0 2px 12px rgba(0,0,0,0.1)";
});
