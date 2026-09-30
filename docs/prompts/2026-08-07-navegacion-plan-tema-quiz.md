# PROMPT — MedCore · Cadena de estudio: Plan → Tema → Quiz

> Destinatario: **Claude Code**, repo `~/med-core-app`.
> Emitido 2026-08-07, después de cargar la Semana 1 de Anatomía.
> Idioma de todo el código, comentarios y cadenas de UI: **español**.
> **Este prompt no añade contenido. Solo conecta el que ya existe.**

---

## 1. El problema, localizado

Los 4 Topics de Anatomía Semana 1 existen y renderizan bien en
`/topic/anatomia-generalidades`, `/topic/huesos-craneo`,
`/topic/huesos-cara-hioides` y `/topic/columna-vertebral`. **Pero son
prácticamente inalcanzables desde la interfaz.**

MedCore tiene **dos sistemas de contenido de estudio en paralelo que no se
conocen entre sí**:

| | Sistema legado | Sistema real |
|---|---|---|
| Datos | `paiModulos` (`src/data/pai.ts`) | `topics` (`src/data/topics.ts`) |
| Rutas | `/estudio`, `/estudio/:slug`, `/estudio/:slug/:temaId` | `/topic/:id` |
| Contenido | 7 módulos de preparación de admisión UNISA | 14 Topics, incluidos los 4 de Anatomía UAD |
| Índice propio | Sí (`/estudio`) | **No existe** |
| Entrada en navbar | Sí, etiquetada "Estudio" | **No** |
| Presencia en Home | Rejilla "Estudio · Guías" + contador del hero | **Ninguna** |

Consecuencia: **todas las superficies de descubrimiento apuntan al sistema
legado.** Verificado en el código:

1. **`src/pages/QuizCatalog.tsx:78`** — `/quiz` es el único lugar de la app donde
   se listan los 4 Topics de Anatomía, y su única acción es
   `to={`/quiz/${t.id}`}`. La superficie donde el alumno los encuentra lo manda
   al examen sin ofrecerle leer primero.
2. **`src/pages/SubjectDetail.tsx`** — `/plan/anatomia-humana-diseccion-1` no
   tiene **ningún** enlace de salida hacia el estudio. Su mecanismo de enlaces
   cruzados es `sistemasDeMateria(subject.tags)`, y el tag de Anatomía I es
   `'anatomia'`, que **no** pertenece a `SISTEMAS_CORPORALES`
   (`src/data/plans/index.ts`). La función devuelve `[]`, `primarySistema` queda
   en `null` y no se renderiza ningún bloque de enlaces. **No es que falte el de
   Topics: no aparece ninguno.** El mismo fallo silencioso afecta a Embriología I
   y a todas las materias con tag `'anatomia'`, `'bioquimica'` o `'ingles'`.
3. **`src/components/Navbar.tsx:21`** — el ítem "Estudio" apunta a `/estudio`,
   que es PAI. La etiqueta promete la materia en curso y entrega preparación de
   admisión.
4. **`src/pages/Home.tsx:19-20, 150-155`** — la rejilla "Estudio · Guías" mapea
   `paiModulos`, y el contador `GUIAS_DISPON` del hero cuenta `paiModulos`. Los
   Topics reales no aparecen en el Home.
5. **`src/pages/Progress.tsx:156,163`** — es la **única** página que enlaza a
   `/topic/:id`, y con el patrón correcto (doble botón *Quiz* + *Estudiar*). Pero
   Progreso es una superficie de repaso, marcada `mobile: false`, oculta en la
   barra inferior. Sirve para revisar lo hecho, no para empezar.

La causa raíz: los Topics se promovieron a sección núcleo (commit `c78443a`) y
después se añadió la capa de planes (`9a020e4`), pero **nadie cableó plan →
tema**. El descubrimiento se quedó viviendo en la arquitectura PAI de la que se
venía.

**Objetivo:** que la cadena `Plan → Semana → Tema → Quiz → Progreso` sea
navegable de principio a fin, sin escribir una URL a mano.

---

## 2. Antes de escribir código

Lee completos: `src/App.tsx`, `src/components/Navbar.tsx`,
`src/pages/QuizCatalog.tsx`, `src/pages/SubjectDetail.tsx`, `src/pages/Home.tsx`,
`src/pages/Progress.tsx`, `src/data/plans/types.ts`, `src/data/plans/index.ts`,
`src/data/modules.ts`, `src/data/pai.ts`.

`npm run build` debe pasar limpio antes de empezar.

**Patrón de referencia:** `src/pages/Progress.tsx:156-168` ya implementa el par
de botones *Quiz* / *Estudiar* con los estilos correctos. Reutilízalo; no
inventes uno nuevo.

---

## 3. Entregables

### 3.1 Esquema — `src/data/plans/types.ts`

Añade enlaces **explícitos**, no derivados de tags:

```ts
export type Subject = {
  // …campos existentes…
  topicIds?: string[]   // Topics de `src/data/topics.ts` que cubren esta materia
}

export type SemanaContent = {
  // …campos existentes…
  topicIds?: string[]   // Topics impartidos en esta semana concreta
}
```

> Se descarta derivarlo de `tags` a propósito. El sistema de tags ya falló en
> silencio con Anatomía I —devolvió lista vacía sin error visible— y ese modo de
> fallo es el peor posible: la página se renderiza correcta y simplemente le
> falta una sección. Un `topicIds` explícito es verificable de un vistazo y
> rompe ruidosamente si un id no existe (§6).

Documenta ambos campos con un comentario que diga que los `id` deben existir en
`topics`, y que la verificación está en §6.

### 3.2 Datos — `src/data/plans/uad-medicina.ts`

En la materia `anatomia-humana-diseccion-1`:

```ts
topicIds: ['anatomia-generalidades', 'huesos-craneo', 'huesos-cara-hioides', 'columna-vertebral'],
```

Y en `content.semanas[0]` (Semana 1), los mismos cuatro.

Semanas 2, 3 y 4: sin `topicIds` todavía — su contenido no se ha impartido. El
campo es opcional justo para eso.

**No inventes `topicIds` para ninguna otra materia.** Bioquímica I, Genética,
Embriología I e Inglés Médico I no tienen Topics propios aún. Una materia sin el
campo simplemente no muestra el bloque.

### 3.3 Índice de temas — `/estudio` pasa a ser el sistema real

Esta es la parte que resuelve la colisión de nombres.

1. **Crea `src/pages/Temas.tsx`** (export `Temas`): índice de todos los `topics`
   agrupados por `modules` (`src/data/modules.ts`), con el mismo criterio de
   agrupación que usa `QuizCatalog`, pero mostrando **para cada tema**:
   - título, subtítulo, emoji y color (`TOPIC_COLORS[topic.colorKey]`)
   - número de secciones y número de reactivos disponibles
   - progreso de lectura desde `useProgress().getSectionsRead(topic.id)`
   - **dos acciones: "Estudiar" → `/topic/:id` y "Quiz" → `/quiz/:id`**
   - Un tema **sin reactivos no oculta la tarjeta**: muestra solo "Estudiar".
     (`QuizCatalog` sí los filtra, y hace bien: es un catálogo de quizzes.)
2. **Reapunta las rutas** en `src/App.tsx`:
   ```tsx
   <Route path="/estudio"        element={<Temas />} />
   <Route path="/estudio/archivo" element={<Estudio />} />          {/* PAI */}
   <Route path="/estudio/archivo/:slug"          element={<EstudioModulo />} />
   <Route path="/estudio/archivo/:slug/:temaId"  element={<EstudioTema />} />
   ```
   Añade `const Temas = named(() => import('./pages/Temas'), 'Temas')` siguiendo
   el patrón `named()` existente.
3. **Preserva los enlaces antiguos.** Ya existe `PaiRedirect` para `/pai/*`.
   Añade un redirect equivalente que mande `/estudio/:slug` y
   `/estudio/:slug/:temaId` a `/estudio/archivo/...` **solo si el slug coincide
   con un `paiModulos[].slug`**; en caso contrario, 404 normal. Sin esto,
   cualquier enlace guardado a `/estudio/bioquimica` se rompe en silencio.
4. **Actualiza los enlaces internos de PAI.** `PAI.tsx`, `PAIModulo.tsx` y
   `PAITema.tsx` navegan a `/estudio/${slug}`. Todos pasan a
   `/estudio/archivo/${slug}`. Búscalos con
   `grep -rn "/estudio/" src/` y no dejes ninguno sin migrar.
5. En `Temas.tsx`, al pie, un enlace discreto: **"Guías de admisión (archivo)"** →
   `/estudio/archivo`. El contenido de Bioquímica y Bioestadística sigue siendo
   útil; solo deja de ocupar el camino principal.

### 3.4 Navbar — `src/components/Navbar.tsx`

Cambia la etiqueta del ítem `/estudio` de `'Estudio'` a **`'Temas'`** y ponlo
`mobile: true`. La barra móvil pasaría a 7 ítems, que es demasiado: baja
`/anatomia` a `mobile: false`. El visor 3D es una herramienta de consulta
puntual; los temas son el uso diario.

Orden móvil resultante: Inicio · Plan · **Temas** · Atlas · MedLex · Quizzes.

> Si al probarlo en un viewport de 375 px los 6 ítems no caben legibles,
> **dilo en el reporte** y propón cuál bajar. No encojas la tipografía por
> debajo de la escala de `tokens.css`.

### 3.5 Ficha de materia — `src/pages/SubjectDetail.tsx`

Dos cosas, y la segunda es un bug preexistente:

**a) Bloque "Guías de estudio".** Si `subject.topicIds` tiene elementos,
renderiza —**por encima** de `temario`, que es referencia, no material de
lectura— una tarjeta por Topic con título, subtítulo, progreso de lectura y el
par de botones *Estudiar* / *Quiz*.

**b) Enlaces cruzados por semana.** En el bloque `content.semanas` que ya existe
(línea ~237), si una semana trae `topicIds`, añade bajo sus `temas` los enlaces a
esos Topics. Así se ve qué leer de **la semana en curso**, sin barrer la lista
completa de la materia. Al llegar a 4 semanas, esta es la diferencia entre útil
e inmanejable.

**c) Arregla el fallo silencioso de `sistemasDeMateria`.** Hoy Anatomía I no
muestra ningún enlace cruzado porque su tag `'anatomia'` no está en
`SISTEMAS_CORPORALES`. Elige **una** salida y déjala documentada:

- Mapear tags de materia a sistemas corporales
  (`'anatomia' → 'musculoesqueletico'`) mediante una tabla explícita en
  `src/data/plans/index.ts`; **o**
- Aceptar que no todas las materias tienen sistema corporal y que el bloque no
  aparezca — pero entonces **añade un comentario** en `sistemasDeMateria`
  explicando que devolver `[]` es un resultado esperado, no un error.

Lo que no es aceptable es dejarlo como está: una función que devuelve vacío por
una discrepancia de vocabulario que nadie declaró.

### 3.6 Catálogo de quizzes — `src/pages/QuizCatalog.tsx`

Sustituye el enlace único de la línea 78 por el par *Estudiar* / *Quiz*, con el
mismo patrón de `Progress.tsx:156-168`. **"Estudiar" va primero**: leer antes de
examinarse es el orden que la app debe sugerir por defecto.

Mantén el filtro que oculta temas sin reactivos: es un catálogo de quizzes y ahí
el filtro es correcto. El índice completo vive en `/estudio`.

### 3.7 Home — `src/pages/Home.tsx`

1. La rejilla **"Estudio · Guías"** pasa a mapear `modules` + `topics` en lugar
   de `paiModulos`. Cada tarjeta: emoji y título del módulo, número de temas,
   navegación a `/estudio`.
2. El contador `GUIAS_DISPON` del hero pasa a contar `topics.length`, y la
   etiqueta de "Guías" a **"Temas"**.
3. En `TOOLS`, sustituye o añade una entrada **"Temas"** → `/estudio`, con
   `desc: '<n> guías de estudio'`.
4. **Bloque nuevo, arriba de las herramientas: "Continuar estudiando".** Del
   módulo cuyos `topicIds` tengan progreso de lectura incompleto, muestra el
   primer Topic sin terminar, con su porcentaje leído y un botón directo. Si no
   hay progreso alguno, muestra el primer Topic del primer módulo.
   Es una tarjeta, no un panel: si al implementarla crece más de lo razonable,
   déjala en su forma mínima y dilo.

---

## 4. Lo que NO debe cambiar

- **No borres ni modifiques el contenido PAI.** Se mueve de ruta, no se toca.
  `src/data/pai.ts`, `src/data/pai-content/**` y las tres páginas siguen
  funcionando bajo `/estudio/archivo`.
- **No toques `src/data/topics.ts` ni los archivos de contenido.** Este prompt es
  de navegación: no se añade, edita ni reordena contenido de estudio.
- **No renumeres `sectionId` ni cambies ningún `id` de Topic.** Están
  persistidos en `useProgress` y en enlaces profundos.
- **No toques `unisa-lmgc.ts` ni `lmgc-modules.ts`.**
- **No añadas dependencias** a `package.json`.
- **No ejecutes `npm run deploy`.**

---

## 5. Verificación automática

```bash
npm run build          # tsc + vite, sin errores ni warnings nuevos
grep -rn "/estudio/" src/ | grep -v "/estudio/archivo"   # → solo el redirect de compatibilidad
```

**Comprobación de integridad de `topicIds`** — escribe un chequeo temporal que
recorra todos los planes y confirme que cada `Subject.topicIds` y cada
`SemanaContent.topicIds` apunta a un `topic.id` existente. Pega su salida en el
reporte. Un id fantasma debe fallar ruidosamente aquí, no renderizar una tarjeta
que no lleva a ningún lado.

## 6. Verificación manual (`npm run dev`)

- [ ] `/estudio` lista los 14 Topics agrupados en 3 módulos, con doble acción
- [ ] `/estudio/archivo` muestra el PAI intacto y sus 7 módulos siguen navegables
- [ ] `/estudio/bioquimica` redirige a `/estudio/archivo/bioquimica`
- [ ] `/pai/bioquimica` sigue redirigiendo correctamente (cadena de dos saltos)
- [ ] `/plan/anatomia-humana-diseccion-1` muestra el bloque **Guías de estudio**
      con los 4 Topics, y la Semana 1 enlaza los suyos
- [ ] `/plan/bioquimica-1` **no** muestra el bloque (no tiene `topicIds`) y no
      rompe nada
- [ ] `/quiz` ofrece *Estudiar* antes que *Quiz* en cada tarjeta
- [ ] Home: la rejilla lista módulos reales, el contador dice **Temas** y
      "Continuar estudiando" apunta a un Topic real
- [ ] Navbar móvil a 375 px: 6 ítems legibles, "Temas" incluido
- [ ] Modo claro **y** oscuro en `/estudio` y en el bloque nuevo de SubjectDetail
- [ ] **Recorrido completo sin escribir una URL:** Inicio → Plan → Anatomía
      Humana y Disección I → Semana 1 → Columna Vertebral → leer una sección →
      Quiz → Progreso. Si en algún salto tienes que teclear la dirección, el
      entregable no está terminado.

---

## 7. Entrega

Commits atómicos:

1. `feat(plan): topicIds explícitos en materia y semana`
2. `feat(temas): índice de temas en /estudio; PAI se archiva en /estudio/archivo`
3. `feat(nav): Temas en la barra principal y móvil`
4. `feat(materia): guías de estudio en la ficha y enlaces por semana`
5. `feat(quiz): acción Estudiar junto a Quiz en el catálogo`
6. `feat(home): rejilla y contadores sobre temas reales + continuar estudiando`
7. `fix(plan): sistemasDeMateria devolvía vacío para tags de materia`

En el reporte final, tres cosas concretas: qué enlaces antiguos podrían haberse
roto y cómo lo comprobaste; si la barra móvil aguantó los 6 ítems; y qué
decisión tomaste en §3.5c y por qué.
