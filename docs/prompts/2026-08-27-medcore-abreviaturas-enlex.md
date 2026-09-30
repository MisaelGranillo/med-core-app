# PROMPT — MedCore: integrate the medical abbreviations into EnLex + downloadable PDF

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-27.
> **Prompt language: English. MedCore content/UI in Spanish.**
> The data and the PDF are **already in the repo** — you only wire the UI. Source:
> 461 abbreviations extracted from *Medical Terminology: A Living Language*
> (Appendix III + chapters).

---

## 0. What's already placed (don't regenerate)
- `src/data/abbreviations.ts` — `export const abreviaturas: Abreviatura[]` with 461
  entries (`{ abbr, meaning }`). English terms; keep as data.
- `public/descargas/medical-abbreviations-enlex.pdf` — the full list, downloadable
  (served at `medcore.icu/descargas/medical-abbreviations-enlex.pdf`, no login).

```bash
cd ~/med-core-app && npm run build
head -6 src/data/abbreviations.ts && grep -c "abbr:" src/data/abbreviations.ts   # 461
ls -lh public/descargas/medical-abbreviations-enlex.pdf
sed -n '1,60p' src/pages/MedEn.tsx | grep -nE "tab|Tab|filter|categor|search|Buscar|export"
```

---

## 1. Surface abbreviations inside **EnLex** (`/vocabulario`, `MedEn.tsx`)

EnLex is the English lexicon section (renamed from "Vocabulario"). Add an
**"Abreviaturas"** view alongside the existing vocabulary:

1. Add a **tab / segmented control** at the top of `MedEn.tsx`: **"Vocabulario"**
   (the current `medenTerms` list) and **"Abreviaturas"** (the new
   `abreviaturas` list). Default to Vocabulario.
2. The Abreviaturas view: a **searchable, alphabetical list** of `abbr → meaning`
   (reuse the page's search box; match on both `abbr` and `meaning`, case‑insensitive).
   Show a count ("461 abreviaturas") and, at the top, a **download button/chip** to the
   PDF: `href="/descargas/medical-abbreviations-enlex.pdf"` (root‑relative, target
   `_blank`), labeled "Descargar PDF".
3. Render as a compact two‑column list (abbr bold/accent, meaning muted); legible in
   **light and dark** (`tailwind.config.js` overrides `zinc` — use tokens).
4. Keep everything else in EnLex (the quiz, the vocabulary filters) working.

Import: `import { abreviaturas } from '../data/abbreviations'`.

## 2. Cross‑links (small)
- In the `ingles-abbreviations` study Topic, add a `note` linking to EnLex →
  Abreviaturas ("Lista completa de 461 abreviaturas en EnLex; PDF descargable").
- Optionally add a `RecursoLink` to Inglés Médico I in `plans/uad-medicina.ts`
  (`content.recursos`): `{ label: 'Abreviaturas médicas (PDF)', url: '/descargas/medical-abbreviations-enlex.pdf' }`.

## 3. Verification
```bash
npm run build
ls dist/descargas/medical-abbreviations-enlex.pdf                 # copied to build
grep -n "abreviaturas" src/pages/MedEn.tsx
```
Manual (`npm run dev`):
- [ ] EnLex shows a **Vocabulario / Abreviaturas** switch; Abreviaturas lists 461
      entries, searchable by abbr and meaning, light+dark OK.
- [ ] The **Descargar PDF** button opens `/descargas/medical-abbreviations-enlex.pdf`.
- [ ] The vocabulary list and quiz still work; MedLex untouched.

## 4. Non‑objectives
- Don't edit `abbreviations.ts` content or regenerate the PDF (data is final).
- Don't move `/vocabulario` route or the `meden-terms.ts` data. Don't touch MedLex.
- No `npm run deploy`.

## 5. Delivery
1. `feat(enlex): vista de Abreviaturas (461) con búsqueda y descarga`
2. `feat(ingles): enlace a la lista de abreviaturas y PDF`

Report the entry count rendered and confirm the PDF URL resolves in the build.
