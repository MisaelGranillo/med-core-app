# PROMPT — MedCore · Medical English I · Week 3 (grammar) — promote verb-tenses + sentence-structure

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-08-12.
> **Prompt language: English. MedCore chrome/explanations in Spanish; the study
> object (English grammar, example sentences) stays in English.**
> **Promotion, not new content.** The two grammar topics already exist in the
> advance module. Week 3 (Classes 1–3) taught them → **promote and reconcile**.

---

## 1. Situation

Week-3 of the syllabus is "Gramática práctica utilizada en medicina" and is
currently `estado: 'adelanto'` in the plan with **no topicIds**. The content is
already authored as two advance topics:

- **`ingles-verb-tenses`** ("Verb Tenses, Modals & Voice") — sections: `ivt-1`
  Adelanto note · `ivt-2` tenses · `ivt-3` modal verbs · `ivt-4` conditionals &
  passive · `ivt-5` reported speech / questions / -ing vs infinitive.
- **`ingles-sentence-structure`** ("Articles, Word Order & Subordination") —
  sections: `iss-1` Adelanto note · `iss-2` articles · `iss-3` word order &
  adjectives · `iss-4` subordinate clauses & prepositions.

Classes 1–3 (verified, §3) covered: the **12 tenses**, verb *to be*, **modal
verbs** + usage matrix, **conditionals 0–3**, **passive voice**, **subordinate
conjunctions**, **articles**, word order, and regular/irregular verbs. Reported
speech and -ing/infinitive were touched only lightly. So: **promote both topics**,
reconcile their content with what the professor actually presented, and note the
lightly-covered parts rather than deleting them.

---

## 2. Before touching code

```bash
cd ~/med-core-app
sed -n '/id: .ingles-verb-tenses./,/^  \},/p' src/data/ingles-uad-topics.ts
sed -n '/id: .ingles-sentence-structure./,/^  \},/p' src/data/ingles-uad-topics.ts
sed -n '55,80p' src/data/modules.ts                    # 'ingles-medico-adelanto' + s2/s3 modules
sed -n '277,300p' src/data/plans/uad-medicina.ts       # Week-3 ingles block (adelanto)
grep -n "verb-tenses\|sentence-structure\|tense\|modal\|conditional\|passive" src/data/ingles-adelanto-quizzes.ts
git log --oneline -6
```
Clean `npm run build`. Collisions: `grep -rn "ingles-medico-uad-s3" src/`

---

## 3. Verified class content (reconcile against this) — chrome Spanish, examples English

### 3.1 The 12 tenses (reconcile `ivt-2`)
Each with **signal words · use · form · aff/neg/interrog** (the professor's table
format). Confirm all twelve are present:
- **Simple present** (every day/always/never → habits; verb, +s 3rd person).
- **Present continuous** (now/at the moment → happening now; am/is/are + -ing).
- **Present perfect** (just/yet/ever/since/for/already/how long → past with present
  effect; have/has + past participle).
- **Present perfect continuous** (all day/since/for/how long; have/has + been + -ing).
- **Simple past** (yesterday/ago/last…/1990; verb-ed / 2nd column).
- **Past continuous** (while; was/were + -ing).
- **Past perfect** (already/just/never/before; had + past participle).
- **Past perfect continuous** (how long/since/for; had + been + -ing).
- **Simple future** (tomorrow/next…; will + verb).
- **Future continuous** (at this time tomorrow; will be + -ing).
- **Future perfect** (by next week; will have + past participle).
- **Future perfect continuous** (by … for + duration; will have been + -ing).
Add a `table` if not already; the "signal word tells the tense" rule as a `note`.

### 3.2 Modal verbs (reconcile `ivt-3`)
Matrix by function: **can** (ability/permission) · **can't** (impossibility/denied) ·
**could** (possibility/past ability/polite permission) · **may** (possibility/formal
permission) · **might** (weaker possibility) · **must** (obligation/strong deduction) ·
**have to** (external obligation) · **shall** (offers) · **should / ought to**
(advice) · **had better** (strong advice) · **would** (offers/hypothetical) ·
**will** (future/willingness).
Rules `note`: no conjugation (no -s 3rd person), no do/does in questions, no
don't/doesn't in negatives, followed by a **bare infinitive** (no "to"), **no
infinitive/-ing forms** ("to can" ✗, "musting" ✗).

### 3.3 Conditionals 0–3 (reconcile `ivt-4`)
- **Zero**: if + present, present — permanent truths/facts (If you heat water to
  100°, it boils).
- **First**: if + present, will/can/must + verb — realistic (If I specialize, I will
  be on cardiology). **unless = "if not"; never followed by will.**
- **Second**: if + past, would/could + inf — improbable/impossible (If I had more
  time, I'd exercise). **"If I were you, I'd …" = advice.**
- **Third**: if + past perfect, would have + participle — impossible past/regret (If
  he had taken it, he would have recovered).

### 3.4 Passive voice (reconcile `ivt-4`)
Form: **subject + be + past participle + by + agent (optional)** (Appendicitis was
diagnosed by the doctor). Use when: emphasize the receiver, unknown agent, obvious/
unimportant agent, formal/scientific writing, general statements.

### 3.5 Articles + word order + subordinate conjunctions (reconcile `iss-2..4`)
- **Articles**: a (consonant sound) · an (vowel sound: an x-ray) · the (specific) ·
  no article (general plurals/uncountables).
- **Subordinate conjunctions**: after, before, since, although, than, that, unless,
  until, because, when, where, while, in order to, as long as, even though. **Comma
  rule**: subordinate clause first → comma; after the main clause → no comma.

### 3.6 Confusions to target (≥25 % of the bank)
1. **Tense by signal word**: yesterday→simple past · now→present continuous ·
   since/for→present perfect · while→past continuous · by next week→future perfect.
2. **Present perfect vs simple past** (since/for/already vs yesterday/ago).
3. **Modal meaning**: must=obligation, should/ought to=advice, might/may=possibility,
   shall=offer, can=ability/permission; + the "bare infinitive, no -s, no do" rules.
4. **Conditional type by structure** (0 present+present; 1 present+will; 2 past+would;
   3 past perfect+would have) and **unless ≠ will**.
5. **Active ↔ passive** transformation (identify subject/agent).
6. **Subordinate conjunction choice** and the comma rule.
7. **a vs an** by sound (an x-ray, a university).

---

## 4. Deliverables

### 4.1 Promote both topics (`ingles-uad-topics.ts` + `modules.ts`)
- In each, rewrite the "Adelanto" section (`ivt-1`, `iss-1`) **keeping its `id`**:
  replace the note with `{ type: 'note' }` = *"Impartido en la Semana 3 (Clases 1–3).
  Gramática práctica: tiempos, modales, condicionales, voz pasiva, subordinación y
  artículos."* Do not renumber sections.
- Reconcile §3 into the existing sections; add tables/notes where missing; **flag
  reported speech and -ing/infinitive** (`ivt-5`) as *"visto de forma breve; se
  refuerza con el workbook"* rather than claiming full coverage.
- Create a Week-3 module and move both topics into it:
  ```ts
  {
    id: 'ingles-medico-uad-s3',
    badge: 'UAD · Inglés Médico I — Semana 3',
    title: 'Gramática práctica en medicina',
    subtitle: 'Tiempos verbales, modales, condicionales, voz pasiva, subordinación y artículos.',
    emoji: '✍️',
    topicIds: ['ingles-verb-tenses', 'ingles-sentence-structure'],
  }
  ```
  Place it after `ingles-medico-uad-s2`; remove both ids from
  `ingles-medico-adelanto`.

### 4.2 Subject sheet (`plans/uad-medicina.ts`, Week-3 ingles)
- `estado: 'impartido'`; `topicIds: ['ingles-verb-tenses', 'ingles-sentence-structure']`.
- Update `temas` to reflect Classes 1–3 (Clase 1: articles, verb to be, questions,
  regular/irregular verbs; Clase 2: simple present/past, simple future, present/past
  continuous; Clase 3: perfect tenses, modals, conditionals, passive, subordinate
  conjunctions).
- Add to `content.materiales`:
  ```ts
  { title: 'Semana 3 · Clase 1 — Gramática: artículos, verbo to be y verbos', file: 'Semana 3 - Clase 1 Gramatica Articulos y Verbos.pdf', kind: 'Clase' },
  { title: 'Semana 3 · Clase 2 — Tiempos: presente, pasado, futuro y continuos', file: 'Semana 3 - Clase 2 Tiempos Simples y Continuos.pdf', kind: 'Clase' },
  { title: 'Semana 3 · Clase 3 — Perfectos, modales, condicionales, voz pasiva y subordinación', file: 'Semana 3 - Clase 3 Perfectos Modales Condicionales Pasiva.pdf', kind: 'Clase' },
  { title: 'Proyecto Integrador Semana III', file: 'Semana 3 - Proyecto Integrador.pdf', kind: 'Entrega' },
  ```
- Keep the existing "Check Your English Vocabulary for Medicine" source; add "English
  Grammar in Use (Murphy)" as a reference for these classes.

### 4.3 Question bank
- Promote any tense/modal/conditional/passive items from `ingles-adelanto-quizzes.ts`
  to the taught bank (`topicId: 'ingles-verb-tenses'` / `'ingles-sentence-structure'`);
  remove from the advance bank.
- Add new items to reach ~**20–24** across the two topics, concentrated on §3.6.
  Rubric: distractors that are a *different tense with a conflicting signal word*, a
  *wrong modal function*, a *wrong conditional type*; `explanation` justifies the key
  and rules out one distractor; **nothing answerable by cognate**; `correctIndex`
  spread 0–3.

### 4.4 Library
Compose one PDF per class from its captures and upload to
`library.medcore.icu/ingles-medico-1/` with the §4.2 names:
```bash
cd "~/Desktop/UAD/Primer Semestre/Inglés Médico I DEF/Semana 3"
for n in 1 2 3; do
python3 -c "
from PIL import Image; import glob
ims=[Image.open(f).convert('RGB') for f in sorted(glob.glob('Clase $n/*.png'))]
names={1:'Semana 3 - Clase 1 Gramatica Articulos y Verbos.pdf',2:'Semana 3 - Clase 2 Tiempos Simples y Continuos.pdf',3:'Semana 3 - Clase 3 Perfectos Modales Condicionales Pasiva.pdf'}
ims[0].save(names[$n], save_all=True, append_images=ims[1:], resolution=150); print(names[$n], len(ims))
"
done
```
(Clase 1 also has a stray `.pdf` — if it is the Proyecto Integrador worksheet, upload
it separately as the Entrega; otherwise ignore it.) **Show me the upload commands
before running them.** Don't commit PNG/PDF.

> Optional: a grammar cheat-sheet PDF already exists in the outputs folder
> ("Medical English - Grammar Cheat Sheet …"). If Misael later asks, it can be
> published under `public/descargas/` and linked as a `RecursoLink` (same mechanism
> as the terminology PDF). Do NOT do it in this prompt unless asked.

---

## 5. Verification

```bash
npm run build
grep -c "Adelanto — aún no impartido" src/data/ingles-uad-topics.ts   # two fewer than before
grep -n "ingles-verb-tenses\|ingles-sentence-structure" src/data/modules.ts   # under s3, not adelanto
grep -o "id: '[a-z0-9-]*'" src/data/ingles-uad-quizzes.ts | sort | uniq -d    # empty
grep -n "ingles-medico-uad-s3" src/data/modules.ts
```

Manual (`npm run dev`):
- [ ] `/estudio`: a **Semana 3** module with both grammar topics; the remaining
      advance topics (false-friends, scientific-literature) intact in adelanto.
- [ ] `/topic/ingles-verb-tenses`: opens as taught (no adelanto note); the 12-tense
      table, modal matrix, conditionals and passive render; reading progress kept
      (section ids unchanged).
- [ ] `/topic/ingles-sentence-structure`: articles, word order, subordinate
      conjunctions render; light-touch reported speech flagged, not overclaimed.
- [ ] `/plan/ingles-medico-1`: Week 3 is impartido, lists both topics and the 3 class
      materials + Proyecto Integrador.
- [ ] Quizzes playable; advance grammar items no longer show as advance.

**Mandatory self-audit:** verify 4 items against §3 — a "since/for" item keyed to
present perfect (not simple past); a "must = obligation" modal item; a third
conditional (if + past perfect → would have); an active→passive transformation.
Report the result and the final item count.

---

## 6. Non-objectives
- Don't rewrite the two topics from scratch — reconcile section by section.
- Don't renumber `sectionId`s (breaks `useProgress`).
- Don't promote `ingles-false-friends` or `ingles-scientific-literature` (Week 4).
- Don't overclaim reported speech / -ing-infinitive coverage — flag as light.
- Professor errors → errata note + distractors, never the correct answer.
- Don't touch Anatomy, PAI, earlier weeks. No `npm run deploy`.

---

## 7. Delivery (atomic commits)
1. `feat(ingles): promueve tiempos verbales, modales, condicionales y voz pasiva (Semana 3)`
2. `feat(ingles): promueve artículos, orden de palabras y subordinación (Semana 3)`
3. `feat(quizzes): banco de gramática — tiempos, modales, condicionales, pasiva`
4. `feat(plan,modules): Semana 3 de Inglés impartida; materiales de las 3 clases`

Report which sections already covered §3 vs what you added, how many advance items
were promoted, the light-coverage flags you set, and the self-audit result.
