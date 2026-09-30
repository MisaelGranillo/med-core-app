# Láminas histológicas — Histología I · Semana 2 (prompts para ChatGPT)

> Para: **Misael** (generación de imagen en ChatGPT/DALL·E). Fecha: 2026-09-11.
> Salida esperada: una imagen por lámina, estilo microfotografía H&E realista, **sin
> texto**. Las etiquetas y la clave de color se sobreponen después (paso 2, Claude Code)
> con los datos ya verificados.

## Cómo usarlas
1. Genera **una lámina a la vez** (pega el prompt tal cual).
2. Pide siempre **vertical 2:3**, sin texto, sin flechas, sin números, sin marco ni
   watermark. Si aparece texto inventado, regenera.
3. Guarda cada PNG con el **nombre de archivo** indicado (así luego mapea directo al Atlas).
4. Cuando tengas las que quieras, te escribo el prompt de Claude Code para montarlas en el
   Atlas de MedCore (categoría `celular`) con leyenda, clave de color y 6–8 preguntas.

## Advertencia de exactitud (léela)
Estas imágenes son **ilustraciones estilizadas**, no cortes reales: la IA puede inventar
detalles. Úsalas para *reconocer el patrón general* (nº de capas, forma celular,
especializaciones), **no** para memorizar morfología fina de identificación —para eso, el
atlas real (Ross / Junqueira). En MedCore se rotularán como "ilustración", y las
asociaciones de examen vienen del texto verificado, no de la imagen.

**Estilo base (incluido en cada prompt):** *"Realistic H&E-stained histology
photomicrograph, light microscopy, natural hematoxylin-eosin palette (purple-blue nuclei,
pink cytoplasm), clean single field, sharp focus, no text, no labels, no arrows, no
numbers, no scale bar, no borders, vertical 2:3 composition."*

---

## A. Epitelios de revestimiento (Clase 1–2)

**1. Epitelio plano simple — `epi-plano-simple`**
> H&E histology photomicrograph of **simple squamous epithelium**: a single thin layer of
> very flat cells with flattened nuclei lining a smooth surface (as in the lining of a
> vessel or Bowman's capsule), resting on a basement membrane, sparse connective tissue
> beneath. [estilo base]

**2. Epitelio cúbico simple — `epi-cubico-simple`**
> H&E photomicrograph of **simple cuboidal epithelium**: a single row of cube-shaped cells
> with central round nuclei surrounding a small lumen (as in a thyroid follicle or a renal
> tubule), on a basement membrane. [estilo base]

**3. Epitelio cilíndrico simple — `epi-cilindrico-simple`**
> H&E photomicrograph of **simple columnar epithelium**: a single row of tall column-shaped
> cells with basally located oval nuclei lining a lumen (as in the digestive tract), on a
> basement membrane. [estilo base]

**4. Plano estratificado NO queratinizado — `epi-plano-estrat-no-quer`**
> H&E photomicrograph of **non-keratinized stratified squamous epithelium** (as in the
> esophagus): several cell layers, cuboidal basal cells, flattened surface cells that STILL
> keep their nuclei, no surface keratin layer. [estilo base]

**5. Cilíndrico pseudoestratificado ciliado — `epi-pseudoestrat-ciliado`**
> H&E photomicrograph of **ciliated pseudostratified columnar epithelium** (as in the
> trachea): cells of different heights with nuclei at multiple levels, all touching the
> basement membrane, apical **cilia** and interspersed **goblet cells**. [estilo base]

**6. Epitelio de transición / urotelio — `epi-transicional-urotelio`**
> H&E photomicrograph of **transitional epithelium (urothelium)** of the urinary tract:
> several layers with large rounded/dome-shaped superficial **umbrella cells** facing the
> lumen, smaller basal cells on the basement membrane. [estilo base]

---

## B. Glándulas y órganos (Clase 3)

**7. Glándula mixta (acinos serosos y mucosos) — `glandula-mixta`**
> H&E photomicrograph of a **mixed salivary gland** (sublingual/submandibular): pale
> mucous acini with flattened basal nuclei next to darker serous acini with round basal
> nuclei, some serous cells forming **serous demilunes** capping mucous acini; a duct
> nearby. [estilo base]

**8. Corpúsculo renal / cápsula de Bowman — `corpusculo-renal-bowman`**
> H&E photomicrograph of a **renal corpuscle**: a rounded glomerular tuft of capillaries
> surrounded by **Bowman's capsule** (thin simple squamous parietal layer) with the
> urinary space between, surrounded by proximal and distal tubules. [estilo base]

**9. Epitelio respiratorio de la tráquea — `traquea-epitelio`**
> H&E photomicrograph of **tracheal wall**: tall ciliated pseudostratified columnar
> epithelium with goblet cells, apical cilia, basement membrane, and underlying connective
> tissue. [estilo base]

**10. Alvéolos pulmonares — `alveolo-pulmonar`**
> H&E photomicrograph of **lung alveoli**: thin-walled air spaces lined by flat **type I
> pneumocytes** with occasional rounded **type II pneumocytes**, delicate alveolar septa
> with capillaries. [estilo base]

---

## C. Piel (Clase 4)

**11. Piel gruesa — epidermis con estratos — `piel-gruesa-epidermis`**
> H&E photomicrograph of **thick skin (palm/sole)** showing the full epidermis from base to
> surface: basal layer on the dermo-epidermal junction, thick spinous layer, granular layer
> with dark granules, a clear pale **stratum lucidum**, and a thick outer **stratum
> corneum** of anucleate keratin; dermal papillae interdigitating below. [estilo base]

**12. Piel delgada — `piel-delgada-epidermis`** *(opcional, para contraste)*
> H&E photomicrograph of **thin skin**: a thinner keratinized stratified squamous
> epidermis (no visible stratum lucidum), a thin stratum corneum, dermal papillae, and a
> hair follicle with sebaceous gland in the dermis. [estilo base]

---

## Prioridad sugerida (si no quieres las 12)
Las de mayor rendimiento para el examen de la semana: **5** (tráquea pseudoestratificado
ciliado), **6** (urotelio/paraguas), **8** (cápsula de Bowman), **10** (alvéolo), **11**
(piel gruesa, los 5 estratos). Con esas cinco cubres el "núcleo duro" que marcó el examen.

## Paso 2 (cuando tengas las imágenes)
Avísame qué láminas quedaron y con qué nombre; escribo el prompt para Claude Code que las
añade al Atlas de MedCore (categoría `celular`, colorKey `histologia`) con leyenda, clave
de color sobre la imagen y 6–8 preguntas por lámina, marcando ★ las asociaciones de examen.
Recuerda: los PNG van al Atlas del repo (o a la biblioteca); las imágenes se rotulan como
ilustración, no como corte real.
