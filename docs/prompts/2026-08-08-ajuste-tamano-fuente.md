# PROMPT — MedCore · Ajuste de tamaño de fuente

> Destinatario: **Claude Code**, repo `~/med-core-app`. Emitido 2026-08-08.
> Idioma de UI, comentarios y explicaciones: **español**.
> Feature aislada, no toca contenido de estudio.

---

## 1. Objetivo

Añadir un control de **tamaño de texto** con tres pasos —**Pequeño · Normal ·
Grande**— que reescala **todo** el texto de la app, persiste entre sesiones y se
opera desde una **página de Ajustes nueva** (`/ajustes`).

---

## 2. El obstáculo real — léelo antes de diseñar

La escala tipográfica está centralizada en `src/styles/tokens.css` como variables
`--fs-*`, consumidas por `src/index.css`. Eso hace *parecer* que basta un
multiplicador global. **No basta**, y esta es la razón:

Auditoría del repo:

- **85** usos de clases Tailwind con píxel fijo: `text-[13px]`, `text-[11px]`, etc.
  (`grep -rn "text-\[[0-9]" src/pages src/components`).
- **22** estilos en línea con píxel fijo: `style={{ fontSize: 11 }}` en
  `Home.tsx`, `AnatomyModelViewer.tsx`, `AnatomyViewer2D.tsx`, `Toast.tsx`.
- **5** `font-size: NNpx` en CSS (`index.css` líneas 123, 171, 226, 273;
  `Home.tsx` media query 304).

El **píxel es una unidad absoluta**: no responde ni al `font-size` raíz del `html`
ni a las variables `--fs-*`. Si solo introduces un multiplicador global, esas 112
medidas se quedarán fijas mientras el resto escala. El resultado sería peor que no
tener la función: una app donde unas palabras crecen y otras no, sin patrón
visible para el usuario.

Por lo tanto este trabajo son **dos cosas**, y la segunda es la que de verdad
cuesta:

1. Un multiplicador de escala que gobierne las variables `--fs-*` y el `html`.
2. La **conversión de las 112 medidas en píxel a `rem` o a variables de token**,
   para que el multiplicador las alcance.

Sáltate el paso 2 y la función queda a medias. No lo hagas.

---

## 3. Antes de escribir código

Lee: `src/styles/tokens.css` (bloque "Type scale", líneas ~58–72),
`src/index.css` completo, `src/store/atlasStore.ts` (patrón de store persistido a
copiar), `src/components/Navbar.tsx`, `src/App.tsx` (registro de rutas y patrón
`named()` de lazy-load).

`npm run build` debe pasar limpio antes de empezar.

---

## 4. Entregables

### 4.1 Motor de escala — `src/styles/tokens.css`

1. Declara el multiplicador en `:root`, con el valor "Normal" por defecto:
   ```css
   --fs-scale: 1;
   ```
2. Redefine la escala tipográfica en función de él. Conserva los tamaños base
   actuales; solo multiplícalos:
   ```css
   --fs-body:    calc(0.9375rem * var(--fs-scale));
   --fs-small:   calc(0.8125rem * var(--fs-scale));
   --fs-label:   calc(0.75rem   * var(--fs-scale));
   --fs-caption: calc(0.75rem   * var(--fs-scale));
   ```
3. En `src/index.css`, haz que el `html` lleve el multiplicador para que todo lo
   que quede en `rem` (incluidas las utilidades Tailwind `text-xs`, `text-sm`,
   etc., que son `rem` por defecto) escale con él:
   ```css
   html { font-size: calc(100% * var(--fs-scale)); }
   ```
   > Ojo con el doble efecto: `html` en % escala la base de todos los `rem`, y las
   > `--fs-*` **además** multiplican por `--fs-scale`. Eso duplicaría el factor en
   > los elementos que usan `--fs-*`. **Elige una sola vía:**
   > - **Vía A (recomendada):** `html { font-size: calc(100% * var(--fs-scale)) }`
   >   y deja las `--fs-*` con sus valores `rem` **sin** el `calc(* --fs-scale)`.
   >   Como son `rem`, ya escalan por el `html`. Menos superficie, sin doble conteo.
   > - Vía B: `html` fijo y cada `--fs-*` multiplicada. Solo escala lo que use
   >   esas cuatro variables — insuficiente, porque el grueso del texto usa
   >   utilidades Tailwind, no las `--fs-*`.
   >
   > **Usa la vía A.** Reduce el paso 2 de §4.1 a *no* tocar las `--fs-*` y
   > concentra el efecto en `html`. Documenta en un comentario cuál elegiste.

### 4.2 Conversión de píxeles a `rem` — el grueso del trabajo

Meta: que ninguna superficie de texto quede en píxel fijo. Factor de conversión
con base 16: `Npx → (N/16)rem` (11px → 0.6875rem, 13px → 0.8125rem, etc.). O, mejor,
sustituye por la variable de token que corresponda cuando exista
(`--fs-small`, `--fs-label`…).

1. **Clases Tailwind `text-[NNpx]`** (85 usos): cámbialas por la utilidad `rem`
   equivalente o por `text-[0.xxxrem]`. Prioridad Tailwind estándar cuando encaje:
   `text-[11px]→text-xs`, `text-[13px]→text-sm`, `text-[15px]→text-base`. Cuando
   no haya utilidad exacta, usa `text-[0.6875rem]`.
2. **`fontSize` en línea con número** (22 usos): `fontSize: 11 → fontSize: '0.6875rem'`.
   En `Home.tsx`, muchos son del hero y las tarjetas: conviértelos igual.
3. **`font-size: NNpx` en CSS** (5 usos): a `rem` o a la variable de token.
4. **`Home.tsx:304`**, la media query `.home-title { font-size: 24px !important }`:
   a `1.5rem`. Mantén el `!important` si hacía falta.

> No cambies tamaños de icono, `padding`, `borderRadius`, `letterSpacing` ni
> anchos: solo `font-size`. Escalar espaciados desharía los layouts. La función es
> de **texto**, no de zoom.

Excepción legítima: dimensiones dentro de `<svg>` o de canvas (viewBox, labels 3D
del visor anatómico) **no** se convierten — no son texto de lectura y romperlas
descuadraría los modelos. Si dudas de un caso, déjalo en px y anótalo en el reporte.

### 4.3 Store persistido — `src/store/useSettings.ts` (nuevo)

Copia el patrón de `atlasStore.ts` (Zustand + `persist`):

```ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FontScale = 'pequeno' | 'normal' | 'grande'

const SCALE_VALUES: Record<FontScale, number> = {
  pequeno: 0.875,   //  −12,5 %
  normal:  1,
  grande:  1.15,    //  +15 %
}

interface SettingsState {
  fontScale: FontScale
  setFontScale: (s: FontScale) => void
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      fontScale: 'normal',
      setFontScale: (fontScale) => set({ fontScale }),
    }),
    { name: 'medcore-settings' },
  ),
)

export const scaleValue = (s: FontScale) => SCALE_VALUES[s]
```

**Aplicación al DOM:** en `App.tsx`, un `useEffect` que escriba el multiplicador en
el elemento raíz cada vez que cambie:
```ts
useEffect(() => {
  document.documentElement.style.setProperty('--fs-scale', String(scaleValue(fontScale)))
}, [fontScale])
```
Así el valor persistido se aplica en cada carga, sin parpadeo perceptible. Si
quieres eliminar incluso ese parpadeo, escribe un `<script>` mínimo en `index.html`
que lea `localStorage['medcore-settings']` y fije `--fs-scale` antes del primer
render; es opcional, dilo si lo añades.

### 4.4 Página de Ajustes — `src/pages/Ajustes.tsx` (nuevo)

- Ruta `/ajustes`, registrada en `App.tsx` con el patrón `named()` de lazy-load.
- Encabezado "Ajustes" coherente con el resto de páginas (mira el `<header>` de
  `Terminologia.tsx` o `QuizCatalog.tsx` como molde).
- Sección "Tamaño de texto" con tres botones: **A** pequeño, **A** normal (algo
  mayor), **A** grande (mayor aún) — el propio botón muestra su tamaño, así el
  control se autoexplica. El activo va resaltado (mismo estilo de "seleccionado"
  que usan los filtros de MedLex).
- Debajo, un párrafo de muestra que reaccione en vivo al cambio, para que el
  usuario vea el efecto sin salir de la página. Un texto médico corto sirve.
- Deja la página preparada para crecer: un comentario `{/* Futuros ajustes: tema, etc. */}`
  al final. No añadas más controles ahora.

### 4.5 Acceso — `src/components/Navbar.tsx`

Añade una entrada a `/ajustes` con `mobile: false` (icono `Gear` de Phosphor,
etiqueta "Ajustes"). La barra móvil ya va cargada; no la toques. En escritorio,
colócala al final, junto a "Progreso".

---

## 5. Verificación

```bash
npm run build     # tsc + vite, sin errores ni warnings nuevos

# No debe quedar ningún font-size en píxel fuera de SVG/canvas:
grep -rn "text-\[[0-9]\+px\]" src/pages src/components          # → vacío
grep -rn "fontSize: [0-9]" src/pages src/components             # → solo SVG/canvas, si acaso
grep -rn "font-size: [0-9]\+px" src/index.css src/styles        # → vacío
```

Manual (`npm run dev`), con el control en **Grande** y en **Pequeño**:

- [ ] El texto del **navbar** escala
- [ ] El **hero del Home** y las tarjetas de herramientas escalan (eran px en línea)
- [ ] Una **guía de estudio** (`/topic/columna-vertebral`): párrafos, tablas,
      `keyTerms` y comparaciones escalan de forma uniforme
- [ ] Un **quiz**: enunciado, opciones y explicación escalan
- [ ] Las **insignias y etiquetas** (código de materia, "Laboratorio", badges de
      dificultad) escalan — eran los `text-[11px]`
- [ ] El **visor 3D/2D** no se descuadra: sus etiquetas de estructura son SVG y
      **no** deben haber cambiado
- [ ] La elección **persiste** tras recargar y tras cerrar y reabrir
- [ ] **Modo claro y oscuro** correctos en `/ajustes`
- [ ] **Móvil 375 px** en Grande: el texto crece sin romper la barra inferior ni
      desbordar tarjetas. Si algún layout se rompe a +15 %, repórtalo con el
      componente exacto en vez de bajar el factor en silencio.

**Auto-revisión:** con la app en Grande, recorre Home → Plan → una materia → un
Topic → un Quiz y confirma que **no queda ningún texto sin escalar**. Reporta
cualquier isla de texto fija que encuentres, aunque creas que es intencional.

---

## 6. No-objetivos

- No escales `padding`, márgenes, iconos, `borderRadius` ni anchos: es tamaño de
  **texto**, no zoom de interfaz.
- No conviertas dimensiones de SVG ni de los modelos 3D/2D.
- No toques la barra de navegación móvil ni el contenido de estudio.
- No añadas más ajustes (tema, idioma) — solo deja el hueco.
- No introduzcas dependencias nuevas. No uses `localStorage` a mano salvo el
  `<script>` opcional de §4.3; el store de Zustand ya persiste.
- No ejecutes `npm run deploy`.

---

## 7. Entrega

Commits atómicos:

1. `refactor(type): tamaños de fuente en rem/tokens en vez de px fijos`
2. `feat(settings): store de ajustes persistido con escala de fuente`
3. `feat(settings): página /ajustes con control de tamaño de texto A·A·A`
4. `feat(nav): acceso a Ajustes en la barra de escritorio`

Separar el commit 1 (la conversión px→rem, que no cambia nada visible por sí solo)
del resto permite revertir la función sin perder el saneamiento tipográfico.

En el reporte: cuántas medidas px convertiste por archivo, qué casos dejaste en px
por ser SVG/canvas, y si algún layout se tensó a +15 %.
