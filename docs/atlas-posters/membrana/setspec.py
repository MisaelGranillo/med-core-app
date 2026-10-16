# Ajusta claves de un bloque auto3d: python3 setspec.py archivo.html ana3d/x.png '{"height":370}'
import sys, re, json, pathlib
p = pathlib.Path(sys.argv[1]); s = p.read_text(); img = sys.argv[2]; upd = json.loads(sys.argv[3])
def f(m):
    d = json.loads(m.group(1))
    if d.get('img') != img: return m.group(0)
    d.update(upd); return '<script type="auto3d">' + json.dumps(d, ensure_ascii=False) + '</script>'
s2 = re.sub(r'<script type="auto3d">(.*?)</script>', f, s, flags=re.S); p.write_text(s2); print('ok' if s2 != s else 'SIN CAMBIOS')
