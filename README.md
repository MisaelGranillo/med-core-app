# MedCore

Plataforma de estudio médico agnóstica a la escuela: **Anatomía 2D/3D · Atlas ·
MedLex (terminología) · Quizzes**, más una **capa de planes de estudio
enchufable** (UAD Medicina como plan activo; UNISA/LMGC seleccionable).

Todas las cadenas de interfaz y comentarios de código están en **español**.

Stack: Vite · React · TypeScript · react-router-dom · Zustand · Framer Motion ·
React Three Fiber (three.js) · Phosphor Icons · Fuse.js.

## Filosofía de arquitectura

- **Las secciones núcleo son el producto** y funcionan **sin ningún plan
  cargado**: Anatomía (2D + 3D), Atlas, MedLex, Quizzes, Topics, Progreso,
  Búsqueda. Son permanentes y nunca están anidadas ni condicionadas a que haya
  un plan seleccionado.
- **El plan de estudios es una capa enchufable**, no la columna vertebral. UAD
  es el plan activo; LMGC se conserva como plan seleccionable.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo (Vite, puerto 5173)
npm run build    # tsc + vite build
npm run preview  # sirve el build de producción
npm run deploy   # build + wrangler pages deploy (Cloudflare)
```

## Estructura

```
src/
  pages/            # rutas (Home, Anatomy hub, Plan, SubjectDetail, QuizCatalog, …)
  components/       # Navbar, visores, tarjetas, bloques
  data/
    plans/          # capa de planes enchufable (types, uad-medicina, unisa-lmgc, index)
    pai-content/    # guías de estudio por tema (carga diferida vía usePaiContent)
    topics.ts       # temas de estudio + quizzes (anatomía + bioestadística)
    medlex-terms.ts # terminología grecolatina (MedLex)
    anatomy*.ts     # datos de los visores 2D/3D
  store/            # estado persistido (zustand): progreso, plan seleccionado, atlas
  hooks/            # usePaiContent (carga diferida por slug)
```

## Cómo agregar un plan de estudios

1. Crea `src/data/plans/mi-plan.ts` que exporte un objeto `Plan`
   (ver el esquema en [`plans/types.ts`](src/data/plans/types.ts)):

   ```ts
   import type { Plan } from './types'

   export const miPlan: Plan = {
     id: 'mi-escuela-medicina',
     school: 'Nombre Completo de la Escuela',
     schoolShort: 'SIGLA',
     degree: 'Medicina',
     durationLabel: '7 años',
     periodLabel: 'Semestre',
     periods: [
       { index: 1, label: 'Primer Semestre', subjects: [
         { id: 'anatomia-1', name: 'Anatomía I', hasLab: true, tags: ['anatomia'] },
       ]},
       // …
     ],
   }
   ```

2. Regístralo en [`plans/index.ts`](src/data/plans/index.ts): impórtalo y
   añádelo al array `plans`. (Opcional) cambia `activePlanId` si debe ser el
   plan por defecto.

Notas:
- Los `id` de materia son slugs estables (clave de enlace profundo
  `/plan/:subjectId`); no los cambies aunque corrijas un nombre.
- Un `tag` de materia que sea un sistema corporal
  (`cardiovascular`, `nervioso`, `respiratorio`, `digestivo`, `urinario`,
  `endocrino`, `musculoesqueletico`, `tegumentario`) genera enlaces cruzados
  automáticos al visor 3D y a la terminología MedLex en el detalle de materia.
- El selector de plan cambia entre planes en `/plan` y persiste la elección.

## El build archivado (UNISA / LMGC / PAI)

MedCore fue originalmente una app de admisión/cursado UNISA. Ese build quedó
congelado como referencias de git (tag `v1.0-unisa-lmgc` y rama
`archive/unisa-lmgc`). El contexto completo y el *harvest ledger* (qué se
cosechó a UAD/núcleo vs. qué se congeló) están en
[`docs/ARCHIVE-UNISA.md`](docs/ARCHIVE-UNISA.md).

```bash
git checkout v1.0-unisa-lmgc   # o: git checkout archive/unisa-lmgc
```

## Atribuciones

- Terminología: **MedLex** — ENP UNAM, Paula Abramo Tostado (CC BY-SA 4.0).
- Modelos anatómicos 3D: **Open 3D Model** (CC BY-SA 4.0).
