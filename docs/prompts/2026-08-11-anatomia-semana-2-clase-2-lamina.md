# PROMPT — Lámina del Atlas MedCore · Miembro superior óseo (Semana 2 · Clase 2)

> **Destinatario:** IA generadora de imágenes (**Gemini / Nano Banana**).
> **Consumidor final:** Claude Code → `src/data/atlas-topics.ts` +
> `public/atlas/miembro-superior-oseo.png`.
> **Materia:** Anatomía Humana y Disección I · UAD · Semana 2 · Clase 2.
> Hermano de `2026-08-11-anatomia-semana-2-clase-2.md` (AtlasTopic §5.5).

Rige la arquitectura de `2026-08-05-laminas-atlas-imagen.md`: **la IA de imágenes
no escribe ni una palabra.** En osteología la etiqueta *es* el contenido
("troquíter" mal escrito = respuesta del examen aprendida mal). Gemini produce solo
la ilustración con huesos diferenciados por color plano; Code superpone el texto
verificado (TA principal · clásico entre paréntesis).

Aplica la **especificación de estilo global** (§2) y las **reglas duras** (§3) de
aquel documento: 2:3 vertical, fondo `#EFF6FF`, ilustración editorial no
fotorrealista, colores planos distinguibles en escala de grises y para daltonismo
rojo-verde, tercio inferior vacío para la leyenda.

---

## LÁMINA — Miembro superior óseo

Archivo final: `public/atlas/miembro-superior-oseo.png`

### Prompt para Gemini

```
Ilustración médica editorial del esqueleto del miembro superior derecho humano
adulto, en vistas separadas dentro de un lienzo vertical de proporción 2:3.

DISPOSICIÓN:
- Arriba, ocupando el ancho: vista anterior del miembro superior completo y
  articulado —clavícula, escápula, húmero, radio y cúbito, y la mano— sobre el
  borde del tórax, en posición anatómica (palma al frente).
- Centro izquierda: escápula aislada en vista posterior (dorsal), mostrando la
  espina y el acromion.
- Centro derecha: húmero aislado en vista anterior, epífisis proximal y distal
  bien diferenciadas.
- Debajo: radio y cúbito aislados, lado a lado en posición anatómica, y la mano
  aislada en vista dorsal mostrando carpo, metacarpo y falanges.
- El tercio inferior del lienzo queda completamente vacío, solo color de fondo.

CÓDIGO DE COLOR — cada hueso con un color plano, idéntico en todas las vistas:
- Clavícula: naranja cálido medio
- Escápula: azul medio
- Húmero: verde medio
- Radio: morado medio
- Cúbito (ulna): amarillo dorado
- Huesos del carpo (los 8): rosa coral
- Metacarpianos: azul grisáceo claro
- Falanges: gris cálido claro
- Cada grupo mutuamente distinguible y también en escala de grises.

EXACTITUD ANATÓMICA OBLIGATORIA:
- Radio en posición LATERAL (lado del pulgar), cúbito en posición MEDIAL.
- Cabeza del radio en el extremo PROXIMAL; cabeza del cúbito en el extremo DISTAL.
- Olécranon en el extremo proximal del cúbito.
- Húmero con cabeza redondeada proximal y epicóndilos medial/lateral en el extremo
  distal; escápula con cavidad glenoidea, espina y acromion; clavícula en forma de
  S itálica.
- Carpo con 8 huesos en dos filas de 4; 5 metacarpianos; falanges proximal, media
  y distal (el pulgar solo con proximal y distal).
- Proporciones y articulaciones anatómicamente correctas.
```

Añade al final el bloque **REGLAS ABSOLUTAS** de §3 del documento maestro (cero
tipografía, cero flechas, cada hueso un color plano, límites entre huesos como
borde entre colores, 2:3, tercio inferior vacío). Si sale texto: **regenera.**

### Clave de color y leyenda que compone Claude Code (texto real, verificado)

Rótulos con TA principal · clásico entre paréntesis, coherentes con el Topic:

- Clavícula (naranja) — tubérculo conoideo, línea trapezoide, surco subclavio
- Escápula (azul) — cavidad glenoidea, espina, acromion, proceso coracoides
  (apófisis coracoides), fosas supra/infraespinosa
- Húmero (verde) — cabeza, tubérculo mayor (troquíter) y menor (troquín), surco
  intertubercular (corredera bicipital), epicóndilo medial (epitróclea)
- Radio (morado) — cabeza proximal, tubérculo dorsal, proceso estiloides
- Cúbito / ulna (dorado) — olécranon, proceso coronoides (apófisis coronoides),
  cabeza distal, proceso estiloides
- Carpo (coral) — fila proximal: escafoides, semilunar, piramidal, pisiforme ·
  fila distal: trapecio, trapezoide, hueso grande, ganchoso
- Metacarpianos I–V (lateral→medial) · Falanges: proximal, media, distal

Marcadores numéricos (máx. 6) solo donde el color no basta, sobre el húmero
distal y el carpo: (1) tubérculo mayor/troquíter, (2) tubérculo menor/troquín,
(3) epicóndilo medial/epitróclea, (4) epicóndilo lateral, (5) escafoides,
(6) hueso ganchoso.
