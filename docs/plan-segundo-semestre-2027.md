# MedCore — cierre del primer semestre y plan para el segundo

Fecha: 23 de noviembre de 2026 · Inicio del segundo semestre: **2 de febrero de 2027**

## 1. Cómo queda el primer semestre

| Contenido | Cantidad |
|---|---|
| Temas (guías de estudio) | 176 |
| Preguntas de quiz | 3 056 (826 de exámenes reales) |
| Láminas del atlas | 74 |
| Fichas de patologías | 88 |
| Módulos | 38 |
| PDFs en la biblioteca | completos (`library:check` sin faltantes) |

**Exámenes integrados.** Los 28 exámenes semanales (7 materias × 4 semanas) ya están en Quizzes:

- Hay un mazo por semana y otro de todo el semestre para cada materia.
- Cada pregunta también entra al quiz de su tema y aparece con la etiqueta «Examen de la Semana N».
- Se descartaron las preguntas «de regalo» y las repetidas.
- Se corrigieron 7 claves que estaban mal en la plataforma: amilosa, aldosas, síntesis de esteroides, curvaturas primarias, *Medical*, *until* y aPTT. Cada una explica qué marcaba el examen y por qué está mal.
- Se agregaron notas a otras 10 que eran ambiguas.
- El importador (`scripts/examenes/`) sirve para los exámenes del segundo semestre.

## 2. Hallazgos de la inspección

Ordenados por impacto en «encontrar la información».

### A. Hay cuatro formas distintas de organizar lo mismo
1. **Plan** organiza por materia. Es la estructura real de la UAD.
2. **Temas** organiza por 15 categorías de contenido: Osteología, Artrología, Miología, «Aparatos y sistemas», Gramática médica, Comunicación clínica, Probabilidad… Una misma materia queda repartida (Anatomía en 4 categorías, Inglés en 3).
3. **Quizzes** organiza por 38 módulos, uno por semana y materia, más los de repaso, en un orden que no sigue al plan.
4. **Inicio** muestra «Mis materias».

Resultado: para llegar a un tema hay que saber en cuál de las cuatro vistas buscarlo.

### B. La navegación tiene 12 íconos sin texto
En escritorio, la barra superior muestra 12 íconos sin etiqueta: Inicio, Plan, Temas, Anatomía, Atlas, Patologías, MedLex, EnLex, Librería, Quizzes, Progreso y Ajustes. Taller aparece en «Más». No se sabe qué es cada uno sin pasar el cursor.

### C. La página de cada materia esconde lo útil
La ficha de Embriología mide unos 7 900 px. Empieza por la ficha administrativa (créditos, horas, descripción), y lo que se usa para estudiar está más abajo: guías, plan semanal, materiales y recursos. Además, no muestra los exámenes, las láminas ni las fichas de patologías de la materia como bloques propios; solo aparecen como enlaces dentro del plan semanal.

### D. El buscador solo busca en temas y preguntas
No encuentra fichas de patologías, láminas del atlas, términos de MedLex o EnLex, ni PDFs de la librería.

### E. Inicio sigue en modo «semestre en curso»
- «Continuar» y «Próximo examen» apuntan a temas de agosto. Por ejemplo, propone «Repaso 2.º parcial de osteología», que ya no tiene sentido.
- No hay un estado «semestre terminado, tiempo de repaso».

### F. Contenido heredado mezclado con el actual
| Contenido | Origen | Dónde aparece |
|---|---|---|
| 7 temas «Aparatos y sistemas» (digestivo, urinario, etc.) | versión inicial de MedCore | Temas y Quizzes |
| Probabilidad y Estadística (3 temas) | adelanto de Epidemiología (3.er semestre) | Temas y Quizzes |
| Inglés «adelanto» y lecturas científicas | adelantos | Temas y Quizzes |
| Plan UNISA/LMGC y archivo PAI (`/estudio/archivo`) | escuela anterior | selector del Plan y rutas de archivo |

Nada está roto, pero todo compite con lo actual en las listas.

### G. Peso de la carga
- Al abrir cualquier tema o quiz se descargan todos los temas (1.4 MB) y todas las preguntas (1.25 MB).
- Con el segundo semestre eso se duplicará. Conviene dividir por materia.

### H. Lo que está bien
- No hay enlaces internos rotos; se verificó con el nuevo script `node scripts/auditar-contenido.mjs`.
- No hay preguntas sin tema ni temas sin preguntas.
- La biblioteca está completa.
- Las 88 fichas pasan su verificación.

## 3. Propuesta: la materia como eje

Una sola forma de organizar: **semestre → materia → semana**. Todo lo demás son vistas de consulta.

### Navegación (5 destinos con texto)
| Destino | Contiene |
|---|---|
| **Inicio** | Qué toca hoy: la semana en curso o, entre semestres, el repaso |
| **Materias** | Las materias del semestre, cada una con su página central |
| **Practicar** | Quizzes por materia, exámenes reales y progreso |
| **Consultar** | Patologías, Atlas, Anatomía 3D, MedLex, EnLex y Librería |
| **Buscar** | Un buscador para todo |

Ajustes, Apoya y Taller pasan al menú de perfil. **Este cambio toca la barra de navegación, así que necesita tu visto bueno.**

### Página central de cada materia
Pestañas en este orden:
1. **Semanas**: lo de cada semana (clases, temas, láminas, fichas, materiales).
2. **Temas**.
3. **Practicar**: quizzes y exámenes.
4. **Atlas y fichas**.
5. **Materiales**.

La ficha oficial UAD se pliega al final.

### Otras piezas
- **Temas y Quizzes** agrupados por materia y semana. Se eliminan las 15 categorías y los 38 módulos como agrupación visible; los módulos siguen existiendo por dentro.
- **Selector de semestre**: «Segundo semestre (en curso)» y «Primer semestre», disponible en Materias, Practicar y Buscar.
- **Buscador único** con resultados agrupados: Temas, Preguntas, Fichas, Atlas, MedLex, EnLex y Librería.
- **Inicio con calendario**: entre semestres muestra «Repaso del primer semestre» y los exámenes; desde el 2 de febrero, la semana en curso.
- **Contenido heredado**: se oculta de las listas, pero las rutas siguen funcionando.

## 4. Segundo semestre (desde el 2 de febrero de 2027)

| Materia | Clave | Qué se puede preparar |
|---|---|---|
| Anatomía Humana y Disección II | AN02008 | Continúa Anatomía I. Reutiliza el visor 3D y las láminas de anatomía. |
| Bioquímica II y su laboratorio | BQ02009 | Metabolismo. Láminas de vías metabólicas. |
| Embriología II | EM02010 | Sistemas. Muchas fichas de malformaciones; continúa las láminas de Embriología I. |
| Histología II y su laboratorio | HS02011 | Órganos. Láminas por aparato, enlazadas con Histología I. |
| Inglés Médico II | IN02012 | Continúa el formato de Inglés I. |
| Neuroanatomía I | NA02013 | **Nueva**. Buena candidata para láminas propias y para el visor 3D. |
| Historia y Filosofía de la Medicina | HF02014 | Mismo estilo que Medicina Humanística: definición → término y ★. |

### Antes del 2 de febrero
1. Crear en `Desktop/UAD/Segundo Semestre/` las carpetas `<Materia> DEF/{Clases, Exámenes, Material de Apoyo, Recursos}`, iguales a las del primer semestre.
2. Cargar en el plan la ficha oficial de cada materia en cuanto tengas los programas: créditos, descripción, competencia, temario y bibliografía. **Hacen falta los PDF de los programas del segundo semestre.**
3. Dividir la carga de temas y preguntas por materia (punto G) antes de que crezca el contenido.

### Durante el semestre (mismo flujo de ahora)
- **Cada clase:**
  - Se leen la transcripción, los apuntes y las diapositivas.
  - Se verifican los datos y se reportan las correcciones.
  - Se escriben el tema y el quiz y se enlazan al plan y la biblioteca.
  - Después: deploy y revisión de atlas y fichas.
- **Cada examen semanal resuelto:** se guarda en `Exámenes/Semana N/` y se importa así:
  ```bash
  node scripts/examenes/temas.mjs /tmp/temas.json
  python3 scripts/examenes/importar.py ~/Desktop/UAD/"Segundo Semestre" /tmp/temas.json scripts/examenes/correcciones-2.json src/data/examenes-2-quizzes.ts --periodo 2
  ```
- **Al cerrar cada bloque de 4 semanas:** correr `node scripts/auditar-contenido.mjs` y `npm run library:check`.

## 5. Fases

| Fase | Cuándo | Qué |
|---|---|---|
| 1. Limpieza | ahora a diciembre | Inicio en modo repaso, ocultar contenido heredado, Temas y Quizzes agrupados por materia |
| 2. Organización | diciembre | Nueva navegación (con tu visto bueno), página central por materia, buscador único, selector de semestre |
| 3. Preparación | enero | Dividir la carga por materia, estructura del segundo semestre y fichas oficiales |
| 4. Operación | desde el 2 de febrero | Flujo semanal de siempre, con exámenes importados por bloque |

## 6. Decisiones pendientes
1. ¿Se aprueba la nueva navegación de 5 destinos?
2. ¿Qué hacer con el contenido heredado: ocultarlo, moverlo a un «Archivo» o borrarlo?
3. ¿Se conserva el plan UNISA/LMGC como seleccionable?
4. ¿Cuándo estarán disponibles los programas del segundo semestre?
