# PROMPT — MedCore · Anatomía Humana y Disección I · Semana 2 (Fase 1)

> Destinatario: **Claude Code**, repo `~/med-core-app`. Emitido 2026-08-10.
> Idioma: todo en español (contenido, UI, comentarios).
> **Fase 1 de la Semana 2**: solo la **Clase 1 — Tórax óseo (esternón y
> costillas)**. Las clases de miembros superior/inferior de esta misma semana
> aún NO se han impartido; su carga es un parche posterior (§9).

---

## 0. Antes de escribir una línea

Lee y confirma que existen los `id`, tipos y rutas que este prompt cita:

```bash
cd ~/med-core-app
sed -n '1,53p' src/types/index.ts                  # BlockType, Section, Topic, colorKey
sed -n '54,75p' src/types/index.ts                 # union TopicColorKey (osteologia ya existe)
sed -n '1,40p' src/data/colors.ts                  # TOPIC_COLORS: osteologia ya definida (11 campos)
sed -n '1,35p' src/data/modules.ts                 # módulo 'anatomia-uad'
sed -n '35,290p' src/data/anatomia-uad-topics.ts   # patrón de Topic (gen-*, secciones, keyTerms)
tail -5 src/data/anatomia-uad-quizzes.ts           # cómo cierra el array
sed -n '29,90p' src/data/atlas-topics.ts           # AtlasTopic + AtlasQuestion (patrón)
sed -n '110,180p' src/data/plans/uad-medicina.ts   # Semana 2 anatomia (placeholder) + materiales
git log --oneline -8
```

`npm run build` debe pasar limpio **antes** de tocar nada.

**Comprueba colisiones** de cada `id` nuevo antes de usarlo:
`grep -rn "torax-oseo\|'tor-\|'tho-" src/`

---

## 1. Objetivo — qué capa toca qué archivo

| Capa | Archivo | Qué se añade |
|---|---|---|
| Guía de estudio | `src/data/anatomia-uad-topics.ts` (spread ya en `topics.ts`) | 1 `Topic` nuevo: `torax-oseo` |
| Banco de reactivos | `src/data/anatomia-uad-quizzes.ts` (spread en `quizzes.ts`) | ~12 `Question` con prefijo `tor-q` |
| Ficha de materia | `src/data/plans/uad-medicina.ts` | Semana 2 → `estado`, `topicIds`, `fuentes`; material de clase |
| Atlas | `src/data/atlas-topics.ts` (+ lámina en `public/atlas/`) | 1 `AtlasTopic` `torax-oseo` con 7 `AtlasQuestion` |
| Módulo | `src/data/modules.ts` | módulo `anatomia-uad` de Semana 1 intacto; ver §5.1 |

No se añade terminología a `medlex-terms.ts` en esta fase salvo que falten morfemas
(cost-, estern-); es osteología descriptiva, no morfología grecolatina nueva.

---

## 2. Fuentes de verdad

- **Clase (28 diapositivas efectivas):**
  `~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 2/Clase 1/` (73 capturas PNG; muchas son la misma diapositiva con resaltados progresivos → hay ~28 diapositivas únicas de contenido). El contenido verificado está transcrito en §4.
- **Libro de texto:** `Moore Anatomía.pdf` — capítulo **Tórax**, sección
  *Esqueleto del tórax / Caja torácica*. **Offset ya verificado: libro = PDF − 24.**
  Localiza las páginas del esternón y las costillas con
  `pdftotext -layout -f <n> -l <m> "Moore Anatomía.pdf" -` y **cita ambas
  numeraciones** en `fuentes` (p. ej. "libro 294–301 / PDF 318–325"). No inventes
  las páginas: ábrelas.
- **Complementario:** `Serie RT Anatomía.pdf`, `Tratado_de_Anatomia_...Quiroz.pdf`
  (Quiroz usa la nomenclatura clásica del profesor; útil para el paréntesis).

---

## 3. Regla de terminología (TA principal, clásico entre paréntesis)

Igual que en Semana 1: **término de la Terminología Anatómica Internacional (TA)
como principal**, clásico del profesor entre paréntesis la primera vez de cada
sección. En los reactivos, **el término clásico cuenta como correcto** — el examen
lo califica así. Un bloque `note` por Topic explicando la coexistencia.

Equivalencias TA → clásico de ESTA clase (verifícalas, no las mezcles dentro de
una misma opción):

| TA (principal) | Clásico (profesor) |
|---|---|
| Proceso xifoides | apéndice xifoides |
| Incisura yugular | horquilla esternal |
| Incisuras claviculares | escotaduras claviculares |
| Surco costal | canal costal |
| Serrato anterior | serrato mayor |
| Tubérculo del músculo escaleno anterior | tubérculo escalénico (de Lisfranc) |
| Vértebras torácicas (T1–T12) | vértebras dorsales (D1–D12) |
| Costillas verdaderas / falsas / flotantes | (el profesor usa los mismos; ver matiz §4.3) |
| Ángulo del esternón | (nivel del disco T4–T5; el profesor lo ancla en "D3") |

> ⚠️ Discrepancia que el Topic debe declarar en un `note`: el profesor sitúa la
> **articulación manubrio-esternal a nivel D3** y la **xifo-esternal a nivel D10**.
> La TA/Moore sitúan el ángulo del esternón frente al **disco T4–T5**. Enseña el
> dato del profesor como el evaluable y menciona el de Moore como referencia, sin
> corregirlo como "error": es una convención de nivel, no una errata.

---

## 4. Contenido verificado de la Clase 1 (tórax óseo)

Organiza el Topic `torax-oseo` en **7 secciones** siguiendo este material. NO
agregues estructuras que la clase no tocó (nada de vértebras torácicas en detalle,
nada de articulaciones costovertebrales más allá de lo listado).

### 4.1 Cavidad torácica (caja torácica)
- Dos aberturas: **superior** e **inferior**.
- **Dimensiones (cara posterior 27 cm · anterior 15 cm · lateral 32 cm).** La
  lateral es la mayor; la anterior la menor. (Reactivo de ordenamiento aquí.)
- **Superficie exterior:** cara anterior, cara posterior, caras laterales.
- **Superficie interior:** cara anterior, cara posterior, caras laterales.
- **Abertura torácica superior** (opérculo): anteroposterior **4–5 cm**,
  transversal **10–12 cm**.
- **Abertura torácica inferior:** anteroposterior **12 cm**, transversal **26 cm**;
  limitada abajo por el **ángulo subcostal** (infraesternal).

### 4.2 Esternón
- Tres partes: **manubrio**, **cuerpo**, **proceso xifoides (apéndice xifoides)**.
- **Manubrio:** incisura yugular (horquilla esternal); incisuras claviculares
  (escotaduras claviculares); **recibe la 1.ª costilla**.
- **Cuerpo:** **recibe de la 3.ª a la 6.ª costilla**.
- **Proceso xifoides:** **fosita gástrica**.
- **Articulaciones:** manubrio-esternal ↔ a nivel de la **2.ª costilla** (nivel
  **D3**); xifo-esternal ↔ **7.ª costilla** (nivel **D10**).

### 4.3 Costillas — generalidades
- **12 pares.**
- **Oblicuidad:** de la 1.ª a la 9.ª.
- **Longitud:** crece de la 1.ª a la 7.ª (luego decrece).
- **Verdaderas:** 1.ª a 7.ª. **Falsas:** 8.ª a 12.ª. **Falsas-flotantes:**
  11.ª y 12.ª.
  > Matiz del profesor a respetar en el banco: clasifica las flotantes como
  > **subconjunto de las falsas** (falsas = 8–12; flotantes = 11–12). Muchos textos
  > dicen "falsas 8–10, flotantes 11–12". En los reactivos, **sigue la versión del
  > profesor**; puedes anotar la otra convención en el `explanation`.

### 4.4 Costilla tipo (3.ª a 9.ª)
- **Cabeza:** 2 carillas articulares + **cresta interarticular**.
- **Cuello:** tuberosidad (tubérculo costal).
- **Cuerpo:** **ángulo** + **surco costal (canal costal)**.

### 4.5 Costillas especiales
- **1.ª costilla:** más pequeña, ancha y plana; **1 sola carilla articular en la
  cabeza**; **surco de la arteria subclavia**; **tubérculo del escaleno anterior
  (tubérculo escalénico)**; **surco de la vena subclavia**.
  (Orden anteroposterior: surco de la vena — tubérculo escaleno — surco de la
  arteria; la vena va por delante del tubérculo, la arteria por detrás.)
- **2.ª costilla:** **tuberosidad del serrato anterior (serrato mayor)**.
- **10.ª, 11.ª y 12.ª:** **1 sola carilla articular en la cabeza** (como la 1.ª).

### 4.6 Confusiones reales de esta clase (para el ≥25 % del banco)
Enuméralas como blanco de reactivos; sin esto el banco degenera en trivia:

1. Verdaderas (1–7) vs falsas (8–12) vs flotantes (11–12), en la versión del
   profesor.
2. Qué costillas tienen **1 sola carilla** en la cabeza (1, 10, 11, 12) frente a
   las típicas (3–9, dos carillas).
3. **Surco de la arteria** vs **surco de la vena** subclavia en la 1.ª costilla y
   su posición respecto al tubérculo escalénico.
4. **Tubérculo escalénico** (1.ª) vs **tuberosidad del serrato anterior** (2.ª):
   qué costilla lleva cuál.
5. Qué costillas recibe el **manubrio** (1.ª) vs el **cuerpo** (3.ª–6.ª); qué
   costilla marca la articulación manubrio-esternal (2.ª).
6. Dimensiones: mayor diámetro = lateral (32); abertura inferior transversal (26)
   ≫ superior transversal (10–12).
7. Niveles vertebrales del profesor: manubrio-esternal **D3**, xifo-esternal
   **D10**.
8. **Oblicuidad** (1–9) vs **longitud** (1–7): no confundir los dos rangos.

---

## 5. Entregables — esquema exacto

### 5.1 Topic `torax-oseo` (`anatomia-uad-topics.ts`)

- `id: 'torax-oseo'`, `colorKey: 'osteologia'` (reutiliza; NO crees clave nueva).
- `title: 'Tórax óseo: esternón y costillas'`,
  `subtitle: 'Caja torácica, esternón, costillas típicas y especiales'`.
- **7 secciones** (`tor-1` … `tor-7`) siguiendo §4.1–§4.5, más:
  - `tor-1` abre con un `note` de terminología (TA ↔ clásico) y otro con la
    discrepancia de niveles D3/D10 vs T4–T5 (§3).
  - Variedad de `BlockType` como en los Topics existentes: `table` para
    dimensiones y para el reparto de carillas; `comparison` para verdaderas vs
    falsas y para arteria vs vena subclavia; `list` para partes del esternón;
    `definition` para cresta interarticular, tubérculo escalénico, surco costal.
- `keyTerms`: proceso xifoides, incisura yugular, surco costal, cresta
  interarticular, tubérculo escalénico, serrato anterior, costillas flotantes,
  ángulo subcostal, abertura torácica superior/inferior (con clásico entre
  paréntesis).
- 6–8 `keyPoints` accionables (los rangos 1–7 / 8–12 / 11–12; carillas únicas
  1-10-11-12; niveles D3/D10; dimensión lateral máxima).
- **No renumeres** `sectionId` de Topics existentes.

### 5.2 Banco `anatomia-uad-quizzes.ts`

- **~12 reactivos** nuevos, prefijo `tor-q`, **añadidos** al array (el banco
  crece; Semana 1 tiene ~12–13 por Topic, mantén la proporción).
- Orden **descendente de valor de estudio** con comentario de cabecera, para que
  cualquier rebalanceo futuro sea un truncado mecánico.
- Cumple la rúbrica de calidad: distractores de otra estructura del mismo grupo
  (p. ej. atribuir el tubérculo escalénico a la 2.ª costilla), `explanation` que
  justifique la correcta **y** descarte un distractor, `correctIndex` repartido
  0–3, nada respondible por gramática. ≥3 reactivos sobre §4.6.

### 5.3 Ficha de materia (`plans/uad-medicina.ts`, Semana 2 de `anatomia-...-1`)

- La Semana 2 ya existe como *"Osteología II: tórax y miembros"* con 3 temas. La
  Clase 1 cubre **solo el primer tema** ("Esqueleto del tórax: esternón y
  costillas"). Por tanto:
  - `estado: 'en-curso'` (o el valor que el tipo `SemanaContent` admita para
    "parcialmente impartida"; si solo existen `impartido`/`adelanto`, usa
    `impartido` y deja constancia en un comentario de que faltan los temas de
    miembros — **no** marques la semana como completa en la UI).
  - `topicIds: ['torax-oseo']`.
  - `fuentes`: capítulo Tórax de Moore con **ambas numeraciones** (§2).
- En `content.materiales`, añade:
  ```ts
  { title: 'Semana 2 · Clase 1 — Tórax óseo (esternón y costillas)',
    file: 'Semana 2 - Clase 1 Torax Oseo.pdf', kind: 'Clase' },
  ```

### 5.4 Atlas `torax-oseo` (`atlas-topics.ts`)

- `AtlasTopic` con `id: 'torax-oseo'`, 7 `AtlasQuestion` (`tor-a1`…`tor-a7`)
  sobre localización: partes del esternón, carillas de la 1.ª costilla, rango de
  verdaderas/falsas, aberturas.
- Sigue el patrón de los AtlasTopic existentes, incluida la práctica de marcar en
  la clave de color lo que la lámina muestre pero la clase no haya desarrollado.
- La **lámina** (`public/atlas/torax-oseo.png`) se genera aparte con el prompt de
  Gemini que acompaña a esta entrega (archivo hermano
  `2026-08-10-anatomia-semana-2-lamina.md`). Deja el `imageUrl` apuntando al
  nombre final aunque el PNG llegue después; si el archivo aún no existe, el
  Topic no debe romper el build (usa el mismo mecanismo que Semana 1).

### 5.5 Biblioteca

Compón el PDF de la clase desde las capturas y súbelo a
`library.medcore.icu/anatomia-humana-diseccion-1/` con el nombre de §5.3:

```bash
cd "~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 2/Clase 1"
python3 -c "
from PIL import Image; import glob
fs=sorted(glob.glob('*.png'))
ims=[Image.open(f).convert('RGB') for f in fs]
ims[0].save('Semana 2 - Clase 1 Torax Oseo.pdf', save_all=True, append_images=ims[1:], resolution=150)
print(len(ims),'páginas')"
```

**Muéstrame el comando de subida antes de ejecutarlo.** No commitees PNG ni PDF
al repo (cap de 25 MB en Cloudflare Pages).

---

## 6. Verificación

```bash
npm run build
grep -c "id: 'tor-q" src/data/anatomia-uad-quizzes.ts        # ≈ 12
grep -o "id: 'tor-[a-z0-9]*'" src/data/atlas-topics.ts | sort | uniq -d   # vacío
grep -n "torax-oseo" src/data/topics.ts src/data/plans/uad-medicina.ts src/data/atlas-topics.ts
grep -c "correctIndex" src/data/anatomia-uad-quizzes.ts       # 50 + ~12
```

Manual (`npm run dev`):

- [ ] `/estudio`: `torax-oseo` aparece bajo Anatomía con color `osteologia`
- [ ] `/topic/torax-oseo`: 7 secciones, el `note` de terminología y el de la
      discrepancia D3/D10, tablas de dimensiones y de carillas legibles **en modo
      claro y oscuro** (recuerda que `tailwind.config.js` sobrescribe `zinc`)
- [ ] `/plan/anatomia-humana-diseccion-1`: Semana 2 muestra su Topic y su fuente
      con doble numeración; NO aparece como semana completa
- [ ] Quiz de `torax-oseo` jugable; `correctIndex` sin sesgo visible
- [ ] Atlas `torax-oseo` no rompe aunque falte el PNG

**Auto-revisión obligatoria:** toma 3 reactivos y verifícalos contra §4
(especialmente el rango de falsas/flotantes y las carillas únicas 1-10-11-12).
Reporta el resultado.

---

## 7. No-objetivos

- No cargues miembro superior ni inferior (no impartidos): son el parche §9.
- No detalles vértebras torácicas ni articulaciones costovertebrales más allá de
  §4; la clase no las desarrolló.
- No crees `TopicColorKey` nueva: usa `osteologia`.
- No renumeres `sectionId` de ningún Topic (rompe `useProgress`).
- No toques los Topics de Semana 1, Inglés, `pai*`, `unisa-lmgc`, `lmgc-modules`.
- No subas PDF/PNG al repo. No ejecutes `npm run deploy`.
- No "corrijas" los niveles D3/D10 del profesor: decláralos como evaluables.

---

## 8. Entrega (commits atómicos, estilo del historial)

1. `feat(anatomia): Topic tórax óseo — esternón y costillas (Semana 2 Clase 1)`
2. `feat(quizzes): banco de tórax óseo — ~12 reactivos`
3. `feat(plan): Semana 2 de Anatomía con tórax óseo, fuente Moore y material`
4. `feat(atlas): AtlasTopic tórax óseo con 7 preguntas de localización`

En el reporte no resumas el prompt. Di solo lo que descubriste al ejecutar: las
páginas reales de Moore para el tórax (con ambas numeraciones), cualquier colisión
de `id`, y el resultado de la auto-revisión de los 3 reactivos.

---

## 9. Parche / Fase 2 (cuando lleguen las clases de miembros)

Cuando se impartan y suban las Clases 2–5 de la Semana 2 (miembro superior,
miembro inferior), un prompt hermano añadirá sus Topics (`miembro-superior-oseo`,
`miembro-inferior-oseo`), sus reactivos y sus láminas, y pasará la Semana 2 a
`impartido` completo. Hasta entonces, la Semana 2 queda **parcial**: solo tórax.
