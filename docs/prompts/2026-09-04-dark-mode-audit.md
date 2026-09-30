# PROMPT — MedCore: full dark‑mode color audit (tokens + components)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-04.
> **Prompt language: English. MedCore UI stays in Spanish.**
> In dark mode several sections are illegible (ficha labels "CRÉDITOS/HORAS",
> "Próximamente" chips, hero pills, tema chips, competencia box, lab badge). Fix it
> at two levels: **(A) tokens** (biggest wins) and **(B) raw‑palette components**.
> Do **not** change light mode.

---

## 0. How theming works here (verified)
`tailwind.config.js` remaps `zinc` → clinical‑blue tokens, and exposes `surface`,
`primary`, `muted`, `ink`, `body`, `line`, `app`. `src/styles/tokens.css` flips those
tokens under `@media (prefers-color-scheme: dark)`. So `zinc-*`, `bg-surface`,
`text-muted`, `primary` **flip automatically**. What does **not** flip:
- **Raw Tailwind palettes**: `emerald-*`, `teal-*`, `green-*`, `amber-*`, `sky-*`,
  `rose-*`, `indigo-*`, `violet-*`, `orange-*`.
- **`bg-white` / `text-white/xx` / `bg-black/xx` opacity utilities** (fixed, not tokens).
- **`primary` tint ramp `50/100/700/900`** — only `--c-primary-300/400` have dark
  overrides today; the light tints (50/100) and dark inks (700/900) don't flip.

Two root causes seen in the screenshots:
1. **Dark `--color-text-muted` (#2D5A7A) is too dark** → every `text-zinc-400` label
   (CRÉDITOS, subtítulos, "Próximamente", card subtitles) is nearly invisible on dark
   surfaces. Fixing this token fixes many places at once.
2. **Raw palettes / `bg-white`** used as light tints stay light in dark mode.

---

## 1. Token fixes — `src/styles/tokens.css` (dark block, ~line 173)

Raise contrast of the muted/secondary text and add the missing primary tint ramp so
tinted boxes flip:
```css
/* dark: text was too dim on dark surfaces */
--color-text-secondary: #7FA9CE;   /* was #4A7FAA */
--color-text-muted:     #6E96B8;    /* was #2D5A7A — this is the big one */

/* primary tint ramp needs dark variants (competencia box, chips, etc.) */
--c-primary-50:  rgba(56,138,221,0.12);
--c-primary-100: rgba(56,138,221,0.18);
--c-primary-200: rgba(56,138,221,0.28);
--c-primary-700: #7FB3E8;   /* readable "primary-700" text on dark */
--c-primary-900: #A9CCF0;
```
(Confirm the exact `--c-primary-*` names in the `:root` light block and mirror them.
Keep light values unchanged.) Verify `text-zinc-400/500` labels become legible after
this before touching components — many screens fix themselves here.

---

## 2. Component fixes — replace raw palettes / white with adaptive classes

Audit every `.tsx` under `src/pages` and `src/components`. Offenders found (grep in §3):
`SubjectDetail, Home, Plan, Temas, Progress, Quiz, QuizCatalog, MedEn, Terminologia,
Atlas, AtlasTopic, PAI, PAIModulo, FlashCard, ImageLightbox, SectionPanel,
AnatomyInfoPanel, Ajustes`.

Rules:
1. **`bg-white` → `bg-surface`** (flips to the dark card color). Same for `bg-white/…`
   used as a solid card. Example (`SubjectDetail` tema chips): `text-emerald-800 bg-white
   border-emerald-100` → use a tokenized success chip (§2a) that flips.
2. **Colored tint + dark text pattern** (`bg-X-50 text-X-800 border-X-100`): add `dark:`
   variants so bg and text flip together, e.g. `bg-emerald-50 dark:bg-emerald-500/15
   text-emerald-800 dark:text-emerald-300 border-emerald-100 dark:border-emerald-500/25`.
   Apply to the **emerald** family (plan/semana cards, taught chips, Estudiar buttons),
   **teal** (Laboratorio badge, recursos chips), and any green/amber/sky/rose/violet
   used as light tints.
3. **Hero pills** (`text-white/60`, `bg-white/10`, `border-white/20`): the hero band is
   dark in both modes, but bump contrast — `text-white/80`, `bg-white/15`,
   `border-white/30` — so the plan/code/tag pills are readable.
4. **`text-white` on a saturated colored bg** (e.g. `bg-emerald-600 text-white`,
   `bg-teal-400 text-teal-900`): keep — white/dark on a saturated fill is fine in both
   modes; just ensure the fill itself isn't a light tint.

### 2a. Suggested reusable chips (optional but cleaner)
Add small tokenized helpers using the existing success/accent tokens
(`--color-success`, `--color-success-tint`, `--color-success-text`, `--color-badge-*`)
for: "taught" tema chip (green), "próximamente" chip (muted), lab badge (teal). Then use
them in SubjectDetail/Home/Temas instead of ad‑hoc raw palettes.

### 2b. Specific SubjectDetail fixes (from the screenshots)
- `FichaStat` (`bg-zinc-50 … text-zinc-400`): fixed by §1 (verify legible).
- "Próximamente" chip `text-zinc-500 bg-zinc-50 border-zinc-200`: verify contrast after
  §1; if still weak, use `text-muted bg-surface-2 border-line`.
- Taught chip `text-emerald-800 bg-white border-emerald-100` → §2 rule 1+2.
- Week card `border-emerald-100 bg-emerald-50/50` → add `dark:` variant.
- Competencia box `bg-primary-50 border-primary-100 text-primary-700 …
  text-primary-900/80` → fixed by §1 primary ramp (verify).
- Recursos chip `text-teal-700 bg-teal-50 border-teal-100` → §2 rule 2.
- Lab badge `bg-teal-400 text-teal-900` → keep (saturated fill) but verify on the hero.

---

## 3. Find every offender
```bash
cd ~/med-core-app
grep -rnE "bg-white|text-white/[0-9]|bg-black/[0-9]|bg-(emerald|teal|green|amber|sky|rose|indigo|violet|orange)-(50|100|200)|text-(emerald|teal|green|amber|sky|rose)-(600|700|800|900)|border-(emerald|teal|green|amber|sky|rose)-(100|200)" src/pages src/components --include=*.tsx
```
Work through the list; each match is either a `bg-white→bg-surface` swap or a `dark:`
variant addition (or a switch to a tokenized helper). Leave saturated fills with
white/dark text alone.

---

## 4. Verification (toggle OS dark mode or emulate `prefers-color-scheme: dark`)
```bash
npm run build
grep -c "dark:" src/pages/SubjectDetail.tsx    # >0
grep -n "color-text-muted" src/styles/tokens.css
```
Manual, in **dark mode**, on every page:
- [ ] `/plan/histologia-1`: ficha labels (CRÉDITOS/HORAS/ÁREA) and values legible; hero
      pills (UAD, HS01006, celular) and **Laboratorio** badge readable; the "Próximamente"
      chips and taught chips legible; competencia box readable (no light box on dark).
- [ ] `/plan`, `/estudio` (Temas), `/` (Home), `/quiz`, `/vocabulario` (EnLex),
      `/terminologia` (MedLex), `/atlas`, `/anatomia`, `/ajustes`, a `/topic/…`,
      Progress: no light‑on‑light or dark‑on‑dark; cards use dark surfaces, not white.
- [ ] **Light mode unchanged** on the same pages (spot‑check 3).

**Self‑audit:** list the pages you changed and confirm, for 4 of them, that every text
chip/label meets contrast in dark. Report any raw palette you intentionally left
(saturated fills) and why.

---

## 5. Non‑objectives
- Don't change light‑mode appearance. Don't restructure layouts or content. Don't touch
  `TOPIC_COLORS` (already has `dark:` variants from the previous fix). No `npm run deploy`.

## 6. Delivery (atomic commits)
1. `fix(tokens): sube contraste de texto muted/secondary y ramp primary en modo oscuro`
2. `fix(ui): superficies y chips adaptativos en dark (SubjectDetail, plan, temas)`
3. `fix(ui): resto de páginas/omponentes con paletas crudas → tokens/dark:`

Report the token values you set, the count of raw‑palette occurrences fixed, and the
self‑audit.
