# 🙏 Iglesia El Buen Pastor - Sitio Web

Sitio web oficial de la **Iglesia El Buen Pastor A/D** ubicada en San Juan del Sur, Rivas, Nicaragua.

![Estado](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)
![Licencia](https://img.shields.io/badge/Licencia-MIT-green)

---

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Mejoras Futuras](#mejoras-futuras)
- [Contacto](#contacto)

---

## 📖 Descripción

La Iglesia El Buen Pastor es una comunidad cristiana comprometida con extender el Reino de Dios en San Juan del Sur, transformando familias mediante el mensaje de salvación y la formación de discípulos de Cristo.

Este sitio web sirve como:
- 🌐 Puerta de entrada digital de la iglesia
- 📢 Plataforma de comunicación con la comunidad
- 📅 Calendario de eventos y servicios
- 📱 Canal de contacto y oración

**Verso base:** *"Yo soy el buen pastor; el buen pastor su vida da por las ovejas." - Juan 10:11*

---

## ✨ Características

### Funcionalidades Implementadas
✅ Diseño responsivo (Desktop, Tablet, Mobile)  
✅ Menú de navegación hamburguesa para móviles  
✅ Buscador integrado  
✅ Formulario de contacto (integrado con Formspree)  
✅ Botón flotante de WhatsApp  
✅ Animaciones al scroll (fade-in)  
✅ Paleta de colores profesional  
✅ Iconografía con Font Awesome  
✅ Tipografía elegante (Playfair Display + Lato)  

### Secciones del Sitio
1. **Inicio** - Hero section con llamada a la acción
2. **Nosotros** - Misión y valores de la iglesia
3. **Ministerios** - Seis ministerios activos (Varones, Mujeres, Niños, Jóvenes, Misiones, Intersección)
4. **Eventos** - Calendario de actividades próximas
5. **Contacto** - Formulario y datos de contacto
6. **Footer** - Enlaces rápidos y redes sociales

---

## 📁 Estructura del Proyecto

```
iglesia-el-buen-pastor/
├── README.md                 # Este archivo
├── .gitignore               # Archivos a ignorar en Git
├── frontend/
│   ├── index.html          # Página principal
│   ├── script.js           # Lógica JavaScript
│   ├── style.css           # Estilos CSS
│   └── logo.jpg            # Logo de la iglesia
├── assets/                 # (Próximo) Carpeta de recursos
│   ├── images/            # Imágenes del sitio
│   ├── icons/             # Iconos personalizados
│   └── fonts/             # Fuentes locales
└── docs/                  # (Próximo) Documentación técnica
    ├── SETUP.md           # Guía de instalación
    └── DEPLOYMENT.md      # Guía de despliegue
```

---

## 🚀 Instalación

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Git (opcional, para clonar el repositorio)
- Servidor web simple (para desarrollo local)

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/iglesia-el-buen-pastor.git
cd iglesia-el-buen-pastor
```

2. **Abrir en navegador**
```bash
# Opción 1: Abrirlo directamente
open frontend/index.html

# Opción 2: Usar un servidor local (Python)
python -m http.server 8000
# Luego visita: http://localhost:8000/frontend/

# Opción 3: Usar Live Server en VS Code
# Instala la extensión "Live Server" y haz clic derecho > "Open with Live Server"
```

---

## 📖 Uso

### Acceder a Secciones
- **Página de inicio**: `index.html`
- **Menú de navegación**: Usa los enlaces del navbar o el menú hamburguesa en móvil
- **Búsqueda**: Utiliza la barra de búsqueda en el header
- **Contacto directo**: Botón verde de WhatsApp en la esquina inferior derecha

### Editar Contenido

#### Cambiar textos
Edita los textos directamente en `frontend/index.html` en la sección correspondiente.

#### Cambiar colores
Modifica las variables CSS en `frontend/style.css`:
```css
:root {
  --cream: #faf6f0;      /* Fondo claro */
  --green: #4a7c59;      /* Verde principal */
  --gold: #c9a84c;       /* Dorado de acentos */
}
```

#### Agregar eventos
En la sección `#eventos` de `index.html`, duplica una tarjeta de evento:
```html
<div class="evento-card">
  <div class="evento-fecha">
    <span class="mes">ABR</span>
    <span class="dia">12</span>
  </div>
  <div class="evento-info">
    <h3>Nombre del Evento</h3>
    <p><i class="fas fa-clock"></i> HH:MM a.m. - Ubicación</p>
    <p>Descripción breve del evento.</p>
  </div>
</div>
```

---

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript (Vanilla)** - Interactividad
- **Font Awesome 6.5** - Iconografía
- **Google Fonts** - Tipografía (Playfair Display, Lato)
- **Formspree** - Servicio de formularios
- **WhatsApp API** - Botón de contacto directo

---

## 📈 Mejoras Futuras

### Corto Plazo (1-2 meses)
- [ ] Corrección de errores ortográficos en contenido
- [ ] Optimización de imágenes
- [ ] Minificación de CSS/JS
- [ ] Mejora de SEO (meta descripciones, structured data)

### Mediano Plazo (2-4 meses)
- [ ] Galería de fotos con lightbox
- [ ] Calendario interactivo de eventos
- [ ] Mapa de ubicación integrado (Google Maps)
- [ ] Base de datos para almacenar mensajes
- [ ] Panel de administración simple

### Largo Plazo (4+ meses)
- [ ] Blog para artículos bíblicos
- [ ] Sistema de donaciones en línea
- [ ] App móvil (React Native)
- [ ] Transmisión en vivo de servicios
- [ ] Sistema de membresía

---

## 🔐 Configuración y Mantenimiento

### Variables de Entorno
El formulario de contacto usa **Formspree**. La clave está en el HTML:
```html
<form action="https://formspree.io/f/xvzdpyqq" method="POST">
```

Para cambiar la dirección de correo destino:
1. Ve a [formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Reemplaza la URL en el HTML

### Analytics (Recomendado)
Considera agregar Google Analytics para rastrear tráfico:
```html
<!-- En el <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

---

## 📱 Compatibilidad

| Navegador | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Chrome    | ✅      | ✅     | ✅     |
| Firefox   | ✅      | ✅     | ✅     |
| Safari    | ✅      | ✅     | ✅     |
| Edge      | ✅      | ✅     | ✅     |

---

## 📞 Contacto

**Iglesia El Buen Pastor A/D**

📍 **Ubicación**: San Juan del Sur, Rivas, Nicaragua  
📱 **WhatsApp**: +505 8230-9583  
📧 **Email**: [elbuenpastoriglesia88@gmail.com](mailto:elbuenpastoriglesia88@gmail.com)  
🌐 **Sitio Web**: [Tu dominio aquí]

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Eres libre de usarlo, modificarlo y distribuirlo.

```
MIT License - 2025 Iglesia El Buen Pastor
```

---

## 🤝 Contribuciones

Si deseas sugerir mejoras:
1. Abre un issue describiendo la mejora
2. Haz un fork del proyecto
3. Crea una rama: `git checkout -b feature/tu-mejora`
4. Haz commit: `git commit -m "Agrega: descripción"`
5. Push: `git push origin feature/tu-mejora`
6. Abre un Pull Request

---

## ✍️ Notas Importantes

- **Versión**: 1.0 (Inicial)
- **Última actualización**: Julio 2025
- **Responsable**: Equipo de IT - Iglesia El Buen Pastor

---

<div align="center">

**"Señor bendice, ensancha mi territorio, acompañame siempre y librame de todo mal para que no me dañe." - 1 Crónicas 4:9-10**

</div>