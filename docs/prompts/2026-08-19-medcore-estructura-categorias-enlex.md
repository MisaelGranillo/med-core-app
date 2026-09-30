# PROMPT — MedCore structural update: categories, plan↔temas, EnLex, remove 2D viewer

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-19.
> **Prompt language: English. MedCore content/UI stays in Spanish.**
> Four independent structural changes; do them as separate commits so any can be
> reverted alone. None of them adds class content.

---

## 0. Before touching code

```bash
cd ~/med-core-app
npm run build                                   # clean first
sed -n '1,60p'   src/pages/Temas.tsx            # groups topics by `modules`
sed -n '36,75p'  src/types/index.ts             # Topic interface + TopicColorKey
sed -n '1,60p'   src/pages/Anatomy.tsx          # 2D/3D tabs
sed -n '285,340p' src/pages/SubjectDetail.tsx   # weekly plan renders sem.topicIds as /topic links
sed -n '18,24p'  src/components/Navbar.tsx      # MedLex + 'Vocabulario' labels
sed -n '410,425p' src/pages/MedEn.tsx           # page brand "MedEN"
git log --oneline -6
```

---

## 1. Change A — Temas organized by **category** (`/estudio`)

Today `Temas.tsx` groups by `modules`. Regroup by a **thematic category** instead.

1. **Add a `categoria` field to `Topic`** (`src/types/index.ts`): `categoria: TopicCategoria`
   with a string‑union `TopicCategoria`. Suggested controlled list (Spanish labels,
   extensible):
   - `'Anatomía general'` · `'Osteología'` · `'Artrología'` *(later: 'Miología',
     'Esplacnología', 'Neuroanatomía')*
   - `'Terminología médica'` *(word‑parts, plurals, abbreviations, healthcare
     settings)* · `'Gramática médica'` *(verb tenses, sentence structure)* ·
     `'Comunicación clínica'` *(medical record, parts of speech, word forms)*
   - `'Probabilidad'` · `'Estadística'`
   Assign `categoria` to **every** existing topic in `anatomia-uad-topics.ts`,
   `ingles-uad-topics.ts`, `bioestadistica-topics.ts`, `topics.ts` based on its
   content (use `colorKey` only as a hint — it does not map cleanly).
2. Define an **ordered category list** (`CATEGORIA_ORDER`) and optional per‑category
   accent (reuse `TOPIC_COLORS` or a small map) in `src/data/colors.ts` or a new
   `src/data/categorias.ts`.
3. **Rewrite `Temas.tsx`** to:
   - Group `topics` by `categoria`, rendered in `CATEGORIA_ORDER`, each as a section
     with a heading + count.
   - Add a **filter bar** of category chips at the top (click to jump/filter). "Todas"
     shows every category.
   - On each tema card, show a **small subject/context tag** (e.g. "Anatomía · Sem 3")
     so category grouping doesn't lose the subject context — derive the subject/week
     from the plan (`uad-medicina` `content.semanas` that reference the topic id) or
     from the module that contains it.
   - Keep the existing per‑tema **Estudiar / Quiz** actions untouched.
4. `modules.ts` stays as the data source for the subject/week context, but the Temas
   **grouping key is now `categoria`, not module**. Don't delete modules.

Commit: `feat(temas): índice por categoría temática con filtro`.

---

## 2. Change B — Plan ↔ temas made mutual and consistent

The weekly plan (`SubjectDetail.tsx`) already renders `sem.topicIds` as links to
`/topic/:id`. Strengthen both directions:

1. **In the weekly plan**, label that block clearly as **"Temas de esta semana"** and,
   for a week whose syllabus `temas` bullets have **no** matching Topic yet, show those
   bullets as **"Próximamente"** (muted), so the plan always reflects what is and isn't
   available as a study guide.
2. **On the Topic page** (`src/pages/Topic.tsx`), add a **context breadcrumb** at the
   top: *"‹Materia› · Semana N"* linking back to `/plan/:subjectId`. Resolve it by
   finding which subject/`SemanaContent` lists this topic id (`uad-medicina`). If a
   topic isn't referenced by any week (e.g. advance topics), show its module title
   instead, with no broken link.
3. Ensure the same topic id resolves consistently in both places (single helper, e.g.
   `planContextForTopic(topicId)` in `src/data/plans/index.ts`).

Commit: `feat(plan): plan semanal y temas mutuamente navegables`.

---

## 3. Change C — Rename the menu "Vocabulario" → **EnLex**

Minimal, label‑only (route `/vocabulario` and the `MedEn` page data stay).

1. `src/components/Navbar.tsx` line ~21: label `'Vocabulario'` → `'EnLex'` (keep the
   `/vocabulario` path, keep the icon; **do not** touch the `MedLex` entry on line ~20).
2. For consistency, update the page brand in `src/pages/MedEn.tsx` (~line 420) from
   `MedEN` to **`EnLex`** and any visible "Vocabulario" header to `"EnLex · Vocabulario
   de Inglés Médico"`. Keep the route, the data (`meden-terms.ts`), and the quiz.
3. `src/pages/Home.tsx` and any other visible reference to this section → `EnLex`.
   Leave **MedLex** (`/terminologia`) exactly as is.

Commit: `feat(nav): renombra la sección de vocabulario a EnLex`.

---

## 4. Change D — Remove the **Visor 2D** from Anatomía

Keep only the 3D viewer.

1. `src/pages/Anatomy.tsx`: remove the **2D/3D tab bar** and the `Viewer2D` lazy import
   and its usage; render **only** `Viewer3D`. Both `/anatomia` and `/anatomia-3d`
   should show the 3D viewer (keep the routes/aliases working; drop the `is3D`
   branching).
2. Remove/disable navigation that points specifically at the 2D viewer. If nothing else
   imports `src/components/AnatomyViewer2D.tsx` after this, you may delete it and its
   dedicated data (`anatomyHotspots.ts`) — **first `grep -rn "AnatomyViewer2D\|anatomyHotspots" src/`**
   and only delete if unreferenced; otherwise leave the files but unwired. Do **not**
   touch `AnatomyInfoPanel`'s link to `/terminologia` (that's MedLex, still valid).
3. Update the file header comment in `Anatomy.tsx` to reflect 3D‑only.

Commit: `feat(anatomia): elimina el visor 2D; deja solo el 3D`.

---

## 5. Verification

```bash
npm run build
grep -c "categoria:" src/data/anatomia-uad-topics.ts src/data/ingles-uad-topics.ts src/data/bioestadistica-topics.ts src/data/topics.ts   # every topic tagged
grep -n "TopicCategoria\|CATEGORIA_ORDER" src/types/index.ts src/data/*.ts
grep -n "EnLex" src/components/Navbar.tsx src/pages/MedEn.tsx
grep -n "Viewer2D\|Visor 2D" src/pages/Anatomy.tsx     # expected: no matches
grep -rn "AnatomyViewer2D" src/                         # confirm delete/unwire decision
```

Manual (`npm run dev`):
- [ ] `/estudio`: temas grouped by **category**, with a category filter bar; each card
      shows a subject/week tag; Estudiar/Quiz still work; light + dark OK.
- [ ] `/plan/anatomia-humana-diseccion-1`: each week shows "Temas de esta semana" as
      links; pending bullets show "Próximamente".
- [ ] `/topic/torax-oseo` (and an advance topic): breadcrumb shows Materia · Semana and
      links back to the plan without breaking for advance topics.
- [ ] Navbar shows **EnLex** (not "Vocabulario"); MedLex unchanged; `/vocabulario`
      still loads.
- [ ] `/anatomia`: only the 3D viewer, no 2D/3D tabs; `/anatomia-3d` also works.

**Self‑audit:** confirm every topic has a `categoria`, the breadcrumb resolves for both
a week‑linked topic and an advance topic, and no dead import remains after removing 2D.
Report the category counts and any topic you were unsure how to categorize.

---

## 6. Non‑objectives
- Don't change quiz/atlas data or class content. Don't rename `/vocabulario` route or
  the `meden-terms.ts` data (label/brand only). Don't touch MedLex.
- Don't delete `modules` (still used for subject/week context).
- Don't renumber `sectionId`s. No `npm run deploy`.
- Enrichment of tema content (correlations, more depth) is a **separate prompt**
  (`2026-08-19-medcore-enriquecer-temas.md`) — not here.

---

## 7. Delivery — four atomic commits (§1–§4). In the report: the final category list
with counts, any topics you couldn't cleanly categorize, whether you deleted or just
unwired the 2D viewer, and the plan‑context helper you added.
