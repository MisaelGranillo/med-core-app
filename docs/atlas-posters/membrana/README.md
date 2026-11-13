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

## Embriología (Human Reference Atlas + modelos propios)

Z-Anatomy no trae órganos femeninos ni embriones. Para las láminas de Embriología:

- **Útero, trompas y ovarios**: órganos de referencia del Visible Human femenino del Human Reference Atlas
  (HuBMAP / NIH 3D, CC BY 4.0), segmentados (fondo, cuerpo, cuernos, segmento inferior, orificio cervical
  interno; ampolla, istmo, infundíbulo y fimbrias). Se descargan a `emb3d/hra/` (no se versiona) desde
  `https://cdn.humanatlas.io/digital-objects/ref-organ/<órgano>/latest/assets/3d-vh-f-<órgano>.glb`
  (`uterus-female`, `ovary-female-left|right`, `fallopian-tube-female-left|right`) y se unen con
  `Blender -b --python emb3d/combine.py` en `emb3d/utero-anexos.glb`.
- **Embriones**: modelos propios, procedurales, cortados a la mitad (resta booleana con un cubo):
  `emb3d/cleave.py` (cigoto a eclosión), `emb3d/blasto.py` (blastocisto) y `emb3d/implant.py`
  (días 8, 9, 11–12 y 13 dentro de un bloque de endometrio). `emb3d/tercera.py` hace el disco trilaminar, los cortes de la
  neurulación y el embrión del día 22; `emb3d/cavidades.py`, los cortes del plegamiento lateral, el tórax, el
  diafragma por componentes y la gastrosquisis y el onfalocele. `emb3d/placenta.py` hace el útero al tercer mes, el corte de la
  placenta, las arterias espirales, las vellosidades y la placenta a término. El render oculta las piezas
  cuyo nombre contiene «arter», «vein», «canal», etc.: en los modelos propios se usan otros nombres
  («Espiral uterina», «Vaso corionico»). `./measure.sh <lámina>` mide si el contenido cabe (≤ 1526).
- **Periodo fetal**: la lámina usa gráficos SVG en lugar de modelos 3D; `python3 fetal_svg.py ana` los genera
  (`ana/fetal-*.svg`) con los datos de la tabla de la clase y un esquema aproximado de percentiles. Las lagunas, vellosidades y sinusoides se
  restan una por una (restar un objeto que junta piezas encimadas rompe el booleano) y las superficies
  irregulares se remallan por vóxeles antes de restar.
- Las vistas se renderizan con `python3 emb_render.py <nombre> '<json>'` (mismas claves que `za_render.py`
  más `model`); los colores van por nombre de pieza en `hl`, y en las láminas los puntos de los rótulos se
  fijan a mano sobre el recorte (las piezas huecas tienen el centroide en medio de la cavidad).
- **Función placentaria, líquido amniótico y gemelos**: `Blender -b --python emb3d/funcion.py` genera el corte del cordón y los tres modelos de gemelos (`cordon-corte`, `gemelos-dcda`, `gemelos-mcda`, `gemelos-mcma`; vista `0,0.05,1`, pad 0.85); `python3 funcion_svg.py ana` genera los esquemas `ana/func-*.svg` (intercambio, hormonas, anti-D, Kramer, volumen y ciclo del líquido).
