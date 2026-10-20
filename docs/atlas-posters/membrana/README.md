# Láminas del Atlas — estilo «membrana»

Pósters de 1024×1536 (render 2×) con todo el texto real y verificado.

- `src/*.html` — fuente de cada lámina. `{{icon:Nombre}}` = icono Phosphor; `{{img:ruta}}` = imagen incrustada;
  `<script type="callout">{…}</script>` = bloque de rótulos (ver `callout.py`).
- `python3 crops.py` — regenera `ana/` a partir de `docs/atlas-fuentes/`.
- `python3 build.py src/<lámina>.html` — genera `build/<lámina>.png`; luego
  `cwebp -q 88 -m 6 build/<lámina>.png -o public/atlas/<id>.webp`.

Solo las láminas de Anatomía tienen fuente aquí; las de Histología, Genética y Bioquímica se
publicaron directamente en `public/atlas/*.webp`.

## Cabeza y cuello (Z-Anatomy)

Los modelos de `public/models` no traen músculos de la cabeza ni del cuello. Para esas láminas se exporta
`za/head-neck.glb` (no se versiona) desde el `Startup.blend` de Z-Anatomy
(github.com/Z-Anatomy/Models-of-human-anatomy, CC BY-SA 4.0) con Blender en modo `-b`: huesos de cabeza,
cuello y primeras costillas más los músculos de cabeza, cara, cuello y nuca, sin las mallas de inserción
(`.o*`, `.e*`) ni las etiquetas (`.j`). Las vistas se renderizan con
`python3 za_render.py <nombre> '<json>'` (claves: show, hide, ghost, hl, view, focus, pad, pts, dbl, poff).
`dbl=1` dibuja los músculos por ambas caras y `poff` los adelanta para que el hueso no los atraviese.
