# Vidriería C&M — versión 2

Sitio web estático listo para GitHub y Vercel. No usa Vite, Node, npm ni proceso de compilación.

## Publicar en GitHub y Vercel

1. Sube **todo el contenido de esta carpeta** a la raíz de un repositorio de GitHub.
2. En Vercel, selecciona **Add New → Project** e importa ese repositorio.
3. En **Framework Preset**, selecciona “Other”.
4. Deja vacíos **Build Command** y **Output Directory**.
5. Publica.

El archivo vercel.json ya contiene la configuración. index.html es la página principal.

## Archivos

- index.html: contenido, SEO, mapa y datos estructurados.
- styles.css: diseño responsive y sistema de animaciones.
- script.js: menú móvil, entradas al hacer scroll, selector de sistema, FAQ y cotizador por WhatsApp.
- robots.txt y sitemap.xml: base de indexación.
- assets/: las seis imágenes finales usadas.
- brief-marca.md: fuentes, decisiones y limitaciones.

## Imágenes

- logo-cym-transparente.png: logo completo exacto, separado de su fondo para metadatos y favicon.
- logo-cym-marca-blanca.png: monograma C&M exacto, recortado en blanco y transparente para header y footer.
- hero-instalacion-pvc.webp: escena de instalación generada con IA a partir del rubro y el contexto visual observado.
- servicio-ventanas-pvc.webp, servicio-puertas-pvc.webp y servicio-termopanel.webp: fotografías de producto generadas con IA.
- proyecto-instalacion-reel.webp: reconstrucción mejorada basada en el reel “Continuando”, sin interfaz ni textos.

Las imágenes de IA son recursos comerciales de presentación. Para una representación documental exacta de una obra específica, reemplázalas por fotografías originales entregadas por la empresa.

## Dominio y SEO

La configuración usa https://vidrieriacym.cl/ como dominio canónico. Si se publica en otro dominio, reemplázalo en index.html, robots.txt y sitemap.xml.
