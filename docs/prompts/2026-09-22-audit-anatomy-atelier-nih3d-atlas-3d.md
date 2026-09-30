# PROMPT — Auditoría: Anatomy Atelier + NIH 3D para el Atlas 3D de MedCore

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-22.
> **Esto es una AUDITORÍA (solo lectura): no cambies código ni añadas dependencias.** El
> entregable es **un informe en Markdown** en `docs/` con una recomendación. La decisión
> (adoptar/adaptar/descartar) la toma Misael después.
> **Regla dura: la licencia manda.** No copies ni "extraigas" código de terceros sin
> confirmar que su licencia lo permite y es compatible con MedCore. Si el repo es **GPL**,
> señálalo como *copyleft viral* (obligaría a MedCore a ser GPL) → NO integrar sin decisión
> explícita.

---

## 0. Contexto — lo que MedCore YA tiene (no reinventar)
MedCore ya trae un visor 3D propio en React Three Fiber:
- `src/components/AnatomyModelViewer.tsx`, página `src/pages/Anatomy3D.tsx` (ruta `/anatomia`
  y `/anatomia-3d`), datos en `src/data/anatomy-3d-data.ts`, **sistema de hotspots** en
  `src/data/anatomyHotspots.ts`, y modelos **GLB** en `public/models/` (cráneo, esqueleto,
  vértebras, miembros, mano, conducto inguinal…).
- Stack: `three ^0.184`, `@react-three/fiber ^9`, `@react-three/drei ^10`.

Lee esos archivos primero y **lista qué features ya existen** (cargar GLB, rotar/zoom,
hotspots, etc.) para no recomendar lo que ya está.

```bash
cd ~/med-core-app
sed -n '1,80p' src/components/AnatomyModelViewer.tsx
sed -n '1,40p' src/pages/Anatomy3D.tsx; sed -n '1,30p' src/data/anatomyHotspots.ts
ls -la public/models; grep -n "three\|fiber\|drei" package.json
```

## 1. Auditar Anatomy Atelier (repo open-source `thebuggeddev/anatomy`)
Clónalo **fuera del repo de MedCore** (temporal), solo para inspección:
```bash
mkdir -p /tmp/audit && cd /tmp/audit
git clone --depth 1 https://github.com/thebuggeddev/anatomy.git aa || echo "revisar URL/nombre real del repo"
```
Reporta:
1. **Licencia del código** (`LICENSE`, headers, `package.json "license"`): ¿MIT/Apache/BSD
   (permisivas, integrables con aviso) o **GPL/AGPL** (copyleft, riesgoso)? Cita el archivo.
2. **Licencia/procedencia de los ASSETS** (modelos GLB, texturas, imágenes): ¿tienen
   licencia propia? La web declara que los modelos fueron **generados con IA (Tripo AI)** y
   que **no es referencia clínica** → trátalos como **no aptos por exactitud** para una app
   de estudio médico (mismo criterio con que se descartaron las láminas de IA). Confírmalo
   en el repo.
3. **Stack y arquitectura**: ¿Three.js/R3F como MedCore? ¿Next.js? ¿Qué módulos están
   **desacoplados** y son reutilizables?
4. **Features que MedCore NO tiene** y que valdría la pena adaptar (compáralas contra §0):
   típicamente **corte transversal (cross-section/clipping planes)**, **capas (layers)**,
   **aislar estructura (isolate)**, **comparar**, animaciones de función. Para cada una:
   ¿cómo está implementada?, ¿depende de Next u otras libs?, ¿se puede portar al
   `AnatomyModelViewer` (R3F puro) de MedCore?

## 2. Evaluar NIH 3D como fuente de MODELOS (exactitud)
`https://3d.nih.gov` — repositorio **gubernamental de modelos 3D científicamente exactos**
(anatomía, células, ADN, proteínas, virus). Es la fuente correcta para **assets validados**,
en contraste con los GLB de IA de Anatomy Atelier.
- Revisa la **licencia por modelo** (no es única): muchas son **CC0 / dominio público**,
  otras **CC-BY** (atribución) o CC-BY-SA. Documenta cómo se ve la licencia en una ficha de
  modelo y qué formatos ofrece (GLB/GLTF/STL/OBJ) — MedCore usa **GLB**.
- Propón **3–5 modelos concretos** de NIH 3D útiles para MedCore ahora (p. ej. corazón,
  riñón/nefrona, hueso, célula, ADN) con su URL y licencia, como candidatos a `public/models/`.
- Verifica compatibilidad: ¿los GLB de NIH 3D cargan en el `AnatomyModelViewer` actual
  (drei `useGLTF`)? Señala tamaño/optimización (draco) si aplica.

## 3. Entregable — informe con recomendación
Escribe `docs/auditorias/2026-09-22-atlas-3d-anatomy-atelier-nih3d.md` con:
- **Resumen ejecutivo** (3–5 líneas): ¿qué conviene hacer?
- **Tabla de licencias**: Anatomy Atelier (código / assets) y NIH 3D (por modelo candidato)
  → compatible / con atribución / incompatible.
- **Features a adaptar** (solo las que MedCore no tiene y cuya licencia lo permita), con
  esfuerzo estimado (bajo/medio/alto) y dependencia de Next u otras libs.
- **Assets recomendados**: modelos de NIH 3D (URL + licencia + formato) para ampliar el
  Atlas 3D; **descartar** los GLB de Anatomy Atelier por exactitud/IA salvo que se
  demuestre lo contrario.
- **Recomendación final**: probablemente *"adaptar patrones de interacción (corte/capas/
  aislar) al visor R3F existente, si la licencia es permisiva; alimentar con modelos de NIH
  3D validados; no reutilizar assets de Anatomy Atelier"*. Ajusta según lo que encuentres.
- **Riesgos**: licencia copyleft, exactitud de assets IA, tamaño de modelos, atribución.

## 4. Non-objectives
- No integres ni modifiques el visor todavía. No añadas dependencias ni descargues modelos
  al repo. No copies código de terceros en este paso. No `npm run deploy`. Solo el informe.

## 5. Delivery
1. `docs(auditoria): evaluación Anatomy Atelier + NIH 3D para Atlas 3D`

Preséntame el informe; con él decidimos si hacemos un prompt de integración (features +
modelos NIH 3D) o lo descartamos.
