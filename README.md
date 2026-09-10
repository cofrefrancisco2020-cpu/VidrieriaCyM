# Vidriería C&M — versión 1

Sitio web estático listo para GitHub y Vercel. No usa Vite, Node, npm ni proceso de compilación.

## Publicar en GitHub y Vercel

1. Sube **todo el contenido de esta carpeta** a la raíz de un repositorio de GitHub.
2. En Vercel, selecciona **Add New → Project** e importa ese repositorio.
3. Deja **Framework Preset** en `Other`.
4. No agregues Build Command ni Output Directory.
5. Publica el proyecto.

El archivo `vercel.json` ya contiene la configuración de cabeceras y caché. `index.html` es la página principal.

## Archivos principales

- `index.html`: estructura, textos, SEO y datos estructurados.
- `styles.css`: diseño responsive y animaciones.
- `script.js`: menú móvil, animaciones, FAQ y cotizador hacia WhatsApp.
- `vercel.json`: configuración segura para Vercel.
- `robots.txt` y `sitemap.xml`: indexación.
- `assets/`: imágenes finales usadas por la web.
- `brief-marca.md`: investigación, decisiones y limitaciones.

## Funcionalidad

- El formulario prepara un mensaje con los datos ingresados y abre WhatsApp al número público de la empresa.
- El mapa está integrado con Google Maps y también incluye un enlace de ruta.
- Los enlaces de llamada, correo, Instagram y Facebook son reales.

## Imágenes

- `hero-equipo-instalacion-ai.jpg`: reconstrucción fotográfica basada en una publicación real; se eliminaron textos y gráfica de afiche y se mejoró la calidad.
- `proyecto-ventanas-madera-ai.jpg`: reconstrucción limpia basada en una publicación real de un proyecto terminado.
- `obra-frutillar-real.jpg`: imagen real de obra publicada por la marca, sin edición de identidad.
- `logo-vidrieria-cym.jpg`: recorte del logo visible en el perfil oficial de Instagram.

## Antes de usar el dominio definitivo

El SEO usa `https://vidrieriacym.cl/` como dominio canónico porque es el sitio enlazado desde el Instagram oficial. Si se publica en otro dominio, reemplaza esa URL en `index.html`, `robots.txt` y `sitemap.xml`.

