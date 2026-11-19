# Genera los esquemas de la lámina «Sistema esquelético axial» (ana/esq-*.svg).
# Esquemas propios, simplificados y no a escala. Uso: python3 esqueleto_svg.py ana
import sys
OUT = sys.argv[1]
navy = '#13295b'; muted = '#6b7280'; red = '#c8242c'
PAR = '#e8912e'; PART = '#fbe3c7'      # mesodermo paraxial / esclerotoma
LAT = '#5f8fc9'; LATT = '#d4e2f4'      # placa lateral
CN = '#3d8b5a'; CNT = '#d5ead9'        # cresta neural
NOT = '#7a5ba8'                        # notocorda
CART = '#9fc6e8'; BONE = '#e9d8b4'; BONED = '#b8955a'
def txt(x, y, s, size=10, fill=navy, anchor='middle', w=700):
    return f'<text font-family="Helvetica, Arial, sans-serif" x="{x}" y="{y}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{w}">{s}</text>'
def svg(W, H): return [f'<svg viewBox="0 0 {W} {H}" width="{W}" height="{H}" xmlns="http://www.w3.org/2000/svg">',
    f'<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{navy}"/></marker></defs>']
def save(n, s): open(f'{OUT}/{n}.svg', 'w').write('\n'.join(s + ['</svg>']))

# ── 1. Corte del embrión (semana 4): somita y placa lateral ──
W, H = 300, 200; s = svg(W, H); cx = 150
s.append(f'<ellipse cx="{cx}" cy="58" rx="20" ry="18" fill="#cfe0f2" stroke="#8fb9e3" stroke-width="2"/>')   # tubo neural
s.append(txt(cx, 62, 'tubo', 8, '#2f6db5')); s.append(txt(cx, 71, 'neural', 8, '#2f6db5'))
s.append(f'<circle cx="{cx}" cy="94" r="8" fill="{NOT}"/>'); s.append(txt(cx, 116, 'notocorda', 8.4, NOT))
for sg in (-1, 1):
    x = cx + sg * 58
    s.append(f'<path d="M{x-24},50 Q{x},40 {x+24},50 L{x+22},60 Q{x},52 {x-22},60 Z" fill="{PAR}" opacity=".55"/>')        # dermomiotoma
    s.append(f'<ellipse cx="{x - sg*14}" cy="84" rx="22" ry="17" fill="{PART}" stroke="{PAR}" stroke-width="1.8"/>')     # esclerotoma
    s.append(f'<path d="M{x - sg*30},84 Q{cx + sg*16},100 {cx + sg*12},94" fill="none" stroke="{PAR}" stroke-width="1.2" marker-end="url(#ar)"/>')
    s.append(f'<path d="M{x+sg*30},70 L{x+sg*90},70 L{x+sg*90},80 L{x+sg*30},80 Z" fill="{LATT}" stroke="{LAT}" stroke-width="1.4"/>')   # hoja parietal
    s.append(f'<path d="M{x+sg*30},96 L{x+sg*90},96 L{x+sg*90},104 L{x+sg*30},104 Z" fill="#eef2f7" stroke="#9aa6b8" stroke-width="1.2"/>')
s.append(txt(92, 34, 'dermomiotoma', 8.6, PAR, 'middle', 800)); s.append(txt(86, 130, 'esclerotoma', 9, PAR, 'middle', 800))
s.append(txt(268, 64, 'hoja parietal', 8.4, LAT, 'middle', 800)); s.append(txt(268, 116, 'hoja visceral', 8.4, muted, 'middle', 700)); s.append(txt(32, 64, 'placa lateral', 8.4, LAT, 'middle', 800))
s.append(f'<rect x="12" y="142" width="276" height="54" rx="8" fill="#f7f8fb"/>')
s.append(f'<circle cx="24" cy="155" r="5" fill="{PAR}"/>'); s.append(txt(34, 159, 'Esclerotoma: vértebras, costillas, base del cráneo (cordal)', 8.6, navy, 'start', 600))
s.append(f'<circle cx="24" cy="172" r="5" fill="{LAT}"/>'); s.append(txt(34, 176, 'Hoja parietal: esternón, cinturas y extremidades', 8.6, navy, 'start', 600))
s.append(f'<circle cx="24" cy="189" r="5" fill="{CN}"/>'); s.append(txt(34, 193, 'Cresta neural: cara, bóveda y condrocráneo precordal', 8.6, navy, 'start', 600))
save('esq-somita', s)

# ── 2. Osificación ──
W, H = 300, 176; s = svg(W, H)
s.append(txt(70, 12, 'Intramembranosa', 10, navy, 'middle', 800))
for i, (lab, col) in enumerate([('mesénquima', '#f3e9da'), ('osteoblastos', '#f2c79a'), ('hueso plano', BONE)]):
    y = 26 + i * 44
    s.append(f'<rect x="20" y="{y}" width="100" height="28" rx="6" fill="{col}" stroke="{BONED}" stroke-width="1"/>'); s.append(txt(70, y + 18, lab, 9, navy, 'middle', 700))
    if i < 2: s.append(f'<line x1="70" y1="{y+29}" x2="70" y2="{y+42}" stroke="{navy}" stroke-width="1.4" marker-end="url(#ar)"/>')
s.append(txt(70, 168, 'bóveda y cara', 9, muted, 'middle', 700))
s.append(txt(222, 12, 'Endocondral', 10, navy, 'middle', 800))
def bone(x, stage):
    s.append(f'<path d="M{x-14},26 Q{x},18 {x+14},26 L{x+8},40 L{x+8},120 L{x+14},134 Q{x},142 {x-14},134 L{x-8},120 L{x-8},40 Z" fill="{CART}" stroke="#5f8fc9" stroke-width="1"/>')
    if stage >= 1: s.append(f'<rect x="{x-8}" y="{60 if stage == 1 else 44}" width="16" height="{40 if stage == 1 else 72}" fill="{BONE}" stroke="{BONED}" stroke-width="1"/>')
    if stage >= 2:
        for y in (30, 130): s.append(f'<circle cx="{x}" cy="{y}" r="6" fill="{BONE}" stroke="{BONED}"/>')
        for y in (42, 118): s.append(f'<line x1="{x-9}" y1="{y}" x2="{x+9}" y2="{y}" stroke="{red}" stroke-width="2"/>')
for i, (lab) in enumerate(['molde de cartílago', 'centro primario', 'centros secundarios']):
    x = 178 + i * 44; bone(x, i)
    words = lab.split(' ')
    s.append(txt(x, 156, words[0], 8, muted, 'middle', 700)); s.append(txt(x, 166, ' '.join(words[1:]), 8, muted, 'middle', 700))
s.append(txt(268, 120, '', 1))
save('esq-osificacion', s)

# ── 3. Cráneo del recién nacido visto desde arriba ──
W, H = 230, 236; s = svg(W, H); cx, cy = 115, 120
s.append(f'<ellipse cx="{cx}" cy="{cy}" rx="82" ry="104" fill="{BONE}" stroke="{BONED}" stroke-width="1.6"/>')
s.append(f'<line x1="{cx}" y1="{cy-104}" x2="{cx}" y2="{cy-48}" stroke="{red}" stroke-width="2.4"/>')                 # metópica
s.append(f'<path d="M{cx-80},{cy-30} Q{cx},{cy-56} {cx+80},{cy-30}" fill="none" stroke="{red}" stroke-width="2.4"/>')  # coronal
s.append(f'<line x1="{cx}" y1="{cy-32}" x2="{cx}" y2="{cy+62}" stroke="{red}" stroke-width="2.4"/>')                 # sagital
s.append(f'<path d="M{cx-70},{cy+56} Q{cx},{cy+70} {cx+70},{cy+56}" fill="none" stroke="{red}" stroke-width="2.4"/>') # lambdoidea
s.append(f'<path d="M{cx},{cy-58} L{cx+18},{cy-40} L{cx},{cy-22} L{cx-18},{cy-40} Z" fill="#fff" stroke="{navy}" stroke-width="1.6"/>')
s.append(f'<path d="M{cx-9},{cy+62} L{cx+9},{cy+62} L{cx},{cy+74} Z" fill="#fff" stroke="{navy}" stroke-width="1.6"/>')
s.append(txt(cx, cy - 72, 'frontal', 8.6, BONED)); s.append(txt(cx - 40, cy + 14, 'parietal', 8.6, BONED)); s.append(txt(cx + 40, cy + 14, 'parietal', 8.6, BONED)); s.append(txt(cx, cy + 96, 'occipital', 8.6, BONED))
s.append(txt(cx + 22, cy - 82, 'metópica', 8.4, red, 'start')); s.append(txt(cx + 60, cy - 46, 'coronal', 8.4, red, 'start'))
s.append(txt(cx + 6, cy + 40, 'sagital', 8.4, red, 'start')); s.append(txt(cx + 54, cy + 76, 'lambdoidea', 8.4, red, 'start'))
s.append(txt(cx - 22, cy - 36, 'anterior', 8.6, navy, 'end', 800)); s.append(txt(cx - 22, cy - 26, '~18 meses', 8, muted, 'end', 700))
s.append(txt(cx - 14, cy + 72, 'posterior', 8.6, navy, 'end', 800)); s.append(txt(cx - 14, cy + 82, '1–2 meses', 8, muted, 'end', 700))
save('esq-craneo', s)

# ── 4. Resegmentación ──
W, H = 300, 206; s = svg(W, H)
s.append(txt(60, 12, 'Esclerotomas', 9.5, muted)); s.append(txt(190, 12, 'Vértebras', 9.5, muted))
for i in range(3):
    y = 22 + i * 54
    s.append(f'<rect x="34" y="{y}" width="52" height="25" fill="#fde9cf" stroke="{PAR}"/>')
    s.append(f'<rect x="34" y="{y+25}" width="52" height="25" fill="{PAR}" opacity=".75" stroke="{PAR}"/>')
    s.append(f'<line x1="26" y1="{y+52}" x2="94" y2="{y+52}" stroke="{red}" stroke-width="2"/>')
s.append(txt(30, 38, 'craneal', 8, PAR, 'end')); s.append(txt(30, 63, 'caudal', 8, PAR, 'end'))
s.append(txt(60, 200, 'rojo: arteria intersegmentaria', 8.2, red))
s.append(f'<line x1="102" y1="96" x2="146" y2="96" stroke="{navy}" stroke-width="1.6" marker-end="url(#ar)"/>')
for i in range(2):
    y = 47 + i * 54
    s.append(f'<rect x="164" y="{y}" width="52" height="25" fill="{PAR}" opacity=".75" stroke="{PAR}"/>')
    s.append(f'<rect x="164" y="{y+25}" width="52" height="25" fill="#fde9cf" stroke="{PAR}"/>')
    s.append(f'<line x1="156" y1="{y+25}" x2="224" y2="{y+25}" stroke="{red}" stroke-width="2"/>')
for y in (43, 97, 151):
    s.append(f'<rect x="166" y="{y}" width="48" height="4" rx="2" fill="#c9d3e3"/>'); s.append(f'<ellipse cx="190" cy="{y+2}" rx="7" ry="3.2" fill="{NOT}"/>')
s.append(txt(230, 70, 'cuerpo', 8.6, navy, 'start', 800)); s.append(txt(230, 80, 'vertebral', 8.6, navy, 'start', 800))
s.append(txt(230, 150, 'disco con', 8.6, navy, 'start', 800)); s.append(txt(230, 160, 'núcleo', 8.6, NOT, 'start', 800)); s.append(txt(230, 170, 'pulposo', 8.6, NOT, 'start', 800))
save('esq-reseg', s)

# ── 5. Curvaturas ──
W, H = 250, 190; s = svg(W, H)
s.append(f'<path d="M44,24 Q4,90 48,160" fill="none" stroke="{BONED}" stroke-width="7" stroke-linecap="round"/>')
s.append(txt(46, 182, 'Feto: una sola curva', 9, muted)); s.append(txt(46, 14, 'primaria', 8.6, red, 'middle', 800))
s.append(f'<path d="M180,16 Q196,42 182,66 Q160,98 178,124 Q200,146 186,174" fill="none" stroke="{BONED}" stroke-width="7" stroke-linecap="round"/>')
for y, lab, kind, col in [(40, 'cervical', 'secundaria', navy), (94, 'torácica', 'primaria', red), (130, 'lumbar', 'secundaria', navy), (166, 'sacra', 'primaria', red)]:
    s.append(txt(206, y, lab, 8.8, navy, 'start', 800)); s.append(txt(206, y + 10, kind, 8, col, 'start', 700))
s.append(txt(166, 44, 'sostiene la cabeza →', 7.8, muted, 'end', 700)); s.append(txt(166, 134, 'empieza a caminar →', 7.8, muted, 'end', 700))
save('esq-curvas', s)

# ── 6. Esternón ──
W, H = 270, 170; s = svg(W, H)
s.append(txt(60, 12, 'Bandas esternales', 9, muted))
for sg in (-1, 1):
    s.append(f'<rect x="{60 + sg*18 - 6}" y="24" width="12" height="110" rx="6" fill="{LATT}" stroke="{LAT}" stroke-width="1.4"/>')
    for k in range(5): s.append(f'<line x1="{60 + sg*24}" y1="{34 + k*22}" x2="{60 + sg*56}" y2="{40 + k*22}" stroke="{CART}" stroke-width="4" stroke-linecap="round"/>')
s.append(f'<line x1="100" y1="80" x2="138" y2="80" stroke="{navy}" stroke-width="1.6" marker-end="url(#ar)"/>')
s.append(txt(120, 72, 'se fusionan', 8, muted))
s.append(f'<path d="M178,22 h28 l4,24 h-36 z" fill="{BONE}" stroke="{BONED}"/>'); s.append(txt(214, 38, 'manubrio', 8.6, navy, 'start'))
s.append(f'<rect x="178" y="48" width="28" height="74" rx="4" fill="{BONE}" stroke="{BONED}"/>'); s.append(txt(214, 88, 'cuerpo', 8.6, navy, 'start'))
s.append(f'<path d="M184,124 h16 l-8,18 z" fill="{BONE}" stroke="{BONED}"/>'); s.append(txt(214, 140, 'xifoides', 8.6, navy, 'start'))
s.append(txt(125, 164, 'capa parietal de la placa lateral · osificación endocondral', 8, LAT, 'middle', 700))
save('esq-esternon', s)

# ── 7. Formas de craniosinostosis (vista superior) ──
W, H = 600, 144; s = svg(W, H)
forms = [('Normal', 'todas abiertas', None), ('Escafocefalia', 'sagital', 'sag'), ('Braquicefalia', 'coronal bilateral', 'cor'),
         ('Trigonocefalia', 'metópica', 'met'), ('Plagiocefalia', 'coronal o lambdoidea', 'pla')]
for i, (lab, sut, k) in enumerate(forms):
    x = 60 + i * 120; y = 58
    if k is None: path = f'<ellipse cx="{x}" cy="{y}" rx="34" ry="44" fill="{BONE}" stroke="{BONED}" stroke-width="1.5"/>'
    elif k == 'sag': path = f'<ellipse cx="{x}" cy="{y}" rx="24" ry="50" fill="{BONE}" stroke="{BONED}" stroke-width="1.5"/>'
    elif k == 'cor': path = f'<ellipse cx="{x}" cy="{y}" rx="42" ry="34" fill="{BONE}" stroke="{BONED}" stroke-width="1.5"/>'
    elif k == 'met': path = f'<path d="M{x},{y-46} L{x+30},{y-6} Q{x+36},{y+40} {x},{y+44} Q{x-36},{y+40} {x-30},{y-6} Z" fill="{BONE}" stroke="{BONED}" stroke-width="1.5"/>'
    else: path = f'<path d="M{x-10},{y-44} Q{x+34},{y-40} {x+34},{y+2} Q{x+30},{y+44} {x},{y+44} Q{x-34},{y+40} {x-30},{y} Q{x-30},{y-30} {x-10},{y-44} Z" fill="{BONE}" stroke="{BONED}" stroke-width="1.5"/>'
    s.append(path)
    if k == 'sag': s.append(f'<line x1="{x}" y1="{y-20}" x2="{x}" y2="{y+40}" stroke="{red}" stroke-width="3.4"/>')
    if k == 'cor': s.append(f'<path d="M{x-40},{y-14} Q{x},{y-30} {x+40},{y-14}" fill="none" stroke="{red}" stroke-width="3.4"/>')
    if k == 'met': s.append(f'<line x1="{x}" y1="{y-44}" x2="{x}" y2="{y-12}" stroke="{red}" stroke-width="3.4"/>')
    if k == 'pla': s.append(f'<path d="M{x-28},{y-8} Q{x-18},{y-26} {x-4},{y-30}" fill="none" stroke="{red}" stroke-width="3.4"/>')
    s.append(txt(x, 116, lab, 9.6, navy, 'middle', 800)); s.append(txt(x, 128, sut, 8.2, red if k else muted, 'middle', 700))
    if k == 'pla': s.append(txt(x, 140, 'de un solo lado', 8.2, red, 'middle', 700))
save('esq-sinostosis', s)
print('ok')
