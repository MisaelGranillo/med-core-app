# PROMPT — MedCore · Histología I · Semana 3 Clase 2 — Variedades del tejido conectivo y tejido adiposo

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-17.
> **Prompt language: English. MedCore content stays in Spanish. Passive/impersonal voice
> — never "el docente dijo"; use "se…" / "del examen" (regla de la skill).**
> Carga la Clase 2 de la Semana 3: **variedades del tejido conectivo** (embrionario, laxo,
> denso, reticular) y **tejido adiposo**. Continúa la introducción de la Clase 1.
> *(Fuente sin apuntes de ChatGPT: usa el `## Summary` + `## Transcript`; las diapositivas
> son imágenes sin texto.)*

---

## 0. Sources & current state
- Transcript: `…/Histología I y sus Laboratorios DEF/Clases/Semana 3/Clase 2/# Embryonic and Loose Connective Tissue Week 3 Class 2.md` (`## Summary` detallado + `## Transcript`). Slides PDF (38 pág., imágenes) → biblioteca privada, **no al repo**.
Ya cargado (S3 C1): `histologia-conectivo-matriz` (MEC, fibras, colágenos) y
`histologia-conectivo-celulas`; módulo `histologia-uad-s3`. **Enlaza** (los colágenos y las
células ya están definidos) — no los repitas.

```bash
cd ~/med-core-app && npm run build
grep -n "histologia-conectivo-matriz\|histologia-uad-s3\|Tejido conectivo" src/data/histologia-topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts | head
grep -o "id: 'his-[a-z0-9]*q" src/data/histologia-quizzes.ts | sort -u
```

---

## 1. New Topics (append to `histologiaTopics`, `colorKey:'histologia'`, `categoria:'Histología'`, `emoji:'🔬'`)
Depth bar; ≥1 `correlacion`. Dos topics:

### 1a. `histologia-conectivo-variedades` — "Variedades del tejido conectivo" (S3 C2, parte 1)
- **Embrionario**: **mesenquimatoso** (precursor del laxo) y **mucoso** (**gelatina de
  Wharton**, colágeno I y III, en el **cordón umbilical**).
- **Laxo** (areolar): fibras **sin orientación preferencial**, **muy vascularizado**,
  alberga células inmunes (macrófagos, mastocitos, plasmocitos); **principal sitio de
  respuesta inflamatoria y edema**. Localización: lámina propia, dermis papilar, mesenterio,
  pleura, peritoneo.
- **Denso regular colagenoso**: haces **paralelos**, resistente a la **tracción** —
  tendones, ligamentos, córnea.
- **Denso regular elástico**: disposición "en resorte" — grandes vasos, ligamentos
  amarillos, ligamento suspensorio del pene.
- **Denso irregular**: fibras en **múltiples ángulos**, soporte multidireccional — dermis
  reticular, cápsulas de órganos.
- **Reticular**: **colágeno tipo III** ramificado en malla — ganglios linfáticos, bazo,
  médula ósea, hígado (enlace a `histologia-conectivo-matriz`, colágeno III).
- `correlacion` (clinica): el laxo es donde se acumula líquido → **edema** (p. ej.
  insuficiencia cardíaca) y donde se monta la inflamación (dermatitis de contacto).
- `note` con una tabla comparativa (variedad · fibras/orientación · función · localización).

### 1b. `histologia-tejido-adiposo` — "Tejido adiposo" (S3 C2, parte 2)
- **Unilocular (blanco)**: una gran gota lipídica, núcleo periférico; adulto; reserva.
- **Multilocular (pardo)**: múltiples gotas, **mitocondrias abundantes**, **termogénesis**;
  neonatos y zonas perirrenales.
- **Adipocito como órgano endocrino**: **leptina** (regula el apetito), **adiponectina**
  (mejora la sensibilidad a la insulina); ~**20–25 %** del peso corporal es saludable.
- **Obesidad**: hipertrofia del adipocito, inflamación e hipoxia.
- `correlacion` (clinica): manejo multidisciplinario (dieta, ejercicio de **fuerza**,
  control de **cortisol** y sueño); los análogos de **GLP‑1** (Mounjaro, Wegovy) son
  eficaces pero **requieren ejercicio de fuerza para no perder masa muscular**; seguimiento
  por índice **cintura‑cadera**. *(Contenido clínico de la clase; enfócalo como
  correlación, no como núcleo histológico.)*

---

## 2. Quiz banks (`histologia-quizzes.ts`) — ~10 c/u
- **`his-cvarq`** → `histologia-conectivo-variedades`: mesenquimatoso vs mucoso (gelatina de
  Wharton/cordón umbilical); laxo (sin orientación, vascularizado, edema/inflamación,
  localizaciones); denso regular colagenoso (tendón/ligamento/córnea) vs elástico (grandes
  vasos/ligamentos amarillos); denso irregular (dermis reticular/cápsulas); reticular
  (colágeno III; bazo/ganglio/médula/hígado).
- **`his-adipq`** → `histologia-tejido-adiposo`: unilocular blanco vs multilocular pardo
  (termogénesis/mitocondrias/neonatos); leptina (apetito) vs adiponectina (insulina);
  obesidad (hipertrofia/inflamación); GLP‑1 requiere ejercicio de fuerza.
`explanation` en español; distractores de variedad hermana; `correctIndex` repartido.

---

## 3. Wire it in
- **`modules.ts`** `histologia-uad-s3`: agrega `'histologia-conectivo-variedades'` y
  `'histologia-tejido-adiposo'` a `topicIds`; actualiza subtitle para incluir variedades y
  adiposo.
- **`plans/uad-medicina.ts`** Histología Semana 3 ("Tejido conectivo"): agrega ambos
  topicIds; en `temas` marca **Clase 2 (impartida)**: variedades (laxo, denso regular/
  irregular, reticular) y tejido adiposo. Deja **pendiente** lo anunciado: **tejido óseo y
  cartilaginoso** (próxima clase). Añade `materiales` "Semana 3 · Clase 2 — Variedades del
  conectivo y adiposo". Nota: martes de Histología cancelado + feriado del 16.
- `topics.ts` / `quizzes.ts` ya hacen spread de los arrays de histología.

---

## 4. Verification
```bash
npm run build
grep -n "histologia-conectivo-variedades\|histologia-tejido-adiposo" src/data/modules.ts src/data/plans/uad-medicina.ts
grep -c "his-cvarq\|his-adipq" src/data/histologia-quizzes.ts
for p in his-cvarq his-adipq; do grep -o "id: '$p-q[0-9]*'" src/data/histologia-quizzes.ts | sort | uniq -d; done  # empty
```
Manual (`npm run dev`, claro+oscuro): dos topics nuevos accesibles desde `histologia-uad-s3`
y Plan → Histología Semana 3; tablas legibles en dark; reticular enlaza a colágeno III
(Clase 1) sin duplicar.

**Autoauditoría (Think Again):** la fuente es transcript (sin apuntes) — verifica contra la
transcripción/un texto de histología (Ross/Junqueira): gelatina de Wharton = conectivo
mucoso del cordón umbilical; laxo = sitio de edema/inflamación; denso regular colagenoso =
tendones/ligamentos; reticular = colágeno III (bazo/ganglio/médula); pardo = termogénesis
por mitocondrias. Reporta conteos y lo no confirmado.

## 5. Non-objectives
- No repitas colágenos/células ya en la Clase 1 (recap + enlace). No desarrolles hueso/
  cartílago (próxima clase). No renumeres `sectionId`s. No imágenes al repo/Atlas. No
  `npm run deploy`.

## 6. Delivery
1. `feat(histologia): Topic variedades del tejido conectivo (S3 C2)`
2. `feat(histologia): Topic tejido adiposo (S3 C2)`
3. `feat(histologia): bancos his-cvarq y his-adipq`
4. `chore(histologia): Semana 3 Clase 2 en módulo y plan`

Reporta conteos y la autoauditoría.
