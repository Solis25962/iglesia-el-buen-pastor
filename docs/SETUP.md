# 🔧 Guía de Setup - Desarrollo Local

Esta guía te ayudará a configurar el entorno de desarrollo para trabajar en el sitio web de Iglesia El Buen Pastor.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Git** (v2.20 o superior)
  - [Descargar Git](https://git-scm.com/)
  
- **Node.js** (opcional, para herramientas de desarrollo)
  - [Descargar Node.js](https://nodejs.org/)
  
- **Un editor de código** (recomendado: VS Code)
  - [Descargar VS Code](https://code.visualstudio.com/)

- **Un navegador moderno** (Chrome, Firefox, Safari, Edge)

---

## ⚙️ Paso 1: Clonar el Repositorio

```bash
# Abre tu terminal/PowerShell

# Navega a la carpeta donde deseas guardar el proyecto
cd "C:\ruta\deseada"

# Clona el repositorio
git clone https://github.com/tu-usuario/iglesia-el-buen-pastor.git

# Entra a la carpeta del proyecto
cd iglesia-el-buen-pastor
```

---

## 🖥️ Paso 2: Abrir en VS Code

```bash
# Abre VS Code directamente desde la terminal
code .
```

O abre VS Code manualmente y arrastra la carpeta del proyecto.

---

## 🌐 Paso 3: Ejecutar un Servidor Local

### Opción 1: Usar Live Server (Recomendado para principiantes)

1. Instala la extensión **"Live Server"** en VS Code
2. Haz clic derecho en `frontend/index.html`
3. Selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente en `http://127.0.0.1:5500/frontend/`

### Opción 2: Usar Python (Sin dependencias)

```bash
# PowerShell en Windows
# Navega a la carpeta del proyecto
cd iglesia-el-buen-pastor

# Si tienes Python 3.x
python -m http.server 8000

# Si tienes Python 2.x
python -m SimpleHTTPServer 8000

# Abre tu navegador en:
# http://localhost:8000/frontend/
```

### Opción 3: Usar Node.js (http-server)

```bash
# Instala http-server globalmente (una sola vez)
npm install -g http-server

# Navega a la carpeta del proyecto
cd iglesia-el-buen-pastor

# Inicia el servidor
http-server frontend -p 8000

# Abre tu navegador en:
# http://localhost:8000/
```

---

## 📝 Paso 4: Configurar Git (Primera vez)

```bash
# Configura tu nombre y correo (importante para commits)
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@example.com"

# Verifica que se haya configurado correctamente
git config --global --list
```

---

## ✏️ Paso 5: Hacer Cambios y Guardarlos

### Ver estado del proyecto
```bash
git status
```

### Ver cambios realizados
```bash
git diff
```

### Agregar cambios para commit
```bash
# Agregar todos los cambios
git add .

# O agregar un archivo específico
git add frontend/index.html
```

### Hacer commit
```bash
git commit -m "Descripción de los cambios realizados"

# Ejemplo:
# git commit -m "Fix: Corrige ortografía en sección nosotros"
# git commit -m "Feat: Agrega nuevo evento de capacitación"
# git commit -m "Style: Ajusta colores en hero section"
```

### Enviar cambios al repositorio remoto
```bash
git push origin main
```

---

## 🚀 Paso 6: Crear Ramas para Nuevas Funcionalidades

Para no afectar la rama principal (`main`), crea una rama separada:

```bash
# Ver ramas disponibles
git branch -a

# Crear una nueva rama
git checkout -b feature/nombre-de-feature

# Ahora puedes hacer cambios sin miedo
# Cuando termines, sube la rama
git push origin feature/nombre-de-feature

# Luego pide a alguien que revise y haga merge a main
```

---

## 🐛 Paso 7: Resolver Conflictos

Si tienes conflictos al hacer push o pull:

```bash
# Primero, intenta pull para traer los cambios más recientes
git pull origin main

# Si hay conflictos, Git te lo indicará
# Abre VS Code y verás las secciones en conflicto marcadas
# Elige cuál versión mantener y guarda

# Luego:
git add .
git commit -m "Resolve: Resuelve conflicto de merge"
git push origin main
```

---

## 🧪 Paso 8: Testear Localmente

Antes de hacer commit, verifica que todo funcione:

1. **Abre el navegador** en `http://localhost:8000/frontend/`
2. **Prueba todas las secciones**:
   - Navegación (clicks en todos los enlaces)
   - Menú hamburguesa (en móvil/responsive)
   - Formulario de contacto
   - Buscador
   - Botón de WhatsApp
3. **Revisa la consola** (`F12` → Consola) para ver si hay errores

---

## 📱 Paso 9: Testear en Diferentes Dispositivos

### Desde VS Code:
1. Abre DevTools (`F12`)
2. Haz clic en el ícono de dispositivo (esquina superior izquierda)
3. Selecciona diferentes tamaños de pantalla

### Desde el navegador:
- **Desktop**: Pantalla normal
- **Tablet**: 768px
- **Mobile**: 375px
- **Landscape**: Gira el dispositivo

---

## 🔄 Paso 10: Sincronizar con Cambios Remotos

Si alguien más hizo cambios al repositorio:

```bash
# Traer los cambios más recientes
git pull origin main

# Ver el historial de cambios
git log --oneline -10
```

---

## 📚 Recursos Útiles

- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [Documentación de HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Documentación de CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [JavaScript Moderno](https://developer.mozilla.org/es/docs/Learn/JavaScript)

---

## ❓ Problemas Comunes

### El servidor no inicia
```bash
# Verifica que no haya otro servidor en el mismo puerto
# Intenta con un puerto diferente
python -m http.server 9000
```

### Git no reconoce cambios
```bash
# Asegúrate de estar en la carpeta correcta
pwd  # (Mac/Linux) o cd (Windows)

# Verifica que sea un repositorio Git
git status
```

### El archivo no se ve actualizado
```bash
# Limpia la caché del navegador
# Presiona: Ctrl+Shift+Delete (Windows) o Cmd+Shift+Delete (Mac)
# O recarga con: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)
```

---

## ✅ Verificación Final

Si completaste todos los pasos:
- ✅ Tienes Git configurado
- ✅ El proyecto está clonado en tu computadora
- ✅ Puedes ver el sitio en tu navegador
- ✅ Entiendes cómo hacer cambios y guardarlos

¡Estás listo para contribuir! 🎉

---

**¿Preguntas?** Contacta al equipo de IT de la iglesia.
