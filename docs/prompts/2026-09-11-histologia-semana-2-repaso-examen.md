# PROMPT — MedCore · Histología I · Semana 2 — Repaso para el examen (≥30, desde Clase 5)

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-11.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "el docente dijo"; use "se…" / "del examen" (regla de la skill).**
> La Clase 5 fue el **repaso oficial previo al examen** (solo diapositivas de identificación
> + transcript). Define el examen: **30 preguntas de banco aleatorio + 5 del caso clínico**
> (síndrome de Kartagener), **enfoque puramente histológico**. Construye el repaso ≥30.

---

## 0. Sources & current state
- Transcript: `…/Histología I y sus Laboratorios DEF/Clases/Semana 2/Clase 5/# Histología I y sus Laboratorios DEF week 2 Class 5.md` (`## Summary` + `## Transcript`). Diapositivas = imágenes de identificación (sin texto). PDF a la biblioteca privada, **no al repo**.
- Ya cargado: topics de Semana 2 (`histologia-epitelial`, `histologia-epitelial-polaridad`, y —si ya corrió su prompt— `histologia-glandulas`, `histologia-epitelios-urinario`, `histologia-epitelios-respiratorio`, `histologia-piel`). Existe el patrón de repaso `histologia-repaso-s1` + módulo `histologia-uad-repaso-s1` (cópialo).
- Quiz prefixes existentes: `his-q`, `his-r-q`, `his-epiq`, `his-polq` (+ glaq/uriq/resq/pielq si corrieron). Usa un prefijo nuevo **`his-r2q`** (sin colisión).

```bash
cd ~/med-core-app && npm run build
grep -n "histologia-repaso-s1\|histologia-uad-repaso-s1" src/data/histologia-topics.ts src/data/modules.ts
grep -o "id: 'his-[a-z0-9]*q" src/data/histologia-quizzes.ts | sort -u
```

## Regla de repaso (skill §6c): **≥30 preguntas**; modelar sobre el examen real
El parcial son **30 (banco) + 5 (caso clínico) = 35** reactivos, todos de **identificación
histológica**. Construye al menos 30 de banco **más** el bloque de 5 del caso Kartagener.
Formato: opción múltiple, 4 opciones, respuesta única; `explanation` en español que
justifique y descarte un distractor; `correctIndex` repartido 0–3; **todos ★ examen**.

---

## 1. Topic — `histologia-repaso-s2` (patrón de `histologia-repaso-s1`)
`colorKey:'histologia'`, `categoria:'Histología'`, `emoji:'📝'`. Title *"Repaso para el
examen — Semana 2"*; subtitle *"Banco tipo examen: identificación de epitelios y caso
clínico"*. 2–3 secciones:
- `note`: es repaso; **no es contenido nuevo**; el examen es **puramente histológico**
  (identificar epitelios) y consta de **30 de banco + 5 del caso clínico**. Cada tema se
  estudia a fondo en sus topics de Semana 2.
- `correlacion` (variant 'dato', ★ **"Estrategia"**): lee bien el caso clínico (2–3
  veces); todas las preguntas apuntan a temas de histología ya vistos, no a medicina
  avanzada; en opción múltiple, primero descarta los 2 distractores obvios.

---

## 2. Banco de identificación — `his-r2q`, ≥30 ítems ★
Cubre las asociaciones que se marcaron como evaluables (Clases 3–5). Sugerencia de reparto:

**Epitelios simples**
- Plano simple → cápsula de Bowman (hoja parietal), alvéolos, vasos (endotelio).
- Distinguir capilares por **eritrocitos** atrapados; **neumocito II** abombado vs **I**
  aplanado.
- Cúbico simple → conductos colectores renales, folículos tiroideos, ovillo de glándula
  sudorípara.
- Cilíndrico simple → vesícula biliar; intestino delgado (**borde en cepillo +
  caliciformes**); estómago (**foveolas, SIN caliciformes**).

**Estratificados y transición**
- Plano estratificado **queratinizado** → piel; lengua (botones gustativos).
- Plano estratificado **no queratinizado** → esófago, endocérvix.
- Cúbico estratificado → conductos glandulares.
- Transición anorrectal → línea pectínea.
- **Urotelio** → transición; de **cálices menores** a **uretra proximal**; **células en
  paraguas binucleadas** (hallazgo frecuente); por qué binucleadas / parece adelgazarse en
  la distensión (analogía del globo/vejiga llena).

**Especializaciones / pseudoestratificado**
- Tráquea → **cilíndrico pseudoestratificado ciliado con caliciformes**.
- Cilio móvil → axonema **9+2**, **dineína**; microtúbulos.
- Epidermis (identificación), incl. "epidermis envejecida" (aplanamiento de la unión
  dermoepidérmica).

Añade preguntas que se señalaron explícitamente como probables: **hallazgo de las células
en paraguas = binucleadas**; **sitio donde inicia el urotelio = cálices menores**.

## 3. Caso clínico Kartagener — 5 ítems ★ (mismo banco, o subprefijo `his-r2q-cc`)
Enunciado (resúmelo en un `note`/stem en el topic o en la 1.ª pregunta): *"Hombre de 24
años, no fumador, sin exposición ocupacional, con tos productiva crónica y expectoración
mucopurulenta de años de evolución. La MET del axonema muestra 9 dobletes periféricos + par
central conservados, con **ausencia de los brazos interno y externo de dineína**."* Cinco
preguntas:
1. Diagnóstico: **discinesia ciliar primaria (síndrome de Kartagener)**.
2. Epitelio normal de la tráquea afectado: **cilíndrico pseudoestratificado ciliado con
   caliciformes**.
3. Estructura alterada: **brazos de dineína del axonema** (cilios inmóviles).
4. El **situs inversus** se explica por alteración de los **cilios nodales embrionarios**
   (establecen el eje izquierda‑derecha).
5. Tríada clásica (Kartagener): **situs inversus + bronquiectasias + sinusitis** (tos
   productiva crónica). *(En el caso NO hay metaplasia — puede ser un distractor.)*

---

## 4. ⚠️ Punto a verificar (Think Again) — axonema de los cilios nodales
En la Clase 5 se afirmó que los **cilios nodales** tienen organización **9+2**.
Histológicamente los **nodales son 9+0** (los **móviles/respiratorios** sí son **9+2**). El
hallazgo del caso (9 dobletes + par central = 9+2, sin brazos de dineína) corresponde al
**cilio respiratorio móvil** y es correcto. Para el reactivo de nodales:
- Enseña lo **correcto** en `explanation`: móvil/respiratorio = 9+2; **primario y nodal =
  9+0**; los nodales son móviles (rotatorios) y establecen el eje izquierda‑derecha.
- Añade una nota: *"en esta clase se indicó 9+2 para los nodales; si el reactivo del examen
  sigue esa versión, tenla presente."* No marques como correcta una afirmación falsa sin
  esa aclaración.

---

## 5. Wire it in (patrón repaso-s1)
- **`modules.ts`**: módulo **`histologia-uad-repaso-s2`** (badge "UAD · Histología —
  Repaso", title "Repaso para el examen — Semana 2", emoji 📝, `topicIds:
  ['histologia-repaso-s2']`), espejo de `histologia-uad-repaso-s1`.
- **`plans/uad-medicina.ts`** Histología: agrega `'histologia-repaso-s2'` al `topicIds` de
  la semana correspondiente (o de la Semana 2) y una línea en `temas`/`materiales`
  "Semana 2 · Clase 5 — Repaso para el examen". No cambies `estado`.
- `topics.ts` / `quizzes.ts` ya hacen spread de los arrays de histología.

---

## 6. Verification
```bash
npm run build
grep -c "his-r2q" src/data/histologia-quizzes.ts        # ≥35 (30 banco + 5 caso)
grep -n "histologia-repaso-s2" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -o "id: 'his-r2q[0-9a-z-]*'" src/data/histologia-quizzes.ts | sort | uniq -d   # empty
```
Manual (`npm run dev`, claro+oscuro): topic **Repaso Semana 2** accesible desde el módulo
de repaso y desde Plan; el banco corre con ≥30 + el caso; ★ visibles; el ítem de nodales
lleva la aclaración 9+0 vs 9+2.

**Autoauditoría (Think Again):** confirma contra la transcripción: urotelio inicia en
cálices menores; células en paraguas binucleadas; estómago = cilíndrico simple sin
caliciformes (foveolas); intestino delgado = borde en cepillo + caliciformes; caso = déficit
de brazos de dineína. Reporta el conteo total y la resolución del punto §4.

---

## 7. Non-objectives
- No metas imágenes/diapositivas al repo ni al Atlas (el examen es de identificación, pero
  aquí el banco es textual). No renumeres `sectionId`s. No `npm run deploy`.

## 8. Delivery
1. `feat(histologia): Topic repaso para el examen — Semana 2`
2. `feat(histologia): banco his-r2q (≥30 identificación + caso Kartagener, ★)`
3. `chore(histologia): módulo y plan del repaso Semana 2`

Reporta el conteo total y la autoauditoría (incluido el punto de los cilios nodales).
