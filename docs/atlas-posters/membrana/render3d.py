# Renderiza una vista de un modelo 3D (public/models) y la recorta a su contenido.
# Uso: python3 render3d.py <nombre> "<query>"  → ana3d/<nombre>.png + ana3d/<nombre>.json (puntos de rótulo)
# Requiere el servidor de desarrollo en :5173. Modelos: Open 3D Model / Z-Anatomy (CC BY-SA 4.0).
import sys, json, subprocess, pathlib
from PIL import Image
HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
def render(name, query, pad=24):
    out = HERE / 'ana3d' / f'{name}.png'; out.parent.mkdir(exist_ok=True)
    subprocess.run(['node', str(ROOT / 'scripts/atlas-render.mjs'), str(out), query], check=True, cwd=ROOT, timeout=240)
    im = Image.open(out); pts = json.loads((out.with_suffix('.json')).read_text() or '{}')
    x0, y0, x1, y1 = im.getbbox()
    x0, y0 = max(0, x0 - pad), max(0, y0 - pad); x1, y1 = min(im.width, x1 + pad), min(im.height, y1 + pad)
    im.crop((x0, y0, x1, y1)).save(out)
    pts = {k: [v[0] - x0, v[1] - y0] for k, v in pts.items()}
    out.with_suffix('.json').write_text(json.dumps({'w': x1 - x0, 'h': y1 - y0, 'pts': pts}))
    print(name, x1 - x0, 'x', y1 - y0, sorted(pts))
if __name__ == '__main__': render(sys.argv[1], sys.argv[2])
