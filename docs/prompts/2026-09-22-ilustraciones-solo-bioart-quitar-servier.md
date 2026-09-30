# PROMPT — MedCore · Ilustraciones: cambiar a SOLO NIH BioArt (quitar Servier)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-22.
> **Prompt language: English. MedCore content stays in Spanish.**
> Decisión de Misael: **no le gustó el estilo de Servier**. A partir de ahora, las
> ilustraciones de MedCore usan **solo NIH BioArt Source** (bioart.niaid.nih.gov). La
> infraestructura ya existe (tipos, `IllustrationCredit`, render en `Topic`/`SectionPanel`,
> atribución en `Ajustes`); solo hay que **reemplazar las imágenes de Servier por
> equivalentes de BioArt** y limpiar la atribución.

---

## 0. Regla go-forward
- **Fuente única de ilustraciones: NIH BioArt Source.** No usar Servier en Histología ni en
  futuras extensiones (Genética, Anatomía).
- BioArt: la mayoría **dominio público** (cita apreciada, no obligatoria); algunas **CC-BY**
  (atribución con DOI). Registra por imagen: **ID/URL de la entrada + licencia**.
- **Precisión ante todo (Think Again):** usa una figura **solo si ilustra bien el
  concepto**; si BioArt no tiene una adecuada, **deja el tema/sección sin imagen** (no
  vuelvas a poner la de Servier ni fuerces otra).

## 1. Qué hay hoy (a reemplazar)
```bash
cd ~/med-core-app
ls public/ilustraciones/histologia/
grep -rn "servier\|Servier" src/data/histologia-topics.ts src/components/IllustrationCredit.tsx src/pages/Ajustes.tsx src/components/SectionPanel.tsx src/pages/Topic.tsx
```
Imágenes actuales (casi todas Servier; `conectivo-celulas` ya es BioArt): `celula`,
`conectivo-colageno`, `conectivo-fibroblasto`, `conectivo-mastocito`, `hueso-osteona`,
`hueso-remodelacion`, `piel-epidermis`, `polaridad-uniones`, `respiratorio-alveolos`,
`urinario-corpusculo`, + las figuras de sección con `credit: 'Servier…'`.

## 2. Reemplazo por BioArt
Para **cada** ilustración/figura cuyo `source` sea `'servier'` (o cuyo `credit` mencione
Servier), busca en **bioart.niaid.nih.gov/discover** una figura equivalente y precisa,
descárgala (PNG/SVG), optimízala y **sustituye** el archivo en
`public/ilustraciones/histologia/` (mismo nombre para no tocar rutas, o renombra y
actualiza `src`). Conceptos objetivo por archivo:

| Archivo / tema | Concepto a ilustrar (buscar en BioArt) |
|---|---|
| `celula` (`histologia-celula`) | célula animal / eucariota con organelos |
| `polaridad-uniones` (`-epitelial-polaridad`) | célula epitelial / uniones celulares |
| `urinario-corpusculo` (`-epitelios-urinario`) | nefrona / corpúsculo renal / glomérulo |
| `respiratorio-alveolos` (`-epitelios-respiratorio`) | alvéolo pulmonar / neumocitos |
| `piel-epidermis` (`histologia-piel`) | capas de la piel / epidermis |
| `conectivo-colageno` (`-conectivo-matriz`) | tejido conectivo / fibra de colágeno |
| `conectivo-fibroblasto` (`-conectivo-matriz`/sección) | fibroblasto |
| `conectivo-mastocito` (sección) | mastocito / célula inmune del conectivo |
| `hueso-osteona` (`histologia-hueso`) | osteona / hueso compacto (Havers) |
| `hueso-remodelacion` (sección) | osteoblasto / osteoclasto / remodelación ósea |
| (revisar el resto de `illustration:` y `type:'image'` con crédito Servier) | su concepto correspondiente |

Por cada reemplazo, actualiza en `histologia-topics.ts`:
- `source: 'bioart'`
- `credit: 'NIAID NIH BioART Source — dominio público'` (o `— CC BY 4.0` si la entrada lo
  es), y `sourceUrl` con la URL de la entrada (`bioart.niaid.nih.gov/bioart/###`).

Si para algún concepto BioArt no tiene una figura adecuada: **elimina** esa `illustration`/
bloque `image` y borra su PNG (mejor sin imagen que con una que no representa el tema).

## 3. Limpieza de Servier
- **Borra** los PNG de Servier que ya no se usen de `public/ilustraciones/histologia/`.
- `src/pages/Ajustes.tsx`: quita la atribución a Servier; deja **solo BioArt** (enlace a
  bioart.niaid.nih.gov; nota de que la mayoría es dominio público y algunas CC-BY).
- `src/components/IllustrationCredit.tsx`: como ya no hay imágenes Servier, ajusta el
  default a `'bioart'`; puedes conservar la rama `'servier'` en el tipo o eliminarla (si la
  eliminas, actualiza el union `source?: 'servier' | 'bioart'` → `'bioart'` en `types` y
  quita usos). El `SectionPanel` con "fondo blanco fijo para SVG de Servier" puede quedarse
  (no estorba) o comentarse como genérico.
- Verifica que **no queda ninguna referencia a Servier** en `src/`.

## 4. Verification
```bash
npm run build
grep -rni "servier" src public | grep -v node_modules      # vacío (o solo comentarios neutros)
grep -c "source: 'bioart'" src/data/histologia-topics.ts    # = nº de ilustraciones/figuras
ls public/ilustraciones/histologia/                         # sin PNG huérfanos de Servier
```
Manual (`npm run dev`, claro+oscuro): cada tema ilustrado muestra la figura de **BioArt**
con su crédito; Ajustes cita solo BioArt; nada roto; las que quedaron sin equivalente BioArt
no muestran imagen (y no quedó PNG huérfano).

**Reporte (Think Again):** tabla final tema/sección → entrada BioArt elegida (ID/URL + licencia)
→ 1 línea de por qué encaja; y lista de las que quedaron **sin imagen** por no haber
equivalente adecuado en BioArt.

## 5. Non-objectives
- No uses Servier ni otras fuentes. No cambies el texto de los temas. No toques el Atlas 3D.
  No `npm run deploy`.

## 6. Delivery
1. `feat(histologia): ilustraciones cambiadas a NIH BioArt (reemplaza Servier)`
2. `chore(assets): elimina PNG de Servier no usados`
3. `feat(ui): atribución solo BioArt en Ajustes; default de crédito bioart`

Entrega la tabla de reemplazo y la lista de temas sin imagen.
