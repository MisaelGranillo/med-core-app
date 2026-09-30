# PROMPT — MedCore fix: inverted buttons illegible in dark mode (`bg-zinc-900 text-white`)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-04.
> **Prompt language: English. MedCore UI stays in Spanish.**
> Bug: in dark mode the primary "Estudiar"/"Quiz" card buttons (and the filter/nav
> chips built the same way) show **light text on a light fill** → illegible.

---

## 0. Root cause (verified)
`tailwind.config.js` remaps `zinc` → clinical‑blue tokens, and `zinc-900 =
var(--color-text-primary)`. So `bg-zinc-900` **flips**: dark fill in light mode, **light
fill in dark mode**. But the companion `text-white` is a **fixed** color that does NOT
flip. Result in dark: light fill + white text = illegible.

The text needs to be the **inverse** of `--color-text-primary` — i.e. the app
background token `app` (`--c-bg`), which is light in light mode and dark in dark mode.
That yields: light mode = light text on dark fill ✓; dark mode = dark text on light
fill ✓. `hover:bg-zinc-800` already flips (leave it).

---

## 1. Fix — swap `text-white` → `text-app` on every `bg-zinc-900` control

Replace `bg-zinc-900 text-white` with **`bg-zinc-900 text-app`** at every occurrence
below (keep all other classes, incl. `border-zinc-900`, `hover:bg-zinc-800`, sizing):

```
src/pages/Temas.tsx:76    filter 'Todas' active chip
src/pages/Temas.tsx:86    category active chip
src/pages/Temas.tsx:158   card "Estudiar" button
src/pages/SubjectDetail.tsx:595   card "Estudiar" button
src/pages/QuizCatalog.tsx:102     card button
src/pages/Plan.tsx:178            active toggle
src/pages/Ajustes.tsx:58          active option (also has border-zinc-900)
src/pages/Terminologia.tsx:380,394   active filter chips (border-zinc-900)
src/pages/MedEn.tsx:387,396          active filter chips (border-zinc-900)
src/pages/Navbar.tsx:83           active nav item
src/pages/Topic.tsx:199           floating quiz FAB
```

Find them all (guard against new ones):
```bash
cd ~/med-core-app
grep -rn "bg-zinc-900 text-white" src
```
Every match → `text-white` becomes `text-app`. (The `text-app` utility already exists:
`app: 'var(--c-bg)'` in `tailwind.config.js`.)

> Note the **inactive** chips next to these (e.g. `bg-zinc-100 text-zinc-600`,
> `bg-surface text-zinc-600`) already flip correctly — don't touch them.

---

## 2. Verification
```bash
npm run build
grep -rc "bg-zinc-900 text-white" src    # 0
```
Manual (`npm run dev`, emulate `prefers-color-scheme: dark`):
- [ ] `/estudio` (Temas): "Estudiar" and active category chips readable in dark; the
      button fill is light and the text is now **dark** (not white).
- [ ] `/plan/<materia>` card "Estudiar", `/quiz` catalog buttons, `/terminologia` +
      `/vocabulario` active filter chips, navbar active item, Topic FAB: all readable.
- [ ] **Light mode unchanged** (dark fill + light text as before).

**Self‑audit:** confirm in dark mode the button text contrasts against the (now light)
fill on 4 of the pages. Report the occurrence count changed.

---

## 3. Non‑objectives
- Don't change light mode. Don't restyle inactive chips (already adaptive). Don't touch
  tokens or `TOPIC_COLORS`. No `npm run deploy`.

## 4. Delivery
1. `fix(ui): texto invertido de botones/chips activos legible en dark (text-app)`

Report the count of occurrences changed and the self‑audit.
