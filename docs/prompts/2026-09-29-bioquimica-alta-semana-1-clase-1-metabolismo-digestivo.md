# PROMPT — MedCore · Alta de Bioquímica I + Semana 1 Clase 1 (Metabolismo digestivo)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-29.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "el docente dijo"; use "se…" / "del examen" (regla de la skill).**
> Nueva materia del Primer Semestre: **Bioquímica I y su Laboratorio**. (1) Da de alta la
> materia en el plan (como se hizo con Genética/Histología); (2) carga la **Semana 1 Clase 1
> — Metabolismo digestivo**.

---

## 0. Sources & current state
Primary = ChatGPT study notes + programa/planeación:
- `…/Bioquímica I y su Laboratorio DEF/Recursos/BIOQUÍMICA I Y SU LABORATORIO PROGRAMA 2025-1.pdf`
  y `…/PLANEACIÓN BIOQUÍMICA I 2025-1.pdf` (metadatos y temario).
- `…/Bioquímica I y su Laboratorio DEF/Clases/Semana 1/Clase 1/Bioquimica_I_Semana_1_Clase_1_Apuntes.md`
  (+ transcript + 2 slides PDF). PDFs a la biblioteca privada, **no al repo**.
Mira cómo se dieron de alta Genética/Histología (subject en `plans/uad-medicina.ts`, módulo
en `modules.ts`, `categoria` en `types/index.ts`, colorKey en `colors.ts`).

```bash
cd ~/med-core-app && npm run build
grep -n "id: 'genetica-basica'\|id: 'histologia'" src/data/plans/uad-medicina.ts
grep -n "TopicCategoria" src/types/index.ts; grep -n "genetica:\|histologia:\|bioquimica" src/data/colors.ts
```

---

## 1. Alta de la materia (metadatos verificados del programa)
- **Ficha:** clave **BQ01002**, "Bioquímica I y su Laboratorio", Área **Ciencias Básicas**,
  Primer Semestre, **11 créditos**, **64 h docente** / 112 h independientes, **modalidad
  virtual**, **4 evaluaciones parciales**; promoción con ≥70. **Seriación subsecuente:**
  Bioquímica II y su Laboratorio (**BQ02009**).
- **Unidad de competencia:** comprender y analizar la estructura, organización y
  comportamiento metabólico de las biomoléculas para diferenciar el funcionamiento bioquímico
  normal del anormal, integrando teoría y práctica con casos clínicos.
- **Temario (programa 2025‑1):**
  - **S1:** 1. Componentes bioquímicos del cuerpo humano (agua y electrolitos, propiedades
    fisicoquímicas del agua, concentración de solutos, presión osmótica, equilibrio
    ácido‑base, sistemas amortiguadores) · 2. Carbohidratos (estructura/clasificación/función).
    *(La Clase 1 impartida fue una introducción de **metabolismo digestivo** — ver §2.)*
  - **S2:** 3. Lípidos · 4. Proteínas.
  - **S3:** 5. Enzimas · 6. Ácidos nucleicos.
  - **S4:** 7. Hormonas · 8. Bioenergética y metabolismo (termodinámica, ATP).
- **Bibliografía básica:** *Bioquímica ilustrada de Harper* (McGraw‑Hill); *Bioquímica*
  (Mathews); complementaria según Material de Apoyo. Recursos/atlas ya existen para
  bioquímica (`introduccion-bioquimica`, `bioenergetica`, `macromoleculas-adn-arn`…).

**Cambios de andamiaje:**
1. `types/index.ts`: añade **`'Bioquímica'`** al union `TopicCategoria`.
2. `colors.ts`: añade colorKey **`'bioquimica'`** a `TOPIC_COLORS` (con variantes `dark:` en
   bg/bgLight/text/border/badge, como el resto) — o reutiliza una clave existente si ya hay
   una de bioquímica. Verifica antes.
3. `plans/uad-medicina.ts`: añade el subject **`bioquimica-i`** (ficha arriba) con `content`
   (competencia, `semanas[]` esqueleto S1–S4 del temario, `bibliografia`, `materiales`,
   `recursos`), siguiendo el patrón de `genetica-basica`/`histologia`.
4. `modules.ts`: módulo **`bioquimica-uad-s1`** (badge "UAD · Bioquímica I — Semana 1",
   title "Bioquímica: metabolismo digestivo", emoji 🧪, `topicIds:
   ['bioquimica-metabolismo-digestivo']`).

---

## 2. Topic de la Clase 1 — `bioquimica-metabolismo-digestivo`
`colorKey:'bioquimica'`, `categoria:'Bioquímica'`, `emoji:'🧪'`. Title *"Metabolismo
digestivo"*; subtitle *"Digestión, absorción y metabolismo; saliva, segmentos y fases de la
digestión"*. Depth bar; ≥1 `correlacion`. Secciones:
- **Metabolismo**: conjunto de procesos químicos/enzimáticos celulares para obtener
  moléculas y energía y sintetizar componentes. Cadena: **alimento → digestión → moléculas
  pequeñas → absorción → circulación → célula → rutas metabólicas**.
- **Digestión vs absorción vs metabolismo** (tabla): romper moléculas grandes / atravesar el
  epitelio a sangre‑linfa / transformar en las rutas celulares.
- **Anabolismo vs catabolismo**: anabolismo = **armar** (síntesis, consume energía; glucosa→
  glucógeno, aa→proteínas, ácidos grasos+glicerol→triglicéridos) vs catabolismo = **romper**
  (libera energía).
- **Regulación del sistema digestivo**: **neuronal** (sistema nervioso entérico, vago) y
  **endocrina** (hormonas gastrointestinales).
- **Saliva**: componentes (agua, **α‑amilasa/ptialina**, mucinas, electrolitos); glándulas
  **parótida, submandibular, sublingual**; funciones protectoras; estímulo de la secreción;
  masticación.
- **¿Dónde comienza la digestión de cada macromolécula?** glúcidos → **boca** (amilasa);
  proteínas → **estómago** (pepsina, HCl); lípidos → **intestino delgado** (lipasa
  pancreática; emulsificación por bilis).
- **Amilasa y pH**: activa en boca (~pH 6.7–7), se **inactiva** en el estómago ácido, y actúa
  la **amilasa pancreática** en el intestino.
- **Intestino delgado** (absorción; vellosidades/borde en cepillo) e **intestino grueso**
  (agua/electrolitos, microbiota).
- **Fases de la digestión**: **luminal** (hidrólisis por enzimas del lumen) → **mucosa**
  (enzimas del borde en cepillo) → **transporte** (absorción hacia la circulación).
- **Hígado/bilis** (emulsificación de lípidos) y **páncreas** (enzimas + **bicarbonato** que
  neutraliza el quimo).
- **Maladigestión vs malabsorción** (defecto en romper vs en absorber).
- `correlacion` (clinica): **intolerancia a la lactosa** — déficit de **lactasa** → lactosa no
  digerida → fermentación colónica y efecto osmótico → distensión, gases, diarrea. (Enlaza
  con `histologia-epitelios`/intestino si aplica.)

---

## 3. Quiz bank — `bio-metq` (~10)
`topicId:'bioquimica-metabolismo-digestivo'`: metabolismo (definición); digestión vs
absorción vs metabolismo; anabolismo vs catabolismo (armar/romper); saliva (amilasa/glándulas);
dónde inicia la digestión de glúcidos/proteínas/lípidos; amilasa y pH; fases luminal/mucosa/
transporte; bilis→emulsificación; páncreas→enzimas+bicarbonato; lactasa→intolerancia a la
lactosa; maladigestión vs malabsorción. `explanation` en español; distractores hermanos;
`correctIndex` repartido.

---

## 4. Verification
```bash
npm run build
grep -n "bioquimica-i\|bioquimica-uad-s1\|bioquimica-metabolismo-digestivo" src/data/plans/uad-medicina.ts src/data/modules.ts src/data/bioquimica-topics.ts
grep -n "'Bioquímica'" src/types/index.ts; grep -n "bioquimica:" src/data/colors.ts
grep -c "bio-metq" src/data/bioquimica-quizzes.ts
```
(Crea `src/data/bioquimica-topics.ts` y `bioquimica-quizzes.ts` y añádelos a los spreads de
`topics.ts` / `quizzes.ts`.)
Manual (`npm run dev`, claro+oscuro): la materia **Bioquímica I** aparece en el Plan con su
ficha; el módulo `bioquimica-uad-s1` y el topic "Metabolismo digestivo" son accesibles;
tablas legibles en dark; quiz corre. La categoría **Bioquímica** aparece en `/estudio`.

**Autoauditoría (Think Again):** apuntes = digest de ChatGPT — verifica contra un texto
(Harper/Mathews): anabolismo consume energía / catabolismo la libera; amilasa salival se
inactiva por el pH gástrico; proteínas inician en el estómago (pepsina); lípidos requieren
bilis/lipasa pancreática; lactasa→intolerancia a la lactosa. Reporta el conteo y lo no
confirmado.

## 5. Non-objectives
- No adelantes S2–S4 (solo esqueleto en el plan). No metas PDF al repo. No inventes datos de
  la ficha (usa los del programa). No `npm run deploy`.

## 6. Delivery
1. `feat(plan): alta de Bioquímica I y su Laboratorio (BQ01002) + categoría/colorKey`
2. `feat(bioquimica): módulo Semana 1 y Topic metabolismo digestivo (S1 C1)`
3. `feat(bioquimica): banco bio-metq`

Reporta el conteo y la autoauditoría.
