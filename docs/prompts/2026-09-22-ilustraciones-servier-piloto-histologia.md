# PROMPT — MedCore · Ilustraciones (Servier + NIH BioArt) — piloto Histología

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-22.
> **Prompt language: English. MedCore content stays in Spanish.**
> Objetivo: ilustrar los temas con dos bibliotecas de **exactitud verificada**: **NIH
> BioArt Source** (bioart.niaid.nih.gov) y **Servier Medical Art / SMART**
> (smart.servier.com). Dos niveles: **imagen por tema** (tarjeta estilo "Imagen del Tema"
> del Atlas) **y figuras en secciones clave** (nuevo bloque de imagen). **Piloto: solo
> Histología**; si funciona, se extiende a Genética y Anatomía.

---

## 0. Fuentes, licencias y reglas que no se negocian
Dos fuentes; **prefiere la que ilustre el concepto con más exactitud** (ambas son
profesionales; BioArt está revisada por expertos, así que ante empate, BioArt):

- **NIH BioArt Source** — creada para dar gráficos médicos **exactos**; libre para todo
  uso. La mayoría de entradas son **dominio público** (cita apreciada, no obligatoria);
  algunas **CC-BY**. Crédito recomendado (y obligatorio si la entrada es CC-BY): *"Ilustración
  de NIAID NIH BioArt Source (bioart.niaid.nih.gov/bioart/###)"* + DOI si existe.
- **Servier Medical Art** — **CC BY 4.0**: adaptar/usar **con atribución obligatoria**:
  *"Servier Medical Art (smart.servier.com), CC BY 4.0"*, con enlace a licencia y fuente, e
  **indicar si se modificó**.

Registra por cada imagen: **fuente, URL/ID de la entrada y licencia** (para el crédito).

- **No commitees bibliotecas completas.** Descarga a un temporal **fuera del repo** (o a la
  biblioteca privada); commitea **solo** las imágenes curadas (decenas), optimizadas.
- **Precisión ante todo (Think Again):** adjunta una imagen **solo si ilustra correctamente
  el concepto**. Si ninguna encaja bien, **deja el tema/sección sin imagen** — nunca fuerces
  una figura aproximada (una ilustración equivocada enseña mal). Registra por cada imagen el
  archivo elegido + una línea de justificación.
- No `npm run deploy`.

## 1. Descargar y preparar los assets
```bash
# fuera del repo (temporal):
mkdir -p /tmp/art && cd /tmp/art
curl -L -o smart.zip "https://smart.servier.com/wp-content/uploads/ServierMedicalArt-all-kits.zip"
unzip -q smart.zip -d kits
find kits -iname "*.svg" -o -iname "*.png" | sed 's#.*/kits/##' | sort > /tmp/art/index.txt
```
**BioArt** no tiene un zip único: se explora y descarga por entrada en
`bioart.niaid.nih.gov/discover` (busca el concepto, abre la entrada, descarga PNG/SVG y
**anota su ID/URL y licencia** para el crédito). Para cada tema, mira primero si BioArt
tiene una figura exacta; si no, usa SMART.

SMART se organiza por categorías; para el piloto interesan sobre todo:
**Cellular Biology → Tissues, Intracellular components, Genetics, Nucleic acids, Cell
membrane**; **Anatomy → Locomotor (Bones), Respiratory (Lungs), Urinary system, Glands**;
**Medical Specialties → Dermatology, Rheumatology, Immunology & haematology**. Busca dentro
de `index.txt` por palabras clave (epithelium, connective, collagen, adipocyte, bone,
osteon, cartilage, chondrocyte, nephron, glomerulus, alveolus, skin, macrophage, mast…).
Prefiere **SVG**; si no, PNG. Optimiza (SVGO / recorte) y guarda en
`public/ilustraciones/histologia/<slug>.svg`.

## 2. Feature en MedCore (código)
Mínimos cambios, con soporte claro/oscuro y accesibilidad (`alt`):

**a) Tipos (`src/types/index.ts`)**
- Añade `'image'` a `BlockType`. En `ContentBlock` añade campos opcionales: `src?: string`,
  `alt?: string`, `caption?: string`, `credit?: string`.
- En la interfaz **Topic** añade opcional
  `illustration?: { src: string; alt: string; credit: string }` (imagen de cabecera del
  tema). No reutilices el `imagePath` del Atlas (es de `AtlasTopic`).

**b) Render**
- **Topic**: en la página del tema (`src/pages/Topic.tsx`), si `topic.illustration` existe,
  muestra una **tarjeta "Ilustración"** reutilizando el estilo de la card "Imagen del Tema"
  del Atlas (`AtlasTopic.tsx`, ~línea 369) — imagen contenida, fondo `surface`, borde
  `line`, con un **pie de crédito** pequeño (enlazando a la fuente y a CC BY 4.0). La imagen
  debe verse bien en claro y oscuro (las SVG de Servier son de línea/color plano; si alguna
  desaparece en dark, ponle un fondo `bg-white/なrounded` contenedor).
- **Bloque `image`** en `SectionPanel.tsx`: renderiza `src`+`alt`, `caption` opcional debajo
  (texto `text-muted`), y `credit` como pie pequeño. Mismo cuidado de contraste.

**c) Atribución global (requisito CC BY)**
- Añade una sección de créditos reutilizable (Ajustes/“Acerca de” o el pie) que reconozca
  **ambas** fuentes: *"Las ilustraciones provienen de NIAID NIH BioArt Source
  (bioart.niaid.nih.gov) y de Servier Medical Art (smart.servier.com, CC BY 4.0); algunas
  fueron adaptadas."* con enlaces. El crédito por imagen (paso b) no exime del crédito
  global, y cada imagen debe citarse según su fuente/licencia (dominio público, CC-BY o
  CC BY 4.0).

## 3. Curación — Histología (imagen por tema)
Para cada topic, busca en `index.txt` una figura que ilustre el **concepto**; si encaja,
ponla en `topic.illustration`. Concepto objetivo por tema:

| Topic | Ilustración objetivo | Dónde buscar (BioArt primero; luego SMART) |
|---|---|---|
| `histologia-introduccion` | Los 4 tejidos básicos / panorama tisular | Cellular Biology → Tissues |
| `histologia-microscopia-tecnica` | Microscopio óptico | General Items → Equipment → Laboratory |
| `histologia-celula` | Célula animal con organelos | Cellular Biology → Intracellular components |
| `histologia-epitelial` | Tipos de epitelio (simple/estratificado) | Cellular Biology → Tissues (epithelium) |
| `histologia-epitelial-polaridad` | Uniones celulares / epitelio polarizado | Tissues / Cell membrane |
| `histologia-glandulas` | Glándula exocrina vs endocrina | Tissues / Glands |
| `histologia-epitelios-urinario` | Nefrona / corpúsculo renal (glomérulo) | Anatomy → Urinary system |
| `histologia-epitelios-respiratorio` | Alvéolo pulmonar | Anatomy → Respiratory → Lungs |
| `histologia-piel` | Capas de la piel (epidermis/dermis) | Medical Specialties → Dermatology |
| `histologia-conectivo-matriz` | Tejido conectivo / fibras de colágeno | Cellular Biology → Tissues |
| `histologia-conectivo-celulas` | Células del conectivo (fibroblasto/macrófago/mastocito) | Tissues / Immunology & haematology |
| `histologia-conectivo-variedades` | Conectivo laxo vs denso | Cellular Biology → Tissues |
| `histologia-tejido-adiposo` | Adipocito / tejido adiposo | Cellular Biology → Tissues (adipocyte) |
| `histologia-cartilago` | Cartílago / condrocito | Rheumatology / Tissues |
| `histologia-hueso` | Hueso / osteona / células óseas | Anatomy → Locomotor → Bones; Rheumatology |
| `histologia-repaso-s1` / `-repaso-s2` | (opcional) sin imagen o un ícono neutro de repaso | — |

## 4. Curación — figuras en secciones clave (bloque `image`)
Añade **1–2 figuras** por tema donde una imagen de SMART aclare de verdad la sección
(usando el bloque `image`, con `caption` en español + `credit`). Sugerencias de alto valor:
- `histologia-hueso`: **osteona** (canal de Havers/laminillas) en la sección de osteona; y
  **osteoblasto/osteoclasto** en la de células óseas.
- `histologia-piel`: **estratos de la epidermis** en la sección de estratos.
- `histologia-epitelios-respiratorio`: **alvéolo con neumocitos** en la sección del alvéolo.
- `histologia-epitelios-urinario`: **glomérulo/barrera de filtración** en su sección.
- `histologia-cartilago`: **tipos de cartílago** o **placa de crecimiento**.
- `histologia-conectivo-celulas`: una lámina de **células inmunes** en la tabla de células.
Solo si el archivo real encaja; si no, omite.

## 5. Verification
```bash
npm run build
ls public/ilustraciones/histologia/           # solo las curadas (SVG/PNG)
grep -c "illustration:" src/data/histologia-topics.ts     # nº de temas ilustrados
grep -c "type: 'image'" src/data/histologia-topics.ts     # nº de figuras de sección
grep -rn "CC BY 4.0\|smart.servier.com" src --include=*.tsx | head   # atribución presente
du -sh public/ilustraciones                    # razonable (no el zip entero)
```
Manual (`npm run dev`, claro+oscuro): cada tema de Histología con imagen muestra la tarjeta
de ilustración con su crédito; las figuras de sección se ven y contrastan bien en dark; la
atribución global de Servier aparece (Ajustes/pie). Confirma que **no** se commiteó el zip
ni imágenes sin usar.

**Reporte (Think Again):** entrega la **tabla de curación** final (topic/sección → archivo
elegido → 1 línea de por qué encaja), y lista los temas/secciones que dejaste **sin imagen**
por falta de una figura adecuada. No fuerces coincidencias.

## 6. Non-objectives
- No toques el contenido textual de los temas ni el Atlas. No commitees el zip completo ni
  imágenes no usadas. No uses imágenes de otras fuentes en este piloto. No extiendas a
  Genética/Anatomía todavía (piloto). No `npm run deploy`.

## 7. Delivery
1. `feat(types): bloque image + illustration en Topic`
2. `feat(ui): render de ilustración de tema y figuras de sección con crédito`
3. `feat(histologia): ilustraciones Servier curadas (piloto) + atribución CC BY 4.0`
4. `chore(assets): ilustraciones Servier optimizadas en public/ilustraciones/histologia`

Entrega la tabla de curación y el reporte de exactitud.
