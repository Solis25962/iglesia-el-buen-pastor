# 🚀 Guía de Despliegue - Publicar el Sitio

Esta guía explica cómo publicar el sitio web en Internet para que cualquier persona pueda visitarlo.

---

## 🌐 Opciones de Hosting

Hay varias plataformas gratuitas o económicas para alojar un sitio estático:

### 1️⃣ **GitHub Pages** (Recomendado - Gratuito)
- ✅ Gratuito
- ✅ Integrado con Git
- ✅ Soporte para dominio personalizado
- ✅ Certificado SSL automático

**Pasos:**

1. Asegúrate de que tu repositorio esté en GitHub
2. Ve a **Settings** → **Pages**
3. En "Source", selecciona `main` y carpeta `/frontend`
4. Tu sitio estará en: `https://tu-usuario.github.io/iglesia-el-buen-pastor/frontend`

### 2️⃣ **Netlify** (Gratuito con opciones premium)
- ✅ Fácil de usar
- ✅ Despliegue automático desde Git
- ✅ Dominio personalizado gratis
- ✅ Formularios integrados

**Pasos:**

1. Ve a [netlify.com](https://www.netlify.com/)
2. Haz clic en "Sign up"
3. Conecta tu repositorio de GitHub
4. Selecciona la rama `main` y carpeta `frontend`
5. ¡Listo! Tu sitio estará publicado automáticamente

### 3️⃣ **Vercel** (Gratuito)
- ✅ Despliegue muy rápido
- ✅ Excelente rendimiento
- ✅ Integración con Git

**Pasos:**

1. Ve a [vercel.com](https://vercel.com/)
2. Haz clic en "Continue with GitHub"
3. Importa tu repositorio
4. Configura la carpeta raíz como `frontend`
5. Haz clic en "Deploy"

### 4️⃣ **Hosting Tradicional** (Pagado)
- Hostgator
- Bluehost
- DreamHost
- Ionos
- NameCheap

---

## 🌍 Agregar Dominio Personalizado

### Si usas GitHub Pages:

1. Compra un dominio (Namecheap, GoDaddy, etc.)
2. Configura los registros DNS:
   - Tipo: `A`
   - Nombre: `@`
   - Valor: `185.199.108.153`
3. Repite para: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. En GitHub Pages, agrega tu dominio en **Settings → Pages**

### Si usas Netlify:

1. Compra un dominio
2. En Netlify: **Domain settings → Add custom domain**
3. Sigue las instrucciones para configurar DNS

---

## 🔄 Despliegue Automático

Cuando hagas push a GitHub, el sitio se actualizará automáticamente en:

```bash
# 1. Haz cambios localmente
# 2. Guarda y prueba
git add .
git commit -m "Descripción de cambios"
git push origin main

# ✨ ¡El sitio se actualiza automáticamente!
```

---

## 📊 Monitoreo y Mantenimiento

### Verificar estado del despliegue:

**GitHub Pages:**
- Ve a **Settings → Pages** para ver el estado

**Netlify:**
- Ve a tu dashboard → **Deploys** para ver el historial

### Configurar emails de notificación:

- Recibirás alertas si algo falla en el despliegue
- Configúralo en los settings de tu plataforma

---

## 🔒 Seguridad

✅ **Certificado SSL:**
- Las plataformas modernas incluyen HTTPS automático
- Tu dominio tendrá un candado verde 🔒

✅ **Proteger variables sensibles:**
- No guardes contraseñas en el código
- Usa variables de entorno

---

## 📈 Mejoras Post-Despliegue

### 1. Agregar Google Analytics
```html
<!-- En el <head> de index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Agregar sitemap
Crea `frontend/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tusitio.com/</loc>
    <lastmod>2025-07-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. Agregar robots.txt
Crea `frontend/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://tusitio.com/sitemap.xml
```

---

## 🧪 Checklist Antes de Publicar

- [ ] Todos los enlaces funcionan correctamente
- [ ] No hay errores en la consola del navegador
- [ ] El formulario de contacto envía emails
- [ ] El sitio se ve bien en móvil
- [ ] Las imágenes cargan correctamente
- [ ] Los colores y fuentes están correctos
- [ ] No hay errores ortográficos
- [ ] El botón de WhatsApp funciona

---

## 📞 Soporte

¿Problemas con el despliegue?

**GitHub Pages Support:** [Documentación oficial](https://docs.github.com/es/pages)

**Netlify Support:** [Documentación oficial](https://docs.netlify.com/)

**Vercel Support:** [Documentación oficial](https://vercel.com/docs)

---

## 🎉 ¡Felicidades!

Tu sitio web está publicado en Internet para que todos lo conozcan. 🌍

Comparte el enlace con tu comunidad y que Dios bendiga tu ministerio. ✨

---

**Última actualización:** Julio 2025
