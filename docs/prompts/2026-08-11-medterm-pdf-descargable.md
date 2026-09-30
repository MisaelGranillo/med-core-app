# PROMPT — MedCore · Publicar "Medical Terminology — Word Parts" como descarga en medcore.icu

> Destinatario: **Claude Code**, repo `~/med-core-app`. Emitido 2026-08-11.
> Idioma: todo en español (UI, comentarios).
> Objetivo: que el PDF de terminología quede **descargable desde medcore.icu**
> (público, sin login), enlazado desde la ficha de Inglés Médico I.

---

## 0. Qué ya está hecho (no lo rehagas)

El archivo **ya está colocado en el repo**:

```
public/descargas/medical-terminology-word-parts.pdf   (28 KB)
```

Confírmalo con `ls -lh public/descargas/`. Cloudflare Pages sirve `public/` como
raíz del sitio **antes** del fallback SPA (igual que `public/atlas/*.png` se sirven
en `/atlas/...`), así que el archivo quedará accesible en:

```
https://medcore.icu/descargas/medical-terminology-word-parts.pdf
```

No hay que tocar `_redirects`: la regla `/* → /index.html 200` solo actúa sobre
rutas que **no** corresponden a un archivo real, y este archivo existe.

> Por qué en `public/` y no en la biblioteca privada: el usuario quiere el PDF en
> **medcore.icu, sin barrera de login**. `library.medcore.icu` está tras Cloudflare
> Access. La regla general "los PDF van a la biblioteca, nunca al repo" existe por
> el cap de 25 MB de Pages y aplica a los libros de texto; este es un material de
> estudio generado de **28 KB**, cuyo impacto en el build es despreciable. Es una
> excepción justificada, no una violación de la regla.

---

## 1. Antes de escribir código

```bash
cd ~/med-core-app
ls -lh public/descargas/
sed -n '110,125p' src/data/plans/types.ts              # tipo RecursoLink { label, url }
grep -n "recursos" src/data/plans/uad-medicina.ts | head # ¿ingles ya tiene recursos?
sed -n '485,515p' src/pages/SubjectDetail.tsx           # render de "Recursos digitales"
git status
```

`npm run build` limpio antes de empezar.

---

## 2. Entregable — enlazar como Recurso digital

El tipo `RecursoLink = { label: string; url: string }` se renderiza en la sección
**"Recursos digitales"** de la ficha de materia (`SubjectDetail.tsx`, ~línea 489),
como un chip que abre `url` en pestaña nueva. Acepta URL **relativa a la raíz**.

En `src/data/plans/uad-medicina.ts`, en la materia **`ingles-medico-1`**, dentro de
su `content`, añade (o crea) el array `recursos` con esta entrada:

```ts
recursos: [
  // …los que ya existan…
  {
    label: 'Medical Terminology — Word Parts (PDF de estudio)',
    url: '/descargas/medical-terminology-word-parts.pdf',
  },
],
```

- Si `content.recursos` ya existe, **añade** la entrada sin borrar las demás.
- URL **root-relative** (`/descargas/...`), no absoluta: funciona igual en
  producción (`medcore.icu`) y en `npm run dev`, y no depende del dominio.
- No uses `MaterialRef` para esto: ese tipo construye la URL contra
  `LIBRARY_BASE` (biblioteca privada) y rompería el acceso público.

---

## 3. Verificación

```bash
npm run build
ls -lh dist/descargas/medical-terminology-word-parts.pdf   # el build debe copiar el PDF a dist/
grep -n "medical-terminology-word-parts" src/data/plans/uad-medicina.ts
```

Manual (`npm run dev`):

- [ ] `http://localhost:5173/descargas/medical-terminology-word-parts.pdf` abre el
      PDF directamente (no el index.html del SPA)
- [ ] `/plan/ingles-medico-1` (o la ruta de la ficha de Inglés Médico I) muestra el
      chip **"Medical Terminology — Word Parts (PDF de estudio)"** en Recursos
      digitales, y al pulsarlo abre/descarga el PDF
- [ ] El resto de recursos digitales de la materia (si los había) siguen presentes

---

## 4. No-objetivos

- No muevas el PDF a `library.medcore.icu` ni a `MaterialRef`: debe ser público.
- No modifiques `_redirects`.
- No comprimas ni regeneres el PDF: úsalo tal cual está en `public/descargas/`.
- No toques contenido de Topics, quizzes ni otras materias.
- No ejecutes `npm run deploy` (lo autoriza Misael).

---

## 5. Entrega

Un commit:

```
feat(ingles): PDF de terminología descargable desde medcore.icu (recurso público)
```

Incluye en el commit tanto `public/descargas/medical-terminology-word-parts.pdf`
como el cambio en `uad-medicina.ts`. (Este PDF de 28 KB sí va al repo, a diferencia
de los libros de la biblioteca — ver §0.)

En el reporte, confirma la URL pública final y que el build copió el archivo a
`dist/descargas/`.
