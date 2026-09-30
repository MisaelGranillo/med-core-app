# PROMPT — MedCore · enlazar el PDF de infografías de Histología Semana 2

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-11.
> El PDF ya existe: `public/descargas/histologia-semana-2-infografias.pdf` (7 páginas:
> clasificación de epitelios; polaridad y uniones; glándulas; urotelio y glomérulo;
> aparato respiratorio y alvéolo; piel; y una tabla de asociaciones de examen). Solo falta
> **enlazarlo** como recurso descargable de la materia Histología.

## Cambio único
En `src/data/plans/uad-medicina.ts`, dentro del subject **Histología I** (`name:
'Histología I y su Laboratorio'`, code HS01006; su `recursos` está cerca de la línea 578),
agrega como primer elemento del arreglo `recursos`:

```ts
{ label: 'Infografías — Histología Semana 2 (epitelios, uniones, glándulas, órganos, piel) · PDF', url: '/descargas/histologia-semana-2-infografias.pdf' },
```

Mismo patrón que los PDF de Inglés y el de Genética (`url: '/descargas/…​.pdf'`, servidos
desde `public/descargas/`). No toques la biblioteca privada.

## Verificación
```bash
npm run build
ls public/descargas/histologia-semana-2-infografias.pdf
grep -n "histologia-semana-2-infografias.pdf" src/data/plans/uad-medicina.ts
```
Manual (`npm run dev`): en la ficha de **Histología I**, sección Recursos, aparece el
enlace y abre el PDF de 7 páginas.

## No-objetivos
- No conviertas el PDF en imágenes ni lo metas al Atlas (queda como descargable). No
  edites topics. No `npm run deploy`.

## Entrega
1. `feat(histologia): enlaza PDF de infografías de la Semana 2 en recursos`
