# Bloque de rótulos automático a partir de ana3d/<nombre>.json (ver render3d.py).
import json, pathlib
from callout import block
HERE = pathlib.Path(__file__).resolve().parent
def auto(spec):
    meta = json.loads((HERE / spec['img']).with_suffix('.json').read_text())
    W, Hh, pts = meta['w'], meta['h'], meta['pts']
    height, cw = spec['height'], spec['cw']
    k = height / Hh; w = W * k
    L = spec.get('L', round((cw - w) / 2)); ch = spec.get('ch', height + 8); gap = spec.get('gap', 30)
    sides = {'left': [], 'right': []}
    for key, lab in spec['labels'].items():
        if len(lab) > 2: px, py = lab[2]  # punto fijado a mano (px de la imagen recortada)
        elif key in pts: px, py = pts[key]
        else: continue
        side = spec.get('side', {}).get(key) or ('left' if L + px * k < L + w / 2 else 'right')
        sides[side].append([lab[0], lab[1] if len(lab) > 1 else '', [px, py], 4 + py * k])
    for items in sides.values():
        items.sort(key=lambda t: t[3])
        for i, it in enumerate(items):  # separa los rótulos hacia abajo
            it[3] = max(it[3], 16 if i == 0 else items[i - 1][3] + gap)
        over = (items[-1][3] - (ch - 14)) if items else 0
        if over > 0:  # si se salen por abajo, desplaza todo hacia arriba
            for it in items: it[3] -= over
            for i in range(len(items) - 2, -1, -1): items[i][3] = min(items[i][3], items[i + 1][3] - gap)
        for it in items: it[3] = round(it[3])
    return block(spec['img'], W, Hh, height, L, cw, ch, [tuple(x[:2]) + (tuple(x[2]), x[3]) for x in sides['left']],
                 [tuple(x[:2]) + (tuple(x[2]), x[3]) for x in sides['right']], spec.get('rx'))
