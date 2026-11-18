# Genera los esquemas de la lámina «Cabeza y cuello: aparato faríngeo y cara» (ana/cc-*.svg).
# Esquemas propios, simplificados y no a escala. Uso: python3 cabeza_svg.py ana
import sys
OUT = sys.argv[1]
navy = '#13295b'; muted = '#6b7280'; red = '#c8242c'
A = {1: '#e8912e', 2: '#3d8b5a', 3: '#2f6db5', 4: '#7a5ba8', 6: '#c8242c'}       # color por arco
TINT = {1: '#fbe3c7', 2: '#d5ead9', 3: '#d4e2f4', 4: '#e5ddf0', 6: '#f6d3d5'}
ENDO = '#f2d27a'; ECTO = '#8fb9e3'
def txt(x, y, s, size=10, fill=navy, anchor='middle', w=700):
    return f'<text font-family="Helvetica, Arial, sans-serif" x="{x}" y="{y}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{w}">{s}</text>'
def svg(W, H): return [f'<svg viewBox="0 0 {W} {H}" width="{W}" height="{H}" xmlns="http://www.w3.org/2000/svg">',
    f'<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{navy}"/></marker></defs>']
def save(n, s): open(f'{OUT}/{n}.svg', 'w').write('\n'.join(s + ['</svg>']))

# ── 1. Corte frontal del aparato faríngeo (un lado) con derivados ──
W, H = 470, 268; s = svg(W, H)
gx = 210                                   # borde izquierdo del intestino faríngeo
s.append(f'<rect x="{gx}" y="8" width="34" height="252" rx="10" fill="{ENDO}"/>')
s.append(f'<text font-family="Helvetica, Arial, sans-serif" font-size="9" font-weight="700" fill="#8a6a12" transform="translate({gx+20},134) rotate(-90)" text-anchor="middle">intestino faríngeo (endodermo)</text>')
s.append(f'<line x1="20" y1="8" x2="20" y2="260" stroke="{ECTO}" stroke-width="5" stroke-linecap="round"/>')
arcos = [(1, 12, 58, 'V'), (2, 66, 112, 'VII'), (3, 120, 162, 'IX'), (4, 170, 208, 'X sup.'), (6, 216, 252, 'X rec.')]
for n, y0, y1, nerv in arcos:
    s.append(f'<rect x="24" y="{y0}" width="{gx-30}" height="{y1-y0}" rx="14" fill="{TINT[n]}" stroke="{A[n]}" stroke-width="1.6"/>')
    cy = (y0 + y1) / 2
    s.append(f'<rect x="70" y="{cy-4}" width="56" height="8" rx="4" fill="{A[n]}" opacity=".85"/>')     # cartílago
    s.append(f'<circle cx="150" cy="{cy}" r="5.5" fill="#fff" stroke="{navy}" stroke-width="1.4"/>')     # nervio
    s.append(txt(46, cy + 4, f'{n}', 13, A[n], 'middle', 800)); s.append(txt(176, cy + 4, nerv, 9.5, navy, 'start', 800))
for k, y in enumerate([62, 116, 166, 212], 1):
    s.append(f'<path d="M{gx},{y-3} L{gx-92},{y-2} Q{gx-100},{y} {gx-92},{y+2} L{gx},{y+3} Z" fill="{ENDO}"/>')     # bolsa
    s.append(f'<path d="M20,{y-3} L{52 if k == 1 else 46},{y} L20,{y+3} Z" fill="{ECTO}"/>')                       # hendidura
der = ['1.ª bolsa: cavidad timpánica y trompa', '2.ª: amígdala palatina', '3.ª: paratiroides INFERIORES y timo', '4.ª: paratiroides SUPERIORES y cuerpo ultimobranquial (células C)']
for k, (y, t) in enumerate(zip([62, 116, 166, 212], der)):
    s.append(f'<line x1="{gx+40}" y1="{y}" x2="{gx+58}" y2="{y}" stroke="{navy}" stroke-width="1.4" marker-end="url(#ar)"/>')
    words = t.split(' '); line = ''; lines = []
    for w_ in words:
        if len(line + ' ' + w_) > 30: lines.append(line); line = w_
        else: line = (line + ' ' + w_).strip()
    lines.append(line)
    for j, l in enumerate(lines): s.append(txt(gx + 62, y + 4 + j * 12 - (len(lines) - 1) * 6, l, 9.6, navy, 'start', 700 if j == 0 else 600))
s.append(txt(gx + 62, 250, '1.ª hendidura: conducto auditivo externo', 9.6, '#2f6db5', 'start', 800))
s.append(txt(gx + 62, 262, '○ nervio · ▬ cartílago (cresta neural)', 8.6, muted, 'start', 600))
save('cc-faringeo', s)

# ── 2. Seno cervical ──
W, H = 250, 128; s = svg(W, H)
for i, (ox, lab) in enumerate([(10, 'semana 5'), (132, 'semana 6–7')]):
    s.append(f'<line x1="{ox+20}" y1="10" x2="{ox+20}" y2="112" stroke="{ECTO}" stroke-width="4" stroke-linecap="round"/>')
    for k, (n, y) in enumerate([(2, 22), (3, 52), (4, 78)]):
        s.append(f'<rect x="{ox+24}" y="{y}" width="70" height="{24 if n == 2 else 20}" rx="10" fill="{TINT[n]}" stroke="{A[n]}" stroke-width="1.4"/>')
        s.append(txt(ox + 85, y + 15, str(n), 10, A[n], 'middle', 800))
    if i == 0:
        for y in (48, 75, 100): s.append(f'<path d="M{ox+20},{y-3} L{ox+38},{y} L{ox+20},{y+3} Z" fill="{ECTO}"/>')
        s.append(f'<path d="M{ox+40},{36} Q{ox+28},{60} {ox+34},{86}" fill="none" stroke="{A[2]}" stroke-width="2.4" marker-end="url(#ar)"/>')
    else:
        s.append(f'<path d="M{ox+24},{36} Q{ox+10},{70} {ox+26},{104} L{ox+30},{104} Q{ox+18},{70} {ox+30},{40} Z" fill="{A[2]}" opacity=".8"/>')
        s.append(f'<ellipse cx="{ox+40}" cy="{74}" rx="10" ry="22" fill="{ECTO}" opacity=".9"/>')
        s.append(txt(ox + 40, 122, 'seno cervical', 9.5, '#2f6db5', 'middle', 800))
    s.append(txt(ox + 55, 122, 'semana 5', 9, muted, 'middle', 700) if i == 0 else txt(ox + 60, 8, 'semana 6–7', 9, muted, 'middle', 700))
save('cc-seno', s)

# ── 3. Lengua: piso de la faringe y lengua definitiva ──
W, H = 300, 200; s = svg(W, H)
s.append(txt(73, 10, 'Piso de la faringe', 9.5, muted, 'middle', 700))
s.append(txt(73, 24, 'protuberancias linguales', 8.2, A[1], 'middle', 800))
s.append(f'<ellipse cx="52" cy="54" rx="21" ry="24" fill="{TINT[1]}" stroke="{A[1]}" stroke-width="1.6"/>')
s.append(f'<ellipse cx="94" cy="54" rx="21" ry="24" fill="{TINT[1]}" stroke="{A[1]}" stroke-width="1.6"/>')
s.append(f'<circle cx="73" cy="72" r="8" fill="{A[1]}" opacity=".85"/>')
s.append(f'<line x1="81" y1="72" x2="120" y2="66" stroke="{A[1]}" stroke-width="1"/>'); s.append(txt(122, 69, 'tubérculo impar', 8.2, A[1], 'start', 800))
s.append(f'<circle cx="73" cy="88" r="3.5" fill="{navy}"/>'); s.append(f'<line x1="77" y1="88" x2="120" y2="88" stroke="{navy}" stroke-width="1"/>'); s.append(txt(122, 91, 'foramen ciego', 8.2, navy, 'start', 800))
s.append(f'<path d="M30,98 Q73,92 116,98 L112,136 Q73,144 34,136 Z" fill="{TINT[3]}" stroke="{A[3]}" stroke-width="1.6"/>')
s.append(txt(73, 113, 'cópula /', 8, A[3], 'middle', 800)); s.append(txt(73, 123, 'eminencia', 8, A[3], 'middle', 800)); s.append(txt(73, 133, 'hipobranquial', 8, A[3], 'middle', 800))
s.append(f'<ellipse cx="73" cy="154" rx="22" ry="8" fill="{TINT[4]}" stroke="{A[4]}" stroke-width="1.6"/>')
s.append(txt(73, 176, 'epiglotis (4.º arco)', 8.2, A[4], 'middle', 800))
# lengua definitiva
s.append(txt(225, 12, 'Lengua definitiva', 9.5, muted, 'middle', 700))
s.append(f'<path d="M185,30 Q225,18 265,30 L262,110 Q225,120 188,110 Z" fill="{TINT[1]}" stroke="{A[1]}" stroke-width="1.6"/>')
s.append(f'<path d="M188,110 Q225,120 262,110 L258,150 Q225,160 192,150 Z" fill="{TINT[3]}" stroke="{A[3]}" stroke-width="1.6"/>')
s.append(f'<path d="M188,110 L225,128 L262,110" fill="none" stroke="{navy}" stroke-width="1.4" stroke-dasharray="3 2"/>')
s.append(f'<circle cx="225" cy="128" r="3" fill="{navy}"/>')
s.append(f'<ellipse cx="225" cy="166" rx="18" ry="7" fill="{TINT[4]}" stroke="{A[4]}" stroke-width="1.4"/>')
s.append(txt(225, 60, '2/3 anteriores', 9, A[1], 'middle', 800)); s.append(txt(225, 74, 'sensibilidad V3', 8.6, navy, 'middle', 700)); s.append(txt(225, 86, 'gusto VII (cuerda', 8.6, navy, 'middle', 700)); s.append(txt(225, 96, 'del tímpano)', 8.6, navy, 'middle', 700))
s.append(txt(225, 143, '1/3 posterior: IX', 8.8, A[3], 'middle', 800)); s.append(txt(225, 186, 'X (laríngeo sup.)', 8.6, A[4], 'middle', 800))
s.append(txt(150, 198, 'Músculos: somitas occipitales → hipogloso (XII)', 8.8, red, 'middle', 800))
save('cc-lengua', s)

# ── 4. Descenso de la tiroides ──
W, H = 230, 210; s = svg(W, H)
s.append(f'<path d="M14,40 Q60,8 120,30 Q140,40 132,62 Q100,78 40,72 Q16,66 14,40 Z" fill="#f3c6cc" stroke="#d98a96" stroke-width="1.4"/>')
s.append(txt(66, 50, 'lengua', 9, '#a24b5a', 'middle', 700))
s.append(f'<circle cx="112" cy="40" r="4" fill="{navy}"/>'); s.append(txt(120, 26, 'foramen ciego', 8.6, navy, 'start', 800))
s.append(f'<rect x="96" y="92" width="34" height="8" rx="3" fill="#ddd2b8" stroke="#a89b78"/>'); s.append(txt(136, 99, 'hioides', 8.6, muted, 'start', 700))
s.append(f'<path d="M100,112 h28 v26 h-28 z" fill="#e8e1cd" stroke="#a89b78"/>'); s.append(txt(134, 128, 'cartílago tiroides', 8.4, muted, 'start', 700))
s.append(f'<rect x="104" y="140" width="20" height="64" rx="6" fill="#dfe6ef" stroke="#9fb0c6"/>'); s.append(txt(130, 200, 'tráquea', 8.4, muted, 'start', 700))
s.append(f'<ellipse cx="94" cy="166" rx="14" ry="16" fill="#b5485d"/>'); s.append(txt(60, 170, 'tiroides', 9, '#b5485d', 'end', 800))
s.append(txt(60, 181, 'semana 7', 8.4, muted, 'end', 700))
s.append(f'<path d="M112,44 Q118,70 98,88 Q86,100 96,108 Q88,130 92,150" fill="none" stroke="{red}" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#ar)"/>')
for (x, y) in [(104, 70), (92, 98), (90, 124)]: s.append(f'<circle cx="{x}" cy="{y}" r="5.5" fill="none" stroke="{A[3]}" stroke-width="2"/>')
s.append(txt(84, 98, 'quistes', 8.6, A[3], 'end', 800)); s.append(txt(84, 108, 'tiroglosos', 8.6, A[3], 'end', 800))
s.append(txt(150, 70, 'conducto', 8.6, red, 'start', 800)); s.append(txt(150, 80, 'tirogloso', 8.6, red, 'start', 800))
save('cc-tiroides', s)

# ── 5. Cara: prominencias (semana 6) y su destino ──
W, H = 300, 176; s = svg(W, H)
P = {'fn': '#a8c66c', 'nm': '#e8912e', 'nl': '#f2c14e', 'mx': '#5f8fc9', 'md': '#b5485d'}
cx, cy = 74, 86
s.append(f'<ellipse cx="{cx}" cy="{cy-34}" rx="60" ry="30" fill="{P["fn"]}"/>')                 # frontonasal
for sg in (-1, 1):
    s.append(f'<ellipse cx="{cx+sg*48}" cy="{cy+4}" rx="16" ry="28" fill="{P["mx"]}"/>')          # maxilares
    s.append(f'<ellipse cx="{cx+sg*24}" cy="{cy-10}" rx="9" ry="13" fill="{P["nl"]}"/>')          # nasales laterales
    s.append(f'<ellipse cx="{cx+sg*9}" cy="{cy-6}" rx="8" ry="16" fill="{P["nm"]}"/>')            # nasales mediales
    s.append(f'<ellipse cx="{cx+sg*16}" cy="{cy-10}" rx="3.2" ry="6" fill="{navy}"/>')            # fosa nasal
    s.append(f'<circle cx="{cx+sg*40}" cy="{cy-22}" r="5" fill="{navy}"/>')                       # ojo
s.append(f'<ellipse cx="{cx}" cy="{cy+20}" rx="30" ry="8" fill="#5b2330"/>')                     # estomodeo
s.append(f'<path d="M{cx-44},{cy+30} Q{cx},{cy+62} {cx+44},{cy+30} L{cx+38},{cy+28} Q{cx},{cy+50} {cx-38},{cy+28} Z" fill="{P["md"]}"/>')
s.append(txt(cx, 168, 'Semana 6', 9.5, muted, 'middle', 700))
# adulto
ax, ay = 222, 86
s.append(f'<ellipse cx="{ax}" cy="{ay}" rx="52" ry="68" fill="#f4e7da" stroke="#cbb39b"/>')
s.append(f'<path d="M{ax-48},{ay-30} Q{ax},{ay-70} {ax+48},{ay-30} L{ax+48},{ay-22} L{ax-48},{ay-22} Z" fill="{P["fn"]}"/>')
s.append(f'<rect x="{ax-6}" y="{ay-22}" width="12" height="34" rx="5" fill="{P["nm"]}"/>')
for sg in (-1, 1):
    s.append(f'<ellipse cx="{ax+sg*10}" cy="{ay+12}" rx="6" ry="5" fill="{P["nl"]}"/>')
    s.append(f'<ellipse cx="{ax+sg*32}" cy="{ay+10}" rx="14" ry="20" fill="{P["mx"]}" opacity=".85"/>')
    s.append(f'<circle cx="{ax+sg*20}" cy="{ay-12}" r="4" fill="{navy}"/>')
s.append(f'<rect x="{ax-5}" y="{ay+18}" width="10" height="10" fill="{P["nm"]}"/>')                 # filtrum
s.append(f'<path d="M{ax-18},{ay+30} Q{ax},{ay+36} {ax+18},{ay+30}" stroke="#a24b5a" stroke-width="3" fill="none"/>')
s.append(f'<path d="M{ax-30},{ay+36} Q{ax},{ay+76} {ax+30},{ay+36} L{ax+24},{ay+38} Q{ax},{ay+54} {ax-24},{ay+38} Z" fill="{P["md"]}"/>')
s.append(txt(ax, 168, 'Destino', 9.5, muted, 'middle', 700))
save('cc-cara', s)

# ── 6. Paladar visto desde abajo ──
W, H = 240, 180; s = svg(W, H)
s.append(f'<path d="M40,30 Q120,-6 200,30 L196,150 Q120,170 44,150 Z" fill="#f4e7da" stroke="#cbb39b"/>')
s.append(f'<path d="M78,34 Q120,16 162,34 L120,74 Z" fill="{P["nm"]}"/>')
s.append(f'<path d="M50,44 L118,76 L118,158 Q80,156 48,146 Z" fill="{P["mx"]}" opacity=".85"/>')
s.append(f'<path d="M190,44 L122,76 L122,158 Q160,156 192,146 Z" fill="{P["mx"]}" opacity=".85"/>')
s.append(f'<circle cx="120" cy="75" r="5" fill="#fff" stroke="{navy}" stroke-width="2"/>')
s.append(txt(120, 50, 'paladar', 8.6, '#fff', 'middle', 800)); s.append(txt(120, 59, 'primario', 8.6, '#fff', 'middle', 800))
s.append(txt(84, 120, 'cresta', 8.6, '#fff', 'middle', 800)); s.append(txt(84, 130, 'palatina', 8.6, '#fff', 'middle', 800))
s.append(txt(156, 120, 'cresta', 8.6, '#fff', 'middle', 800)); s.append(txt(156, 130, 'palatina', 8.6, '#fff', 'middle', 800))
s.append(f'<line x1="124" y1="72" x2="188" y2="20" stroke="{navy}" stroke-width="1.2"/>'); s.append(txt(236, 12, 'foramen', 8.8, navy, 'end', 800)); s.append(txt(236, 22, 'incisivo', 8.8, navy, 'end', 800))
s.append(txt(120, 176, 'anteriores: labio y maxilar · posteriores: paladar y úvula', 8.4, red, 'middle', 700))
save('cc-paladar', s)

# ── 7. Estadios del diente ──
W, H = 470, 134; s = svg(W, H)
EPI = '#8fb9e3'; PAP = '#f7c99a'; RET = '#e6eef9'
for i, lab in enumerate(['Lámina dentaria', 'Yema', 'Casquete', 'Campana']):
    ox = 12 + i * 116
    s.append(f'<rect x="{ox}" y="10" width="100" height="10" fill="{EPI}"/>')                     # epitelio oral
    if i == 0: s.append(f'<rect x="{ox+44}" y="20" width="12" height="26" rx="5" fill="{EPI}"/>')
    if i == 1: s.append(f'<rect x="{ox+46}" y="20" width="8" height="14" fill="{EPI}"/><circle cx="{ox+50}" cy="52" r="22" fill="{EPI}"/>')
    if i == 2:
        s.append(f'<rect x="{ox+46}" y="20" width="8" height="12" fill="{EPI}"/>')
        s.append(f'<path d="M{ox+16},94 Q{ox+16},30 {ox+50},30 Q{ox+84},30 {ox+84},94 L{ox+70},94 Q{ox+70},62 {ox+50},62 Q{ox+30},62 {ox+30},94 Z" fill="{EPI}"/>')
        s.append(f'<path d="M{ox+22},94 Q{ox+22},38 {ox+50},38 Q{ox+78},38 {ox+78},94 L{ox+72},94 Q{ox+72},60 {ox+50},58 Q{ox+28},60 {ox+28},94 Z" fill="{RET}"/>')
        s.append(f'<path d="M{ox+30},94 Q{ox+30},62 {ox+50},62 Q{ox+70},62 {ox+70},94 Z" fill="{PAP}"/>')
        s.append(f'<circle cx="{ox+50}" cy="58" r="4" fill="{navy}"/>')
    if i == 3:
        s.append(f'<path d="M{ox+8},110 Q{ox+8},26 {ox+50},26 Q{ox+92},26 {ox+92},110 L{ox+80},110 Q{ox+80},52 {ox+50},52 Q{ox+20},52 {ox+20},110 Z" fill="{EPI}"/>')
        s.append(f'<path d="M{ox+14},110 Q{ox+14},34 {ox+50},34 Q{ox+86},34 {ox+86},110 L{ox+80},110 Q{ox+80},56 {ox+50},56 Q{ox+20},56 {ox+20},110 Z" fill="{RET}"/>')
        s.append(f'<path d="M{ox+20},110 Q{ox+20},52 {ox+50},52 Q{ox+80},52 {ox+80},110 L{ox+75},110 Q{ox+75},58 {ox+50},58 Q{ox+25},58 {ox+25},110 Z" fill="#2f6db5"/>')
        s.append(f'<path d="M{ox+25},110 Q{ox+25},58 {ox+50},58 Q{ox+75},58 {ox+75},110 L{ox+70},110 Q{ox+70},64 {ox+50},64 Q{ox+30},64 {ox+30},110 Z" fill="#e8912e"/>')
        s.append(f'<path d="M{ox+30},110 Q{ox+30},64 {ox+50},64 Q{ox+70},64 {ox+70},110 Z" fill="{PAP}"/>')
    s.append(txt(ox + 50, 128, lab, 9.6, navy, 'middle', 800))
save('cc-dientes', s)
print('ok')
