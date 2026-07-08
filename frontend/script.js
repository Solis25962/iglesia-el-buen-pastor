// ===== FORMULARIO DE CONTACTO =====
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const confirmacion = document.getElementById("confirmacion");
  const btn = this.querySelector("button[type=submit]");

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

  const response = await fetch(this.action, {
    method: "POST",
    body: new FormData(this),
    headers: { Accept: "application/json" }
  });

  if (response.ok) {
    confirmacion.style.color = "green";
    confirmacion.textContent = `¡Gracias, ${nombre}! Hemos recibido tu mensaje. ¡Dios te bendiga!`;
    this.reset();
  } else {
    confirmacion.style.color = "red";
    confirmacion.textContent = "Hubo un error al enviar. Intenta de nuevo.";
  }

  btn.disabled = false;
  btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar mensaje';
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

// ===== GALERÍA DE VIDEOS (TIPO YOUTUBE) =====
const videosData = [
  {
    id: "5qap5aO4i9A",
    title: "✨ Culto General",
    description: "Culto general de adoración y enseñanza bíblica. Acompáñanos en este momento especial de comunión con Dios.",
    views: "12K"
  },
  {
    id: "1H2jH7e8lH0",
    title: "🙏 Ministerio de Oración",
    description: "Momentos especiales de intercesión y oración en familia. Únete a nosotros en este tiempo de comunión espiritual.",
    views: "8.4K"
  },
  {
    id: "3s9b2B7kzrE",
    title: "👨‍👩‍👧‍👦 Ministerio Familiar",
    description: "Actividades y enseñanzas dedicadas al fortalecimiento de la familia en Cristo.",
    views: "5.1K"
  },
  {
    id: "4fV5X5X5X5M",
    title: "🎵 Cánticos de Adoración",
    description: "Momentos de adoración con nuestro ministerio de música. Levanta tu voz en alabanza.",
    views: "3.7K"
  }
];

function changeVideo(index) {
  const data = videosData[index];
  
  // Cambiar iframe
  const iframe = document.getElementById("mainVideoIframe");
  iframe.src = `https://www.youtube.com/embed/${data.id}?controls=1&modestbranding=1`;
  
  // Cambiar información
  document.getElementById("mainVideoTitle").textContent = data.title;
  document.getElementById("mainVideoDescription").textContent = data.description;
  document.getElementById("mainVideoViews").textContent = `${data.views} visualizaciones`;
  
  // Actualizar miniaturas activas
  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}

// Inicializar galería de videos
document.addEventListener("DOMContentLoaded", function() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => changeVideo(index));
  });
});
