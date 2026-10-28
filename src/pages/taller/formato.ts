/* Utilidades de formato compartidas por las páginas del taller. */

/** Tamaño legible en unidades decimales: 37206 → «37 KB», 1534324 → «1,5 MB». */
export function formatoTamano(bytes: number): string {
  if (bytes < 1000) return `${bytes} B`
  if (bytes < 1_000_000) return `${Math.round(bytes / 1000)} KB`
  return `${(bytes / 1_000_000).toFixed(1).replace('.', ',')} MB`
}
