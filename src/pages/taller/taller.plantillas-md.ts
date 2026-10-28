/* Plantillas precargables del laboratorio .md (/taller/markdown).
 * `tipo` se usa en el nombre del archivo: AAAA-MM-DD_materia_tipo.md */

export interface PlantillaMd {
  id: string
  nombre: string
  tipo: string
  contenido: string
}

export const PLANTILLAS_MD: PlantillaMd[] = [
  {
    id: 'apunte',
    nombre: 'Apunte de clase',
    tipo: 'apunte',
    contenido: `# Tema de la clase

**Materia:** Histología · **Semana:** 1 · **Fecha:** AAAA-MM-DD

## Ideas principales

- Primera idea con un **término clave**
- Segunda idea
- Tercera idea

## Conceptos para memorizar

| Concepto | Definición |
| --- | --- |
| Concepto 1 | Definición breve |
| Concepto 2 | Definición breve |

## Preguntas para recuperar de memoria

1. ¿Pregunta 1?
2. ¿Pregunta 2?

## Dudas para la próxima clase

- Duda
`,
  },
  {
    id: 'transcripcion',
    nombre: 'Transcripción a apuntes',
    tipo: 'transcripcion',
    contenido: `# Clase: tema

**Materia:** · **Docente:** · **Fecha:** AAAA-MM-DD

## Lo que el profesor dijo que viene en el examen

- 

## Temas de la clase (ordenados)

### Tema 1

- 

### Tema 2

- 

## Tareas, fechas y avisos

- [ ] Tarea · fecha de entrega

## Datos por verificar en el libro

- (verificar) 
`,
  },
  {
    id: 'caso',
    nombre: 'Caso clínico',
    tipo: 'caso-clinico',
    contenido: `# Caso clínico: título

## Ficha

- **Edad y sexo:**
- **Motivo de consulta:**

## Historia clínica

- **Padecimiento actual:**
- **Antecedentes relevantes:**

## Exploración física

- 

## Estudios

| Estudio | Resultado | Interpretación |
| --- | --- | --- |
|  |  |  |

## Diagnósticos diferenciales

1. 
2. 

## Relación con la ciencia básica

- ¿Qué estructura, tejido o vía metabólica explica el cuadro?

## Lo que aprendí

- 
`,
  },
  {
    id: 'revision',
    nombre: 'Revisión semanal',
    tipo: 'revision-semanal',
    contenido: `# Revisión semanal

**Semana del:** AAAA-MM-DD

## Los datos

- Bloques planeados: 
- Bloques cumplidos: 

## Próximos 14 días

- [ ] Entrega o examen · fecha

## Lo que más me costó

- 

## Ajustes para la próxima semana

- 
`,
  },
  {
    id: 'capitulo',
    nombre: 'Resumen de capítulo',
    tipo: 'resumen-capitulo',
    contenido: `# Capítulo N: título

**Libro:** · **Páginas:**

## En una frase

> Idea central del capítulo.

## Ideas principales

1. 
2. 
3. 

## Tabla de conceptos

| Concepto | Qué es | Dónde aparece (pág.) |
| --- | --- | --- |
|  |  |  |

## Correlaciones clínicas

- 

## Preguntas de repaso

1. 
2. 
`,
  },
]
