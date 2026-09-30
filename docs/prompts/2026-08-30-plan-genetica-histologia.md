# PROMPT — MedCore: alta de Genética Básica e Histología I en el plan

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-30.
> **Prompt language: English. MedCore content stays in Spanish.**
> Two new subjects of this module. They already exist as **stubs** in the plan
> (`genetica-basica`, `histologia-1`) but have **no `content`**. Fill in each
> subject's `content` (ficha + temario de 4 semanas + bibliografía + evaluación),
> mirroring the anatomía/inglés `SubjectContent` shape. **No classes taught yet →
> no `topicIds`, no quizzes.** The weekly `temas` are the syllabus (they render as
> "Próximamente" per the plan/temas wiring).

Data below is transcribed from the official *Programa Académico* of each subject
(`…/Primer Semestre/<Materia> DEF/Recursos/`). The *Planeación* PDF in the same
folder has the week‑by‑week activities/dates — cross‑check if useful, but the
temario below is sufficient.

```bash
cd ~/med-core-app && npm run build
sed -n '28,70p' src/data/plans/types.ts                 # Subject + SubjectContent shape (fields: area, credits, teacherHours, independentHours, modality, description, competencia, temario/semanas, bibliografia, materiales, recursos)
sed -n '/id: .anatomia-humana-diseccion-1./,/content: {/p' src/data/plans/uad-medicina.ts | head -25   # a full content example to mirror
grep -n "id: 'genetica-basica'\|id: 'histologia-1'" src/data/plans/uad-medicina.ts
```
Match the **exact field names** used by `SubjectContent` (read types.ts). Use the same
`content.semanas[]` structure (with `number`, `title`, `temas[]`, and — since nothing
is taught — **no `topicIds`**). Add `bibliografia[]` and any evaluación field the type
supports (if there's no dedicated field, put the evaluation summary in `description`).

---

## 1. `genetica-basica` — Genética Básica

**Ficha:** clave **GB01003** · área Ciencias Básicas · Primer Semestre · **4 créditos**
· 32 h docente + 32 h independientes · modalidad **Virtual** · **4 evaluaciones
parciales** (extraordinaria/título si aplica) · promoción: ≥80 % asistencia y ≥7.0.
`tags: ['celular']` (o el que uses para bioquímica/celular).

- **Competencia:** *"Identifica y relaciona las bases moleculares de la herencia que
  rigen al ser humano, así como las malformaciones genéticas más frecuentes,
  resolviendo problemáticas reales o supuestas bien argumentadas, con interés
  cognitivo, tolerancia y disciplina, en un ambiente de colaboración."*
- **Descripción:** Bases moleculares de la herencia, material genético, bases
  cromosómicas y aplicaciones de la genética en la medicina general. Modalidad
  virtual; evaluación por 4 parciales.

**Temario (semanas):**
1. **Desarrollo histórico de la genética humana** — desarrollo histórico de conceptos
   de la genética; leyes de Mendel; la molécula del ADN; código genético.
2. **El material genético: ADN y cromosomas** — dogma central; estructura del ADN y
   ARN; elementos básicos del cromosoma; transcripción, traducción y expresión génica;
   reparación del ADN.
3. **Bases cromosómicas de la herencia** — bases cromosómicas de la herencia; ciclo
   celular; división celular (mitosis y meiosis); estructura y función de cromosomas y
   genes; fundamentos de la expresión génica.
4. **La genética en la medicina general** — citogenética clínica; errores del
   metabolismo (definición, diagnóstico clínico y hallazgos de laboratorio);
   crecimiento y desarrollo (organogénesis y teratogénesis); diferenciación sexual
   normal y anomalías; vigilancia epidemiológica de las malformaciones congénitas.

**Bibliografía:**
- Básica: Lieberman & Ricer, *Bioquímica, Biología Molecular y Genética*, Lippincott,
  2017.
- Complementaria: Nussbaum·McInnes·Willard, *Genética en Medicina* (Thompson &
  Thompson), 2009 · Karp, *Cell and Molecular Biology*, John Wiley & Sons, 2011.
- Recursos digitales: aclandanatomy.com · batesvisualguide.com · lwwhealthlibrary.com ·
  5minuteconsult.com · ovid.

---

## 2. `histologia-1` — Histología I y su Laboratorio

**Ficha:** clave **HS01006** · área Ciencias Básicas · Primer Semestre · **8 créditos**
· 80 h docente + 48 h independientes · modalidad **Virtual** · `hasLab: true` (ya está)
· seriación subsecuente **Histología II (HS02011)** · **4 evaluaciones parciales** ·
promoción ≥80 % asistencia y ≥7.0. `tags: ['celular']`.

- **Descripción:** Estudio de la célula y los tejidos fundamentales (epitelial,
  conectivo y sus variedades, sanguíneo y linfático) con sus generalidades,
  clasificación, características, funciones y aplicaciones clínicas, con trabajo de
  laboratorio. Modalidad virtual; 4 parciales.

**Temario (semanas):**
1. **La célula y el microscopio** — técnicas utilizadas en histología; preparación de
   tejidos; manejo y estructura del microscopio; la célula (organelos membranosos y no
   membranosos).
2. **Tejido epitelial** — generalidades; clasificación; características; funciones;
   aplicaciones clínicas.
3. **Tejido conectivo** — generalidades; clasificación (laxo y denso); características;
   función; aplicaciones clínicas. Incluye **tejido óseo**, **tejido cartilaginoso** y
   **tejido adiposo** (cada uno: generalidades, clasificación, características,
   funciones, aplicaciones clínicas).
4. **Tejidos sanguíneo y linfático** — generalidades; clasificación; características;
   funciones; aplicaciones clínicas.

**Bibliografía:**
- Básica: García Garza, *Histología I y su Laboratorio*, LBS, 2023 · Lee, *Histología*,
  Lippincott, 2014 · Ross·Pawlina, *Histología. Texto y Atlas Color con Biología
  Celular y Molecular*, Médica Panamericana.
- Complementaria: Geneser, *Histología*, Médica Panamericana · Junqueira & Carneiro,
  *Histología Básica. Texto y Atlas* (en Recursos).
- Recursos digitales: aclandanatomy.com · batesvisualguide.com · lwwhealthlibrary.com ·
  ovid.

---

## 3. Library (textbooks → private library, not the repo)
The textbooks live in each subject's `Recursos/` folder. Upload the ones worth linking
to `library.medcore.icu/<subjectId>/` and reference them as `bibliografia[].file` /
`MaterialRef` where the `SubjectContent` type supports a `file` (like anatomía):
- `genetica-basica/`: (Lieberman if available) — plus the summary PDFs in Recursos.
- `histologia-1/`: `Histologia_Basica_Texto_y_Atlas_Junqueira_Carneiro.pdf`.
Names without accents/spaces. **Show me the upload commands before running them.**
Don't commit PDFs to the repo.

---

## 4. Verification
```bash
npm run build
grep -n "id: 'genetica-basica'" src/data/plans/uad-medicina.ts   # now has content
grep -n "id: 'histologia-1'" src/data/plans/uad-medicina.ts      # now has content
```
Manual (`npm run dev`):
- [ ] `/plan`: Primer Semestre lists **Genética Básica** and **Histología I y su
      Laboratorio** with their ficha (créditos, horas, modalidad).
- [ ] Each subject page shows the **4 semanas** with their temario as **"Próximamente"**
      (no topics yet), plus bibliografía and evaluación.
- [ ] No topicIds/quizzes were invented; anatomía/inglés untouched.

**Self‑audit:** confirm the two `content` blocks use the exact `SubjectContent` fields
(no invented keys) and the build is clean. Report the fields you used for evaluación
(dedicated field vs description) and whether any bibliography `file` links were added.

---

## 5. Non‑objectives
- Don't create Topics or quizzes — nothing has been taught. Weekly content will come
  later via the normal weekly prompts.
- Don't invent temario beyond the Programa. Don't touch other subjects. No PDFs in the
  repo. No `npm run deploy`.

## 6. Delivery
1. `feat(plan): ficha y temario de Genética Básica (GB01003)`
2. `feat(plan): ficha y temario de Histología I y su Laboratorio (HS01006)`

Report the SubjectContent fields used and anything in the Planeación that changed the
weekly split.
