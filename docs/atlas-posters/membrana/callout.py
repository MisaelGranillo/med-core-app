# Genera un bloque de rótulos: puntos en coordenadas del recorte → posiciones en el póster
def block(img, nat_w, nat_h, height, L, cw, ch, left, right, rx=None, top=4):
    k = height / nat_h; w = nat_w * k; rx = rx if rx is not None else round(L + w + 8)
    lines, labels = [], []
    for title, sub, (px, py), ly in left:
        X, Y = round(L + px * k), round(top + py * k)
        lines.append(f'<line x1="{L - 6}" y1="{ly}" x2="{X}" y2="{Y}"/><circle cx="{X}" cy="{Y}" r="2.4"/>')
        labels.append(f'<div class="lbl" style="left:0;top:{ly - 14}px;width:{L - 10}px;text-align:right"><b>{title}</b>{sub}</div>')
    for title, sub, (px, py), ly in right:
        X, Y = round(L + px * k), round(top + py * k)
        lines.append(f'<line x1="{rx}" y1="{ly}" x2="{X}" y2="{Y}"/><circle cx="{X}" cy="{Y}" r="2.4"/>')
        labels.append(f'<div class="lbl" style="left:{rx + 4}px;top:{ly - 14}px;width:{cw - rx - 4}px"><b>{title}</b>{sub}</div>')
    return (f'<div class="callouts" style="width:{cw}px;height:{ch}px;margin:0 auto">\n'
            f'  <img src="{{{{img:{img}}}}}" style="position:absolute;left:{L}px;top:{top}px;height:{height}px">\n'
            f'  <svg class="lines">{"".join(lines)}</svg>\n  ' + '\n  '.join(labels) + '\n</div>')
