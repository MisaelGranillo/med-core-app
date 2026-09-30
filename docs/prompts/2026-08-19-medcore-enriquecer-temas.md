# PROMPT — MedCore: enrich every tema with correlations & more depth

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-19.
> **Prompt language: English. MedCore content stays in Spanish.**
> Goal: make each tema **more extensive and more interesting** by (1) adding a new
> `correlacion` callout block type, and (2) retrofitting **every existing topic** with
> 1–3 accurate correlations plus extra depth where a section is thin.
> Runs **after** the structural prompt (`…-categorias-enlex.md`); independent of it.

---

## 0. Accuracy bar (read first)

Correlations are shown to a medical student as fact. **Every correlation must be
factually correct, clinically/etymologically sound, and consistent with MedCore's
terminology rule (TA primary · classic in parentheses).** Do **not** invent clinical
associations. When unsure, use a safer, well‑established fact or skip that topic's
correlation and flag it in the report. Prefer high‑yield, exam‑relevant correlations
over trivia.

---

## 1. Add the `correlacion` block type

In `src/types/index.ts`:
- Extend `BlockType` with `'correlacion'`.
- Add the shape (in `ContentBlock` or a dedicated interface):
  ```ts
  // bloque de correlación / dato de interés
  variant?: 'clinica' | 'dato' | 'mnemotecnia' | 'historia'
  // (reuse existing `title` and a body field consistent with other blocks)
  ```
Render it in the block renderer (`src/pages/Topic.tsx` or the shared block component):
a distinct **callout card** with an icon and accent per `variant`
(clinica → rose/red, dato → blue, mnemotecnia → amber, historia → violet), a small
uppercase label ("Correlación clínica" / "Dato de interés" / "Mnemotecnia" /
"Nota histórica"), title, and body. **Verify legibility in light AND dark**
(`tailwind.config.js` overrides `zinc`; use tokens/rem, not raw palettes that don't
adapt).

Commit: `feat(temas): bloque de correlación clínica / dato de interés`.

---

## 2. Retrofit every existing topic

Go file by file — `anatomia-uad-topics.ts`, `ingles-uad-topics.ts`,
`bioestadistica-topics.ts`, `topics.ts` — and for **each** `Topic`:

1. Add **1–3 `correlacion` blocks**, placed inside the section they relate to (not all
   dumped at the end). Mix variants; at least one should be **clinical or high‑yield**.
2. **Deepen thin sections**: where a section is just a bare list or one line, add a
   short `paragraph` (2–4 sentences) that explains the *why* or connects it to
   neighboring structures/function — the "interesting correlated information" the
   student asked for. Don't pad; add signal.
3. Keep TA primary · classic in parentheses. Do **not renumber `sectionId`s**; add
   blocks within existing sections or append a new section at the end.

**Examples of the quality bar (write your own, accurate, per topic):**
- *Tórax óseo* — Correlación clínica: *"El ángulo del esternón (de Louis) marca la 2.ª
  costilla: es la referencia para contar los espacios intercostales al auscultar."*
- *Miembro superior óseo* — Correlación clínica: *"El cuello quirúrgico del húmero se
  fractura con frecuencia y pone en riesgo el nervio axilar, con pérdida de la
  abducción del hombro."*
- *Hueso coxal* — Dato: *"La tuberosidad isquiática soporta el peso al sentarse; es la
  referencia ósea del bloqueo del nervio pudendo en obstetricia."*
- *Artrología / cadera* — Correlación clínica: *"El ligamento de la cabeza del fémur
  (redondo) lleva una arteria a la cabeza en el niño; una luxación de cadera puede
  comprometerla y causar necrosis avascular."*
- *Word parts (terminología)* — Dato: *"~90 % del vocabulario médico es grecolatino:
  'diagnóstico' = dia- (a través) + gnosis (conocimiento)."*
- *Verb tenses (gramática)* — Dato: *"La literatura médica prefiere la voz pasiva
  ('the sample was analyzed') para centrar el objeto de estudio, no al autor."*
- *Estadística* — Correlación clínica: *"La sensibilidad y la especificidad de una
  prueba no cambian con la prevalencia, pero el valor predictivo positivo sí: por eso
  una prueba muy buena falla como cribado en enfermedades raras."*

Do it in **batches by file**; after each file, run `npm run build` and note how many
correlations you added.

Commit per file, e.g.:
1. `feat(anatomia): correlaciones y profundidad en osteología y artrología`
2. `feat(ingles): correlaciones en terminología, gramática y comunicación`
3. `feat(bioestadistica): correlaciones clínicas en probabilidad y estadística`
4. `feat(temas): correlaciones en los temas base`

---

## 3. Verification

```bash
npm run build
grep -rc "type: 'correlacion'" src/data/anatomia-uad-topics.ts src/data/ingles-uad-topics.ts src/data/bioestadistica-topics.ts src/data/topics.ts
# every topic should have ≥1: compare correlacion count vs topic count per file
grep -c "colorKey:" src/data/anatomia-uad-topics.ts     # topic count reference
```

Manual (`npm run dev`):
- [ ] Open 5 topics across subjects: each shows ≥1 correlation callout, styled by
      variant, legible in light + dark.
- [ ] Thin sections now have an explanatory paragraph; no `sectionId` reset (reading
      progress preserved).
- [ ] Terminology rule respected inside correlations.

**Mandatory accuracy self‑audit:** pick **5 correlations across different subjects**
and verify each is factually correct (anatomy relation, clinical association,
etymology, or stats fact). Report the 5 you checked, any you softened/removed for
safety, and per‑file correlation counts. Flag any topic left without a correlation and
why.

---

## 4. Non‑objectives
- No invented clinical facts. No fabricated associations. When unsure, use an
  established fact or skip and flag.
- Don't renumber `sectionId`s. Don't touch quizzes, atlas, plan structure, or the
  category/EnLex changes (separate prompt).
- No `npm run deploy`.

---

## 5. Standard going forward
From now on, **every new tema includes ≥1 `correlacion` block** and enough depth that
each section explains the *why*, not just a list. (The `medcore-semana` skill is being
updated to require this, so future weekly prompts already ask for it.)
