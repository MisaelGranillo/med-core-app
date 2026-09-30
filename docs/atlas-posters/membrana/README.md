# Láminas del Atlas — estilo «membrana»

Pósters de 1024×1536 (render 2×) con todo el texto real y verificado.

- `src/*.html` — fuente de cada lámina. `{{icon:Nombre}}` = icono Phosphor; `{{img:ruta}}` = imagen incrustada;
  `<script type="callout">{…}</script>` = bloque de rótulos (ver `callout.py`).
- `python3 crops.py` — regenera `ana/` a partir de `docs/atlas-fuentes/`.
- `python3 build.py src/<lámina>.html` — genera `build/<lámina>.png`; luego
  `cwebp -q 88 -m 6 build/<lámina>.png -o public/atlas/<id>.webp`.

Solo las láminas de Anatomía tienen fuente aquí; las de Histología, Genética y Bioquímica se
publicaron directamente en `public/atlas/*.webp`.
