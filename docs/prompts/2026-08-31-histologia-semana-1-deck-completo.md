# PROMPT — MedCore · Histología I · Week 1 (full deck, 114 slides)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-31.
> **Prompt language: English. MedCore content stays in Spanish.**
> The professor's **complete Week‑1 deck** is now available (114 slides). It is much
> richer than Classes 1–2 — it adds the whole **La Célula** block (membrane, nucleus,
> organelles, cytoskeleton, membrane transport). **This SUPERSEDES the Histología
> section of `2026-08-30-genetica-histologia-semana-1.md`** (the Genética part of that
> prompt still stands). If that prompt already created the two Histología topics,
> **expand** them and add the third; otherwise create all three.
> **The professor marks EXAM items with ★ — capture every one (§3).**

---

## 0. Source of truth
- Deck: `…/Histología I y sus Laboratorios DEF/Clases/Semana 1/Histologia Semana 1 correct.pptx`
  (114 slides — authoritative). Transcripts `…/Clase {1,2,3,4}/*.md` for narration.
- Extract text + **all ★ lines** yourself (don't rely on OCR of images):
```bash
cd ~/med-core-app
python3 - <<'PY'
from pptx import Presentation
p=Presentation("/Users/USER/Desktop/UAD/Primer Semestre/Histología I y sus Laboratorios DEF/Clases/Semana 1/Histologia Semana 1 correct.pptx")
for i,s in enumerate(p.slides,1):
    for sh in s.shapes:
        if sh.has_text_frame:
            for ln in sh.text_frame.text.split("\n"):
                if ln.strip(): print(i, "★" if "★" in ln else " ", ln.strip())
PY
```
(`pip install python-pptx --break-system-packages` if needed.)

```bash
grep -n "id: 'histologia-introduccion'\|id: 'histologia-microscopia" src/data/histologia-topics.ts 2>/dev/null || echo "not created yet"
grep -n "colorKey: 'histologia'\|'histologia'" src/types/index.ts src/data/colors.ts
```

---

## 1. Three Week‑1 topics (`colorKey: 'histologia'`, `categoria: 'Histología'`)

### 1.1 `histologia-introduccion` — *"Introducción a la histología"*
Definición (histos = tejido, logos = estudio); los **4 tejidos básicos** (epitelial,
conectivo, muscular, nervioso — Histo I cubre epitelial y conectivo); vínculo con
anatomía/fisiología; aplicaciones diagnósticas (biopsia, histopatología oncológica);
método **inductivo vs deductivo**; **origen celular** (sopa primordial → ARN →
procariota → eucariota, LUCA); **eucariota vs procariota**; **capacidad regenerativa
por tejido** (epitelial alta · conectivo variable · muscular limitada · nervioso mínima;
cardiomiocitos/neuronas no se dividen → cicatriz/gliosis).

### 1.2 `histologia-microscopia-tecnica` — *"Microscopía, técnica y tinciones"*
- **Microscopios y resolución**: ojo humano 0.2 mm · campo claro 0.2 μm · campo oscuro
  ~0.2 μm · contraste de fase 0.2 μm · fluorescencia 0.2 μm · MEB 2.5 nm · MET 0.2 nm ·
  fuerza atómica 50 pm (mayor resolución). Estructura del microscopio (ocular, objetivo,
  condensador, diafragma, platina, tornillos).
- **Técnica histológica**: obtención → **fijación (formol)** → deshidratación →
  aclaramiento (xileno/tolueno) → **inclusión (parafina)** → **corte** (micrótomo 5–15 μm;
  ultramicrotomo 50–150 nm con **OsO₄**) → **tinción** → montaje.
- **Colorantes y tinciones**: **ácidos** (tiñen componentes básicos/eosinófilos —
  Eosina, Naranja G, Anilina azul) vs **básicos** (tiñen componentes ácidos/basófilos —
  Azul de metileno, Hematoxilina, Pironina G; basófilos: heterocromatina, ARN).
  Fenómenos: **metacromasia, basofilia, birrefringencia, estequiometría**. Especiales:
  **H&E** (básico + ácido), **Mallory**, **PAS** (ácido peryódico de Schiff; glucógeno),
  **OsO₄**, Feulgen (ADN).

### 1.3 `histologia-celula` — *"La célula"* (NEW)
- **Membrana plasmática**: espesor **8–10 nm**; composición (fosfolípidos, colesterol =
  "pegamento dinámico", proteínas de membrana, glucoproteínas, proteínas receptoras);
  **balsas lipídicas** planas (flotilinas) y caveolares (caveolinas); funciones
  (barrera, gradiente electroquímico).
- **Núcleo**: centro de control, ADN; **eucromatina vs heterocromatina**; nucléolo.
- **Citoplasma** y **organelos membranosos**: **RE rugoso** (síntesis de proteínas de
  secreción) y **liso**, **aparato de Golgi** (modifica/glucosila proteínas),
  **mitocondria** (ATP, respiración celular; tiene ADN propio), **lisosoma**,
  **proteasoma** (ubiquitina, 76 aa), **peroxisoma** (desintoxicación).
- **Organelos no membranosos**: **ribosomas**, **citoesqueleto** (microtúbulos de
  tubulina α/β — transporte de vesículas; **dineína** hacia el extremo negativo,
  cinesina hacia el positivo; microfilamentos de actina; filamentos intermedios).
- **Transporte a través de la membrana**: **pasivo** (difusión simple/facilitada,
  ósmosis — sin ATP) vs **activo** (con ATP); **endocitosis** (fagocitosis;
  **clatrina** forma vesículas recubiertas; **pinocitosis**; **macropinocitosis** —
  independiente de clatrina, dependiente de actina); **exocitosis** (vías constitutiva
  y regulada).

Each topic: terminology handled in Spanish; variety of `BlockType`; `keyTerms`; 6–8
`keyPoints`; **≥1 `correlacion`** (e.g. MET → miopatías mitocondriales; PAS → enfermedad
celíaca/glucógeno; falta de regeneración neuronal → daño permanente).

---

## 2. Module + plan + bank
- Module `histologia-uad-s1` `topicIds: ['histologia-introduccion','histologia-microscopia-tecnica','histologia-celula']`.
- Plan `histologia-1` Semana 1: those three `topicIds`; `estado: 'impartido'`; materiales
  = the deck PDF (§4) + Proyecto Integrador Semana 1.
- Bank `histologia-quizzes.ts`: ~**18–20** items (`his-q`), heavy on the ★ facts and on:
  ácido vs básico (eosina/hematoxilina), resolution ranking, fijación/inclusión order,
  RE rugoso = proteínas de secreción, clatrina/macropinocitosis, pasivo vs activo,
  eucromatina vs heterocromatina, regeneration by tissue.

---

## 3. ★ Exam‑flagged items — MANDATORY, capture ALL

Run the extraction in §0 and **flag every ★ line** as a distinct high‑yield callout:
a `correlacion` `variant: 'dato'` titled **"★ Punto de examen"** (or a `keyPoint`
prefixed "★"). Do not bury them. The ★ set in this deck (verify against the extraction —
add any you find that aren't listed):
- **Campo oscuro**: solo la luz **refractada** entra al objetivo.
- **MET**: técnica de **criofractura**.
- **Ojo humano = 0.2 mm** (dato clave del examen).
- **Lente objetivo** recoge la luz que atraviesa la muestra; **condensador** enfoca el
  haz sobre la muestra.
- Colorantes: **Eosina** (ácido) ★; **Azul de metileno** (básico) ★; componentes
  **basófilos: heterocromatina** ★.
- Fenómenos: **metacromasia ★, basofilia ★, birrefringencia ★, estequiometría ★**.
- Especiales: **Mallory ★, PAS ★, OsO₄ ★**.
- **Membrana plasmática 8–10 nm ★**; **composición principal ★**; **proteínas de
  membrana ★**; **balsas lipídicas** (flotilinas ★); **colesterol = pegamento dinámico
  ★**; **glucoproteínas ★**; **proteínas receptoras ★**.
- **Citoesqueleto ★**: transporte de vesículas por **tubulina/microtúbulos**; **dineína
  → extremo negativo ★**.
- Transporte: **difusión pasiva ★, fagocitosis ★, clatrina ★ (vesículas recubiertas),
  macropinocitosis ★, exocitosis ★** (vías constitutiva y regulada ★).
- **El RE rugoso** es donde se sintetizan las proteínas de secreción ★.
Report the total count of ★ items flagged.

---

## 4. Library
Convert the deck to PDF and upload to `library.medcore.icu/histologia-1/`:
```bash
cd "…/Histología I y sus Laboratorios DEF/Clases/Semana 1"
soffice --headless --convert-to pdf --outdir . "Histologia Semana 1 correct.pptx" \
  && mv "Histologia Semana 1 correct.pdf" "Histologia I - Semana 1 (deck completo).pdf"
```
Compress if >30 MB. If `soffice` unavailable, tell me. **Show the upload command first.**
Don't commit the pptx/PDF/.md.

---

## 5. Verification
```bash
npm run build
grep -n "histologia-celula\|histologia-microscopia-tecnica\|histologia-introduccion" src/data/topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "★ Punto de examen\|★" src/data/histologia-topics.ts
grep -c "id: 'his-q" src/data/histologia-quizzes.ts     # 18–20
```
Manual: three Histología topics under `histologia-uad-s1` / the Histología category;
`histologia-celula` covers membrane→transport; every ★ renders as a distinct high‑yield
callout; quizzes play; Genética and everything else untouched.

**Mandatory self‑audit:** verify 5 ★ items against the deck extraction — ojo humano 0.2
mm; membrana 8–10 nm; eosina = ácido; RE rugoso = proteínas de secreción; dineína →
extremo negativo. Report the ★ count and per‑topic item counts.

---

## 6. Non‑objectives
- Don't touch the Genética topics or other subjects. Don't invent facts beyond the deck.
  No pptx/PDF/.md in the repo. No `npm run deploy`.

## 7. Delivery (atomic commits)
1. `feat(histologia): introducción y microscopía/técnica/tinciones (deck completo)`
2. `feat(histologia): Topic La Célula — membrana, núcleo, organelos, citoesqueleto, transporte`
3. `feat(histologia): marca ★ todos los puntos de examen del deck`
4. `feat(quizzes,plan): banco y Semana 1 de Histología con el deck completo`

Report the ★ count flagged, whether `soffice` converted the deck, and the self‑audit.
