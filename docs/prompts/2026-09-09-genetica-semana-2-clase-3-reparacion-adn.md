# PROMPT — MedCore · Genética Básica · Semana 2 Clase 3 — Reparación del ADN (+ repaso ★ del examen)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-09.
> **Prompt language: English. MedCore content stays in Spanish.**
> Completa Semana 2 de Genética: **Clase 3 = reparación del ADN**. La Dra. cerró la clase
> dictando **la lista de prioridades del examen de la Semana 2** — captúrala como un topic
> de repaso ★. Semana 2 Clases 1–2 ya están cargadas.

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript for verification:
- `…/Genética Básica DEF/Clases/Semana 2/Clase 3/Genetica_Semana_2_Clase_3_Apuntes.md`
  (+ `# … Week 2 Class 3.md` transcript, + slides PDF). PDF stays in the private library.

Existing (loaded): topics `genetica-dogma-transcripcion`, `genetica-cromosomas-cariotipo`,
`genetica-traduccion`; module `genetica-uad-s2`; quiz prefixes `gen-dogq/gen-cromq/gen-tradq`;
plan Genética Semana 2 = impartida with a placeholder line "Clase 3 (pendiente): reparación
del ADN".

```bash
cd ~/med-core-app && npm run build
grep -n "genetica-uad-s2\|reparación del ADN\|Clase 3 (pendiente)" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -o "id: 'gen-[a-z]*q" src/data/genetica-quizzes.ts | sort -u
```

---

## 1. New Topic — `genetica-reparacion-adn` (append to `geneticaTopics`)
`colorKey: 'genetica'`, `categoria: 'Genética'`, `emoji: '🧬'`. Title *"Reparación del
ADN"*; subtitle *"Daños endógenos y exógenos, enzimas clave y vías de reparación"*.
Depth bar; ≥1 `correlacion`. Sections:

1. **Objetivo.** Mantener intacta la información genética y corregir daños; si el daño no
   se repara → **apoptosis**; si fallan los controles y la célula sigue dividiéndose con
   ADN dañado → acumulación de mutaciones y **cáncer**.
2. **Origen del daño.** **Endógeno**: **radicales libres** (electrones no apareados;
   subproducto de la respiración aerobia). **Exógeno**: **UV, rayos X, rayos gamma,
   sustancias químicas, humo del cigarro**; las radiaciones ionizantes causan ruptura de
   una o ambas cadenas, daño de bases y radicales libres.
3. **Radiación UV → dímeros de timina.** Uniones anormales entre timinas adyacentes que
   distorsionan la hélice y obligan a reparar (excisión de nucleótidos).
4. **Etapas generales.** Revisión (durante la replicación), reparación de mal apareamiento
   (después de la replicación) y las vías de reparación durante el ciclo celular.
5. **Revisión y mal apareamiento.** La **ADN polimerasa** revisa durante la replicación
   (detecta p. ej. G–T donde debía ir G–C, lo elimina y reemplaza). La reparación de mal
   apareamiento corrige errores posteriores: bases mal apareadas, pequeñas inserciones y
   deleciones (deslizamiento de la polimerasa).
6. **Las tres enzimas clave** (la Dra. dijo que son las que hay que aprender): tabla /
   `keyTerms` — **Glicosilasa → detecta y elimina la base dañada**; **ADN polimerasa →
   rellena/reemplaza**; **ADN ligasa → sella**. Mnemotecnia: **Quitar → Rellenar → Sellar**.
7. **Vías de reparación.** Reversión directa; **excisión de bases** (quita una base —
   glicosilasa; ejemplo: **uracilo en el ADN** → G–U se corrige a G–C); **excisión de
   nucleótidos** (quita un segmento; para distorsiones grandes — dímeros de timina, humo,
   químicos). Tabla **excisión de bases vs de nucleótidos** (una base vs un segmento).
8. **Ruptura de doble cadena.** Peligrosa (pérdida de información). Dos vías: **unión de
   extremos no homólogos** (une extremos sin molde; menos precisa; puede mutar) vs
   **recombinación homóloga** (usa el cromosoma homólogo como **molde**; más precisa; se
   relaciona con la meiosis y el entrecruzamiento). Regla: homóloga = tiene de dónde
   copiar; no homóloga = une los extremos.

**`correlacion` (clinica):** UV → dímeros de timina → sin reparar, mutaciones/cáncer de
piel; y radicales libres del metabolismo como daño endógeno continuo. *(Puedes mencionar
xeroderma pigmentoso como enfermedad de reparación por excisión de nucleótidos defectuosa,
**marcándolo como enriquecimiento** — no está en la transcripción; verifícalo antes de
afirmarlo.)*

---

## 2. Review Topic — `genetica-repaso-s2` (patrón de `histologia-repaso-s1`)
La Dra. dictó **9 prioridades de examen** al cerrar. Crea un topic de repaso ★ que las
capture como guía de estudio (secciones cortas que apunten a los topics de la semana):
1) **partes del cromosoma y la función de cada una** (centrómero, brazos p/q, cinetocoro,
telómeros, cromátidas, bandas); 2) **ADN vs ARN** (azúcar, base, estructura, función);
3) **nucleosoma** (2 H2A+2 H2B+2 H3+2 H4 = 8) y la cadena ADN→histonas→nucleosoma→
cromatina→cromosoma; 4) **tipos de cromosoma** (meta/submeta/acro/telocéntrico);
5) **transcripción** (ADN→ARN, ARN polimerasa, U por T, ARNm, intrones/exones, núcleo);
6) **traducción** (ARNm/ARNt/ARNr, citoplasma, iniciación/elongación/terminación);
7) **ribosoma A/P/E**; 8) **codones** (AUG→metionina; STOP UAA/UAG/UGA);
9) **reparación** (endógeno/exógeno, radicales libres, UV, mal apareamiento, excisión de
bases/nucleótidos, doble cadena homóloga/no homóloga). Añade un `note` "banco de
prioridades dictado por la Dra." y un `correlacion` variant 'dato' con la estrategia.

---

## 3. Quiz banks (`genetica-quizzes.ts`)
- **`gen-repq`** → `topicId: 'genetica-reparacion-adn'`, ~8–10 items: función de la
  reparación; endógeno=radicales libres; exógenos (UV/X/gamma/químicos); UV→dímeros de
  timina; ADN polimerasa revisa; glicosilasa detecta/elimina; ADN ligasa sella; excisión
  de bases (una base) vs de nucleótidos (segmento); homóloga usa molde vs no homóloga une
  extremos; uracilo en ADN se corrige a C.
- **`gen-s2rq`** → `topicId: 'genetica-repaso-s2'`, ~10–12 items ★, mezcla de alto
  rendimiento de las 9 prioridades (cross‑cutting: p/q, ADN vs ARN, nucleosoma, tipos de
  cromosoma, transcripción/traducción localización, A/P/E, AUG/STOP, enzimas de
  reparación). Marca todos como ★ examen.
`explanation` en español; distractores de concepto hermano; `correctIndex` repartido; sin
IDs duplicados.

---

## 4. Wire it in (Clase 3 → impartida; Semana 2 completa)
- **`modules.ts`**: add `'genetica-reparacion-adn'` to `genetica-uad-s2.topicIds` and
  update its subtitle to incluir reparación del ADN. Add a small module
  **`genetica-uad-repaso-s2`** (badge "UAD · Genética — Repaso", title "Repaso para el
  examen — Semana 2", emoji 📝, `topicIds: ['genetica-repaso-s2']`) — mirror
  `histologia-uad-repaso-s1`.
- **`plans/uad-medicina.ts`** Genética Semana 2: add both topicIds; replace the "Clase 3
  (pendiente)" line with **"Clase 3 (impartida): reparación del ADN — daños endógenos/
  exógenos, enzimas (glicosilasa, ADN polimerasa, ADN ligasa) y vías de reparación"**; add
  a `materiales`/`fuentes` entry "Semana 2 · Clase 3 — Reparación del ADN". Keep `estado`
  impartido.
- `topics.ts` / `quizzes.ts` already spread the genética arrays.

---

## 5. Verification
```bash
npm run build
grep -n "genetica-reparacion-adn\|genetica-repaso-s2" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "gen-repq\|gen-s2rq" src/data/genetica-quizzes.ts
for p in gen-repq gen-s2rq; do grep -o "id: '$p-q[0-9]*'" src/data/genetica-quizzes.ts | sort | uniq -d; done  # empty
grep -rn "Clase 3 (pendiente)" src/data/plans/uad-medicina.ts   # empty
```
Manual (`npm run dev`, light+dark): reparación topic reachable from `genetica-uad-s2`;
repaso ★ topic reachable from the new repaso module and from Plan; quizzes play; ★ marks
visible.

**Mandatory self‑audit (Think Again):** the notes are a secondary digest — verify against
the transcript/a base text on 5 points: enzima que revisa durante replicación = **ADN
polimerasa**; **glicosilasa** = excisión de **bases**; excisión de **nucleótidos** = quita
un segmento (dímeros de timina); **homóloga usa molde / no homóloga une extremos**; UV →
**dímeros de timina**. Any enrichment beyond the transcript (e.g. xeroderma pigmentoso)
must be verified and labeled as such, not asserted as class content. Report item counts
and anything unconfirmed.

---

## 6. Non‑objectives
- Don't duplicate Clase 1–2 content — the repaso topic **links**, it doesn't re‑teach.
  Don't renumber existing `sectionId`s. No PDF/.md into the repo. No `npm run deploy`.

## 7. Delivery
1. `feat(genetica): Topic reparación del ADN (S2 C3)`
2. `feat(genetica): Topic repaso ★ del examen Semana 2 (prioridades de la Dra.)`
3. `feat(genetica): bancos de quiz gen-repq y gen-s2rq (★)`
4. `chore(genetica): Semana 2 completa (Clase 3 impartida) en módulo y plan`

Report item counts and the self‑audit.
