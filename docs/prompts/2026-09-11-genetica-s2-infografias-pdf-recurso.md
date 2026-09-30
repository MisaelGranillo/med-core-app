# PROMPT — MedCore · enlazar el PDF de infografías de Genética Semana 2

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-11.
> El PDF ya existe en el repo: `public/descargas/genetica-semana-2-infografias.pdf`
> (4 páginas: dogma central, ribosoma/código genético, cromosomas/cariotipo, reparación
> del ADN). Solo falta **enlazarlo** como recurso descargable de la materia Genética,
> igual que los PDF de Inglés en `public/descargas/`.

## Cambio único
En `src/data/plans/uad-medicina.ts`, dentro del subject **`genetica-basica`**
(`id: 'genetica-basica'`, code GB01003), en su arreglo **`recursos`**, agrega como primer
elemento:

```ts
{ label: 'Infografías — Genética Semana 2 (dogma, ribosoma, cromosomas, reparación) · PDF', url: '/descargas/genetica-semana-2-infografias.pdf' },
```

Es el mismo patrón que ya usa Inglés (`url: '/descargas/…​.pdf'`). No toques la biblioteca
privada ni `LIBRARY_BASE`; los archivos en `public/descargas/` se sirven en la raíz
(`/descargas/…`).

## Verificación
```bash
npm run build
ls public/descargas/genetica-semana-2-infografias.pdf
grep -n "genetica-semana-2-infografias.pdf" src/data/plans/uad-medicina.ts
```
Manual (`npm run dev`): en la ficha de **Genética Básica**, sección Recursos, aparece el
enlace y abre el PDF de 4 páginas.

## No-objetivos
- No conviertas el PDF en imágenes ni lo metas al Atlas (queda como descargable). No
  edites contenido de topics. No `npm run deploy`.

## Entrega
1. `feat(genetica): enlaza PDF de infografías de la Semana 2 en recursos`
