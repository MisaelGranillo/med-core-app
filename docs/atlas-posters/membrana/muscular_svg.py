# Genera los esquemas de la lámina «Sistema muscular» (ana/mus-*.svg).
# Esquemas propios, simplificados y no a escala. Uso: python3 muscular_svg.py ana
import sys
OUT = sys.argv[1]
navy = '#13295b'; muted = '#6b7280'; red = '#c8242c'
PAR = '#e8912e'; PART = '#fbe3c7'; PARD = '#b8650f'   # mesodermo paraxial
LAT = '#5f8fc9'; LATT = '#d4e2f4'                      # placa lateral
ECT = '#4f9a8a'; ECTT = '#d3ece6'                      # ectodermo
NT = '#cfe0f2'; NTS = '#8fb9e3'; NOT = '#7a5ba8'
MUS = '#c8505a'; MUST = '#f6d6d8'                      # músculo
TEN = '#e6dcc4'; BONE = '#e9d8b4'; BONED = '#b8955a'
def txt(x, y, s, size=10, fill=navy, anchor='middle', w=700):
    return f'<text font-family="Helvetica, Arial, sans-serif" x="{x}" y="{y}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{w}">{s}</text>'
def svg(W, H): return [f'<svg viewBox="0 0 {W} {H}" width="{W}" height="{H}" xmlns="http://www.w3.org/2000/svg">',
    f'<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{navy}"/></marker>'
    f'<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{red}"/></marker></defs>']
def save(n, s): open(f'{OUT}/{n}.svg', 'w').write('\n'.join(s + ['</svg>']))
def box(s, x, y, w, h, fill, stroke, lines, size=8.6, color=navy, weight=700, first=None):
    s.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="{fill}" stroke="{stroke}" stroke-width="1.3"/>')
    n = len(lines); lh = size * 1.25; y0 = y + h / 2 - (n - 1) * lh / 2 + size * 0.35
    for i, l in enumerate(lines):
        s.append(txt(x + w / 2, y0 + i * lh, l, size, first if (first and i == 0) else color, 'middle', 800 if (first and i == 0) else weight))

# ── 1. Origen de los tres tipos de músculo ──
W, H = 300, 196; s = svg(W, H)
cols = [(4, PART, PAR, ['Mesodermo', 'paraxial']), (104, LATT, LAT, ['Placa lateral', 'hoja visceral']), (204, ECTT, ECT, ['Ectodermo'])]
for x, f, st, l in cols:
    box(s, x, 6, 92, 36, f, st, l, 9.4, navy, 800)
outs = [
    (4, [(['ESQUELÉTICO', 'somitas: tronco', 'y extremidades'], 50), (['somitómeros:', 'cabeza (arcos)'], 34), (['somitas occipitales:', 'lengua'], 34)]),
    (104, [(['CARDÍACO', 'miocardio y', 'fibras de Purkinje'], 50), (['LISO del', 'tubo digestivo'], 34), (['LISO de grandes', 'vasos (+ cresta)'], 34)]),
    (204, [(['LISO de la', 'pupila', '(esfínter y dilatador)'], 50), (['MIOEPITELIO', 'de la mama'], 34), (['MIOEPITELIO de', 'gl. sudoríparas'], 34)]),
]
for x, items in outs:
    y = 56
    s.append(f'<line x1="{x+46}" y1="42" x2="{x+46}" y2="54" stroke="{navy}" stroke-width="1.4" marker-end="url(#ar)"/>')
    for lines, h in items:
        box(s, x, y, 92, h, '#fff', '#c9d3e3', lines, 8.2, navy, 600, red)
        y += h + 6
save('mus-origen', s)

# ── 2. Dominios primaxial y abaxial ──
W, H = 320, 206; s = svg(W, H)
s.append(f'<rect x="4" y="18" width="184" height="160" rx="8" fill="#fdf1e2"/>')
s.append(f'<rect x="192" y="18" width="124" height="160" rx="8" fill="#e8f0fa"/>')
s.append(txt(96, 12, 'PRIMAXIAL', 10, PARD, 'middle', 800)); s.append(txt(254, 12, 'ABAXIAL', 10, LAT, 'middle', 800))
s.append(f'<line x1="190" y1="18" x2="190" y2="182" stroke="{red}" stroke-width="2" stroke-dasharray="5 4"/>')
s.append(txt(190, 198, 'frontera somítica lateral', 9, red, 'middle', 800))
s.append(f'<path d="M14,30 Q60,22 96,26" fill="none" stroke="{ECT}" stroke-width="2"/>')
s.append(f'<ellipse cx="64" cy="76" rx="17" ry="27" fill="{NT}" stroke="{NTS}" stroke-width="2"/>'); s.append(txt(64, 74, 'tubo', 8, navy)); s.append(txt(64, 84, 'neural', 8, navy))
s.append(f'<ellipse cx="64" cy="128" rx="34" ry="16" fill="{PART}" stroke="{PAR}" stroke-width="1.2" stroke-dasharray="3 2"/>')
s.append(f'<circle cx="64" cy="126" r="6" fill="{NOT}"/>')
s.append(txt(64, 158, 'esclerotoma', 8.6, PARD, 'middle', 800))
s.append(f'<path d="M98,48 Q146,40 168,74" fill="none" stroke="{PAR}" stroke-width="8" stroke-linecap="round"/>')
s.append(f'<path d="M102,62 Q142,58 158,86" fill="none" stroke="{MUS}" stroke-width="7" stroke-linecap="round"/>')
s.append(txt(148, 36, 'dermomiotoma', 8.6, PARD, 'middle', 800)); s.append(txt(118, 96, 'miotoma', 8.6, MUS, 'middle', 800))
s.append(txt(98, 112, '↑ grupo', 7.6, muted, 'start', 700)); s.append(txt(98, 121, 'dorsomedial', 7.6, muted, 'start', 700))
for i, (cx, cy) in enumerate([(184, 96), (198, 106), (212, 116), (226, 124)]):
    s.append(f'<ellipse cx="{cx}" cy="{cy}" rx="4.5" ry="2.6" fill="{MUS}" transform="rotate(35 {cx} {cy})"/>')
s.append(f'<path d="M170,84 Q200,104 236,128" fill="none" stroke="{navy}" stroke-width="1.2" stroke-dasharray="3 3" marker-end="url(#ar)"/>')
s.append(txt(140, 136, 'grupo', 7.6, muted, 'start', 700)); s.append(txt(140, 145, 'ventrolateral', 7.6, muted, 'start', 700)); s.append(txt(140, 154, 'migra →', 7.6, muted, 'start', 700))
s.append(f'<path d="M198,62 Q300,76 304,176" fill="none" stroke="{LAT}" stroke-width="8"/>')
s.append(txt(254, 34, 'hoja parietal', 8.4, LAT, 'middle', 800)); s.append(txt(254, 44, 'de la placa lateral', 8.4, LAT, 'middle', 700))
s.append(f'<ellipse cx="264" cy="150" rx="24" ry="15" fill="{LATT}" stroke="{LAT}" stroke-width="1.4"/>'); s.append(txt(264, 153, 'yema', 8.2, LAT, 'middle', 800))
save('mus-dominios', s)

# ── 3. Señales que diferencian al somita ──
W, H = 300, 214; s = svg(W, H)
s.append(f'<path d="M100,22 Q200,12 292,30" fill="none" stroke="{ECT}" stroke-width="3"/>'); s.append(txt(292, 22, 'ectodermo', 8.2, ECT, 'end', 800))
s.append(f'<ellipse cx="62" cy="84" rx="20" ry="36" fill="{NT}" stroke="{NTS}" stroke-width="2"/>')
s.append(f'<path d="M44,70 Q62,40 80,70" fill="#a9c9ea"/>'); s.append(txt(62, 30, 'tubo neural', 8.4, navy)); s.append(txt(62, 40, 'dorsal', 8.4, navy))
s.append(f'<circle cx="62" cy="146" r="8" fill="{NOT}"/>'); s.append(txt(62, 168, 'notocorda y', 8.2, NOT)); s.append(txt(62, 178, 'piso del tubo', 8.2, NOT))
# somita
s.append(f'<ellipse cx="148" cy="148" rx="34" ry="20" fill="{PART}" stroke="{PAR}" stroke-width="1.4"/>'); s.append(txt(148, 146, 'esclerotoma', 8.4, PARD, 'middle', 800)); s.append(txt(148, 157, 'PAX1', 8.6, red, 'middle', 800))
s.append(f'<rect x="114" y="58" width="44" height="22" rx="6" fill="{MUST}" stroke="{MUS}"/>'); s.append(txt(136, 73, 'MYF5', 9, MUS, 'middle', 800))
s.append(f'<rect x="170" y="44" width="46" height="22" rx="6" fill="#fff" stroke="{PAR}"/>'); s.append(txt(193, 59, 'dermis', 9, PARD, 'middle', 800))
s.append(f'<rect x="222" y="84" width="48" height="22" rx="6" fill="{MUST}" stroke="{MUS}"/>'); s.append(txt(246, 99, 'MYOD', 9, MUS, 'middle', 800))
s.append(f'<rect x="230" y="150" width="62" height="22" rx="6" fill="{LATT}" stroke="{LAT}"/>'); s.append(txt(261, 165, 'placa lateral', 8.2, LAT, 'middle', 800))
def arrow(x1, y1, x2, y2, lab, lx, ly, anchor='middle'):
    s.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{red}" stroke-width="1.5" marker-end="url(#arr)"/>')
    s.append(txt(lx, ly, lab, 8.4, red, anchor, 800))
arrow(72, 142, 112, 146, 'SHH + nogina', 92, 134)
arrow(82, 70, 112, 70, 'WNT', 96, 64)
arrow(76, 54, 168, 52, 'NT-3', 128, 46)
arrow(246, 26, 246, 82, 'WNT', 252, 56, 'start')
arrow(262, 148, 252, 108, 'BMP4', 270, 132, 'start')
s.append(txt(150, 200, 'MYF5 → músculo primaxial · MYOD → músculo lateral', 8.6, navy, 'middle', 700))
save('mus-senales', s)

# ── 4. Del mioblasto a la fibra; tendón ──
W, H = 300, 168; s = svg(W, H)
s.append(f'<circle cx="22" cy="40" r="10" fill="{PART}" stroke="{PAR}"/>'); s.append(f'<circle cx="22" cy="40" r="3.5" fill="{PARD}"/>')
for dy in (-10, 10):
    s.append(f'<ellipse cx="76" cy="{40+dy}" rx="16" ry="6" fill="{MUST}" stroke="{MUS}"/>'); s.append(f'<ellipse cx="76" cy="{40+dy}" rx="3.5" ry="2.6" fill="{MUS}"/>')
s.append(f'<rect x="124" y="30" width="68" height="20" rx="10" fill="{MUST}" stroke="{MUS}"/>')
for x in (140, 152, 164, 176): s.append(f'<ellipse cx="{x}" cy="40" rx="4" ry="3" fill="{MUS}"/>')
s.append(f'<rect x="212" y="28" width="84" height="24" rx="6" fill="{MUST}" stroke="{MUS}"/>')
for x in range(218, 294, 6): s.append(f'<line x1="{x}" y1="30" x2="{x}" y2="50" stroke="{MUS}" stroke-width="1" opacity=".55"/>')
for x in (226, 250, 274): s.append(f'<ellipse cx="{x}" cy="30.5" rx="4" ry="2" fill="{navy}"/>')
for x in (238, 262, 288): s.append(f'<ellipse cx="{x}" cy="49.5" rx="4" ry="2" fill="{navy}"/>')
for x1, x2 in ((34, 56), (94, 120), (194, 210)):
    s.append(f'<line x1="{x1}" y1="40" x2="{x2}" y2="40" stroke="{navy}" stroke-width="1.3" marker-end="url(#ar)"/>')
for x, a, b in ((22, 'precursor', ''), (76, 'mioblastos', 'se fusionan'), (158, 'miotubo', 'núcleos centrales'), (254, 'fibra estriada', 'multinucleada')):
    s.append(txt(x, 72, a, 8.6, navy, 'middle', 800))
    if b: s.append(txt(x, 82, b, 7.8, muted, 'middle', 700))
s.append(txt(296, 14, 'estriaciones: final del 3.er mes', 7.8, red, 'end', 800))
# tendón
s.append(f'<rect x="10" y="112" width="128" height="28" rx="12" fill="{MUST}" stroke="{MUS}"/>'); s.append(txt(74, 130, 'músculo', 9, MUS, 'middle', 800))
s.append(f'<path d="M138,118 L196,122 L196,130 L138,134 Z" fill="{TEN}" stroke="{BONED}"/>'); s.append(txt(167, 112, 'tendón', 8.6, BONED, 'middle', 800))
s.append(f'<rect x="196" y="104" width="96" height="44" rx="10" fill="{BONE}" stroke="{BONED}"/>'); s.append(txt(244, 130, 'hueso', 9, BONED, 'middle', 800))
s.append(txt(150, 162, 'tendón: esclerotoma junto al miotoma · regulado por ESCLERAXIS', 8.2, navy, 'middle', 700))
save('mus-fibra', s)

# ── 5. Yema de la extremidad superior ──
W, H = 320, 170; s = svg(W, H)
stages = [(40, 'semana 4', 'yema'), (120, 'semana 5', 'placa de la mano'), (200, 'semana 6', 'radios digitales'), (280, 'semanas 7–8', 'dedos separados')]
for x, a, b in stages:
    s.append(f'<line x1="{x-34}" y1="128" x2="{x+34}" y2="128" stroke="{LAT}" stroke-width="3"/>')
    s.append(txt(x, 146, a, 8.8, red, 'middle', 800)); s.append(txt(x, 158, b, 8.2, navy, 'middle', 700))
s.append(f'<path d="M24,128 Q24,104 40,102 Q56,104 56,128 Z" fill="{LATT}" stroke="{LAT}" stroke-width="1.4"/>')
s.append(f'<path d="M110,128 L110,86 Q96,74 102,56 Q120,40 138,56 Q144,74 130,86 L130,128 Z" fill="{LATT}" stroke="{LAT}" stroke-width="1.4"/>')
s.append(f'<path d="M190,128 L190,86 Q174,72 180,52 Q200,34 220,52 Q226,72 210,86 L210,128 Z" fill="{LATT}" stroke="{LAT}" stroke-width="1.4"/>')
for x2, y2 in ((183, 62), (191, 50), (200, 46), (209, 50), (217, 62)):
    s.append(f'<line x1="200" y1="84" x2="{x2}" y2="{y2}" stroke="{red}" stroke-width="2.2" stroke-linecap="round"/>')
s.append(f'<path d="M270,128 L270,88 Q262,84 262,76 L256,60 Q254,54 259,56 L266,70 L266,46 Q268,40 271,46 L273,66 L276,40 Q279,35 281,41 L280,66 L286,46 Q289,41 291,47 L287,72 L294,58 Q298,55 297,61 L290,84 Q288,88 290,92 L290,128 Z" fill="{LATT}" stroke="{LAT}" stroke-width="1.4"/>')
s.append(f'<ellipse cx="280" cy="114" rx="9" ry="11" fill="{MUS}" opacity=".8"/>')
s.append(txt(312, 116, '', 8, MUS))
s.append(txt(160, 14, 'rojo: radios; la APOPTOSIS entre ellos separa los dedos', 8.2, red, 'middle', 700)); s.append(txt(160, 26, 'rosa: el músculo se condensa en la base (semana 7)', 8.2, MUS, 'middle', 700))
save('mus-yema', s)

# ── 6. Tres tipos de músculo ──
W, H = 300, 176; s = svg(W, H)
# esquelético
s.append(txt(4, 16, 'Esquelético', 9.6, navy, 'start', 800))
s.append(f'<rect x="4" y="22" width="150" height="26" rx="6" fill="{MUST}" stroke="{MUS}"/>')
for x in range(10, 152, 6): s.append(f'<line x1="{x}" y1="24" x2="{x}" y2="46" stroke="{MUS}" stroke-width="1" opacity=".55"/>')
for x in (24, 62, 100, 138): s.append(f'<ellipse cx="{x}" cy="24.5" rx="5" ry="2.2" fill="{navy}"/>')
for x in (42, 80, 120): s.append(f'<ellipse cx="{x}" cy="45.5" rx="5" ry="2.2" fill="{navy}"/>')
# cardíaco
s.append(txt(4, 74, 'Cardíaco', 9.6, navy, 'start', 800))
cells = [(4, 80, 46), (54, 82, 48), (106, 79, 48)]
for x, y, w in cells:
    s.append(f'<rect x="{x}" y="{y}" width="{w}" height="22" rx="4" fill="{MUST}" stroke="{MUS}"/>')
    for xx in range(x + 5, x + w - 2, 5): s.append(f'<line x1="{xx}" y1="{y+2}" x2="{xx}" y2="{y+20}" stroke="{MUS}" stroke-width=".9" opacity=".5"/>')
    s.append(f'<ellipse cx="{x+w/2}" cy="{y+11}" rx="5" ry="3.4" fill="{navy}"/>')
for x in (51, 103): s.append(f'<line x1="{x}" y1="78" x2="{x}" y2="106" stroke="{navy}" stroke-width="3"/>')
# liso
s.append(txt(4, 140, 'Liso', 9.6, navy, 'start', 800))
for i, x in enumerate((8, 56, 104)):
    y = 152 + (i % 2) * 6
    s.append(f'<path d="M{x},{y} Q{x+24},{y-11} {x+48},{y} Q{x+24},{y+11} {x},{y} Z" fill="{MUST}" stroke="{MUS}"/>')
    s.append(f'<ellipse cx="{x+24}" cy="{y}" rx="6" ry="2.4" fill="{navy}"/>')
rows = [(30, ['mioblastos SE FUSIONAN', 'muchos núcleos periféricos', 'estriado · paraxial']),
        (88, ['NO se fusionan', 'DISCOS INTERCALARES (barras)', 'estriado · hoja visceral']),
        (148, ['células fusiformes, 1 núcleo', 'sin estrías · SRF', 'visceral o ectodermo'])]
for y, ls in rows:
    for i, l in enumerate(ls):
        s.append(txt(166, y + i * 11, l, 8.2, red if i == 0 else navy, 'start', 800 if i == 0 else 600))
save('mus-tipos', s)

# ── 7. Defectos de reducción de la extremidad ──
W, H = 600, 154; s = svg(W, H)
def torso(x):
    s.append(f'<path d="M{x-28},20 Q{x},10 {x+28},20 L{x+26},112 Q{x},118 {x-26},112 Z" fill="{BONE}" stroke="{BONED}" stroke-width="1.4"/>')
    s.append(f'<circle cx="{x}" cy="2" r="0" fill="none"/>')
def arm(x, kind):
    sx, sy = x + 28, 26
    if kind == 'normal':
        s.append(f'<path d="M{sx},{sy} L{sx+14},{sy+40} L{sx+20},{sy+80}" fill="none" stroke="{BONED}" stroke-width="11" stroke-linecap="round"/>')
        s.append(f'<ellipse cx="{sx+22}" cy="{sy+92}" rx="7" ry="9" fill="{BONE}" stroke="{BONED}"/>')
    elif kind == 'mero':
        s.append(f'<path d="M{sx},{sy} L{sx+14},{sy+40}" fill="none" stroke="{BONED}" stroke-width="11" stroke-linecap="round"/>')
        s.append(f'<path d="M{sx+14},{sy+40} L{sx+20},{sy+80}" fill="none" stroke="{BONED}" stroke-width="2" stroke-dasharray="3 3"/>')
    elif kind == 'foco':
        s.append(f'<ellipse cx="{sx+8}" cy="{sy+12}" rx="7" ry="9" fill="{BONE}" stroke="{BONED}"/>')
        s.append(f'<path d="M{sx+10},{sy+22} L{sx+14},{sy+40} L{sx+20},{sy+80}" fill="none" stroke="{BONED}" stroke-width="2" stroke-dasharray="3 3"/>')
    elif kind == 'amelia':
        s.append(f'<path d="M{sx},{sy} L{sx+14},{sy+40} L{sx+20},{sy+80}" fill="none" stroke="{BONED}" stroke-width="2" stroke-dasharray="3 3"/>')
for x, k, a, b in ((75, 'normal', 'Normal', ''), (225, 'amelia', 'Amelia', 'falta toda la extremidad'), (375, 'mero', 'Meromelia', 'falta una parte'), (525, 'foco', 'Focomelia', 'mano pegada al tronco')):
    torso(x); arm(x, k)
    s.append(txt(x + 10, 134, a, 13, navy, 'middle', 800))
    if b: s.append(txt(x + 10, 148, b, 11, red, 'middle', 700))
save('mus-reduccion', s)
print('ok')
