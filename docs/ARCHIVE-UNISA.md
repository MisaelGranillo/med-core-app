# Archivo — Build UNISA / LMGC / PAI

## Qué fue MedCore

MedCore nació como plataforma de estudio personal orientada a la admisión y
cursado de la **LMGC** (Licenciatura en Medicina General y Comunitaria) de la
**Universidad de la Salud (UNISA)**, CDMX. Incluía:

- El **PAI** (Programa de Apoyo al Ingreso): 9 módulos de preparación para el
  examen de admisión UNISA (perfil de egreso, salud pública, bioquímica,
  aparatos y sistemas, comprensión de lectura, inglés, matemáticas,
  investigación, diversidad).
- El **plan LMGC**: 37 módulos en 6 años (`lmgc-modules.ts`).
- Secciones núcleo: visor anatómico 2D/3D, Atlas, MedLex (terminología),
  Quizzes, Topics, Progreso, Búsqueda.

## Por qué se congeló

No se obtuvo la admisión a UNISA. El autor se inscribe en **UAD (Universidad
Autónoma de Durango), Medicina, Modalidad Mixta-Virtual, RVOE Federal 20261019,
14 periodos / 7 años**.

MedCore **no** se convirtió en una app UAD-only: se reposicionó como plataforma
de estudio médico agnóstica a la escuela, con el plan de estudios como **capa
enchufable** (UAD activo, LMGC seleccionable). Ver [README](../README.md).

## Dónde vive el archivo

El build UNISA/LMGC/PAI final quedó congelado como referencias de git (no como
carpeta `_legacy/`). Se recuperan en cualquier momento:

| Referencia | Valor | Recuperar |
|---|---|---|
| Tag | `v1.0-unisa-lmgc` | `git checkout v1.0-unisa-lmgc` |
| Rama | `archive/unisa-lmgc` | `git checkout archive/unisa-lmgc` |
| Remoto | `github.com/MisaelGranillo/med-core-app` | ambas ref pusheadas |

## Regla de clasificación

Ningún activo se congeló por su **nombre** u origen UNISA. Se clasificó en dos
ejes independientes: (a) ¿algo lo importa todavía? y (b) ¿su *contenido*
transfiere a UAD o al estudio médico general? La mayoría de `pai-content/*`
llevaba etiqueta de admisión pero contenía Bioquímica, Salud Pública, Inglés
Médico e Investigación — materias UAD reales.

---

## Harvest ledger

### Cosechado → build UAD / núcleo (activo)

| Activo | Destino / reorientación |
|---|---|
| `data/plans/uad-medicina.ts` | **Nuevo.** Plan UAD, 14 periodos, labels verbatim + SOURCE NOTE |
| `data/plans/unisa-lmgc.ts` | **Nuevo.** Adaptador de `lmgc-modules.ts` al esquema `Plan` |
| `lmgc-modules.ts` | **Conservado** (lo consume solo el adaptador LMGC) |
| `pages/Plan.tsx`, `pages/SubjectDetail.tsx` | Renderizador de plan (ex `Modulos.tsx` / `ModuloDetail.tsx`) |
| `pai-content/bioquimica.ts` | Bioquímica I y II (1º–2º) |
| `pai-content/salud-publica.ts` | Salud Pública (4º) · Epidemiología y Bioestadística (3º) |
| `pai-content/aparatos.ts` | Anatomía y Disección I–II · Fisiología I–II |
| `pai-content/ingles.ts` | Inglés Médico I–III (1º–3º) |
| `pai-content/investigacion.ts` | Metodología de la Investigación (4º) · MBE (5º) |
| `pai-content/lectura.ts` | "Comprensión y Redacción" — habilidades de estudio agnósticas |
| `pai-content/matematicas.ts` | **Recortado** a estadística → "Bioestadística" (Epidemiología y Bioestadística 3º) |
| Quizzes de anatomía (7 sistemas) en `quizzes.ts` | Conservados — anatomía/fisiología universal |
| Quizzes de estadística (`estadDesc`, `estadInf`, `probabilidad`) | Conservados → Bioestadística (`new-quizzes.ts`) |
| `bioestadistica-topics.ts` | **Nuevo** (ex `math-topics.ts`, solo temas de estadística) |
| Hub Anatomía 2D + 3D, `QuizCatalog`, `NotFound`, deep-link MedLex | Secciones núcleo promovidas (Fase 4) |

### Congelado → recuperable solo desde el tag/rama

| Activo | Motivo |
|---|---|
| `pages/Modulos.tsx`, `pages/ModuloDetail.tsx` | Reemplazados por `Plan.tsx` / `SubjectDetail.tsx` |
| `pai-content/perfil-de-egreso.ts` | Perfil de egreso LMGC — framing de admisión, sin transferencia |
| `pai-content/diversidad.ts` | Módulo de admisión UNISA — sin transferencia |
| Andamiaje UNISA en `pai.ts` | `unisa_url` por módulo, `UNISA_CURSO_URL`, copy "programa oficial de ingreso" |
| Temas de Aritmética y Álgebra en `pai-content/matematicas.ts` | Matemáticas de admisión sin equivalente UAD |
| `lectura-topics.ts` | Temas de lenguaje (comunicación, lectoescritura, gramática, redacción, lenguaje) |
| Quizzes de Aritmética y Álgebra en `new-quizzes.ts` | Matemáticas de admisión |
| Quizzes de lenguaje (comunicación, lectoescritura, gramática, redacción, lenguaje) | Verbal de admisión |
| `data/utils.ts` | Huérfano real (0 importadores) — utilidades de calidad de datos MedLex |

> **Decisión del usuario (Fase 3):** congelar los quizzes/temas de matemáticas
> (aritmética/álgebra) y de lenguaje como específicos de admisión. La
> estadística sí transfiere a Bioestadística. La distinción de `lectura.ts`
> (habilidades de estudio, conservado) vs. los quizzes de lenguaje (congelados)
> es deliberada.

### Redirecciones (no se rompe ningún enlace)

| Legacy | Nuevo |
|---|---|
| `/modulos`, `/lmgc` | `/plan` |
| `/modulos/:id` | `/plan/:id` (minúsculas) |
| `/pai`, `/pai/:slug`, `/pai/:slug/:temaId` | `/estudio/...` |
| `/anatomia-3d` | alias del hub `/anatomia` (pestaña 3D) |
