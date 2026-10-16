// Renderiza vistas de los modelos 3D (public/models) para las láminas del Atlas.
// Uso: node scripts/atlas-render.mjs <salida.png> "<query de render-atlas.html>"
// Requiere el servidor de desarrollo en http://localhost:5173 (sirve render-atlas.html).
// Modelos: Open 3D Model / Z-Anatomy, CC BY-SA 4.0 → las imágenes derivadas llevan esa licencia.
import { spawn } from 'node:child_process'
import { writeFileSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const [out, query] = process.argv.slice(2)
if (!out || !query) { console.error('uso: node scripts/atlas-render.mjs salida.png "model=...&view=..."'); process.exit(1) }
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const port = 9300 + Math.floor(Math.random() * 400)
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'atlas-'))}`,
  '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' })
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
let target
for (let i = 0; i < 50 && !target; i++) {
  await sleep(200)
  try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page') } catch {}
}
const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((r) => ws.addEventListener('open', r))
let id = 0
const call = (method, params = {}) => new Promise((res) => {
  const my = ++id
  const on = (ev) => { const m = JSON.parse(ev.data); if (m.id === my) { ws.removeEventListener('message', on); res(m.result) } }
  ws.addEventListener('message', on); ws.send(JSON.stringify({ id: my, method, params }))
})
await call('Page.navigate', { url: `http://localhost:5173/render-atlas.html?${query}` })
let ok = false
for (let i = 0; i < 300 && !ok; i++) {
  await sleep(200)
  const r = await call('Runtime.evaluate', { expression: 'document.title' })
  ok = r?.result?.value === 'done'
}
if (!ok) { console.error('tiempo agotado'); chrome.kill(); process.exit(1) }
const r = await call('Runtime.evaluate', { expression: 'document.querySelector("img").src' })
writeFileSync(out, Buffer.from(r.result.value.split(',')[1], 'base64'))
const pj = await call('Runtime.evaluate', { expression: 'JSON.stringify(window.__pts || {})' })
writeFileSync(out.replace(/\.png$/, '.json'), pj.result.value)
console.log('renderizado', out)
ws.close(); chrome.kill()
