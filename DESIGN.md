# Design

Dirección **«Monitor suave»** (C) con el logo de la dirección A. Basada en PRODUCT.md y en la referencia Nixtio (ECG & Heart Rate Monitoring UI). Los tokens viven en `src/styles/tokens.css`.

## Visual theme

Superficies gris suave y tarjetas muy redondeadas sobre ellas; números grandes y delgados para el progreso; un solo acento azul. Calma de lectura (Notion) y títulos grandes con la información al frente (Apple Music). Sin banners con degradado, sin vidrio esmerilado decorativo y sin franjas laterales.

Tema elegible en Ajustes y en el botón de apariencia de la barra: Sistema · Claro · Oscuro. La clase `.dark` en `<html>` la pone `index.html` antes del primer pintado y luego `useThemeSync`; Tailwind usa `darkMode: 'class'`.

## Color

Estrategia: **Restrained**. Neutros con un leve tinte frío y un acento azul que solo marca acciones, progreso y estado.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--color-page-bg` | #ECEFF3 | #0F1115 | Fondo de página |
| `--color-surface` | #FBFCFD | #181B21 | Tarjetas |
| `--color-surface-subtle` | #E4E8EE | #21252D | Rellenos suaves, pistas de barras, avisos |
| `--color-border` | #E1E5EB | #262A32 | Líneas finas |
| `--color-text-primary` | #1B2029 | #ECEFF4 | Texto |
| `--color-text-secondary` | #515B6B | #AAB2C0 | Texto secundario (≥ 5.5:1) |
| `--color-text-muted` | #5F6878 | #959EAC | Etiquetas (≥ 4.5:1 en todas las superficies) |
| `--color-accent` | #2A63DB | #6D9EFF | Botón principal, progreso, selección |
| `--color-accent-light` | #E3ECFD | #16233D | Tintes de acento |
| `--color-on-accent` | #FFFFFF | #0A1428 | Texto sobre el acento |

Los colores de materia (`src/data/colors.ts`) solo aparecen como puntos de identificación; los encabezados y botones usan el acento.

## Typography

- **Urbanist** (Google Fonts) para todo: títulos en 200–300, texto en 400, énfasis en 500–600. Sin monoespaciada (`--font-mono` apunta a la sans).
- Los pesos gruesos heredados se aligeran desde `tailwind.config.js` (bold/extrabold → 600, semibold → 500).
- Títulos de página: `font-display font-light`, 2–2.75 rem, `tracking -0.025em`.
- Números de estado: `font-extralight` 2.75–3.5 rem con unidad pequeña en gris.
- Texto de lectura: 16 px (`--fs-body`), interlineado 1.6–1.7; el tamaño lo escala Ajustes → Tamaño de texto.

## Layout & components

- Tarjeta (`.card`): superficie, borde de 1 px, radio 22 px, sombra muy suave. Se usa para agrupar, no para cada elemento.
- Encabezado de tema: tarjeta de título + dos tarjetas de estado (Leído, Mejor quiz) con trazo de ECG / barras en el acento.
- Secciones: número en círculo de tinte (relleno al leerse), título en display 400; bloques con avisos en `surface-subtle` y definiciones en tinte de acento.
- Tablas: sin cebra ni color de materia; líneas finas, primera columna en gris.
- Botón principal: acento, radio 16 px, 15 px de texto en 500.
- Móvil: barra inferior de 4 destinos + «Más», respetando `safe-area-inset-bottom`; botón flotante «Secciones» por encima de la barra.

## Motion

150–250 ms con ease-out (cubic-bezier 0.25, 1, 0.5, 1). El contenido nunca empieza oculto: las entradas solo desplazan unos píxeles. Se respeta `prefers-reduced-motion`.

## Icono de la app

Cuadro azul (#2A63DB) con un trazo de ECG blanco. `public/icons/`: SVG para el favicon, `apple-touch-icon.png` (180, a sangre) para la pantalla de inicio del iPhone, y 192/512 + maskable en `manifest.webmanifest` (`display: standalone`).
