# Renderiza vistas del modelo de cabeza y cuello exportado de Z-Anatomy (za/head-neck.glb, CC BY-SA 4.0).
# Uso: python3 za_render.py <nombre> '<json con show/hide/hl/view/pts/pad/...>'
import sys, json, urllib.parse
from render3d import render
name, spec = sys.argv[1], json.loads(sys.argv[2])
q = {'model': '../docs/atlas-posters/membrana/za/' + spec.pop('model', 'head-neck') + '.glb', 'w': 1400, 'h': 1400}
for k, v in spec.items():
    if k == 'hl': v = ';'.join(f'{r}={c}' for r, c in v.items())
    if k == 'pts': v = ';'.join(f'{k2}~{r}' for k2, r in v.items())
    q[k] = v
render(name, urllib.parse.urlencode(q, quote_via=urllib.parse.quote))
