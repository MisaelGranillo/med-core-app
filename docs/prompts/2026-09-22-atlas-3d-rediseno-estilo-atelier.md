# PROMPT — MedCore · Atlas 3D: rediseño visual "estilo atelier" + interacciones

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-22.
> **Prompt language: English. MedCore UI stays in Spanish.**
> Objetivo: que el visor 3D (`/anatomia-3d`) **se vea tan atractivo y fácil de usar** como
> los exploradores 3D modernos tipo "atelier" (fondo cálido de estudio, pieza que "flota"
> sobre un plinto, puntos interactivos, panel lateral editorial) y añadir las interacciones
> que faltan (corte, aislar, auto‑rotar, reiniciar).
> **Legal:** este es un rediseño **original inspirado** en esa estética general — **NO
> copies** código, assets, colores exactos, tipografía de marca ni el nombre de ningún
> producto de terceros (p. ej. Anatomy Atelier, que además no tiene licencia). Solo
> reproducimos ideas de UX (que no son copyright): fondo de estudio, dots, cortes, capas.

---

## 0. Lo que YA existe (mejorar, no reescribir)
Lee primero y **conserva** la lógica actual:
- `src/components/AnatomyModelViewer.tsx` (R3F): orbit/zoom, click‑to‑select + highlight,
  mostrar/ocultar por estructura y por grupo, etiquetas en escena, espejo sagital, carga
  GLB (`useGLTF`), nombres de nodo = Terminología Anatómica.
- `src/pages/Anatomy3D.tsx`: navegador de modelos, panel de estructuras/grupos, `?model=`.
- Modelos en `public/models/*.glb` (Open 3D Model, CC BY‑SA 4.0 — mantener el footer de
  atribución existente). Datos: `anatomy-3d-data.ts`, `anatomyStructures.ts`, `anatomyModels.ts`.

No rompas: selección, mostrar/ocultar (será "Capas"), etiquetas, espejo, `?model=`.

## 1. Estética objetivo (stage "atelier" — original)
El escenario 3D tiene **su propia paleta** (no invertir con el tema; ver design system):
- **Fondo de estudio cálido**: claro = crema/off‑white (~`#F3EEE6`); oscuro = carbón cálido
  (~`#1C1A17`). Gradiente **muy** sutil o plano (sin ruido).
- **Iluminación de estudio**: `ambient` suave + 1 `directional` clave + `hemisphere` tenue;
  la pieza se ve tridimensional y limpia (sin neón).
- **Plinto/sombra de contacto**: una **sombra suave** bajo el modelo (drei
  `ContactShadows` o `AccumulativeShadows`) para que "flote" sobre un pedestal. Opcional: un
  disco/plinto muy discreto.
- **Encuadre**: modelo centrado y bien ajustado (`Bounds`), con `Environment` neutro para
  reflejos suaves (drei `Environment preset="studio"` o luces manuales).
- **Tipografía**: títulos con un acento **serif** (`var(--font-voice)`) sobre cuerpo sans —
  transmite el aire "editorial/de artista"; textos y controles en `--color-*` tokens.
- **Micro‑animaciones** suaves; respeta `prefers-reduced-motion` (desactiva auto‑rotate).

## 2. Puntos interactivos (hotspot "dots")
Sustituye/complementa las etiquetas por **dots**: pequeños puntos luminosos sobre las
estructuras clave (drei `Html` anclado a la posición del nodo). Hover → el dot crece y
muestra el nombre (TA + español); click → **selecciona** la estructura, resalta y abre su
tarjeta en el panel lateral. Limita el nº de dots visibles por rendimiento (reusa el
`LABEL_CAP`). Botón para alternar dots on/off.

## 3. Barra de controles (limpia, con iconos + tooltips)
Una barra flotante/redondeada, minimalista (usa los iconos Phosphor ya presentes). Acciones:
- **Rotar / Auto‑rotar** (OrbitControls `autoRotate`; off por defecto y con reduced‑motion).
- **Reiniciar vista** (re‑fit `Bounds` + limpia aislar/corte).
- **Aislar** (solo la estructura seleccionada; oculta el resto — reutiliza el `hidden` set,
  añade acción "solo").
- **Corte** (sección): activa **clipping planes** de Three.js
  (`renderer.localClippingEnabled = true`; `material.clippingPlanes = [plane]`), con un
  **slider** para desplazar el plano y un selector de eje **sagital / axial / coronal**.
- **Capas** (mostrar/ocultar grupos — ya existe; solo dale UI de "capas").
- **Etiquetas / Dots** on‑off. **Espejo** (ya existe).
- *(Opcional, si hay tiempo)* **Comparar**: dos modelos lado a lado; si es costoso, déjalo
  fuera del piloto.

Cada botón con estado activo claro y accesible por teclado (`aria-label`, foco visible).

## 4. Panel lateral editorial (tarjetas)
Rediseña el panel de info de la estructura seleccionada como **tarjetas** tipo ficha:
- **Datos clave** (nombre TA + clásico/español, sistema, región).
- **Función** (de `anatomy-3d-data.ts` / `anatomyStructures.ts`).
- **Correlación / importancia clínica** cuando exista el dato.
- *(Si aplica)* enlace cruzado al Topic o MedLex relacionado.
Estilo sobrio, buena jerarquía, legible en claro y oscuro; en móvil el panel va abajo o en
un drawer.

## 5. Design system / temas
- El **stage 3D** usa su paleta propia hardcodeada (cream/charcoal) y NO se invierte con el
  tema (patrón "physical‑color scene"): define `[data-mode="dark"]` para el fondo oscuro y
  un fallback `@media (prefers-color-scheme: dark)`.
- El **chrome** alrededor (barra, panel, tarjetas) sí usa tokens `--color-*` y adapta a
  claro/oscuro. Verifica contraste en ambos.

## 6. Modelos
- Usa los GLB actuales. Si algún control (Capas/Corte) luce mejor con un órgano de partes
  internas, **anótalo** como candidato de NIH 3D (`3d.nih.gov`, CC0/CC‑BY) para un
  seguimiento — **no** descargues modelos nuevos en este prompt. Mantén el footer de
  atribución de los modelos actuales.

## 7. Verificación (incluye capturas)
```bash
npm run build
grep -n "localClippingEnabled\|clippingPlanes\|autoRotate\|ContactShadows" src/components/AnatomyModelViewer.tsx
```
Manual (`npm run dev`, claro+oscuro, desktop + móvil):
- [ ] El stage se ve como estudio cálido con sombra de contacto; el modelo "flota" limpio.
- [ ] Dots interactivos: hover crece + nombre; click selecciona y abre tarjeta.
- [ ] Barra: Auto‑rotar, Reiniciar, **Aislar**, **Corte** (slider + eje), Capas, Dots,
      Espejo — todas funcionan y con foco/teclado.
- [ ] Panel editorial con tarjetas legibles; enlace cruzado si aplica.
- [ ] No se rompió nada previo (`?model=`, selección, grupos, etiquetas, espejo).
- [ ] `prefers-reduced-motion` desactiva auto‑rotate.
- **Toma 3–4 screenshots** (claro/oscuro, con corte activo y con una estructura aislada) y
  pégalas en el reporte para revisión de Misael.

## 8. Non‑objectives / legal
- **Optional** No copies código, assets, nombres, wordmark ni colores exactos de Anatomy Atelier u
  otro producto; es un diseño original. No añadas dependencias pesadas nuevas si drei ya lo
  cubre (`ContactShadows`, `Environment`, `Html`, `Bounds`). No descargues modelos nuevos.
  No cambies contenido de temas ni el Atlas 2D. `npm run deploy`.

## 9. Delivery
1. `feat(atlas3d): stage estilo estudio (fondo cálido, luces, sombra de contacto)`
2. `feat(atlas3d): hotspots tipo dot + panel editorial de estructura`
3. `feat(atlas3d): interacciones — aislar, corte (clipping), auto‑rotar, reiniciar`
4. `style(atlas3d): barra de controles con iconos y accesibilidad`

Presenta las capturas y una nota de qué quedó fuera del piloto (p. ej. Comparar) y qué
modelos de NIH 3D convendría añadir para lucir Capas/Corte.
