# PROMPT — MedCore · Histología I · Semana 4 Clases 3–4 — Tejido linfoide y biometría hemática

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-29.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "el docente dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Semana 4 Clase 3 (**tejido linfoide**: timo, ganglios, bazo) y Clase 4 (**última
> clase del curso**: interpretación de la **biometría hemática** con 3 casos clínicos).
> Enfoque histológico (arquitectura/microambientes/identificación); la clínica como
> correlación.

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript/PDF para verificar (todo a la biblioteca privada,
no al repo):
- C3: `…/Semana 4 /Clase 3/Histologia_I_Semana_4_Clase_3_Apuntes.md` (+ transcript + slides PDF)
- C4: `…/Semana 4 /Clase 4/# Hematology Biometrics Clinical Case Week 4 Class 4.md`
  (transcript; **sin apuntes de ChatGPT**) + `Biometria Hematica.pdf` + slides PDF.
Ya cargado (S4 C1–C2): `histologia-sangre`, `histologia-leucocitos`, `histologia-linfocitos`,
`histologia-medula-hematopoyesis`; módulo `histologia-uad-s4`. Enlaza (linfocitos T/B/NK y
médula de C2; macrófagos de S3).

```bash
cd ~/med-core-app && npm run build
grep -n "histologia-uad-s4\|histologia-linfocitos\|number: 4" src/data/modules.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'his-[a-z0-9]*q" src/data/histologia-quizzes.ts | sort -u
```

---

## 1. New Topics (append a `histologiaTopics`, `colorKey:'histologia'`, `categoria:'Histología'`, `emoji:'🔬'`)
Depth bar; ≥1 `correlacion`. Tres topics:

### 1a. `histologia-linfoide-primarios` — "Órganos linfoides primarios: timo" (S4 C3, parte 1)
- **Sistema linfoide = microambientes**: linfocito + microambiente + células accesorias +
  señales → respuesta inmunitaria. Clasificación: **primarios/centrales** (médula ósea,
  **timo** — maduración) vs **secundarios/periféricos** (ganglios, bazo, MALT — respuesta).
- Linfocitos (BCR=B, TCR=T; no se distinguen por morfología → inmunohistoquímica) + células
  accesorias (macrófagos, **dendríticas**, presentación de antígeno).
- **Timo — órgano linfoepitelial**: estroma **epitelial** (no reticular). Mediastino
  anterosuperior, **bilobulado**; epitelio del **endodermo faríngeo** (3.ª–8.ª sem);
  **involución** desde la pubertad (~30–40 g) con reemplazo por grasa (sigue funcional).
- **Lobulillo**: cápsula/tabiques; **corteza** (densa, timocitos, "cielo estrellado" por
  macrófagos que fagocitan timocitos apoptóticos; zona subcapsular) y **médula** (más clara,
  **corpúsculos de Hassall** = células epiteliales concéntricas queratinizadas). Células
  epiteliales tímicas (nodrizas, corticales, medulares). **Barrera hematotímica** (protege
  la corteza de antígenos circulantes).
- **Maduración/selección del linfocito T** (★): **selección positiva** (reconoce MHC propio
  con afinidad adecuada → sobrevive) y **selección negativa** (reconoce fuertemente lo propio
  → apoptosis; **evita autoinmunidad**); **>95 % de los timocitos mueren**. **CD4 ↔ MHC‑II**,
  **CD8 ↔ MHC‑I**.
- `correlacion` (clinica): **aplasia/hipoplasia tímica** (contexto DiGeorge) → inmunodeficiencia
  T; **sombra tímica** en radiografía pediátrica; VIH → CD4. Enlaza a `histologia-linfocitos`.

### 1b. `histologia-linfoide-secundarios` — "Ganglios linfáticos y bazo" (S4 C3, parte 2)
- **Ganglio linfático**: encapsulado, arriñonado con **hilio**. Regiones: **corteza**
  (folículos con centros germinales = zona **B**), **paracorteza** (zona **T**, con vénulas
  de endotelio alto), **médula** (cordones y senos medulares). **Vasos aferentes** (varios,
  por la convexidad) → **eferente** (uno, por el hilio). Función: **filtrar la linfa** y
  presentar antígeno; regla ★ **aferentes múltiples / eferente único**.
- **Bazo**: filtra **sangre**; cápsula + trabéculas. **Pulpa blanca** (**PALS** perivascular
  = T, + **folículos** linfoides = B) vs **pulpa roja** (**cordones de Billroth** + **senos
  esplénicos**; elimina eritrocitos senescentes). **MALT** (mención: tejido linfoide de
  mucosas, p. ej. placas de Peyer).
- `correlacion` (clinica): esplenomegalia; el bazo como "cementerio" de eritrocitos;
  linfadenopatía reactiva (paracorteza T en virales, folículos B en bacterianas).

### 1c. `histologia-biometria-hematica` — "Interpretación de la biometría hemática (casos)" (S4 C4)
*(Fuente sin apuntes de ChatGPT: usa el `## Summary` + transcript + `Biometria Hematica.pdf`.)*
- **Principios**: los valores de referencia varían por edad/laboratorio/equipo (vienen junto
  al resultado); la biometría **orienta y confirma, no diagnostica** (primero clínica).
  Rangos clave: **leucocitos 4,500–11,000/μL** (hasta ~15,000 en niños), **plaquetas
  150,000–450,000/μL**. "Leucocitos totales" = granulocitos + agranulocitos → distinguir si
  suben **neutrófilos** o **linfocitos**.
- **Caso 1 — Neumonía bacteriana (niño 5 a)**: leucocitosis (16,400) con **neutrofilia y
  bandas (18 %)**; **cuerpos de Döhle** y **granulaciones tóxicas** = granulopoyesis
  acelerada → orienta a **infección bacteriana**.
- **Caso 2 — Rinitis alérgica**: **IgE elevada + eosinofilia** leve; resto normal (típico de
  alergia no complicada). Contraste: parásitos añadirían leucocitosis.
- **Caso 3 — VIH/SIDA (hombre 34 a)**: **leucopenia + linfopenia** (± monocitosis leve);
  **CD4 <200** y carga viral alta → **SIDA**; tratar antirretroviral + oportunistas.
- `correlacion` (dato, ★): patrón → orientación (neutrofilia→bacteriana; eosinofilia→
  alergia/parásitos; linfopenia+CD4 bajo→VIH). Marca que **orienta**, no diagnostica solo.
  Enlaza a `histologia-leucocitos`/`histologia-linfocitos`. *(Es el cierre del curso.)*

---

## 2. Quiz banks (`histologia-quizzes.ts`) — ~10–12 c/u, ★ los de examen
- **`his-linfpq`** → `histologia-linfoide-primarios`: primarios vs secundarios; timo
  linfoepitelial/endodermo faríngeo; corteza vs médula; **corpúsculos de Hassall**; barrera
  hematotímica; **selección positiva vs negativa** (autoinmunidad); CD4↔MHC‑II/CD8↔MHC‑I;
  involución tímica.
- **`his-linfsq`** → `histologia-linfoide-secundarios`: ganglio (corteza B/paracorteza T/
  médula; **aferentes múltiples/eferente único**); bazo (pulpa blanca PALS‑T + folículos‑B /
  pulpa roja Billroth); MALT; filtra linfa vs sangre.
- **`his-biomq`** → `histologia-biometria-hematica`: rangos (leucos 4.5–11k, plaquetas
  150–450k); orienta no diagnostica; neutrofilia+bandas+Döhle→bacteriana; IgE+eosinofilia→
  alergia; leucopenia/linfopenia/CD4<200→VIH.
`explanation` en español; distractores hermanos; `correctIndex` repartido.

---

## 3. Wire it in (completa Semana 4 y el curso de Histología)
- **`modules.ts`** `histologia-uad-s4`: agrega los 3 topicIds; actualiza subtitle para
  incluir tejido linfoide y biometría hemática.
- **`plans/uad-medicina.ts`** Histología Semana 4 ("Tejidos sanguíneo y linfático"): agrega
  los 3 topicIds; en `temas` marca **Clase 3 (impartida)**: órganos linfoides (timo,
  ganglios, bazo); **Clase 4 (impartida)**: interpretación de la biometría hemática (casos).
  Con esto la Semana 4 queda **completa** (cierre del curso). Añade `materiales` "Semana 4 ·
  Clase 3 — Tejido linfoide" y "Semana 4 · Clase 4 — Biometría hemática (casos)".
- `topics.ts` / `quizzes.ts` ya hacen spread.

---

## 4. Verification
```bash
npm run build
grep -n "histologia-linfoide-primarios\|histologia-linfoide-secundarios\|histologia-biometria-hematica" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "his-linfpq\|his-linfsq\|his-biomq" src/data/histologia-quizzes.ts
for p in his-linfpq his-linfsq his-biomq; do grep -o "id: '$p-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): 3 topics nuevos desde `histologia-uad-s4` y Plan →
Histología Semana 4; tablas legibles en dark; enlazan a linfocitos/leucocitos (C1–C2).

**Autoauditoría (Think Again):** C3 = digest de ChatGPT; C4 = **solo transcript/PDF**, verifica
con más cuidado contra un texto (Ross/Junqueira, hematología): timo linfoepitelial/corpúsculos
de Hassall; selección positiva (sobrevive) vs negativa (apoptosis/autoinmunidad); ganglio
**aferentes múltiples/eferente único**; bazo pulpa blanca (PALS‑T/folículos‑B) vs roja
(Billroth); biometría rangos y patrones. Reporta conteos y lo no confirmado.

## 5. Non-objectives
- No repitas linfocitos T/B/NK de C2 (enlace). No metas los PDF al repo. No renumeres
  `sectionId`s. No `npm run deploy`.

## 6. Delivery
1. `feat(histologia): Topic órganos linfoides primarios — timo (S4 C3)`
2. `feat(histologia): Topic ganglios linfáticos y bazo (S4 C3)`
3. `feat(histologia): Topic interpretación de la biometría hemática (S4 C4)`
4. `feat(histologia): bancos his-linfpq, his-linfsq y his-biomq`
5. `chore(histologia): Semana 4 completa (Clases 3–4) en módulo s4 y plan`

Reporta conteos y la autoauditoría.

> Nota: con esto termina el temario de Histología I. Si Misael quiere, después se puede armar
> un **repaso final ≥30** tipo examen (regla §6c) integrando sangre + linfoide + biometría.
