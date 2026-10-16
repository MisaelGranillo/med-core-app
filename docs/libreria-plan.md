# Librería — plan (construida 2026-10-15: `src/data/libreria.ts` + `src/pages/Libreria.tsx`)

Sección nueva `/libreria` con todos los libros PDF: los de `~/Desktop/UAD/Libros` y los libros de la bibliografía de cada materia. Organizada con la **Clasificación de la National Library of Medicine (NLM)**, la que usan las bibliotecas médicas: clase + número + marca de autor (tabla Cutter de la LC) + año, mostrada como etiqueta de lomo.

## Inventario (verificado 2026-10-15)

### Nuevos (carpeta Libros, subir a R2 `privado/libreria/` — tienen copyright)

| Libro | Págs | NLM |
|---|---|---|
| Gartner, Hiatt — Serie RT Biología celular e histología, 7.ª ed. | 434 | QS 504 |
| Dudek — Serie RT Embriología, 6.ª ed. | 325 | QS 604 |
| Gould, Fix — Serie RT Neuroanatomía, 5.ª ed. | 386 | WL 101 |
| Costanzo — Serie RT Fisiología, 7.ª ed. | 478 | QT 18.2 |
| Rosenfeld — Serie RT Farmacología, 6.ª ed. | 461 | QV 18.2 |
| Catálogo de instrumental Aesculap (`INSTRUMENTAL QUIRURGICO-4.pdf`) | 64 | WO 162 |
| BTI — Instrumental quirúrgico (`INSTRUMENTAL QUIRÃRGICO.pdf`, nombre con acento roto; implantología) | 62 | WU 26 |

### Duplicados (no subir; usar el que ya está en R2)
- `BIOQUÍMICA. BIOLOGÍA MOLECULAR Y GENÉTICA.pdf` y `Serie RT, Bioquimica… Lieberman.pdf` = Lieberman 6.ª ed., ya en `privado/bioquimica-1/Lieberman - …pdf` → QU 18.2.
- `Serie RT, Anatomia, 8a ed - Chung.pdf` = Chung 8.ª ed., ya en `privado/anatomia-humana-diseccion-1/Serie RT Anatomía.pdf` → QS 18.2.

### Ya en R2 (bibliografía de materias)
- Moore — Fundamentos de anatomía con orientación clínica, 5.ª ed. → QS 4
- Quiroz — Tratado de Anatomía Humana → QS 4
- Olinger — Atlas de anatomía humana (el plan lo llama «Atlas de Anatomía Humana») → QS 17
- Manual de Anatomía I · Manual de Anatomía Humana y su Disección 1 (UAD, públicos) → QS 130
- Harper — Bioquímica ilustrada 30.ª ed. · Mathews — Bioquímica 3.ª ed. → QU 4
- Junqueira, Carneiro — Histología básica → QS 504
- Medical Terminology: A Living Language 6th ed. · Check Your English Vocabulary for Medicine · The Language of Medicine → W 15
- Excluidos (no son libros): artículos de Inglés, Medical Abbreviations (Studocu), resúmenes propios.

Copias locales para leer portada/edición: `~/Desktop/UAD/Primer Semestre/Anatomía Humana y Disección I DEF/` (Moore, Quiroz, Atlas, manuales) e `Inglés Médico I DEF/` (Language of Medicine). Harper, Mathews, Junqueira y Check Your English solo están en R2 / respaldo del servidor.

## Construcción
1. Agregar `libreria/<archivo>` a `LIBRARY_PRIVATE` y subir los 7 nuevos con `npm run library:add -- libreria "<nombre>" "<ruta>"`.
2. `src/data/libreria.ts`: ficha por libro (autores, título, edición, editorial, año, páginas, idioma, clase NLM, número, materias, archivo) y cálculo de la marca Cutter.
3. `src/pages/Libreria.tsx` (diseño «Monitor suave»): buscador por título/autor, filtro por materia, estantería por clase NLM (QS Anatomía · QU Bioquímica · QT Fisiología · QV Farmacología · WL Sistema nervioso · WO Cirugía · W Profesiones de la salud), etiqueta de lomo vertical, candado en los que requieren acceso.
4. Navbar: «Librería» (en «Más» del móvil); ruta en App.tsx.
