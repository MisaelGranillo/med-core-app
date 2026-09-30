# Uso: python3 build.py src/<lamina>.html [salida.png]
# Incrusta CSS, iconos ({{icon:Nombre}}) e imágenes ({{img:ruta}}) y renderiza a PNG 2048×3072 con Chrome headless.
import re, sys, base64, pathlib, subprocess
from icons import icon, exists
from callout import block
import json
HERE = pathlib.Path(__file__).resolve().parent
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
def build(src, out=None):
    src = pathlib.Path(src).resolve(); s = src.read_text()
    miss = [n for n in set(re.findall(r'\{\{icon:(\w+)\}\}', s)) if not exists(n)]
    if miss: sys.exit('iconos inexistentes: ' + ', '.join(miss))
    s = s.replace('<link rel="stylesheet" href="membrana.css">', f'<style>{(HERE / "membrana.css").read_text()}</style>')
    # <script type="callout">{...}</script> → bloque de rótulos (ver callout.py)
    def co(m):
        c = json.loads(m.group(1))
        return block(c['img'], c['w'], c['h'], c['height'], c['L'], c['cw'], c['ch'],
                     [tuple(x[:2]) + (tuple(x[2]), x[3]) for x in c.get('left', [])],
                     [tuple(x[:2]) + (tuple(x[2]), x[3]) for x in c.get('right', [])], c.get('rx'))
    s = re.sub(r'<script type="callout">(.*?)</script>', co, s, flags=re.S)
    s = re.sub(r'\{\{icon:(\w+)\}\}', lambda m: icon(m.group(1)), s)
    def img(m):
        p = (HERE / m.group(1)).resolve(); ext = p.suffix[1:].replace('jpg', 'jpeg').replace('svg', 'svg+xml')
        return f'data:image/{ext};base64,' + base64.b64encode(p.read_bytes()).decode()
    s = re.sub(r'\{\{img:([^}]+)\}\}', img, s)
    built = HERE / 'build' / (src.stem + '.html'); built.parent.mkdir(exist_ok=True); built.write_text(s)
    out = pathlib.Path(out or HERE / 'build' / (src.stem + '.png')).resolve()
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=1024,1536',
                    '--force-device-scale-factor=2', '--virtual-time-budget=8000', f'--screenshot={out}', built.as_uri()],
                   check=True, capture_output=True)
    print('renderizado', out)
if __name__ == '__main__': build(*sys.argv[1:])
