# Extrae iconos Phosphor (duotone) como SVG en línea desde node_modules
import re, pathlib
D = pathlib.Path(__file__).resolve().parents[3] / 'node_modules/@phosphor-icons/react/dist/defs'
def exists(name): return (D / f'{name}.es.js').exists()
def icon(name, weight='duotone'):
    s = (D / f'{name}.es.js').read_text()
    i = s.index(f'"{weight}"'); j = s.find('\n  ],', i); blk = s[i:j]
    out = []
    for tag, attrs in re.findall(r'createElement\(\s*"(\w+)",\s*\{(.*?)\}\s*\)', blk, flags=re.S):
        kv = re.findall(r'(\w+):\s*"([^"]*)"', attrs)
        a = ' '.join(f'{re.sub(r"([A-Z])", lambda m: "-" + m.group(1).lower(), k)}="{v}"' for k, v in kv)
        out.append(f'<{tag} {a}/>')
    return f'<svg class="ic" viewBox="0 0 256 256" fill="currentColor">{"".join(out)}</svg>'
