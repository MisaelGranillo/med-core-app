/*
 * Tipos compartidos para el contenido de los temas PAI.
 * Bloque-a-bloque: cada Block encapsula un elemento de contenido.
 */

export type BlockType =
  | 'h2' | 'h3'       // Encabezados de sección / subtema
  | 'p'               // Párrafo de texto
  | 'list'            // Lista de viñetas
  | 'table'           // Tabla con encabezados y filas
  | 'note'            // Callout informativo (amarillo)
  | 'warning'         // Callout de advertencia (rojo)
  | 'formula'         // Fórmula / ecuación con descripción opcional
  | 'comparison'      // Dos columnas comparativas

export interface Block {
  t: BlockType
  // Para h2, h3, p, note, warning:
  c?: string
  // Para list:
  items?: string[]
  // Para table:
  h?: string[]    // encabezados
  r?: string[][]  // filas
  // Para formula:
  f?: string      // la fórmula
  d?: string      // descripción
  // Para comparison:
  left?: { title: string; items: string[] }
  right?: { title: string; items: string[] }
}

export interface PaiTema {
  modulo: string        // slug del módulo padre
  id: string            // identificador único del tema
  orden: number         // posición en el módulo (1-based)
  titulo: string        // título completo del tema
  icono: string         // emoji representativo
  resumen: string       // descripción de 1-2 oraciones
  bloques: Block[]      // contenido principal
  mnemotecnia: {
    titulo?: string
    items: string[]     // cada mnemotecnia como string
  }
  puntosClave: string[] // bullets para "⭐ Puntos clave para el examen"
  errorFrecuente?: string  // texto del error frecuente
  generadoPorIA?: boolean  // true si fue generado con enriquecimiento IA
}
