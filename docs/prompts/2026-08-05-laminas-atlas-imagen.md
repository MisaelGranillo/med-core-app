# PROMPT — Láminas del Atlas MedCore · Generación de imágenes

> **Destinatario:** IA generadora de imágenes de **Gemini (Plus)** — "Nano Banana"
> / modelo de imagen de Gemini. Pega el prompt directamente en Gemini.
> **Consumidor final:** Claude Code, que compone la lámina definitiva y la
> registra en `src/data/atlas-topics.ts` + `public/atlas/`.
> **Materia:** Anatomía Humana y Disección I · UAD · Semana 1.
>
> **Plataforma vigente = Gemini (Plus).** Gemini respeta mejor "cero tipografía" y
> la relación de aspecto que ChatGPT, pero puede colar rótulos igual: mantén el
> bloque de reglas absolutas y, si aparece texto, responde "regenera la misma
> imagen sin ningún texto ni etiqueta". Pide **retrato / vertical 2:3 (≈1024 ×
> 1536), PNG**. (Historial: antes se usó ChatGPT Go; si algún día vuelves a él,
> extrema la regla de "cero texto" y corrige por conversación.)

---

## 0. Por qué esta arquitectura — evidencia, no precaución genérica

La lámina `public/atlas/sistema-locomotor.png` ya desplegada en `medcore.icu`
contiene texto alucinado. Verificado a resolución completa:

| En la lámina | Debería decir |
|---|---|
| "**ell** sistema esquelético" | el sistema esquelético |
| "Funciones: **Calemanetas, binocatoras**, columna vertebrai, y estebral" | (cadena sin significado) |
| "**Boeso** compacto / **Espongesy** compacto" | Hueso compacto / Esponjoso |
| "sistema locomo**toro**" | sistema locomotor |
| "**Sostencion meitaprotiorios**" · "**Apuntas enomatoras**" | (cadenas sin significado) |
| "Tendón: **Connects conte** musculo a hueso" | Conecta músculo a hueso |
| "Fibroso **viriontortos**" · "Cartilaginoso **movemens**" | (cadenas sin significado) |
| Conteo óseo: 8+14+26+25+**60**+**60**, rotulado "206" | miembros superiores **64**, inferiores **62** |

`aparato-digestivo.png`, generada por el mismo método, salió correcta. No es un
defecto sistemático: es la lotería de cada generación. Y no se detectó porque
nadie relee palabra por palabra una lámina densa.

En una lámina de aparato digestivo el dibujo carga el significado y una palabra
rota se nota. **En osteología la etiqueta *es* el contenido**: "apófisis
cigomática del frontal" mal escrita no es un defecto cosmético, es la respuesta
del examen aprendida mal.

Por eso: **la IA de imágenes no escribe ni una palabra.**

---

## 1. Reparto de responsabilidades

| Responsable | Produce |
|---|---|
| **Gemini** | La ilustración anatómica. **Cero texto.** Huesos diferenciados por **color plano**. Fondo limpio. |
| **Claude Code** | La lámina final: ilustración + clave de color + leyenda + títulos, todo como **texto real** verificado contra las diapositivas del profesor. |

Ventajas que no son estéticas:

- El texto sale nítido a cualquier zoom y correcto por construcción.
- Es editable: si el profesor usa otro término, se cambia una línea de código.
- Permite aplicar la regla de nomenclatura (TA principal, clásica del profesor
  entre paréntesis) sin regenerar la imagen.
- **La identificación por color no requiere colocar marcadores con precisión** —
  que es justo lo que los modelos de imagen hacen mal.

Los marcadores numéricos se usan solo donde el color no sirve (puntos de sutura),
y nunca más de 6 por lámina: pocos suficientes para verificar su posición de un
vistazo.

---

## 2. Especificación de estilo global

Aplica a **todas** las láminas. Va incluido en cada prompt individual.

- **Formato:** vertical, proporción 2:3 (Code compone a 1024 × 1536 px).
- **Fondo:** blanco puro o azul muy pálido `#EFF6FF`. Plano, sin texturas,
  sin viñeteado, sin sombras de papel.
- **Estilo:** ilustración médica editorial contemporánea. Trazo de contorno
  limpio y uniforme, relleno de color plano o con sombreado mínimo. **No**
  fotorrealista, **no** renderizado 3D, **no** grabado antiguo estilo Gray,
  **no** acuarela.
- **Paleta base** (sistema de diseño Clinical Blue de MedCore):
  texto/contornos `#1E3A5F` · acento `#2563A8` · borde `#DBEAFE`.
- **Colores de hueso:** planos, saturación media, mutuamente distinguibles y
  **distinguibles también en escala de grises** (varía el valor, no solo el
  tono). Deben ser legibles para daltonismo rojo-verde: evita rojo y verde de
  luminosidad similar como pareja adyacente.
- **Composición:** las vistas se distribuyen en la mitad superior / dos tercios
  del lienzo. **Deja el tercio inferior vacío en color de fondo**: ahí va la
  leyenda que compone Code.

---

## 3. Reglas duras para Gemini

Copia este bloque **al final de cada prompt individual** (si el modelo las ignora,
repítelas como corrección en el siguiente mensaje):

```
REGLAS ABSOLUTAS:
- NO incluyas ningún texto, palabra, letra, etiqueta, título ni leyenda en la
  imagen. Ni en español, ni en inglés, ni en latín. Cero tipografía.
- NO dibujes líneas guía, flechas de rótulo ni bocadillos vacíos.
- NO añadas marca de agua, firma, logo ni borde decorativo.
- NO uses fondo de papel envejecido, textura ni degradado.
- Cada hueso debe ser de UN color plano, uniforme y constante en todas las
  vistas de la misma imagen.
- Las líneas de sutura entre huesos deben verse como el límite nítido entre dos
  colores distintos, no como una línea dibujada encima.
- Proporción vertical 2:3. Tercio inferior del lienzo vacío, solo fondo.
```

Si el resultado trae texto de todos modos: **no lo edites ni lo recortes,
regenera**. En ChatGPT basta con responder "regenera la misma imagen sin ningún
texto ni etiqueta"; si insiste con texto tras 2–3 intentos, pídele una versión "sin
rótulos, solo las formas anatómicas en bloques de color plano". El texto alucinado
suele venir acompañado de errores de estructura en la ilustración.

---

## 4. LÁMINA 1 — Huesos del Cráneo

Archivo final: `public/atlas/huesos-craneo.png`

### 4.1 Prompt para Gemini

```
Ilustración médica editorial de un cráneo humano adulto, en tres vistas
dispuestas dentro de un lienzo vertical de proporción 2:3.

DISPOSICIÓN:
- Arriba a la izquierda: vista lateral izquierda del cráneo (norma lateralis),
  ocupando aproximadamente el 45% del ancho.
- Arriba a la derecha: vista anterior del cráneo (norma frontalis), a la misma
  escala aparente.
- En el centro, debajo de las dos anteriores: vista superior de la base interna
  del cráneo con la bóveda seccionada, mostrando las tres fosas craneales
  (anterior, media y posterior).
- El tercio inferior del lienzo queda completamente vacío, solo color de fondo.

CÓDIGO DE COLOR — cada hueso con un color plano, idéntico en las tres vistas:
- Hueso frontal: naranja cálido medio
- Huesos parietales: azul medio
- Huesos temporales: verde azulado (teal) medio
- Hueso occipital: morado medio
- Hueso esfenoides: amarillo dorado
- Hueso etmoides: rosa coral
- Huesos de la cara (todos juntos, sin diferenciar entre sí): gris azulado
  claro y neutro, claramente más apagado que los seis colores anteriores
- Mandíbula: gris azulado claro, igual que el resto de la cara

EXACTITUD ANATÓMICA OBLIGATORIA:
- La vista lateral debe mostrar el punto donde convergen frontal, parietal,
  ala mayor del esfenoides y temporal.
- El ala mayor del esfenoides debe aparecer en la vista lateral como una
  superficie amarilla pequeña, entre el frontal y el temporal, por delante
  del conducto auditivo externo.
- En la base interna, la fosa craneal anterior debe mostrar la lámina cribosa
  del etmoides en la línea media; la fosa media debe mostrar la silla turca
  del esfenoides; la fosa posterior debe mostrar el agujero occipital.
- El agujero occipital es ovalado, de eje mayor anteroposterior.
- Sutura coronal entre frontal y parietales; sagital entre ambos parietales;
  lambdoidea entre parietales y occipital; escamosa entre parietal y temporal.

ESTILO:
Ilustración médica editorial contemporánea, contorno limpio y uniforme de color
azul marino oscuro (#1E3A5F), relleno de color plano con sombreado mínimo.
Fondo blanco o azul muy pálido (#EFF6FF), plano y sin textura. No fotorrealista,
no 3D, no grabado antiguo, no acuarela.

[Aquí pega el bloque REGLAS ABSOLUTAS de §3]
```

### 4.2 Clave de color — la compone Code, verificada contra la clase 2

> El profesor enuncia: **"Formado por 8 huesos: 2 pares (parietales,
> temporales) y 4 impares (frontal, esfenoides, occipital, etmoides)."**
> Ese enunciado va literal como subtítulo de la lámina.

| Color | Hueso | Estado |
|---|---|---|
| Naranja | **Frontal** — 3 caras y 3 bordes | ✅ clase 2 |
| Azul | **Parietal** (par) — 2 caras, 4 bordes, 4 ángulos | ✅ clase 2 |
| Teal | **Temporal** (par) | ⏳ **pendiente — no impartido** |
| Morado | **Occipital** — 2 caras, bordes y ángulos | ✅ clase 2 |
| Dorado | **Esfenoides** — cuerpo, 2 alas menores, 2 alas mayores, 2 apófisis pterigoides | ✅ clase 2 |
| Coral | **Etmoides** — lámina vertical, lámina horizontal, 2 masas laterales | ✅ clase 2 |
| Gris | Huesos de la cara y mandíbula | → lámina 2 |

**El temporal debe aparecer marcado como pendiente en la leyenda.** Está en el
dibujo porque un cráneo sin temporal no es un cráneo, pero no se ha visto en
clase. Rotularlo como si se hubiera impartido crearía la impresión de un temario
cubierto que no lo está.

### 4.3 Marcadores numéricos (máximo 6) — los dibuja Code, no Gemini

Puntos craneométricos, sobre la vista lateral. Definiciones tomadas de la tabla
de Moore que Misael fotografió (`8.2.jpeg`), **no** de la diapositiva:

| # | Punto | Localización |
|---|---|---|
| 1 | **Bregma** | Unión de las suturas coronal y sagital |
| 2 | **Lambda** | Unión de las suturas lambdoidea y sagital |
| 3 | **Pterión** | Unión del ala mayor del esfenoides, la porción escamosa del temporal y los huesos frontal y parietal |
| 4 | **Asterión** | Unión de tres suturas: parietomastoidea, occipitomastoidea y lambdoidea |
| 5 | **Inión** | Punto más sobresaliente de la protuberancia occipital externa |
| 6 | **Nasión** | Punto donde se encuentran las suturas frontonasal e internasal |

> El **pterión** es el marcador con más valor clínico de la lámina: es el punto
> más delgado del cráneo y por debajo discurre la división anterior de la
> arteria meníngea media, lo que lo convierte en el sitio clásico del hematoma
> epidural. No aparece en las diapositivas del profesor; sí en Moore. Vale la
> pena que esté.
>
> La diapositiva del occipital define asterión como "unión parietotemporal";
> Moore lo define como confluencia de **tres** suturas. Describen el mismo punto,
> pero la leyenda debe usar la definición de Moore y el Topic debe registrar
> ambas (§2.5 del prompt de Semana 1).

Code los coloca por coordenadas y **tú verificas su posición** antes de aceptar
la lámina. Si Code no puede situarlos con confianza, que omita los marcadores:
una lámina con 6 colores correctos vale más que una con 6 marcadores mal puestos.
En particular el pterión: si cae fuera de la confluencia de los cuatro huesos,
está mal y desinforma.

---

## 5. LÁMINA 2 — Huesos de la Cara

Archivo final: `public/atlas/huesos-cara-hioides.png`
*(el `id` del AtlasTopic se conserva por estabilidad de enlaces; el hioides se
incorpora cuando se imparta)*

### 5.1 Prompt para Gemini

```
Ilustración médica editorial del macizo facial humano (viscerocráneo), en tres
vistas dispuestas dentro de un lienzo vertical de proporción 2:3.

DISPOSICIÓN:
- Arriba: vista anterior del cráneo centrada en el macizo facial, mostrando
  órbitas, apertura piriforme nasal y arcadas dentarias superiores.
- Centro izquierda: vista lateral derecha del macizo facial.
- Centro derecha: corte sagital medio de la cavidad nasal, visto desde la
  izquierda, mostrando la pared lateral de la fosa nasal y el tabique.
- El tercio inferior del lienzo queda completamente vacío, solo color de fondo.

CÓDIGO DE COLOR — cada hueso con un color plano, idéntico en las tres vistas:
- Maxilar superior: naranja cálido medio
- Hueso cigomático (malar): azul medio
- Hueso nasal: verde azulado (teal) medio
- Hueso lagrimal: morado medio
- Cornete nasal inferior: amarillo dorado
- Vómer: rosa coral
- Hueso palatino: verde oliva medio
- Huesos del cráneo circundantes (frontal, esfenoides, etmoides, temporal) y
  mandíbula: gris azulado claro y neutro, claramente más apagado

EXACTITUD ANATÓMICA OBLIGATORIA:
- El vómer y el cornete inferior solo son visibles en el corte sagital, no en
  la vista anterior ni en la lateral.
- El hueso palatino queda oculto en la vista anterior; debe verse en el corte
  sagital, en la pared lateral y posterior de la fosa nasal.
- El hueso lagrimal es pequeño y ocupa la pared medial de la órbita, por detrás
  de la apófisis frontal del maxilar.
- El cigomático forma el pómulo y el borde inferolateral de la órbita, y emite
  una apófisis hacia atrás que se une al temporal.
- La apertura piriforme nasal está delimitada por los dos maxilares y los dos
  huesos nasales.
- El corte sagital debe mostrar los tres cornetes en la pared lateral: superior
  y medio pertenecen al etmoides (grises), el inferior es hueso independiente
  (dorado).

ESTILO:
Ilustración médica editorial contemporánea, contorno limpio y uniforme de color
azul marino oscuro (#1E3A5F), relleno de color plano con sombreado mínimo.
Fondo blanco o azul muy pálido (#EFF6FF), plano y sin textura. No fotorrealista,
no 3D, no grabado antiguo, no acuarela.

[Aquí pega el bloque REGLAS ABSOLUTAS de §3]
```

### 5.2 Clave de color — verificada contra la clase 3

Nombre TA como principal, clásico del profesor entre paréntesis:

| Color | Hueso | Detalle impartido |
|---|---|---|
| Naranja | **Maxilar** (maxilar superior) | Cara interna y externa · 4 bordes · 4 ángulos |
| Azul | **Cigomático** (malar) | Caras externa e interna · 4 bordes · 4 ángulos |
| Teal | **Nasal** (hueso propio de la nariz) | 2 caras · 4 bordes |
| Morado | **Lagrimal** (unguis) | 2 caras · 4 bordes |
| Dorado | **Cornete nasal inferior** | 2 caras · 2 bordes · 2 extremidades |
| Coral | **Vómer** | 2 caras · 4 bordes |
| Oliva | **Palatino** | Porción horizontal y porción vertical |
| Gris | Cráneo circundante y mandíbula | → lámina 1 / pendiente |

> ⚠️ **La clase 3 no impartió mandíbula ni hioides**, pese al título del
> archivo. El listado del profesor termina en el lagrimal. Ambos llegan en las
> clases 4 o 5. La leyenda debe decirlo explícitamente en lugar de dejar el
> hueco sin explicar.

Sin marcadores numéricos en esta lámina: siete colores ya son suficiente carga
visual, y los accidentes concretos se estudian mejor en las tablas del Topic.

---

## 6. LÁMINA 3 — Sistema Locomotor (regeneración)

Archivo final: `public/atlas/sistema-locomotor.png` — **reemplaza la actual.**

Esta no es una lámina anatómica sino una **infografía de doce paneles con texto
denso**. Ninguna IA de imágenes debe generarla completa: es exactamente el caso
que produjo el desastre documentado en §0.

**Gemini produce solo los elementos ilustrados, sueltos, sin texto.**
**Code arma la infografía** con el texto verificado.

### 6.1 Prompt para Gemini — hoja de elementos

```
Hoja de elementos de ilustración médica sobre fondo blanco liso, dispuestos en
una cuadrícula regular de 3 columnas por 2 filas, con generoso espacio en
blanco entre ellos y sin tocarse entre sí.

Los seis elementos, de izquierda a derecha y de arriba abajo:
1. Silueta de esqueleto humano completo de frente, en color hueso marfil sobre
   fondo blanco.
2. Sección transversal de un hueso largo mostrando la corteza compacta densa en
   el exterior y el hueso esponjoso trabeculado en el interior.
3. Tres pequeñas muestras rectangulares de tejido muscular vistas al
   microscopio, una junto a otra: músculo esquelético con estriaciones
   transversales paralelas, músculo cardíaco con estriaciones y fibras
   ramificadas unidas por discos intercalares, y músculo liso con células
   fusiformes sin estriaciones.
4. Esquema de una fibra muscular seccionada mostrando miofibrillas y la banda
   repetida del sarcómero.
5. Tres articulaciones esquemáticas una junto a otra: una articulación sinovial
   con cavidad y cartílago, una articulación fibrosa, y una articulación
   cartilaginosa.
6. Comparación de dos cortes de hueso esponjoso lado a lado: uno con
   trabéculas densas y regulares, otro con trabéculas adelgazadas y muy
   separadas.

ESTILO:
Ilustración médica editorial contemporánea, contorno limpio de color azul marino
oscuro (#1E3A5F), relleno de color plano con sombreado mínimo, paleta de azules,
marfiles y rojos apagados. Fondo blanco puro y plano.

[Aquí pega el bloque REGLAS ABSOLUTAS de §3]
```

### 6.2 Contenido verificado que compone Code

Sustituye **íntegramente** el texto de la lámina actual. Nada del texto viejo se
reutiliza: está corrompido en origen y no es recuperable por edición.

**Conteo óseo — 206 huesos** *(esta es la corrección del error aritmético)*

| Región | Huesos |
|---|---|
| Cráneo | 8 |
| Cara | 14 |
| Hueso hioides | 1 |
| Huesecillos del oído (6 en total) | 6 |
| Columna vertebral | 26 |
| Tórax (esternón + 24 costillas) | 25 |
| Miembros superiores | **64** |
| Miembros inferiores | **62** |
| **Total** | **206** |

> Nota para Code: existen varias formas legítimas de desglosar los 206 según se
> cuenten hioides y huesecillos del oído por separado o dentro del cráneo.
> **Cualquier desglose que elijas debe sumar exactamente 206.** El defecto de la
> lámina actual no es haber elegido mal el desglose, es que el suyo suma 193 y
> se rotula 206. Verifica la suma antes de renderizar.

**Tejido óseo:** compacto (cortical, denso, exterior) vs. esponjoso
(trabecular, interior, aloja médula ósea). Células: osteoblasto (forma matriz),
osteocito (mantiene), osteoclasto (resorbe).

**Tejido muscular:** esquelético (estriado, voluntario) · cardíaco (estriado,
involuntario, discos intercalares) · liso (no estriado, involuntario, vísceras).

**Articulaciones:** sinoviales (móviles, con cavidad articular) · fibrosas
(inmóviles, p. ej. suturas craneales) · cartilaginosas (semimóviles, p. ej.
discos intervertebrales).

**Tendón vs. ligamento:** el tendón une músculo a hueso y transmite fuerza; el
ligamento une hueso a hueso y estabiliza la articulación.

**Osteoporosis — criterios DXA (T-score):** normal `T > −1.0` · osteopenia
`−1.0 a −2.5` · osteoporosis `T ≤ −2.5`. FRAX estima riesgo de fractura a 10 años.

> Los datos "650 músculos" y "40 % del peso corporal" de la lámina actual son
> aproximaciones divulgativas con rango amplio en la literatura. Si los
> conservas, escríbelos como aproximaciones ("~600–650"), no como cifras exactas.

---

## 7. LÁMINA 4 — Columna Vertebral

Archivo final: `public/atlas/columna-vertebral.png`

**Ya se puede generar.** La clase 4 (jue 6 ago, `4 HUESOS COLUMNA
VERTEBRAL.pdf`, 22 diapositivas) cubrió la columna completa.

### 7.1 Prompt para Gemini

```
Ilustración médica editorial de la columna vertebral humana, en cuatro vistas
dispuestas dentro de un lienzo vertical de proporción 2:3.

DISPOSICIÓN:
- Columna izquierda del lienzo, ocupando toda su altura útil: columna vertebral
  completa vista de perfil desde la izquierda, desde el atlas hasta el cóccix,
  mostrando con claridad las cuatro curvaturas alternantes.
- Columna derecha del lienzo, apiladas de arriba abajo y a mayor escala:
  1. Una vértebra lumbar típica vista desde arriba.
  2. El atlas y el axis vistos desde arriba, uno junto al otro.
  3. El sacro y el cóccix vistos de frente, articulados.
- El tercio inferior del lienzo queda completamente vacío, solo color de fondo.

CÓDIGO DE COLOR — por región, plano e idéntico en todas las vistas:
- Región cervical: naranja cálido medio
- Región dorsal o torácica: azul medio
- Región lumbar: verde azulado (teal) medio
- Sacro: morado medio
- Cóccix: amarillo dorado
- Discos intervertebrales: gris azulado muy claro

EXACTITUD ANATÓMICA OBLIGATORIA:
- Siete vértebras cervicales, doce dorsales y cinco lumbares. Cuenta las piezas
  al dibujarlas: el número debe ser exacto en la vista de perfil.
- Las cuatro curvaturas deben alternar correctamente en la vista de perfil:
  cervical cóncava hacia atrás, dorsal cóncava hacia delante, lumbar cóncava
  hacia atrás, sacra cóncava hacia delante.
- La vértebra lumbar vista desde arriba debe mostrar cuerpo grande y reniforme,
  agujero vertebral triangular, apófisis espinosa cuadrilátera dirigida hacia
  atrás, y dos apófisis transversas largas y delgadas.
- El atlas no tiene cuerpo: es un anillo con arco anterior, arco posterior y dos
  masas laterales. El axis sí tiene cuerpo y de él se eleva la apófisis
  odontoides, un saliente vertical cilíndrico en la línea media.
- El sacro es triangular, de base superior y vértice inferior, con cuatro pares
  de agujeros sacros anteriores en su cara anterior cóncava.
- El cóccix son cuatro piezas pequeñas y fusionadas, decrecientes hacia abajo.

ESTILO:
Ilustración médica editorial contemporánea, contorno limpio y uniforme de color
azul marino oscuro (#1E3A5F), relleno de color plano con sombreado mínimo.
Fondo blanco o azul muy pálido (#EFF6FF), plano y sin textura. No fotorrealista,
no 3D, no grabado antiguo, no acuarela.

[Aquí pega el bloque REGLAS ABSOLUTAS de §3]
```

### 7.2 Leyenda — la compone Code, verificada contra la clase 4

La leyenda de esta lámina **no** es una simple clave de color: es la **tabla
comparativa región por región**, que es el formato en que esto se pregunta casi
sin excepción. Code la renderiza como tabla de texto real bajo la ilustración.

| | Cervicales | Dorsales | Lumbares |
|---|---|---|---|
| **Número** | 7 | 12 | 5 |
| **Típicas** | C3–C6 | D2–D8 | L1–L4 |
| **Cuerpo** | Ancho y pequeño | Reniforme | Reniforme |
| **Agujero vertebral** | Triangular | Circular | Triangular |
| **Apófisis espinosa** | Bífida | Oblicua | Cuadrilátera |
| **Rasgo exclusivo** | Agujeros transversos, apófisis unciformes, tubérculos anterior y posterior | Carillas costales en los cuerpos | Tubérculos mamilares y accesorios, apófisis costales |
| **Atípicas** | C1 atlas, C2 axis, C7 de transición | D1, D9, D10, D11, D12 de transición | L5 de transición |

Bloque de datos que acompaña a la tabla:

- **24 vértebras presacras** + sacro (5 fusionadas) + cóccix (4 fusionadas).
- La columna representa **2/5 de la altura total**. Ángulo lumbosacro **130–160°**.
- **Curvaturas primarias:** dorsal y sacra. **Secundarias:** cervical y lumbar.
- **Acentuaciones patológicas:** cifosis acentúa las primarias, lordosis las
  secundarias (ambas anteroposteriores); **escoliosis** es lateral.

> El error de estudio más común aquí es invertir primarias y secundarias. Que la
> leyenda las coloree con los mismos colores de región en la vista de perfil lo
> hace verificable de un vistazo.

---

## 8. Control de calidad antes de pasar nada a Code

Ninguna imagen avanza sin superar los seis puntos:

1. **Cero tipografía.** Amplía al 200 % y recorre la imagen. Cualquier glifo,
   por pequeño que sea: descartar y regenerar.
2. **Colores constantes entre vistas.** El frontal es naranja en las tres, o la
   lámina no sirve para su propósito.
3. **Recuento correcto.** Lámina 1: 6 colores de hueso craneal distintos.
   Lámina 2: 7 colores faciales distintos.
4. **Verificación anatómica contra la diapositiva**, no contra tu memoria ni
   contra la de un modelo. Abre el PDF de la clase al lado. Comprueba en
   particular:
   - Lámina 1: posición del ala mayor del esfenoides en la vista lateral;
     lámina cribosa en la fosa anterior; silla turca en la media; agujero
     occipital ovalado en la posterior.
   - Lámina 2: vómer, cornete inferior y palatino solo en el corte sagital;
     cornetes superior y medio en gris (son del etmoides), inferior en dorado.
   - Lámina 4: **cuenta las vértebras una por una** — 7, 12 y 5. Es el fallo
     más frecuente de los modelos de imagen en esta lámina, y el más fácil de
     pasar por alto porque el dibujo *parece* correcto. Comprueba también que
     el atlas no tenga cuerpo vertebral y que la odontoides salga del axis.
5. **Tercio inferior libre.** Si la ilustración lo invade, no cabe la leyenda.
6. **Prueba en escala de grises.** Convierte a B/N: si dos huesos adyacentes se
   vuelven indistinguibles, pide otra paleta variando el valor, no el tono.

Si una lámina falla dos regeneraciones seguidas en el punto 4, **cambia de
método**: extrae la figura del PDF de clase con `pdftoppm -r 200 -png`. Una
figura del profesor con calidad visual mediocre supera a una ilustración
elegante y anatómicamente falsa — y además es literalmente la que va al examen.

---

## 9. Qué recibe Claude Code y qué hace con ello

**Entrega a Code:**
`docs/atlas-fuentes/huesos-craneo-base.png`, `huesos-cara-base.png`,
`columna-vertebral-base.png`, `locomotor-elementos.png` (las salidas de Gemini,
sin tocar), más este documento.

**Code compone**, con Pillow, cada lámina final a **1024 × 1536 px**:

1. Lienzo de fondo `#EFF6FF`.
2. Título y subtítulo en la cabecera. Tipografía **Inter** (la del sistema de
   diseño); si no está instalada, `Helvetica Neue`/`Arial`. Color `#1E3A5F`.
   Si Code no encuentra ninguna fuente utilizable, **que lo diga en vez de caer
   en la de defecto de Pillow**, que es un mapa de bits ilegible al ampliar.
3. Ilustración de Gemini escalada al ancho útil, en la mitad superior.
4. **Clave de color** en el tercio inferior: cuadro de color + nombre del hueso.
   Término TA como principal y el clásico del profesor entre paréntesis
   (§3 del prompt de Semana 1): "Maxilar (maxilar superior)",
   "Cigomático (malar)", "Nasal (hueso propio de la nariz)", "Lagrimal (unguis)".
5. Los pendientes en gris claro con la marca `— pendiente, clase 4`.
6. Pie de lámina: `MedCore · Anatomía Humana y Disección I · UAD · Semana 1`.

**Después**, Code registra los tres `AtlasTopic` nuevos según §5.7 del prompt de
Semana 1 (`category: 'anatomia'`, `colorKey: 'osteologia'`, 6–8 `AtlasQuestion`,
`relatedTopicIds` cruzados) y sustituye la imagen del `AtlasTopic` de locomotor,
que ya existe.

En la lámina 4 el paso 4 de composición **no es una clave de color** sino la
tabla comparativa de §7.2 más el bloque de datos. Si no cabe legible a 1024 px
de ancho, reduce la ilustración antes que el cuerpo de texto: la tabla es el
entregable pedagógico, el dibujo es el índice visual.

**No commitees** los PNG base de `docs/atlas-fuentes/` — son insumos, no
producto. Solo entran al repo las tres láminas finales de `public/atlas/`.
