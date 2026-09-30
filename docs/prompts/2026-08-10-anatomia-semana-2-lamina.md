# PROMPT — Lámina del Atlas MedCore · Tórax óseo (Semana 2)

> **Destinatario:** IA generadora de imágenes (**Gemini / Nano Banana**).
> **Consumidor final:** Claude Code, que compone la lámina y la registra en
> `src/data/atlas-topics.ts` + `public/atlas/torax-oseo.png`.
> **Materia:** Anatomía Humana y Disección I · UAD · Semana 2 · Clase 1.
> Hermano de `2026-08-10-anatomia-semana-2.md` (AtlasTopic `torax-oseo`, §5.4).

Rige la misma arquitectura que `2026-08-05-laminas-atlas-imagen.md`: **la IA de
imágenes no escribe ni una palabra.** En osteología la etiqueta *es* el contenido;
"tubérculo escalénico" mal escrito es la respuesta del examen aprendida mal. Gemini
produce solo la ilustración con huesos diferenciados por color plano; Code superpone
todo el texto verificado (regla TA principal / clásico entre paréntesis).

Aplica la **especificación de estilo global** (§2) y las **reglas duras** (§3) de
aquel documento sin cambios: 2:3 vertical, fondo `#EFF6FF`, ilustración editorial
no fotorrealista, colores planos distinguibles en escala de grises y para daltonismo
rojo-verde, tercio inferior vacío para la leyenda.

---

## LÁMINA — Tórax óseo (esternón y costillas)

Archivo final: `public/atlas/torax-oseo.png`

### Prompt para Gemini

```
Ilustración médica editorial del tórax óseo humano adulto (caja torácica),
en tres vistas dispuestas dentro de un lienzo vertical de proporción 2:3.

DISPOSICIÓN:
- Arriba a la izquierda: vista anterior de la caja torácica completa
  (esternón, 12 pares de costillas y cartílagos costales, vértebras torácicas
  al fondo), ocupando ~50% del ancho.
- Arriba a la derecha: esternón aislado en vista anterior, a mayor escala,
  mostrando con nitidez sus tres partes y las incisuras del manubrio.
- En el centro, debajo: una costilla típica aislada (p. ej. la 6.ª) en vista
  posteroinferior, mostrando cabeza, cuello, tubérculo, ángulo y cuerpo con
  el surco costal; junto a ella, la 1.ª costilla aislada vista desde arriba,
  para exhibir su cara superior ancha y plana.
- El tercio inferior del lienzo queda completamente vacío, solo color de fondo.

CÓDIGO DE COLOR — cada elemento con un color plano, idéntico en todas las vistas:
- Manubrio del esternón: naranja cálido medio
- Cuerpo del esternón: verde medio
- Proceso xifoides: amarillo dorado
- Costillas verdaderas (1.ª a 7.ª): azul medio
- Costillas falsas no flotantes (8.ª a 10.ª): morado medio
- Costillas flotantes (11.ª y 12.ª): rojo coral
- Cartílagos costales: gris azulado claro y neutro, más apagado que los anteriores
- Vértebras torácicas del fondo: gris muy claro, casi neutro, para no competir
- En la costilla típica aislada y en la 1.ª costilla aislada: mismo azul de las
  verdaderas, con el surco costal insinuado por una leve variación de valor
  (sin dibujar líneas ni texto)

EXACTITUD ANATÓMICA OBLIGATORIA:
- 12 pares de costillas; las 7 primeras articulan con el esternón por cartílago
  propio; 8.ª–10.ª unen su cartílago al de la 7.ª; 11.ª y 12.ª terminan libres.
- El esternón muestra manubrio (trapezoidal, con la incisura yugular central y
  las dos incisuras claviculares), cuerpo alargado y proceso xifoides pequeño.
- La 1.ª costilla aislada es la más corta, ancha y aplanada, con curvatura cerrada.
- La costilla típica muestra cabeza, cuello, tubérculo, ángulo y cuerpo aplanado.
- Proporciones y oblicuidad descendente de las costillas anatómicamente correctas.
```

Añade al final el bloque **REGLAS ABSOLUTAS** de §3 del documento maestro (cero
tipografía, cero flechas, cada elemento un color plano, suturas/límites como borde
entre colores, 2:3, tercio inferior vacío). Si sale texto: **regenera, no edites.**

### Clave de color y leyenda que compone Claude Code (texto real, verificado)

Code superpone, en el tercio inferior, la clave de color con estos rótulos
(TA principal · clásico entre paréntesis), coherentes con el Topic `torax-oseo`:

- Manubrio (naranja) — incisura yugular (horquilla esternal) e incisuras
  claviculares; recibe la 1.ª costilla
- Cuerpo del esternón (verde) — recibe de la 3.ª a la 6.ª costilla
- Proceso xifoides (dorado) — apéndice xifoides; fosita gástrica
- Costillas verdaderas 1–7 (azul) — vertebroesternales
- Costillas falsas 8–10 (morado) — vertebrocondrales
- Costillas flotantes 11–12 (coral) — falsas flotantes; 1 sola carilla en la cabeza
- Cartílagos costales (gris) · vértebras torácicas T1–T12 (dorsales D1–D12)

Marcadores numéricos (máx. 6) solo donde el color no basta, sobre la 1.ª costilla
aislada: (1) surco de la vena subclavia, (2) tubérculo del escaleno anterior
(tubérculo escalénico), (3) surco de la arteria subclavia. Y sobre la costilla
típica: (4) cabeza con cresta interarticular, (5) tubérculo del cuello, (6) ángulo.

> Nota para Code: la clase clasifica las flotantes como subconjunto de las falsas
> (falsas 8–12; flotantes 11–12). Si prefieres una sola banda de color para "falsas
> 8–12", hazlo y refléjalo en la leyenda; lo importante es que la lámina no
> contradiga el Topic ni el banco de reactivos.
