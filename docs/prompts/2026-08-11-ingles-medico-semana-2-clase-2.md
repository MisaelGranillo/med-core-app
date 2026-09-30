# PROMPT — MedCore · Inglés Médico I · Semana 2 · Clase 2 (promoción de plurales)

> Destinatario: **Claude Code**, repo `~/med-core-app`. Emitido 2026-08-11.
> Idioma: chrome y explicaciones en español; objeto de estudio (términos,
> oraciones, reglas) en inglés.
> **Otra promoción, no una carga nueva.** La semana pasada dejamos `ingles-plurals`
> en adelanto porque la Clase 1 no tocó plurales. **La Clase 2 SÍ los impartió** —
> ahora se promueve.

---

## 1. Situación

La Clase 1 de la Semana 2 (10 ago) dio construcción de términos → promovimos
`ingles-word-parts` a impartido. La **Clase 2 (11 ago)** cubrió:

1. **Repaso de sufijos** (comunes, adjetivos, quirúrgicos, de procedimiento) — ya
   están en `ingles-word-parts` y en MedEN.
2. **Word building** (unir elementos) e **Interpreting medical terms** (estrategia
   de 3 pasos) — con ejemplos trabajados.
3. **Pronunciation & Spelling** — una sola ortografía correcta; homófonos.
4. **Singular and Plural Endings** — las diez reglas grecolatinas, tabla y práctica.

Esto significa:

- `ingles-plurals` **ya está redactado en el repo** (secciones `ipl-1` nota de
  Adelanto, `ipl-2` las diez reglas, `ipl-3` excepciones). **Se promueve** de
  adelanto a impartido y se reconcilia con lo que el profesor dio.
- A `ingles-word-parts` (ya impartido) se le **añaden** secciones nuevas al final
  (interpretación y pronunciación/ortografía) — **sin renumerar** las existentes.

Reescribir lo que ya está bien es tirar trabajo válido. Reconcilia, no rehagas.

---

## 2. Antes de escribir código

```bash
cd ~/med-core-app
sed -n '/id: .ingles-plurals./,/^  \},/p' src/data/ingles-uad-topics.ts | head -140
sed -n '/id: .ingles-word-parts./,/^  \},/p' src/data/ingles-uad-topics.ts | tail -40   # dónde termina, para APPEND
sed -n '29,50p' src/data/modules.ts                    # 'ingles-medico-uad-s2' y 'ingles-medico-adelanto'
sed -n '244,262p' src/data/plans/uad-medicina.ts       # Semana 2 de ingles
grep -n "plural\|ipl-\|Adelanto" src/data/ingles-adelanto-quizzes.ts   # reactivos de plurales en adelanto
grep -n "semana: \|plural" src/data/meden-terms.ts | head
git log --oneline -6
```

`npm run build` limpio antes de empezar.

---

## 3. Contenido verificado de la Clase 2

### 3.1 Interpreting medical terms — estrategia de 3 pasos (añadir a word-parts)
1. **Divide** the term into word parts. 2. **Define** each word part. 3. **Combine**
the meanings. Ejemplo: `gastr/o/enter/o/logy` → gastr = stomach · o = combining
vowel (no meaning) · enter = small intestine · o = combining vowel · logy = study of
→ *"stomach, small intestine, study of"* = **gastroenterology**.
Ejemplos trabajados de la clase: **cardiomegaly** (cardi/o heart + -megaly enlarged
= enlarged heart), **epidermal** (epi- above + derm/o skin + -al = pertaining to
above the skin), **polymyositis** (poly- many + myos/o muscle + -itis = inflammation
of many muscles), **endocarditis** (endo- inner + cardi/o heart + -itis = inflammation
of the inner lining of the heart), **hypodermic** (hypo- below + derm/o + -ic).

### 3.2 Pronunciation & Spelling (añadir a word-parts)
- Varias pronunciaciones posibles, pero **una sola ortografía correcta**; ante la
  duda, consultar un diccionario médico. Cambiar una letra cambia el significado.
- Homófonos que se escriben distinto: **ileum** (small intestine) vs **ilium** (hip
  bone) — misma pronunciación, distinto significado.
- Sonidos: "si" se escribe **psy-** o **cy-** (psychiatry, cytology); "dis" se
  escribe **dys-** o **dis-** (dyspepsia, dislocation).
- **Abduction** (alejar del plano medio) vs **adduction** (acercar al plano medio)
  — opuestos que suenan casi igual.

### 3.3 Singular and Plural Endings — las diez reglas (reconciliar `ingles-plurals`)
Verifica que `ipl-2` traiga estas diez; completa lo que falte, no dupliques:

| Termina en | Plural | Ejemplo |
|---|---|---|
| -a | -ae | vertebra → vertebrae |
| -ax | -aces | thorax → thoraces |
| -ex / -ix | -ices | appendix → appendices; apex → apices |
| -is | -es | metastasis → metastases; diagnosis → diagnoses |
| -ma | -mata | sarcoma → sarcomata |
| -nx | -nges | phalanx → phalanges; larynx → larynges |
| -on | -a | ganglion → ganglia; phenomenon → phenomena |
| -um | -a | ovum → ova; atrium → atria; bacterium → bacteria |
| -us | -i | nucleus → nuclei; bronchus → bronchi |
| -y | -ies | biopsy → biopsies |

Excepciones (regla inglesa, `ipl-3`): **virus → viruses**, **sinus → sinuses** (no
siguen la regla grecolatina).

**Práctica de la clase** (úsala como reactivos): metastasis→metastases · ovum→ova ·
diverticulum→diverticula · atrium→atria · diagnosis→diagnoses · vertebra→vertebrae.

### 3.4 Confusiones reales (≥25 % del banco de plurales)
1. **-is → es** (no "-ises"): diagnosis→diagnoses, metastasis→metastases.
2. **-um → a** vs **-us → i** vs **-on → a**: ovum→ova, nucleus→nuclei, ganglion→ganglia.
   Es el trío que más se confunde.
3. **-a → ae** vs **-ma → mata**: vertebra→vertebrae pero sarcoma→sarcomata.
4. **-nx → nges** / **-ax → aces** / **-ex/-ix → ices**: phalanx→phalanges,
   thorax→thoraces, appendix→appendices.
5. **Excepciones inglesas**: virus→viruses, sinus→sinuses (NO virus→viri).
6. **ileum vs ilium** (ortografía/significado).
7. **abduction vs adduction** (significado opuesto).

---

## 4. Entregables

### 4.1 Promoción de `ingles-plurals` (`ingles-uad-topics.ts` + `modules.ts`)
- Reescribe el contenido de la sección `ipl-1` **conservando su `id`**: cambia la
  nota "Adelanto — aún no impartido" por `{ type: 'note' }` = *"Impartido en la
  Semana 2, Clase 2 (11 ago). Capítulo 1 de Medical Terminology: A Living
  Language."* No borres ni renumeres secciones.
- Reconcilia `ipl-2` (diez reglas, §3.3) e `ipl-3` (excepciones) con lo verificado;
  completa lo que falte.
- **Mueve `ingles-plurals`** del módulo `ingles-medico-adelanto` al módulo
  `ingles-medico-uad-s2`: en `modules.ts`, `topicIds: ['ingles-word-parts',
  'ingles-plurals']`, y quítalo del array de `ingles-medico-adelanto`. Actualiza el
  `subtitle` del módulo S2: *"Construcción de términos, interpretación y formación
  de plurales."*

### 4.2 Ampliar `ingles-word-parts` (APPEND, no renumerar)
Añade **al final** de sus secciones (ids nuevos consecutivos, p. ej. `iwp-7`,
`iwp-8`):
- **Interpreting medical terms** (§3.1): estrategia de 3 pasos + los 5 ejemplos
  trabajados. Usa un bloque `steps` para los 3 pasos y `table`/`definition` para
  los ejemplos.
- **Pronunciation & Spelling** (§3.2): `note` de "una sola ortografía correcta",
  `comparison` para ileum vs ilium y para abduction vs adduction, `table` para los
  sonidos psy/cy y dys/dis.

### 4.3 Ficha de materia (`plans/uad-medicina.ts`, Semana 2 de ingles)
- `topicIds: ['ingles-word-parts', 'ingles-plurals']`.
- Sigue `estado: 'impartido'`. Actualiza `temas`: Clase 2 (impartida) = plurales,
  interpretación y pronunciación; deja como "por impartir" lo que reste de la Unidad
  (si el temario marca una Clase 3).
- En `content.materiales`, añade:
  ```ts
  { title: 'Semana 2 · Clase 2 — Plurales, interpretación y pronunciación',
    file: 'Semana 2 - Clase 2 Plurales e Interpretacion.pdf', kind: 'Clase' },
  ```

### 4.4 Banco de reactivos
- **Promueve** los reactivos de plurales que estén en `ingles-adelanto-quizzes.ts`
  al banco impartido (`ingles-uad-quizzes.ts` o el que use el spread de `quizzes.ts`
  para Semana 2), con `topicId: 'ingles-plurals'`. Quítalos del banco de adelanto.
- Añade reactivos nuevos de §3.4 (las diez reglas, excepciones, ileum/ilium,
  abduction/adduction) hasta ~12 para `ingles-plurals`, y 4–6 de la estrategia de
  interpretación con `topicId: 'ingles-word-parts'`.
- Rúbrica: distractores que sean otra terminación plural plausible (ovum→ovi como
  distractor de ovum→ova); `explanation` que justifique la correcta y descarte un
  distractor; nada respondible por cognado. `correctIndex` repartido 0–3.

### 4.5 MedEN (`meden-terms.ts`)
- Verifica que los pares singular↔plural de la clase estén con `semana: 2`; a los
  que traigan marca "Adelanto —", quítasela (ya se impartieron). Reporta cuántos.

### 4.6 Biblioteca
Compón el PDF desde las 20 capturas y súbelo a
`library.medcore.icu/ingles-medico-1/` con el nombre de §4.3:

```bash
cd "~/Desktop/UAD/Primer Semestre/Inglés Médico I DEF/Semana 2/Clase 2"
python3 -c "
from PIL import Image; import glob
ims=[Image.open(f).convert('RGB') for f in sorted(glob.glob('*.png'))]
ims[0].save('Semana 2 - Clase 2 Plurales e Interpretacion.pdf', save_all=True, append_images=ims[1:], resolution=150)
print(len(ims),'páginas')"
```

**Muéstrame el comando de subida antes de ejecutarlo.** No commitees PNG ni PDF.

---

## 5. Verificación

```bash
npm run build
grep -c "Adelanto — aún no impartido" src/data/ingles-uad-topics.ts   # 5 (era 6)
grep -n "ingles-plurals" src/data/modules.ts                          # bajo ingles-medico-uad-s2, NO en adelanto
grep -c "topicId: 'ingles-plurals'" src/data/*quizzes*.ts
grep -o "id: '[a-z0-9-]*'" src/data/ingles-uad-quizzes.ts | sort | uniq -d   # vacío
```

Manual (`npm run dev`):

- [ ] `/estudio`: `ingles-plurals` bajo el módulo de **Semana 2**, junto a
      `ingles-word-parts`, sin la nota de adelanto; el resto de adelanto intacto
- [ ] `/topic/ingles-plurals`: abre como impartido, conserva el progreso previo
      (los `sectionId` no cambiaron)
- [ ] `/topic/ingles-word-parts`: las secciones nuevas de interpretación y
      pronunciación aparecen **al final**; las anteriores conservan su `sectionId`
- [ ] `/plan/ingles-medico-1`: Semana 2 lista ambos Topics y el material nuevo
- [ ] Quiz de plurales jugable; los reactivos de adelanto ya no aparecen como tal
- [ ] `/vocabulario?semana=2`: pares singular↔plural sin marca "Adelanto"

**Auto-revisión:** verifica 3 reactivos de plurales contra §3.3 (en especial
-is→es y el trío -um/-us/-on) y 1 de interpretación. Reporta el resultado.

---

## 6. No-objetivos

- No reescribas `ingles-plurals` desde cero: reconcilia campo por campo.
- No renumeres `sectionId` de `ingles-word-parts` ni de ningún Topic (rompe
  `useProgress`); las secciones nuevas van **al final**.
- No promuevas los otros Topics de adelanto (verb-tenses, sentence-structure,
  abbreviations, false-friends, scientific-literature): la Clase 2 no los tocó.
- Los errores del profesor, si aparecen, van como nota de erratas y como
  distractores — nunca como respuesta correcta (regla de materias de idioma).
- No toques Anatomía, PAI, ni Semana 1. No ejecutes `npm run deploy`.

---

## 7. Entrega (commits atómicos)

1. `feat(ingles): promueve plurales de adelanto a impartido (Semana 2 Clase 2)`
2. `feat(ingles): interpretación de términos y pronunciación en word-parts`
3. `feat(quizzes): banco de plurales e interpretación de Semana 2`
4. `feat(plan): Semana 2 de Inglés suma plurales; material de Clase 2`
5. `feat(meden): retira marca de adelanto del vocabulario de plurales`

En el reporte: qué campos de `ingles-plurals` ya estaban vs. cuáles añadiste,
cuántos reactivos y entradas de MedEN perdieron la marca de adelanto, y el resultado
de la auto-revisión.
