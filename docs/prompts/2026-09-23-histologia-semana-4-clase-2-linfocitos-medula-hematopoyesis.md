# PROMPT — MedCore · Histología I · Semana 4 Clase 2 — Linfocitos, hemostasia y médula ósea

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-23.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "el docente dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Semana 4 Clase 2: **linfocitos T/B/NK**, **plaquetas y hemostasia**, y **médula
> ósea / hematopoyesis** (con sus reguladores). Enfoque histológico; la inmunología solo lo
> necesario para entender la función (así lo delimitó el docente).

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript + PDF de reguladores para verificar:
- `…/Histología I y sus Laboratorios DEF/Clases/Semana 4 /Clase 2/Histologia_I_Semana_4_Clase_2_Apuntes.md`
  (+ transcript `# … Week 4 Class 2.md`, + slides PDF y **`Reguladores de la Hemopoyesis.pdf`**
  → biblioteca privada, no al repo).
Ya cargado (S4 C1): `histologia-sangre`, `histologia-leucocitos`; módulo `histologia-uad-s4`.
Enlaza (plaquetas y linfocitos se introdujeron en C1). También enlaza a `histologia-hueso`
(médula) y `histologia-conectivo-celulas` (plasmocito, macrófago).

```bash
cd ~/med-core-app && npm run build
grep -n "histologia-uad-s4\|histologia-sangre\|histologia-leucocitos" src/data/modules.ts | head
grep -o "id: 'his-[a-z0-9]*q" src/data/histologia-quizzes.ts | sort -u
```

---

## 1. New Topics (append a `histologiaTopics`, `colorKey:'histologia'`, `categoria:'Histología'`, `emoji:'🔬'`)
Depth bar; ≥1 `correlacion`. Dos topics:

### 1a. `histologia-linfocitos` — "Linfocitos T, B y NK" (S4 C2, parte 1)
- Panorama: en frotis, el linfocito es célula pequeña, núcleo grande redondo, poco
  citoplasma; **T/B no se distinguen por morfología** (se requieren marcadores). Proporciones
  dentro de los linfocitos: **T 70–80 %**, **B 10–15 %**, **NK** el resto.
- **Linfocitos B** (inmunidad **humoral**): se desarrollan en **médula ósea** (pro‑B→pre‑B→
  inmaduro→maduro); marcadores **CD19/CD20**; al activarse (con coestimulación T) →
  **plasmocito** ("fábrica de anticuerpos") o **célula B de memoria** (base de la
  **vacunación**). Enlaza a `histologia-conectivo-celulas` (plasmocito).
- **Linfocitos T** (inmunidad **celular**): maduran en el **timo** (selección positiva/
  negativa). **CD4+** (colaborador: **citocinas**, "coordina") y **CD8+** (citotóxico:
  **perforinas/granzimas** → apoptosis, "ejecuta"). Reconocimiento vía **TCR + MHC/CMH**
  (**MHC‑II→CD4**, **MHC‑I→CD8**). Memoria T.
- **Células NK** (inmunidad **innata**): citotoxicidad **sin sensibilización previa**
  (perforinas/granzimas); destruyen células infectadas/tumorales.
- Tabla **T CD4 / T CD8 / B / NK** (inmunidad · función · asociación).
- `correlacion` (clinica): **VIH** afecta **CD4+**; **CD4 <200/μL** = criterio de SIDA
  (infecciones oportunistas: candidiasis, *P. jirovecii*). Trasplante: los T reconocen MHC
  del donante → **rechazo**; inmunosupresores (ciclosporina) ↑ riesgo de infección.

### 1b. `histologia-medula-hematopoyesis` — "Plaquetas, hemostasia y médula ósea" (S4 C2, parte 2)
- **Plaquetas — estructura**: **hialómero** (citoesqueleto: actina/miosina/microtúbulos) +
  **granulómero** (gránulos **alfa** = fibrinógeno, vWF; **densos/δ** = ADP, serotonina,
  Ca²⁺; **λ/lisosomales**); sin núcleo pero con actividad metabólica. Origen:
  **megacariocito** (trombopoyesis); regulación por **trombopoyetina (hígado/riñón)**.
- **Hemostasia**: lesión → adhesión (**vWF** une plaqueta ↔ colágeno subendotelial) →
  activación → agregación → **tapón plaquetario primario** → **cascada de coagulación**
  (fibrinógeno→**fibrina**) → coágulo estable. **Enfermedad de von Willebrand** = trastorno
  hemorrágico hereditario más frecuente (sangrado de mucosas). **AAS**: inhibe **COX‑1** →
  ↓ **tromboxano A₂** → **antiagregante** (no anticoagulante).
- **Médula ósea**: **roja** (hematopoyética; esternón, costillas, cráneo, vértebras, pelvis,
  epífisis proximales) vs **amarilla** (grasa/reserva; puede reactivarse). **Sinusoides** =
  salida de células maduras. **Estroma** (reticular, macrófagos, adipocitos) + compartimiento
  hematopoyético. **Islotes eritroblásticos** (macrófago central "niñera"). Celularidad
  **≈ 100 − edad**.
- **Hematopoyesis**: **HSC** (autorrenovación + diferenciación) → **línea mieloide**
  (eritrocitos, plaquetas, neutrófilos, eosinófilos, basófilos, monocitos) y **línea
  linfoide** (B, T, NK). *(El árbol detallado no se exige a ese nivel — dilo así.)*
- **Reguladores** (tabla con los **clave**, no los 16 de memoria): **SCF** (hematopoyesis
  temprana), **GM‑CSF** (granulocitos+macrófagos), **G‑CSF → neutrófilos**, **M‑CSF →
  monocitos/macrófagos**, **IL‑5 → eosinófilos**, **IL‑8 → migración de neutrófilos**. Nota:
  la lista completa de 16 factores está en el PDF de reguladores (referencia, no memorizar).
- `correlacion` (clinica): **leucemia** = neoplasia hematopoyética que ocupa la médula →
  desplaza la producción normal → anemia/neutropenia/trombocitopenia (pancitopenia);
  diagnóstico por **aspirado/biopsia** (cresta ilíaca/esternón). Menciona **anemia**,
  **trombocitopenia** (dengue, <150,000/μL, petequias), **poliglobulia** (hipoxia crónica →
  EPO) y **policitemia vera** (neoplasia mieloproliferativa).

---

## 2. Quiz banks (`histologia-quizzes.ts`) — ~12 c/u
- **`his-linq`** → `histologia-linfocitos`: B=humoral/médula/plasmocito/anticuerpos/memoria;
  T=celular/timo/selección; **CD4 coordina (citocinas)** vs **CD8 destruye (perforina/
  granzima)**; MHC‑II→CD4 / MHC‑I→CD8; NK=innata sin sensibilización; VIH→CD4<200=SIDA;
  T no se distinguen de B por morfología.
- **`his-medq`** → `histologia-medula-hematopoyesis`: plaqueta hialómero/granulómero;
  gránulos α (vWF/fibrinógeno) vs densos (ADP/serotonina/Ca²⁺); trombopoyetina; hemostasia
  (vWF→adhesión; fibrinógeno→fibrina); enfermedad de von Willebrand; AAS=COX‑1/TXA2/
  antiagregante; médula roja vs amarilla; sinusoides; HSC autorrenovación/diferenciación;
  mieloide vs linfoide; G‑CSF→neutrófilos, M‑CSF→monocitos, IL‑5→eosinófilos; leucemia→
  pancitopenia; celularidad≈100−edad.
`explanation` en español; distractores de célula/regulador hermano; `correctIndex` repartido.

---

## 3. Wire it in
- **`modules.ts`** `histologia-uad-s4`: agrega `'histologia-linfocitos'` y
  `'histologia-medula-hematopoyesis'` a `topicIds`; actualiza subtitle para incluir
  linfocitos, hemostasia y médula/hematopoyesis.
- **`plans/uad-medicina.ts`** Histología Semana 4: agrega ambos topicIds; en `temas` marca
  **Clase 2 (impartida)**: linfocitos T/B/NK, plaquetas/hemostasia, médula ósea y
  hematopoyesis (reguladores). Deja pendiente **tejido linfático / órganos linfoides**
  (primarios: médula, timo; secundarios: ganglios, bazo, MALT) para la próxima. Añade
  `materiales` "Semana 4 · Clase 2 — Linfocitos, hemostasia y médula" y (opcional)
  "Reguladores de la hemopoyesis (tabla de referencia)".
- `topics.ts` / `quizzes.ts` ya hacen spread.

---

## 4. Verification
```bash
npm run build
grep -n "histologia-linfocitos\|histologia-medula-hematopoyesis" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "his-linq\|his-medq" src/data/histologia-quizzes.ts
for p in his-linq his-medq; do grep -o "id: '$p-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos desde `histologia-uad-s4` y Plan →
Histología Semana 4; tablas legibles en dark; enlaza a plaquetas/linfocitos de C1 y a
médula de `histologia-hueso`.

**Autoauditoría (Think Again):** apuntes = digest de ChatGPT (+ PDF de reguladores) —
verifica contra la transcripción/un texto: B madura en médula / T en timo; **CD4 coordina /
CD8 cita­tóxico (perforina/granzima)**; MHC‑II→CD4, MHC‑I→CD8; vWF→adhesión; AAS=antiagregante
(COX‑1); G‑CSF→neutrófilos, M‑CSF→monocitos, IL‑5→eosinófilos. No exijas de memoria los 16
reguladores (déjalos como referencia). Reporta conteos y lo no confirmado.

## 5. Non-objectives
- No desarrolles órganos linfoides (próxima clase). No repitas la clasificación básica de
  leucocitos de C1 (enlace). No metas los PDF al repo. No renumeres `sectionId`s. No
  `npm run deploy`.

## 6. Delivery
1. `feat(histologia): Topic linfocitos T, B y NK (S4 C2)`
2. `feat(histologia): Topic plaquetas, hemostasia y médula ósea (S4 C2)`
3. `feat(histologia): bancos his-linq y his-medq`
4. `chore(histologia): Semana 4 Clase 2 en módulo s4 y plan`

Reporta conteos y la autoauditoría.
