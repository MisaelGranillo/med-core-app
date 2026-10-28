/* Textos largos del taller que se editan sin tocar los componentes. */

/** Ejemplo de instrucciones personalizadas en «estilo directo», precargado como
 *  referencia en /taller/instrucciones. Pendiente: Misael proporciona el texto.
 *  Mientras esté vacío, el bloque colapsable no se muestra. */
export const EJEMPLO_INSTRUCCIONES_DIRECTO = ''

/** Límites del plan gratuito de Gemini Notebook (antes NotebookLM). Se
 *  muestran con su fecha de verificación; actualizar ambos juntos. */
export const LIMITES_GEMINI_NOTEBOOK = {
  verificado: '2026-10-28',
  cuadernos: 100,
  fuentesPorCuaderno: 50,
  preguntasPorDia: 50,
  audiosPorDia: 3,
} as const
