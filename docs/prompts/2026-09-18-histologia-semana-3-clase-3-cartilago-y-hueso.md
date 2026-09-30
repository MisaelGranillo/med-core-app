# PROMPT — MedCore · Histología I · Semana 3 Clase 3 — Tejido cartilaginoso y tejido óseo

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-18.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "el docente dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Clase 3 de la Semana 3: **cartílago** y **hueso** (conectivos especializados).
> Cierra el bloque de tejido conectivo; la sangre es de la próxima semana.

---

## 0. Sources & current state
Primary = ChatGPT study notes; transcript + 2 pptx (TEJ CARTILAG / Tejido Oseo) para
verificar:
- `…/Histología I y sus Laboratorios DEF/Clases/Semana 3/Clase 3/Histologia_I_Semana_3_Clase_3_Apuntes.md`
  (+ transcript `# … Week 3 Class 3.md`; pptx a la biblioteca privada, **no al repo**).
Ya cargado (S3 C1–C2): `histologia-conectivo-matriz` (colágenos), `-celulas`,
`-variedades`, `histologia-tejido-adiposo`; módulo `histologia-uad-s3` (4 topicIds).
**Enlaza** (colágeno I/II/III ya definidos; el reticular en variedades) — no repitas.

```bash
cd ~/med-core-app && npm run build
grep -n "histologia-uad-s3\|Tejido conectivo" src/data/modules.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'his-[a-z0-9]*q" src/data/histologia-quizzes.ts | sort -u
```

---

## 1. New Topics (append to `histologiaTopics`, `colorKey:'histologia'`, `categoria:'Histología'`, `emoji:'🔬'`)
Depth bar; ≥1 `correlacion`. Dos topics grandes:

### 1a. `histologia-cartilago` — "Tejido cartilaginoso" (S3 C3, parte 1)
- **Definición**: conectivo especializado, deriva del **mesodermo**; matriz **semisólida**;
  **avascular, aneural y alinfático**; se nutre por **difusión**. Funciones: sostén,
  armazón flexible, amortiguación, protección.
- **Matriz**: componente forme (fibras) + amorfo (**GAG**: condroitín sulfato, queratán
  sulfato, ácido hialurónico; **proteoglucanos** retienen agua → **70–80 % del peso es
  agua**); **condronectina** une fibras ↔ células.
- **Células** (línea): **condrógena** (progenitora, pericondrio) → **condroblasto** (produce
  matriz) → **condrocito** (maduro, en **lagunas**).
- **Pericondrio**: capa **fibrosa** (colágeno I, fibroblastos) + capa **condrogénica**;
  nutrición, crecimiento, reparación. **Excepción: el fibrocartílago y el cartílago
  articular carecen de pericondrio** (el articular se nutre del **líquido sinovial** por
  ciclos de compresión‑descompresión).
- **Crecimiento**: **intersticial** (desde dentro, condrocitos que se dividen) vs
  **aposicional** (desde el pericondrio/superficie).
- **Tipos** (tabla comparativa): **hialino** (el más abundante; **colágeno II**; matriz
  homogénea/vítrea; **grupos isógenos**; matriz territorial basófila; articulaciones,
  tráquea, costillas, esqueleto fetal), **elástico** (fibras elásticas; flexible; **sí**
  pericondrio; oreja, epiglotis, trompa de Eustaquio), **fibrocartílago** (**colágeno I**;
  condrocitos **en hileras**; **sin pericondrio**; resiste tracción + compresión; discos
  intervertebrales, meniscos, sínfisis del pubis).
- **Placa epifisaria** (crecimiento longitudinal): 5 zonas — **reserva → proliferación
  (columnas) → hipertrofia → calcificación → formación ósea**. Importancia radiológica:
  normal en niños, se cierra en la maduración.
- `correlacion` (clinica): el cartílago se regenera lento por ser avascular; daño del
  pericondrio → necrosis. **Osificación endocondral**: cartílago hialino → hueso (enlaza a
  `histologia-hueso`).
- `note` de **identificación**: condrocitos en lagunas → ¿matriz homogénea + grupos
  isógenos? hialino · ¿fibras elásticas + condrocitos grandes? elástico · ¿mucho colágeno +
  hileras + sin pericondrio? fibrocartílago. Integración **tráquea** (epitelio
  pseudoestratificado ciliado + glándulas submucosas + cartílago hialino).

### 1b. `histologia-hueso` — "Tejido óseo" (S3 C3, parte 2)
- **Definición**: conectivo especializado con **matriz mineralizada** → dureza +
  resistencia; vivo, vascularizado, inervado, en **remodelación**; ~14 % del peso corporal.
- **Matriz**: **inorgánica ≈65–70 %** dominada por **hidroxiapatita Ca₁₀(PO₄)₆(OH)₂**
  (dureza/compresión) + **orgánica ≈30–35 %**, ~90 % **colágeno tipo I** (flexibilidad/
  tensión) + osteonectina, osteocalcina, osteopontina, decorina. *(⚠️ ver §3: hay una
  discrepancia 70/30 oral vs 65/35 de la diapositiva — regístralo como rango, no como dato
  único.)*
- **Cubiertas**: **periostio** (externo; capa fibrosa con **fibras de Sharpey** que anclan;
  capa osteogénica/cambial con osteoprogenitoras/osteoblastos; muy inervado → **dolor
  óseo**) y **endostio** (interno; recubre cavidad medular y canales; sitio de
  **remodelación**).
- **Compacto vs esponjoso** (tabla): compacto = **osteonas** (diáfisis); esponjoso =
  **trabéculas** + médula (epífisis, vértebras, planos); las trabéculas siguen las líneas
  de fuerza (**ley de Wolff**).
- **Osteona (sistema de Havers)**: **línea de cemento** → **laminillas concéntricas (8–15)**
  → **lagunas con osteocitos** → **canalículos** → **canal de Havers** (central,
  **longitudinal**, vasos/nervios). **Canales de Volkmann**: **transversales**, conectan
  canales de Havers entre sí y con periostio/endostio. **★ Havers (longitudinal/central)
  vs Volkmann (transversal) — muy preguntado.**
- **Hueso primario** (inmaduro, colágeno irregular, transitorio) **vs secundario** (maduro,
  laminar).
- **Células** (tabla): **osteoprogenitora** (periostio/endostio) → **osteoblasto** (forma
  **osteoide**, colágeno I; RER/Golgi) → **osteocito** (atrapado en **laguna**,
  prolongaciones en canalículos, **mecanorreceptor**); **osteoclasto** (grande,
  **multinucleado**, línea **monocito/macrófago**, **reabsorbe** — laguna de Howship,
  catepsina K). ★ "el cuerpo del osteocito está en la **laguna**"; "canalículos = comunican
  osteocitos".
- **Osificación**: **intramembranosa** (mesénquima → hueso; cráneo, mandíbula, clavícula)
  vs **endocondral** (molde de cartílago → hueso; huesos largos, crecimiento longitudinal,
  reparación de fracturas). ★
- **Remodelación (ciclo ARF + inversión)**: Activación (osteocitos; **RANKL, M‑CSF**) →
  Reabsorción (osteoclastos) → Inversión (macrófagos; TGF‑β, IGF‑1) → Formación
  (osteoblastos). Equilibrio formación ≈ reabsorción; si predomina reabsorción →
  **osteoporosis** (T‑score ≤ −2.5); si formación → osteopetrosis.
- **Regulación**: **PTH** (↑ osteoclastos, moviliza calcio), **calcitonina** (↓
  osteoclastos), **vitamina D** (absorción de calcio/fósforo, mineralización; déficit →
  **raquitismo** en niños, **osteomalacia** en adultos).
- `correlacion` (clinica) — **reparación de fractura** (4 fases): hematoma (0–48 h) → callo
  blando (**fibrocartílago**) → callo duro (**osificación endocondral**, hueso primario,
  2–6 sem) → remodelación (hueso secundario). Incluye el **caso pediátrico** de la clase
  (niño 8 años, fractura de fémur): la osificación inicial del callo es **endocondral**; el
  déficit de **vitamina D** altera la mineralización.

Marca ★ los puntos que la clase señaló como examen: Havers vs Volkmann; osteocito en
laguna; función de canalículos; osificación intramembranosa vs endocondral; célula
multinucleada = osteoclasto; placa de crecimiento = crecimiento longitudinal.

---

## 2. Quiz banks (`histologia-quizzes.ts`) — ~12 c/u
- **`his-cartq`** → `histologia-cartilago`: mesodermo/avascular/difusión; condrógena→
  condroblasto→condrocito; lagunas; pericondrio (capas; excepción fibrocartílago/articular);
  intersticial vs aposicional; hialino (colágeno II, grupos isógenos, más abundante) vs
  elástico (fibras elásticas, oreja/epiglotis) vs fibrocartílago (colágeno I, hileras, sin
  pericondrio, meniscos/discos); placa epifisaria (5 zonas); tráquea (integración).
- **`his-huesoq`** → `histologia-hueso`: matriz mineralizada/hidroxiapatita + colágeno I;
  periostio (Sharpey) vs endostio; compacto (osteona) vs esponjoso (trabéculas/Wolff);
  osteona (Havers longitudinal vs Volkmann transversal ★); osteocito en laguna/canalículos;
  osteoblasto forma osteoide / osteoclasto multinucleado reabsorbe; intramembranosa
  (cráneo/clavícula) vs endocondral (huesos largos); ciclo ARF; PTH vs calcitonina; vit D
  (raquitismo/osteomalacia); fases de reparación de fractura (callo blando = fibrocartílago).
`explanation` en español; distractores del tejido/célula hermano; `correctIndex` repartido;
marca ★ los ítems de examen señalados.

---

## 3. ⚠️ Discrepancias de fuente (Think Again)
- **Composición de la matriz ósea**: la explicación oral dijo **70/30** (inorgánico/
  orgánico); la diapositiva muestra **65/35**. Regístralo como **≈65–70 % inorgánico /
  30–35 % orgánico** (no un único número); la idea fija es hidroxiapatita (inorgánico) +
  colágeno I (orgánico, ~90 % de la fracción orgánica).
- **Gelatina de Wharton** (repaso de C2): es **colágeno I y III** (la mención oral a "I y
  II" fue error de transcripción). Solo verifica que `histologia-conectivo-variedades` diga
  I y III; si dice otra cosa, corrígelo.

---

## 4. Wire it in
- **`modules.ts`** `histologia-uad-s3`: agrega `'histologia-cartilago'` y
  `'histologia-hueso'` a `topicIds`; actualiza title/subtitle a algo como "Histología:
  tejido conectivo y conectivos especializados" incluyendo cartílago y hueso.
- **`plans/uad-medicina.ts`** Histología Semana 3: agrega ambos topicIds; en `temas` marca
  **Clase 3 (impartida)**: tejido cartilaginoso (hialino/elástico/fibrocartílago, placa de
  crecimiento) y tejido óseo (osteona, células, osificación, remodelación, fracturas). Deja
  pendiente **tejido sanguíneo** (próxima semana). Añade `materiales` "Semana 3 · Clase 3 —
  Cartílago y hueso". Nota de calendario: semana corta (feriado 16‑sep + martes cancelado).
- `topics.ts` / `quizzes.ts` ya hacen spread de los arrays de histología.

---

## 5. Verification
```bash
npm run build
grep -n "histologia-cartilago\|histologia-hueso" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "his-cartq\|his-huesoq" src/data/histologia-quizzes.ts
for p in his-cartq his-huesoq; do grep -o "id: '$p-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos accesibles desde `histologia-uad-s3`
y Plan → Histología Semana 3; tablas (tipos de cartílago, compacto vs esponjoso, células
óseas, osificaciones, fractura) legibles en dark; ★ visibles; enlaza a los colágenos de C1.

**Autoauditoría (Think Again):** verifica contra la transcripción/un texto de histología
(Ross/Junqueira): hialino = colágeno II / fibrocartílago = colágeno I; fibrocartílago sin
pericondrio; **Havers longitudinal vs Volkmann transversal**; osteocito en laguna;
osteoclasto multinuclear de línea monocítica; intramembranosa (cráneo) vs endocondral
(huesos largos); callo blando = fibrocartílago. Resuelve la discrepancia 65–70/30–35 como
rango. Reporta conteos y lo no confirmado.

## 6. Non-objectives
- No repitas colágenos/variedades de C1–C2 (recap + enlace). No desarrolles tejido
  sanguíneo (próxima semana). No metas pptx/imágenes al repo/Atlas. No renumeres
  `sectionId`s. No `npm run deploy`.

## 7. Delivery
1. `feat(histologia): Topic tejido cartilaginoso (S3 C3)`
2. `feat(histologia): Topic tejido óseo (S3 C3)`
3. `feat(histologia): bancos his-cartq y his-huesoq (★)`
4. `chore(histologia): Semana 3 Clase 3 en módulo y plan`

Reporta conteos y la autoauditoría (incluida la discrepancia de composición ósea).
