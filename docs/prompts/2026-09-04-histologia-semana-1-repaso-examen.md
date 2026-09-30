# PROMPT — MedCore · Histología I · Week 1 — exam‑review quiz (from Class 5 transcript)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-04.
> **Prompt language: English. MedCore content stays in Spanish.**
> Class 5 had **no slides** — it was a **pre‑exam review** where the professor worked
> through an exam‑style question bank. The transcript therefore holds the **actual
> exam‑style questions and answers**. Turn them into a MedCore review quiz and flag
> them as exam‑relevant (★). Depends on the Histología Week‑1 topics existing (deck
> prompt).

---

## 0. Source
Transcript (no slides): `…/Histología I y sus Laboratorios DEF/Clases/Semana 1/Clase 5/# Histología I y sus Laboratorios DEF Week 1 Class 5.md`
(`## Summary` + `## Transcript`). Verify each item against the transcript; the answers
below are the professor's.

```bash
cd ~/med-core-app && npm run build
grep -n "id: 'histologia-microscopia-tecnica'\|id: 'histologia-celula'\|id: 'histologia-introduccion'" src/data/histologia-topics.ts
grep -n "id: 'his-q" src/data/histologia-quizzes.ts | tail -1
```

---

## 1. Deliverable — a "Repaso examen · Semana 1" review layer

Add a review **Topic `histologia-repaso-s1`** (`colorKey: 'histologia'`, `categoria:
'Histología'`, title *"Repaso para el examen — Semana 1"*, subtitle *"Banco tipo examen
del profesor: microscopía, tinciones, célula y transporte"*), with 2–3 summary sections
that (a) a `note` "es repaso, banco tipo examen del profesor" and (b) group the
high‑yield facts, pointing back to the Week‑1 topics. Add it to the Histología module
(or a small `histologia-uad-repaso-s1` module).

Then a **quiz bank** (`his-r-q`, in `histologia-quizzes.ts`, `topicId:
'histologia-repaso-s1'`) built from the transcript's questions. Mark the whole set as
**★ examen** (these are the professor's own exam‑style items).

---

## 2. The question bank (verbatim intent from the transcript — ~18 items)

Write each as a 4‑option item; the **answer** is given; add plausible distractors from
a sibling concept; `explanation` in Spanish. Include the professor's traps.

**Microscopía**
1. La técnica de **criofractura** se usa con el microscopio → **MET** (electrónico de
   transmisión).
2. Microscopio de **campo claro** → resolución **0.2 μm** (el de menor resolución).
3. Microscopio que observa **células vivas sin teñir** usando el índice de refracción →
   **contraste de fase** (ej. espermatozoides).
4. Mayor resolución → **microscopio de fuerza atómica (50 pm)**. MEB 2.5 nm (3D); MET
   0.2 nm. *(Trampa de unidades: μm vs nm vs pm.)*

**Tinciones**
5. El **azul de metileno** es un colorante → **básico** (los ácidos: eosina, naranja G,
   anilina).
6. La tinción de **Mallory** usa **tres colorantes ácidos** → **anilina azul, fucsina
   ácida y naranja G** (es la única con tres ácidos).
7. **Metacromasia** = cambio de color cuando una tinción **básica** reacciona con el
   tejido (etimología: meta = cambio, croma = color).
8. El **reactivo de Schiff (PAS)** tiñe **glucógeno, mucopolisacáridos y
   glucoproteínas**; **no** tiñe ARN. *(El docente verificará si tampoco el ADN.)*
9. Para el **aclaramiento** se usa **xileno/tolueno**; el **tetraóxido de osmio** se usa
   como fijador (membranas).

**Membrana y organelos**
10. Los **principales componentes de la membrana plasmática** → **fosfolípidos,
    colesterol y proteínas** (integrales y periféricas); espesor **8–10 nm**.
11. Las **proteínas receptoras** de membrana → **reconocen y unen ligandos**
    específicos.
12. **Balsas lipídicas planas** → **flotilinas**; **caveolares** (invaginadas) →
    **caveolina**.
13. El organelo que **degrada proteínas dañadas/innecesarias marcadas con ubiquitina**
    (proteínas individuales, no vesículas) → **proteasoma**. *(Trampa: el lisosoma
    digiere material englobado en vesículas.)*
14. La **membrana mitocondrial interna** aloja la **cadena respiratoria**; el **RE liso**
    contiene **citocromo P450**.

**Transporte**
15. **Transporte pasivo** (sin energía) → **difusión simple, difusión facilitada,
    ósmosis**.
16. **Transporte activo** (con energía) → **fagocitosis, pinocitosis, macropinocitosis
    (independiente de clatrina) y endocitosis mediada por receptores**.
17. El proceso por el cual las sustancias **SALEN** de la célula en vesículas →
    **exocitosis**. *(Trampa "entran vs salen": si entraran sería endocitosis/
    pinocitosis.)*

**Citoesqueleto**
18. **Microtúbulos**: **13 protofilamentos** de tubulina α/β; la **γ‑tubulina** es la
    plantilla; polimerizan con **GTP**. **Cinesina** → extremo **positivo**; **dineína**
    → extremo **negativo**; la **catanina** los corta.
19. (Opcional) **Filamentos intermedios**: **vimentina** (mesodermo, clase III);
    **citoqueratinas** (epitelios).

Rubric: distractors from a sibling concept (e.g. lisosoma vs proteasoma; campo oscuro
vs contraste de fase; endocitosis vs exocitosis); `explanation` justifies the key and
rules out one distractor; `correctIndex` spread 0–3.

---

## 3. ★ + exam‑taking tips
Mark the review Topic with a `correlacion` (variant 'dato', title **"★ Estrategia de
examen"**) capturing the professor's advice: *"Lee bien el enunciado (¿entran o
salen?); en opción múltiple elimina primero los dos distractores obvios; cuida las
unidades (μm / nm / pm)."*

---

## 4. Verification
```bash
npm run build
grep -c "id: 'his-r-q" src/data/histologia-quizzes.ts     # ~18
grep -n "histologia-repaso-s1" src/data/topics.ts src/data/modules.ts
grep -o "id: 'his-r-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d   # empty
```
Manual (`npm run dev`): a **Repaso para el examen — Semana 1** Histología topic with a
~18‑item quiz; the ★ estrategia note present; answers match the transcript; light+dark
OK.

**Mandatory self‑audit:** verify 5 items against the transcript — criofractura=MET;
Mallory=3 ácidos; proteasoma vs lisosoma (ubiquitina); exocitosis (salen); PAS no tiñe
ARN. Report the item count and any question you couldn't resolve from the transcript.

---

## 5. Non‑objectives
- No slides exist for this class — don't invent illustrations. Don't touch the other
  Histología topics beyond adding the repaso. Don't invent facts beyond the transcript.
  No PDF/.md in the repo. No `npm run deploy`.

## 6. Delivery
1. `feat(histologia): Topic y banco de repaso para el examen (Semana 1)`
2. `feat(histologia): estrategia de examen y marca ★ del banco del profesor`

Report the item count and the self‑audit result.
