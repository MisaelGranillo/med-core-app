# PROMPT — MedCore · Anatomía Humana y Disección I · Semana 2 · Clase 2

> Destinatario: **Claude Code**, repo `~/med-core-app`. Emitido 2026-08-11.
> Idioma: todo en español (contenido, UI, comentarios).
> **Fase 2 de la Semana 2**: añade la **Clase 2 — Miembro superior óseo**. La
> Clase 1 (tórax óseo, `torax-oseo`) **ya está cargada** — no la toques. El
> miembro inferior sigue pendiente (Fase 3).

---

## 0. Antes de escribir una línea

Ya existe el andamiaje de la Semana 2 (commits del tórax). Léelo para copiar el
patrón exacto:

```bash
cd ~/med-core-app
sed -n '1061,1260p' src/data/anatomia-uad-topics.ts   # Topic torax-oseo (patrón a imitar)
sed -n '11,20p'   src/data/modules.ts                  # módulo 'anatomia-uad-s2'
sed -n '128,150p' src/data/plans/uad-medicina.ts       # Semana 2 (estado, topicIds, fuentes)
sed -n '85,110p'  src/data/atlas-topics.ts             # AtlasTopic torax-oseo
grep -n "id: 'tor-q" src/data/anatomia-uad-quizzes.ts | tail -1   # dónde termina el bloque tórax
git log --oneline -6
```

`npm run build` limpio antes de tocar nada. Comprueba colisiones:
`grep -rn "miembro-superior\|'msup-\|'mso-" src/`

---

## 1. Objetivo — qué capa toca qué archivo

| Capa | Archivo | Qué se añade |
|---|---|---|
| Guía de estudio | `src/data/anatomia-uad-topics.ts` | 1 `Topic`: `miembro-superior-oseo` |
| Banco | `src/data/anatomia-uad-quizzes.ts` | ~14 `Question`, prefijo `mso-q` |
| Ficha de materia | `src/data/plans/uad-medicina.ts` | Semana 2 → `topicIds` suma el nuevo; sigue PARCIAL |
| Módulo | `src/data/modules.ts` | `anatomia-uad-s2` → `topicIds` suma el nuevo; actualiza `subtitle` |
| Atlas | `src/data/atlas-topics.ts` (+ `public/atlas/`) | 1 `AtlasTopic` `miembro-superior-oseo`, 8 preguntas |

Reutiliza `colorKey: 'osteologia'`. No crees clave nueva. No renumeres
`sectionId` de ningún Topic (rompe `useProgress`).

---

## 2. Fuentes de verdad

- **Clase (78 capturas):**
  `~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 2/Clase 2/`.
  El contenido verificado está en §4 (transcrito de las capturas). Muchas son la
  misma diapositiva con resaltados progresivos.
- **Libro:** `Moore Anatomía.pdf`, capítulo **Miembro superior** (osteología:
  clavícula, escápula, húmero, radio, cúbito, huesos de la mano). **Offset ya
  verificado: libro = PDF − 24.** Localiza las páginas reales con
  `pdftotext -layout -f <n> -l <m>` y cita **ambas numeraciones** en `fuentes`.
- **Complementario:** `Serie RT Anatomía.pdf`, Quiroz (nomenclatura clásica del
  profesor, útil para el paréntesis).

---

## 3. Regla de terminología (TA principal · clásico entre paréntesis)

Igual que en tórax: **término TA como principal**, clásico del profesor entre
paréntesis la primera vez de cada sección. En los reactivos **el término clásico
cuenta como correcto** (el examen lo califica así). Un `note` por Topic sobre la
coexistencia.

Esta clase es **densa en nombres clásicos**; el mapeo es crítico:

| TA (principal) | Clásico (profesor) |
|---|---|
| Tubérculo mayor del húmero | troquíter |
| Tubérculo menor del húmero | troquín |
| Surco intertubercular | corredera bicipital |
| Epicóndilo medial | epitróclea |
| Epicóndilo lateral | epicóndilo (a secas, del profesor) |
| Cóndilo humeral / capítulo | cóndilo |
| Proceso coracoides | apófisis coracoides |
| Incisura escapular | escotadura coracoidea |
| Incisura espinoglenoidea | escotadura espinoglenoidea |
| Cavidad glenoidea | cavidad glenoidea (igual) |
| Proceso / apófisis estiloides | apófisis estiloides |
| Incisura troclear (cúbito) | escotadura troclear |
| Incisura radial (cúbito) | escotadura radial |
| Incisura ulnar (radio) | escotadura cubital |
| Tubérculo dorsal del radio (de Lister) | tubérculo dorsal |
| Ulna | cúbito |
| Hueso grande | capitate (hueso grande) |
| Hueso ganchoso | ganchoso (apófisis unciforme = gancho) |
| Semilunar / piramidal | lunate / triquetrum |
| Surco del nervio radial | canal del n. radial |
| Tuberosidad deltoidea | tuberosidad deltoides |

> El profesor escribe "troquíter/troquín", "epitróclea", "corredera bicipital",
> "apófisis", "escotadura". Son EXACTAMENTE los términos que caen. TA como
> principal, pero el clásico siempre presente y válido como respuesta.

---

## 4. Contenido verificado de la Clase 2 (miembro superior óseo)

Organiza el Topic en **8 secciones** (`mso-1`…`mso-8`). NO agregues estructuras
que la clase no nombró.

### 4.1 Divisiones del miembro superior
Cintura escapular · brazo · antebrazo · mano. (Sección introductoria breve.)

### 4.2 Cintura escapular
Dos huesos: **clavícula** y **escápula**.

### 4.3 Clavícula
- **1 diáfisis y 2 epífisis** (hueso largo atípico, sin cavidad medular clásica).
- Caras/bordes: anterior, posterior; extremo **lateral (acromial)** y **medial
  (esternal)**.
- Accidentes: **impresión del ligamento costoclavicular** (extremo medial),
  **surco del músculo subclavio** (surco subclavio, cara inferior),
  **tubérculo conoideo** y **línea trapezoide** (extremo lateral, cara inferior).
- Origen/inserciones/ligamentos (la clase mostró el esquema de colores).

### 4.4 Escápula
- **3 bordes y 3 ángulos.**
- **Cara anterior (costal):** fosa subescapular.
- **Cara posterior (dorsal):** espina, acromion, fosa supraespinosa, fosa
  infraespinosa, incisura espinoglenoidea (escotadura espinoglenoidea).
- Otros accidentes: incisura escapular (escotadura coracoidea), proceso coracoides
  (apófisis coracoides), cavidad glenoidea, cuello, tubérculos supraglenoideo e
  infraglenoideo.

### 4.5 Húmero
- **1 diáfisis y 2 epífisis.**
- **Epífisis superior (proximal):** cabeza, cuello anatómico y cuello quirúrgico,
  tubérculo mayor (troquíter) y tubérculo menor (troquín), crestas de ambos
  tubérculos, surco intertubercular (corredera bicipital).
- **Diáfisis:** tuberosidad deltoidea, surco del nervio radial (canal del n.
  radial, posterior).
- **Epífisis inferior (distal):** tróclea y epicóndilo medial (epitróclea),
  cóndilo/capítulo y epicóndilo lateral, crestas supracondíleas interna y externa,
  fosa radial y fosa coronoidea (anteriores), fosa del olécranon (posterior).

### 4.6 Radio (lado lateral del antebrazo, del lado del pulgar)
- **Epífisis superior:** cabeza, cuello, tuberosidad (radial/bicipital).
- **Diáfisis:** bordes interóseo, anterior y posterior; cresta del pronador.
- **Epífisis inferior:** incisura ulnar (escotadura cubital), proceso estiloides,
  tubérculo dorsal (de Lister), superficie articular carpiana.

### 4.7 Cúbito / ulna (lado medial del antebrazo)
- **Epífisis superior (proximal):** olécranon, proceso coronoides (apófisis
  coronoides), incisura troclear y incisura radial (escotaduras), tuberosidad del
  cúbito.
- **Diáfisis:** borde interóseo (anterior y posterior), cresta del supinador.
- **Epífisis inferior (distal):** proceso estiloides, cabeza, circunferencia
  articular.

### 4.8 Huesos de la mano
- **Carpo (8 huesos, 2 filas):**
  - Fila superior/proximal (lateral→medial): **escafoides** (con tubérculo),
    **semilunar**, **piramidal**, **pisiforme**.
  - Fila inferior/distal (lateral→medial): **trapecio** (con tubérculo),
    **trapezoide**, **hueso grande**, **ganchoso** (con apófisis unciforme).
- **Metacarpo:** 5 huesos, se numeran de **lateral a medial** (I = pulgar); cada
  uno con base, cuerpo y cabeza.
- **Falanges:** proximal, media, distal (con tuberosidad ungueal). El pulgar solo
  tiene 2 falanges. Huesos sesamoideos.

### 4.9 Confusiones reales de esta clase (para el ≥25 % del banco)

1. **Troquíter (tubérculo mayor) vs troquín (tubérculo menor)**; entre ellos, la
   corredera bicipital (surco intertubercular).
2. **Epitróclea = epicóndilo medial** vs **epicóndilo (del profesor) = epicóndilo
   lateral**. La trampa clásica.
3. **Cuello anatómico vs cuello quirúrgico** del húmero (el quirúrgico se fractura).
4. **Fosa del olécranon (posterior)** vs **fosas coronoidea y radial (anteriores)**.
5. **Cabeza del radio (proximal)** vs **cabeza del cúbito (distal)** — extremos
   opuestos: es el error más frecuente.
6. **Olécranon (cúbito, proximal)**; **proceso estiloides en radio Y cúbito
   (ambos distales)**.
7. **Incisura ulnar del radio** vs **incisura radial del cúbito** (recíprocas, se
   confunden por el nombre cruzado).
8. **Radio = lateral (pulgar)**, **cúbito = medial** en posición anatómica.
9. **Carpo fila proximal** (escafoides, semilunar, piramidal, pisiforme) vs
   **distal** (trapecio, trapezoide, hueso grande, ganchoso); orden lateral→medial.
10. **Escafoides**: el hueso del carpo que más se fractura (dato clínico).
11. **Metacarpianos se numeran lateral→medial** (I = pulgar), no al revés.
12. Escápula: **fosa supraespinosa vs infraespinosa**; **acromion vs proceso
    coracoides** (ambos anteriores/superiores, se confunden).

---

## 5. Entregables — esquema exacto

### 5.1 Topic `miembro-superior-oseo` (`anatomia-uad-topics.ts`)
- `id: 'miembro-superior-oseo'`, `colorKey: 'osteologia'`.
- `title: 'Miembro superior óseo: cintura escapular, brazo, antebrazo y mano'`,
  `subtitle: 'Clavícula, escápula, húmero, radio, cúbito y huesos de la mano'`.
- **8 secciones** (§4.1–§4.8). `mso-1` abre con el `note` de terminología
  (TA↔clásico, §3). Variedad de `BlockType`: `table` para accidentes por hueso;
  `comparison` para radio vs cúbito, troquíter vs troquín, epitróclea vs
  epicóndilo, fila proximal vs distal del carpo; `list` para las divisiones y las
  filas del carpo; `definition` para olécranon, surco intertubercular, incisura
  troclear.
- `keyTerms`: troquíter, troquín, corredera bicipital, epitróclea, olécranon,
  proceso coracoides, cavidad glenoidea, escafoides, ganchoso, proceso estiloides
  (con clásico entre paréntesis).
- 6–8 `keyPoints` (radio lateral / cúbito medial; cabeza del radio proximal vs
  cabeza del cúbito distal; cuello quirúrgico se fractura; carpo 2 filas de 4;
  metacarpianos I→V lateral→medial; pulgar 2 falanges).

### 5.2 Banco `anatomia-uad-quizzes.ts`
- **~14 reactivos**, prefijo `mso-q`, **añadidos** tras el bloque `tor-q`.
- Orden descendente de valor de estudio, con comentario de cabecera.
- Rúbrica: distractores de otra estructura del mismo hueso o del hueso contrario
  (p. ej. atribuir el olécranon al radio), `explanation` que justifique la correcta
  y descarte un distractor, `correctIndex` repartido 0–3. ≥4 reactivos sobre §4.9.

### 5.3 Ficha de materia (`plans/uad-medicina.ts`, Semana 2)
- `topicIds: ['torax-oseo', 'miembro-superior-oseo']`.
- Sigue **PARCIAL** (`estado: 'impartido'` + comentario: falta el miembro
  inferior). Actualiza la lista de `temas`: marca la Clase 2 como impartida y deja
  el miembro inferior como "por impartir".
- Añade a `fuentes` la del miembro superior de Moore (ambas numeraciones).
- En `content.materiales`, añade:
  ```ts
  { title: 'Semana 2 · Clase 2 — Miembro superior óseo',
    file: 'Semana 2 - Clase 2 Miembro Superior Oseo.pdf', kind: 'Clase' },
  ```

### 5.4 Módulo (`modules.ts`, `anatomia-uad-s2`)
- `topicIds: ['torax-oseo', 'miembro-superior-oseo']`.
- Actualiza `subtitle`: *"Semana 2: tórax óseo y miembro superior. Miembro inferior
  por impartir."*

### 5.5 Atlas `miembro-superior-oseo` (`atlas-topics.ts`)
- `AtlasTopic` con 8 `AtlasQuestion` (`mso-a1`…`mso-a8`) de localización: cabeza
  del húmero, troquíter/troquín, cavidad glenoidea, olécranon, estiloides del
  radio, filas del carpo, metacarpianos, falanges.
- `imagePath: '/atlas/miembro-superior-oseo.png'`. La lámina se genera con el
  prompt hermano `2026-08-11-anatomia-semana-2-clase-2-lamina.md`. Si el PNG aún
  no existe, el Topic no debe romper el build (mismo mecanismo que `torax-oseo`).

### 5.6 Biblioteca
Compón el PDF desde las 78 capturas y súbelo a
`library.medcore.icu/anatomia-humana-diseccion-1/` con el nombre de §5.3:

```bash
cd "~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/Semana 2/Clase 2"
python3 -c "
from PIL import Image; import glob
ims=[Image.open(f).convert('RGB') for f in sorted(glob.glob('*.png'))]
ims[0].save('Semana 2 - Clase 2 Miembro Superior Oseo.pdf', save_all=True, append_images=ims[1:], resolution=150)
print(len(ims),'páginas')"
```

**Muéstrame el comando de subida antes de ejecutarlo.** No commitees PNG ni PDF.

---

## 6. Verificación

```bash
npm run build
grep -c "id: 'mso-q" src/data/anatomia-uad-quizzes.ts          # ≈ 14
grep -o "id: 'mso-[a-z0-9]*'" src/data/atlas-topics.ts | sort | uniq -d   # vacío
grep -n "miembro-superior-oseo" src/data/topics.ts src/data/modules.ts src/data/plans/uad-medicina.ts src/data/atlas-topics.ts
```

Manual (`npm run dev`):

- [ ] `/estudio`: `miembro-superior-oseo` bajo el módulo `anatomia-uad-s2`, junto
      a `torax-oseo`, color `osteologia`
- [ ] `/topic/miembro-superior-oseo`: 8 secciones, `note` de terminología, tablas
      legibles en claro y oscuro (recuerda que `tailwind.config.js` sobrescribe
      `zinc`)
- [ ] `/plan/...anatomia-...-1`: Semana 2 con ambos Topics y ambas fuentes; sigue
      marcada como parcial (miembro inferior pendiente)
- [ ] Quiz `mso-q` jugable; `torax-oseo` intacto
- [ ] Atlas no rompe aunque falte el PNG

**Auto-revisión obligatoria:** verifica 3 reactivos contra §4 — en particular
cabeza del radio (proximal) vs cabeza del cúbito (distal), y epitróclea = epicóndilo
medial. Reporta el resultado.

---

## 7. No-objetivos

- No cargues miembro inferior (no impartido): es la Fase 3.
- No toques `torax-oseo` ni los Topics de Semana 1, Inglés, `pai*`, `unisa-lmgc`.
- No detalles articulaciones ni músculos del hombro (llegan en la Semana 2 Clase 3,
  artrología y miología): esta clase es solo osteología.
- No crees `TopicColorKey` nueva. No renumeres `sectionId`.
- No subas PDF/PNG al repo. No ejecutes `npm run deploy`.

---

## 8. Entrega (commits atómicos)

1. `feat(anatomia): Topic miembro superior óseo (Semana 2 Clase 2)`
2. `feat(quizzes): banco de miembro superior óseo — ~14 reactivos`
3. `feat(plan): Semana 2 suma miembro superior; sigue parcial`
4. `feat(atlas): AtlasTopic miembro superior óseo con 8 preguntas`

En el reporte: páginas reales de Moore (ambas numeraciones), colisiones de `id`, y
el resultado de la auto-revisión.

---

## 9. Fase 3 (pendiente)

Cuando se imparta la Clase de **miembro inferior óseo** (pelvis, fémur, tibia,
peroné, pie), un prompt hermano añadirá `miembro-inferior-oseo` y pasará la Semana 2
a `impartido` completo.
