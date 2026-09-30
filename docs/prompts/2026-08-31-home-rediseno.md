# PROMPT — MedCore: redesign the Home into a friendlier study dashboard

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-31.
> **Prompt language: English. MedCore UI stays in Spanish.**
> Rework `src/pages/Home.tsx` (route `/`) into a warmer, more useful landing that
> answers **"¿qué estudio hoy?"** at a glance, then routes by subject and tool.
> Keep it data‑driven from the real files (no hardcoded counts). Light + dark
> (tokens flip; use `zinc`/surface tokens and the dark‑adaptive colorKeys).

---

## 0. Read first
```bash
cd ~/med-core-app && npm run build
sed -n '1,120p' src/pages/Home.tsx        # current hero + tools + STUDY_MODULES + continueTopic
sed -n '55,70p' src/pages/Home.tsx        # continueTopic / continuePct logic (reuse it)
grep -n "planContextForTopic\|content.semanas\|estado" src/data/plans/index.ts src/data/plans/uad-medicina.ts | head
```
Reuse existing data: `topics`, `modules`, `questions`, `getActivePlan()`,
`useProgress` (`getSectionsRead`, `quizAttempts`), and the `categoria` field (from the
structural update). If a plan‑context helper (`planContextForTopic`) exists, use it to
map a topic → subject/week.

---

## 1. Proposed layout (mockup — build this; Misael will judge it in `npm run dev`)

```
┌───────────────────────────────────────────────────────────────┐
│  Hola, Misael 👋              MedCore · UAD Medicina · 1er sem  │  ← saludo + plan
│  "Tu progreso esta semana"        ▓▓▓▓▓▓▓░░░  63%              │  ← barra progreso global
├───────────────────────────────────────────────────────────────┤
│  CONTINUAR ESTUDIANDO                                          │
│  ┌─────────────────────────────┐  ┌───────────────────────┐   │
│  │ [color] Miología II         │  │ Próximo examen        │   │
│  │ Anatomía · Semana 4         │  │ Repaso final · Anato  │   │
│  │ ▓▓▓▓▓░░ 55% · Continuar →   │  │ Repasar ahora →       │   │
│  └─────────────────────────────┘  └───────────────────────┘   │
├───────────────────────────────────────────────────────────────┤
│  MIS MATERIAS                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                  │
│  │Anatomía│ │Inglés  │ │Genética│ │Histolog│  (tarjeta con     │
│  │ 12 temas│ │ 9 temas│ │ 2 temas│ │ 3 temas│   color, progreso,│
│  │ ▓▓▓ 70%│ │ ▓▓ 40% │ │ ▓ 20%  │ │ ▓ 15%  │   nº temas/quiz) │
│  └────────┘ └────────┘ └────────┘ └────────┘                  │
├───────────────────────────────────────────────────────────────┤
│  HERRAMIENTAS                                                  │
│  [Temas] [Quizzes] [Atlas] [EnLex] [MedLex] [Plan] [Anatomía3D]│  ← chips/iconos
└───────────────────────────────────────────────────────────────┘
```

### Sections to build
1. **Saludo + plan + progreso semanal.** "Hola, Misael" (nombre puede quedar fijo o de
   un config simple), la etiqueta del plan activo, y una **barra de progreso global**
   (secciones leídas / secciones totales, de `useProgress`). Cálida, sin hero gigante.
2. **Continuar estudiando** (reusa `continueTopic`/`continuePct`): tarjeta grande con el
   color de la materia, "Materia · Semana N", % leído y botón **Continuar →** a
   `/topic/:id`. Junto a ella, una tarjeta **"Próximo examen/repaso"**: si existe un
   topic de repaso (`repaso-*`), enlázalo ("Repasar ahora"); si no, muestra el último
   quiz jugado o el siguiente tema pendiente.
3. **Mis materias**: una tarjeta por materia del plan **con contenido** (deriva las
   materias del plan activo; para cada una: color/categoría dominante, nº de temas, nº
   de quizzes, y **% de progreso** = secciones leídas de sus temas). Click → la ficha
   de la materia (`/plan/:subjectId`) o su primer tema.
4. **Herramientas**: fila compacta de accesos (Temas, Quizzes, Atlas, EnLex, MedLex,
   Plan, Anatomía 3D) como chips con icono — más pequeños que ahora, no el foco.

### Style
- Warm, uncluttered, mobile‑first; cards with the dark‑adaptive `TOPIC_COLORS`; generous
  spacing; Phosphor icons already in use. **No hardcoded numbers** — compute from data.
- Everything legible in light and dark. Respect `prefers-reduced-motion` for any
  animation.

---

## 2. Keep / drop
- Keep it a single data‑driven page; keep the `continueTopic` logic and the tools set
  (update "Anatomía · Visor 2D + 3D" → **"Anatomía 3D"** since the 2D viewer was removed;
  "Vocabulario" → **EnLex**).
- Drop the oversized hero stats wall if it crowds the "what do I do today" focus (a small
  progress bar replaces it).

## 3. Verification
```bash
npm run build
grep -n "hardcode\|TODO" src/pages/Home.tsx     # none
```
Manual (`npm run dev`, light + dark, mobile + desktop):
- [ ] Saludo + progreso semanal global correcto (matches sections read).
- [ ] "Continuar estudiando" resumes the right topic with correct %; "Próximo examen"
      links to a repaso topic when present.
- [ ] One card per subject‑with‑content, with real temas/quiz counts and progress; links
      work.
- [ ] Tools row routes correctly (EnLex, Anatomía 3D, etc.).
- [ ] No hardcoded counts; legible light+dark; looks good on a phone width.

**Self‑audit:** confirm every number on the Home is computed from `topics`/`questions`/
`plans`/`useProgress`, and that subject progress matches opening those topics.

## 4. Non‑objectives
- Don't change routes or other pages. Don't add a backend. Don't touch topic content.
  Keep browser storage out (use the existing `useProgress` store). No `npm run deploy`.

## 5. Delivery
1. `feat(home): panel de estudio — saludo, progreso, continuar y materias`
2. `feat(home): fila de herramientas (EnLex, Anatomía 3D)`

Present it for review; Misael will accept or request tweaks after seeing it running.
