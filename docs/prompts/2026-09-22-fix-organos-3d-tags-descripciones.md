# PROMPT — MedCore · Atlas 3D: corregir tags y descripciones de los órganos

> For: **Claude Code**, repo `~/med-core-app`. Issued 2026-09-22.
> **Prompt language: English. MedCore content stays in Spanish.**
> Se añadieron modelos de órganos al Atlas 3D, pero **varios no tienen `organ:` (no muestran
> ficha "Función") y algunas descripciones/nombres no cuadran**. Arréglalo.

---

## 0. Causa raíz (verificada)
La ficha "Función" del visor sale de `anatomyParts[model.organ]`
(`src/pages/Anatomy3D.tsx:134`). Hoy `anatomy-3d-data.ts` **solo** tiene: `cerebro`,
`corazon`, `pulmones`, `higado`, `estomago`. Por eso los modelos **riñón, ojo, intestino,
páncreas y piel** —que **no** tienen clave `organ:`— quedan **sin ficha**. Además:
- `lungs-nih` se llama "Árbol bronquial" pero su `organ` es `pulmones` (incoherencia de
  nombre).
- `kidney-nih` tiene descripción genérica y crédito **"uso libre"** (licencia sin verificar).

```bash
cd ~/med-core-app
grep -n "organ:" src/data/anatomyModels.ts
grep -nE "^  '[a-z]+': \{" src/data/anatomy-3d-data.ts
```

## 1. Añade las fichas faltantes a `anatomy-3d-data.ts`
Dentro de `anatomyParts` (mismo estilo que `cerebro`/`higado`), agrega estas 5 entradas
(contenido ya verificado; ajusta redacción si tu texto base difiere):

```ts
  'rinon': {
    id: 'rinon', nombre: 'Riñón', sistema: 'Órganos',
    descripcion:
      'Órgano par retroperitoneal (~11 cm, 130–150 g cada uno) situado a ambos lados de la ' +
      'columna, entre T12 y L3; el derecho algo más bajo por el hígado. Se distingue una ' +
      'corteza externa y una médula con pirámides renales; su unidad funcional es la nefrona ' +
      '(~1 millón por riñón). Filtra ~180 L de plasma al día y produce ~1–1.5 L de orina.',
    funcionesClave: [
      'Filtración glomerular y formación de orina; reabsorción tubular (>99%).',
      'Equilibrio hidroelectrolítico y ácido-base (Na⁺, K⁺, H⁺, bicarbonato).',
      'Regulación de la presión arterial mediante el sistema renina-angiotensina-aldosterona.',
      'Función endocrina: eritropoyetina (eritropoyesis) y activación de la vitamina D (calcitriol).',
    ],
  },
  'ojo': {
    id: 'ojo', nombre: 'Globo ocular', sistema: 'Órganos',
    descripcion:
      'Órgano de la visión (~2.4 cm de diámetro) con tres capas: externa (esclerótica y ' +
      'córnea), media o úvea (coroides, cuerpo ciliar e iris) e interna (retina). Contiene el ' +
      'cristalino y los humores acuoso y vítreo que mantienen su forma y transparencia.',
    funcionesClave: [
      'Enfoque de la imagen sobre la retina mediante la córnea y la acomodación del cristalino.',
      'Fototransducción en la retina: conos (visión de color y detalle) y bastones (visión con poca luz).',
      'Regulación de la entrada de luz por el iris (pupila).',
      'Transmisión del impulso visual por el nervio óptico (II par) hacia la corteza occipital.',
    ],
  },
  'intestino': {
    id: 'intestino', nombre: 'Intestino', sistema: 'Órganos',
    descripcion:
      'Porción más larga del tubo digestivo. El intestino delgado (~6 m: duodeno, yeyuno e ' +
      'íleon) tiene vellosidades y microvellosidades que amplían enormemente la superficie de ' +
      'absorción. El intestino grueso (~1.5 m: ciego, colon, recto) reabsorbe agua y electrolitos ' +
      'y alberga la microbiota.',
    funcionesClave: [
      'Digestión final y absorción de nutrientes (delgado): borde en cepillo y enzimas.',
      'Absorción de agua y electrolitos, y formación de las heces (grueso).',
      'Función inmunitaria: tejido linfoide asociado al intestino (GALT, placas de Peyer).',
      'Hospedaje de la microbiota intestinal (síntesis de vitamina K y algunas del grupo B).',
    ],
  },
  'pancreas': {
    id: 'pancreas', nombre: 'Páncreas', sistema: 'Órganos',
    descripcion:
      'Glándula mixta retroperitoneal (cabeza, cuerpo y cola) situada en el epigastrio, por ' +
      'detrás del estómago. Es a la vez exocrina (acinos que vierten jugo pancreático al ' +
      'duodeno) y endocrina (islotes de Langerhans).',
    funcionesClave: [
      'Función exocrina: jugo pancreático con enzimas (amilasa, lipasa, tripsinógeno) y bicarbonato.',
      'Función endocrina: insulina (células β) y glucagón (células α) para regular la glucemia.',
      'Somatostatina (células δ) que modula la secreción de otras hormonas.',
      'Neutralización del quimo ácido en el duodeno mediante el bicarbonato.',
    ],
  },
  'piel': {
    id: 'piel', nombre: 'Piel', sistema: 'Órganos',
    descripcion:
      'Órgano más grande del cuerpo (~1.8 m², ~16% del peso). Consta de epidermis (epitelio ' +
      'plano estratificado queratinizado, avascular), dermis (tejido conectivo con vasos y ' +
      'nervios) e hipodermis (tejido adiposo). Se renueva por completo en 4–6 semanas.',
    funcionesClave: [
      'Barrera física, química y microbiológica frente al ambiente.',
      'Termorregulación (vasos dérmicos y glándulas sudoríparas).',
      'Recepción sensorial (tacto, presión, temperatura, dolor) y fotoprotección (melanina).',
      'Síntesis de vitamina D a partir del 7-dehidrocolesterol.',
    ],
  },
```
*(La ficha de piel enlaza conceptualmente con el Topic `histologia-piel`; no dupliques,
solo mantenlas coherentes.)*

## 2. Conecta los modelos (clave `organ:`) en `anatomyModels.ts`
Añade/corrige la clave `organ` en cada modelo para que muestre su ficha:
- `kidney-nih` → `organ: 'rinon'`
- `eye-ai` → `organ: 'ojo'`
- `intestine-ai` → `organ: 'intestino'`
- `pancreas-ai` → `organ: 'pancreas'`
- `skin-ai` → `organ: 'piel'`
(Verifica que `heart-ai`→`corazon`, `brain-nih`→`cerebro`, `lungs-nih`→`pulmones`,
`liver-vh`→`higado` ya estén bien.)

## 3. Arregla incoherencias de nombre/descripción
- `lungs-nih`: cambia `nombre` a **"Pulmones (árbol bronquial)"** para que concuerde con su
  ficha `pulmones` (o, si prefieres, deja "Árbol bronquial" pero entonces su ficha debe ser
  de la vía aérea, no de los pulmones — elige una y hazla coherente).
- `kidney-nih`: mejora la `description` (breve y correcta) y **verifica la licencia real**:
  el crédito actual dice "uso libre", que no es una licencia. Abre la ficha del modelo en
  `3d.nih.gov` (busca el archivo `organ-kidney-nih.glb` / su ID 3DPX) y pon el **crédito y
  licencia exactos** (CC0 / CC BY, con el ID). Si no puedes confirmar la licencia, márcalo
  como pendiente en el reporte en lugar de inventarla.

## 4. Auditoría general (Think Again)
Recorre **todos** los modelos de `region: 'organos'` y confirma que **nombre, `nombre_en`,
`description`, `region` y `organ` coincidan con lo que realmente es el GLB**:
- Los `illustrative: true` (heart, eye, intestine, pancreas, skin) deben conservar el aviso
  de "ilustrativo/aproximado": la ficha es anatómicamente correcta, pero el modelo es
  aproximado — que el texto no dé a entender precisión que el modelo no tiene.
- Revisa si `PART_MATCHERS` (`Anatomy3D.tsx:43`) necesita entradas para los nuevos órganos
  (si sus GLB traen nombres de nodo reconocibles); si son malla única, basta el fallback
  `active.organ`.
- `estomago` existe como ficha pero no hay modelo de estómago (huérfano, inofensivo);
  anótalo por si conviene un modelo de estómago de NIH 3D más adelante. No lo borres.

## 5. Verificación
```bash
npm run build
grep -c "organ: '" src/data/anatomyModels.ts        # todos los órganos con ficha
for k in rinon ojo intestino pancreas piel; do grep -q "'$k':" src/data/anatomy-3d-data.ts && echo "$k ok" || echo "$k FALTA"; done
grep -n "uso libre" src/data/anatomyModels.ts        # vacío (crédito del riñón corregido)
```
Manual (`npm run dev`, `/anatomia-3d`): abre riñón, ojo, intestino, páncreas y piel → cada
uno muestra su **ficha de Función** correcta; pulmones tiene nombre/ficha coherentes; los
créditos de los modelos NIH 3D tienen licencia real; los ilustrativos conservan su aviso.

**Reporte:** lista de modelos revisados con su estado (nombre/descr/tag correctos), la
licencia confirmada del riñón (o "pendiente"), y cualquier otro desajuste que hayas
corregido.

## 6. Non-objectives
- No descargues modelos nuevos ni rehagas el visor (eso es otro prompt). No toques los
  temas de estudio. No inventes licencias. No `npm run deploy`.

## 7. Delivery
1. `feat(atlas3d): fichas de riñón, ojo, intestino, páncreas y piel`
2. `fix(atlas3d): conecta organ: en los modelos de órganos y corrige nombre de pulmones`
3. `fix(atlas3d): licencia/crédito real del riñón (NIH 3D)`

Entrega el reporte de auditoría.
