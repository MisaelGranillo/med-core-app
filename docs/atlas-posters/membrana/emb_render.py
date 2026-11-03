# Renderiza vistas de los modelos de Embriología (emb3d/*.glb): órganos del Human Reference Atlas
# (útero, trompas y ovarios del Visible Human femenino, HuBMAP, CC BY 4.0) y modelos propios del embrión.
# Uso: python3 emb_render.py <nombre> '<json con model/show/hide/hl/view/pts/pad/clip/...>'
import sys, json, urllib.parse
from render3d import render
name, spec = sys.argv[1], json.loads(sys.argv[2])
q = {'model': '../docs/atlas-posters/membrana/emb3d/' + spec.pop('model', 'utero-anexos') + '.glb', 'w': 1400, 'h': 1400}
for k, v in spec.items():
    if k == 'hl': v = ';'.join(f'{r}={c}' for r, c in v.items())
    if k == 'pts': v = ';'.join(f'{k2}~{r}' for k2, r in v.items())
    q[k] = v
render(name, urllib.parse.urlencode(q, quote_via=urllib.parse.quote))
