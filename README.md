# Mis XV Años · Aurora

Invitación web animada con cuenta regresiva, timeline, confirmación por WhatsApp y **lluvia de sobres** en la sección correspondiente.

## Estructura
- `index.html`
- `assets/css/styles.css`
- `assets/js/app.js`
- `.nojekyll` (opcional pero recomendado)

## Publicar en GitHub Pages
1. Crea el repo en GitHub (p. ej. `mis-xv-aurora`).
2. Sube todos los archivos respetando la estructura.
3. En **Settings → Pages**:
   - **Source**: “Deploy from a branch”
   - **Branch**: `main` y carpeta `/ (root)`
4. Guarda. La URL será `https://TU-USUARIO.github.io/mis-xv-aurora/`.

## Personalización rápida
- Fecha y hora del evento: en `assets/js/app.js` → `new Date('2025-12-27T14:00:00-06:00')`.
- WhatsApp: reemplaza `525524980067` por tu número en `index.html`.
- Hero: cambia la imagen de fondo en `assets/css/styles.css` (selector `header.hero`).
- Música: en `index.html`, agrega `src` al `<audio id="song">`.

## Nota
Las imágenes de Unsplash se cargan por URL; si quieres tener todo local, guarda las imágenes en `assets/img/` y actualiza rutas.
