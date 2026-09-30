# PROMPT — MedCore · Genética Básica · Semana 1 Clase 3 — la molécula del ADN y el código genético

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-05.
> **Prompt language: English. MedCore content stays in Spanish.**
> Clase 3 already happened but is **not** loaded — the plan/module still say "Clase 3
> pendiente". Build it: one new Topic + a small quiz bank, then flip Clase 3 to
> impartida everywhere. Source: the class transcript (screenshots are the same slides).

---

## 0. Source & current state
- Transcript: `…/Genética Básica DEF/Clases/Semana 1/Clase 3/# Genética Básica DEF (Teoría) Week 1 Class 3.md`
  (`## Summary` + `## Transcript`). PDF/screenshots stay in the private library, **not**
  the repo.
- Today MedCore has only `genetica-conceptos` (Clase 1) and `genetica-mendel` (Clase 2).
  `src/data/genetica-topics.ts`, `genetica-quizzes.ts` (prefix `gen-basq-q`), module
  `genetica-uad-s1` (`src/data/modules.ts`), and plan Semana 1 (`src/data/plans/uad-medicina.ts`)
  all mark **Clase 3 as pendiente**.

```bash
cd ~/med-core-app && npm run build
grep -n "genetica-conceptos\|genetica-mendel\|pendiente\|Clase 3" src/data/modules.ts src/data/plans/uad-medicina.ts
```

---

## 1. New Topic — `genetica-adn` (append to `geneticaTopics` in `genetica-topics.ts`)
`colorKey: 'genetica'`, `categoria: 'Genética'`, `emoji: '🧬'`.
Title *"La molécula del ADN y el código genético"*; subtitle *"Estructura de la doble
hélice, apareamiento de bases, codones y empaquetamiento en el núcleo"*.
6–8 `keyPoints`. Write it at the **depth bar** (prose that teaches without slides:
each list/table wrapped in explanatory `paragraph`s; complete definitions). Sections:

1. **Estructura de la doble hélice.** Watson–Crick (1953) sobre la Photo 51 de Rosalind
   Franklin (ya cubierto en Clase 1 — solo menciónalo). Esqueleto externo de **azúcar
   (desoxirribosa) + fosfato** unidos por **enlace fosfodiéster**; bases hacia el
   interior. **Nucleótido = fosfato + desoxirribosa + base nitrogenada**. Dos cadenas
   **antiparalelas**: una **5′→3′**, la complementaria **3′→5′**; los carbonos del azúcar
   se numeran y el extremo **5′ lleva un fosfato libre**. El azúcar desoxirribosa da el
   nombre "ácido **desoxi**rribonucleico".
2. **Apareamiento de bases.** **A–T** con **2 puentes de hidrógeno**, **G–C** con **3**.
   **Purinas** (doble anillo) = **adenina y guanina**; **pirimidinas** (un anillo) =
   **timina y citosina**. Regla del profesor: el nombre más largo (pirimidina) es la
   molécula más chica (un anillo). Cada par une **una purina con una pirimidina**; los
   puentes de hidrógeno dan la estabilidad que resiste factores endógenos/exógenos.
   ⚠️ **Corrige el lapsus de la transcripción**: el apareamiento correcto es **A–T y
   G–C** (en un punto la clase dijo "adenina y guanina se enlazan" al listar las
   purinas — NO es el par; el par purina–pirimidina es A con T y G con C).
3. **El código genético.** **Codón = 3 bases**; 64 combinaciones en la tabla. En el ARN
   la **timina se sustituye por uracilo (U)**. **Codón de inicio = AUG (metionina)**;
   **codones de paro = UAA, UAG, UGA**. El **ADN es el "libro de instrucciones"**: las
   proteínas **no** se sintetizan directamente del ADN, sino vía ARN (por eso al hablar
   de síntesis proteica aparece U en vez de T). ⚠️ **Corrección**: la clase verbalizó
   el inicio como "AOG" y los paros como "AUC/UCG" — usa los canónicos **AUG** y **UAA/
   UAG/UGA**.
4. **Los tres tipos de ARN.** **ARNm** (mensajero) copia las bases complementarias del
   ADN; **ARNt** (transferencia) lleva el **anticodón** y su aminoácido; **ARNr**
   (ribosomal) forma el ribosoma. Los **aminoácidos esenciales** se obtienen por dieta
   (combinaciones como **frijol + arroz** se complementan). *(Adelanto: transcripción y
   traducción se ven en Semana 2 — márcalo como adelanto, no lo desarrolles.)*
5. **Empaquetamiento del ADN en el núcleo.** ~**2 m** de ADN por célula se compactan en
   **nucleosomas**: un **octámero de histonas (2× H2A, H2B, H3, H4)**. Niveles de
   organización: **nucleótido → ADN → nucleosoma → cromatina → cromosoma**.

**≥1 `correlacion`** (variant `clinica` o `dato`): la estabilidad de la doble hélice
(esqueleto fosfodiéster + puentes de hidrógeno) evita el desplazamiento de bases y, con
ello, mutaciones; enlaza con los **mecanismos de reparación del ADN** que se ven en
Semana 2. TA no aplica (no es anatomía).

---

## 2. Quiz bank — 8–10 items (`genetica-quizzes.ts`, `topicId: 'genetica-adn'`)
New prefix **`gen-adnq-q`** (no colisión con `gen-basq-q`). Cover: nucleótido = P+azúcar+
base; enlace fosfodiéster (azúcar–fosfato); A–T = 2 H / G–C = 3 H; purinas vs pirimidinas;
antiparalelas 5′→3′; T→U en ARN; codón = 3 bases; **AUG = inicio (metionina)**; paros
UAA/UAG/UGA; nucleosoma = octámero de histonas; función de ARNm/ARNt/ARNr. Distractores
de un concepto hermano; `explanation` en español que justifica y descarta un distractor;
`correctIndex` repartido 0–3; encode the **corrected** facts (§1 ⚠️).

---

## 3. Wire it in (flip Clase 3 → impartida)
- **`genetica-topics.ts`** header comment: remove the "Clase 3 pendiente" note; now
  Clases 1–3.
- **`modules.ts` `genetica-uad-s1`**: add `'genetica-adn'` to `topicIds`; update
  `subtitle` → *"Conceptos base, historia, leyes de Mendel y la molécula del ADN."*
  (drop "(Clase 3 pendiente.)").
- **`plans/uad-medicina.ts`** Genética Semana 1: add `'genetica-adn'` to the week
  `topicIds`; in `temas`, change the third bullet to **"Clase 3 (impartida): la molécula
  del ADN, apareamiento de bases, código genético (codones) y empaquetamiento en
  nucleosomas"**; update the code comment (drop "pendiente"); add a `fuentes` /
  `materiales` entry *"Semana 1 · Clase 3 — La molécula del ADN y el código genético"*
  (kind `Clase`, file `Genetica Basica - Semana 1 - Clase 3.pdf`). Keep `estado`
  impartido.
- `topics.ts` and `quizzes.ts` already spread `geneticaTopics` / `geneticaQuestions` — no
  change unless a new export is added.

---

## 4. Verification
```bash
npm run build
grep -n "genetica-adn" src/data/genetica-topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "gen-adnq-q" src/data/genetica-quizzes.ts          # 8–10
grep -rn "Clase 3 pendiente\|Clase 3 (pendiente)" src/data  # empty
grep -o "id: 'gen-adnq-q[0-9]*'" src/data/genetica-quizzes.ts | sort | uniq -d  # empty
```
Manual (`npm run dev`, light+dark): new **La molécula del ADN** topic reachable from the
Genética module and from Plan → Genética Semana 1 (Clase 3 now "impartida"); sections
teach without slides; quiz plays; ADN topic links back to reparación (Semana 2 adelanto).

**Mandatory self‑audit (Think Again):** confirm you encoded the **corrected** facts, not
the transcript's verbal slips — A–T/G–C pairing (not "A–G"), start = **AUG**, stops =
**UAA/UAG/UGA**. Report the item count and any fact you couldn't confirm from the
transcript (verify against a base text before asserting).

---

## 5. Non‑objectives
- Don't renumber existing `sectionId`s or touch `genetica-conceptos`/`genetica-mendel`
  content. Don't develop transcription/translation (Semana 2 — adelanto only). No PDF/.md
  into the repo. No `npm run deploy`.

## 6. Delivery
1. `feat(genetica): Topic de la molécula del ADN y el código genético (Semana 1 Clase 3)`
2. `feat(genetica): banco de quiz del ADN (gen-adnq)`
3. `chore(genetica): Clase 3 impartida en módulo y plan (quita "pendiente")`

Report the item count and the self‑audit.
