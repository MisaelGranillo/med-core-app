/* Descarga de archivos generados en el navegador (.md, .ics). Los PDF y el
 * ZIP del taller nunca se generan aquí: son estáticos en /taller/descargas. */

export function descargarTexto(nombre: string, contenido: string, tipo: string): void {
  const blob = new Blob([contenido], { type: `${tipo};charset=utf-8` })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nombre
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

/** Fecha local «AAAA-MM-DD». */
export function hoyIso(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** Escapa el texto de una celda de tabla Markdown. */
export function celdaMd(s: string): string {
  return s.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ')
}

/** Formatea horas con coma decimal: 7.5 → «7,5». */
export function horasTexto(h: number): string {
  return Number.isInteger(h) ? String(h) : h.toFixed(1).replace('.', ',')
}
