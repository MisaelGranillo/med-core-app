/* Render de Markdown para el laboratorio .md: marked (GFM) + DOMPurify.
 * El HTML siempre pasa por DOMPurify antes de insertarse en la página. */

import { marked } from 'marked'
import DOMPurify from 'dompurify'

let hookListo = false
function prepararPurificador() {
  if (hookListo) return
  // Los enlaces de la vista previa abren en otra pestaña, sin acceso a esta.
  DOMPurify.addHook('afterSanitizeAttributes', nodo => {
    if (nodo.tagName === 'A' && nodo.getAttribute('href')) {
      nodo.setAttribute('target', '_blank')
      nodo.setAttribute('rel', 'noopener noreferrer')
    }
  })
  hookListo = true
}

export function renderMarkdown(texto: string): string {
  prepararPurificador()
  const html = marked.parse(texto, { gfm: true, breaks: false, async: false }) as string
  const limpio = DOMPurify.sanitize(html, { USE_PROFILES: { html: true }, FORBID_TAGS: ['style', 'form'], FORBID_ATTR: ['style'] })
  // Las tablas se envuelven para desplazarse dentro de su caja en pantallas angostas.
  return limpio.replace(/<table>/g, '<div class="md-tabla"><table>').replace(/<\/table>/g, '</table></div>')
}

/** «Bioquímica I» → «bioquimica-i» para nombres de archivo. */
export function slug(s: string): string {
  return s
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}
