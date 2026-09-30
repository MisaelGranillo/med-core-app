# PROMPT — MedCore fix: dark‑mode legibility of tables & comparison blocks

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-31.
> **Prompt language: English. MedCore UI stays in Spanish.**
> Bug: in dark mode, the comparison and table blocks (e.g.
> `medcore.icu/topic/histologia-introduccion` §4) show **illegible text** —
> light text on a light tint.

---

## 0. Root cause (verified)
`src/data/colors.ts` `TOPIC_COLORS` use **raw Tailwind palettes** (stone, teal, sky,
emerald…) that **do not adapt to dark mode** — only `zinc` was overridden in
`tailwind.config.js` to flip via tokens. So in `SectionPanel.tsx`:
- **Comparison** accent side: `${colors.bg}` (e.g. `bg-stone-50`, stays **light**) with
  item text `text-zinc-700` (flips to **light** in dark) → light‑on‑light = illegible.
- **Table** header: `${colors.bg}` + `${colors.text}` (raw dark hue) — inconsistent in
  dark; and any colorKey tint behind adaptive `zinc` text breaks.

`darkMode` is unset → Tailwind default **`media`**, so **`dark:` variants work** (via
`prefers-color-scheme`, same trigger the token flip already uses). Confirm with:
`grep -n "darkMode" tailwind.config.js` (absent = media).

---

## 1. Fix — make the colorKey palette dark‑adaptive (`src/data/colors.ts`)

For **every** entry in `TOPIC_COLORS` (23 keys), add `dark:` variants to the fields
used as **backgrounds/borders/text behind content**:
- `bg`:      `'bg-stone-50'` → `'bg-stone-50 dark:bg-stone-900/40'`
- `bgLight`: `'bg-stone-50/60'` → `'bg-stone-50/60 dark:bg-stone-900/30'`
- `border`:  `'border-stone-200'` → `'border-stone-200 dark:border-stone-700'`
- `text`:    `'text-stone-700'` → `'text-stone-700 dark:text-stone-300'`
- `badge`:   `'bg-stone-100 text-stone-800'` → `'bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200'`
- `dot`/`ring`: add a `dark:` shade if needed for contrast (e.g. `dark:bg-stone-400`,
  `dark:ring-stone-600`).
- `button`, `gradientFrom/To`, `headerBg`: **leave as is** (white text on a saturated/
  gradient fill — already legible in both modes).

Apply the same mapping to each palette (teal, sky, emerald, rose, amber, indigo, violet,
green, blue, the `genetica`/`histologia`/`miologia`/`artrologia`/`osteologia` keys, the
Inglés/Bioestadística keys, etc.). Keep the hue; only add the `dark:` shade (tint → deep
tint, mid text → light text, light border → dark border).

> This one change fixes comparison sides, table headers, block labels and badges
> everywhere, because they all read from `TOPIC_COLORS`.

---

## 2. Fix the two blocks so bg and text flip TOGETHER (`SectionPanel.tsx`)

Even with §1, double‑check these render adaptively:

- **`comparison`**: the non‑accent side uses `bg-zinc-50 border-zinc-200` (adaptive ✓)
  with `text-zinc-700` (adaptive ✓). The accent side now uses the dark‑adaptive
  `colors.bg`/`colors.border`/`colors.text` from §1 — verify the item text
  (`text-zinc-700`) is legible on the accent tint in **both** modes. If the accent
  label uses `colors.text`, it now flips too. ✓
- **`table`**: `thead` uses `${colors.bg}`/`${colors.text}` (now adaptive). Body rows
  use `bg-surface` / `bg-zinc-50/60` and `text-zinc-700/800` (all adaptive) with
  `border-zinc-100/200` (adaptive). Verify header text is legible on the dark header
  tint. The outer `border-zinc-200` is adaptive ✓.

No structural changes needed if §1 is done — just verify.

---

## 3. Verification
```bash
npm run build
grep -c "dark:" src/data/colors.ts          # ~5 per key × 23 keys
```
Manual (`npm run dev`, toggle OS dark mode or emulate `prefers-color-scheme: dark`):
- [ ] `/topic/histologia-introduccion` §4 (and any `comparison`/`table`): text legible
      in **both** light and dark; accent tint + text have proper contrast.
- [ ] Check one topic per color family (osteologia stone, artrologia teal, miologia,
      genetica, histologia, an Inglés gramatica, a Bioestadística key) — comparison and
      table legible in dark.
- [ ] Light mode looks unchanged.

**Self‑audit:** open 4 topics across different colorKeys in dark mode and confirm no
light‑on‑light or dark‑on‑dark in comparison/table/labels/badges. Report any key whose
`dark:` contrast still looks weak.

---

## 4. Non‑objectives
- Don't change light‑mode appearance. Don't touch content/topics/quizzes. Don't alter
  `button`/`gradient`/`headerBg` (already fine). No `npm run deploy`.

## 5. Delivery
1. `fix(colors): variantes dark: en TOPIC_COLORS para legibilidad en modo oscuro`
2. `fix(temas): verifica comparación y tabla legibles en claro y oscuro`

Report the number of keys updated and any color that needed a manual contrast tweak.
