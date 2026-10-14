# GTI Ltda — Sitio web, versión 1

Sitio estático listo para subir a GitHub y desplegar en Vercel. No requiere `npm`, dependencias ni proceso de compilación.

## Cómo abrirlo

Abre `index.html` en el navegador. Para comprobar el comportamiento con un servidor local, sitúate en esta carpeta y ejecuta `python -m http.server 4173` (o cualquier servidor estático), luego abre `http://127.0.0.1:4173/`.

## Publicar en GitHub y Vercel

1. Crea un repositorio en GitHub y sube **el contenido de `version 1` a la raíz** del repositorio: `index.html`, `styles.css`, `script.js`, `README.md`, `brief-marca.md`, `robots.txt` y `assets/`.
2. En Vercel, importa ese repositorio. Selecciona **Other** como framework y deja vacíos Build Command y Output Directory. El sitio se sirve desde la raíz.
3. Al asignar el dominio definitivo, actualiza `og:image` en `index.html` a una URL absoluta y agrega una etiqueta `canonical`. Crea y envía `sitemap.xml` con el dominio final en Google Search Console.

## Archivos

- `index.html`: contenido, SEO básico, enlaces y datos estructurados.
- `styles.css`: diseño responsive y movimiento.
- `script.js`: menú móvil, barra de avance, aparición al hacer scroll y acordeón educativo.
- `assets/`: logo, favicon y fotografías finales utilizadas.
- `brief-marca.md`: investigación, fuentes, decisiones y limitaciones.

## Imágenes y fuentes

`logo-gti.webp` y `favicon.png` proceden del logo entregado por el usuario. `autos-gti-facebook.webp` es una fotografía pública compartida por GTI en su página de Facebook, optimizada y con ajuste leve de contraste/color. `hero-diagnostico.webp` y `servicio-lubricacion.webp` son imágenes de apoyo generadas con IA: ilustran servicios, no documentan el local ni al equipo real. Se usan tipografías de Google Fonts con alternativas del sistema si no cargan.

Instagram restringió la visualización sin iniciar sesión. La ficha de Google no cargó directamente en el navegador de investigación; la dirección y el teléfono se contrastaron con publicaciones públicas de la marca y otros perfiles. La cita de reseña procede de una captura de opiniones de Google publicada por GTI. No se publicaron horarios porque las fuentes visibles no coinciden.

## Contacto incluido

- WhatsApp: +56 9 5715 1476
- Teléfono fijo: +56 2 2227 9736
- Dirección: Av. Oriental 5874, Peñalolén, Santiago

Conviene que GTI confirme estos datos, los servicios destacados y el texto de la reseña antes de publicar en su dominio definitivo.
