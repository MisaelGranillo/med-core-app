# Genera los SVG de la lámina «Función placentaria, líquido amniótico y gemelos» (ana/func-*.svg).
# Uso: python3 funcion_svg.py ana
import sys
navy='#13295b'; red='#c8242c'; muted='#6b7280'; grid='#e5e8ef'; blue='#2f6db5'; purple='#7a5ba8'; orange='#e8912e'; green='#3d8b5a'
OUT=sys.argv[1]
def txt(x,y,s,size=11,fill=navy,anchor='middle',w=600):
    return f'<text font-family="Helvetica, Arial, sans-serif" x="{x}" y="{y}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{w}">{s}</text>'
def svg(W,H): return [f'<svg viewBox="0 0 {W} {H}" width="{W}" height="{H}" xmlns="http://www.w3.org/2000/svg">',
    '<defs>'+''.join(f'<marker id="a{c[1:]}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{c}"/></marker>' for c in (navy,red,blue,purple,orange,green,muted))+'</defs>']
def arrow(x1,y1,x2,y2,c,w=2.4,dash=''):
    d=f' stroke-dasharray="{dash}"' if dash else ''
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="{w}" marker-end="url(#a{c[1:]})"{d}/>'
def save(name,s): open(f'{OUT}/{name}.svg','w').write('\n'.join(s+['</svg>']))

# ── 1. Intercambio placentario ──
W,H=520,214; s=svg(W,H)
s.append(f'<rect x="6" y="10" width="112" height="196" rx="12" fill="#f6e3e5"/>'); s.append(txt(62,34,'MADRE',12,red,'middle',800)); s.append(txt(62,50,'sangre del espacio',8.3,muted,'middle',500)); s.append(txt(62,61,'intervelloso',8.3,muted,'middle',500))
s.append(f'<rect x="402" y="10" width="112" height="196" rx="12" fill="#e6eef9"/>'); s.append(txt(458,34,'FETO',12,blue,'middle',800)); s.append(txt(458,50,'capilares de',8.3,muted,'middle',500)); s.append(txt(458,61,'la vellosidad',8.3,muted,'middle',500))
s.append(f'<rect x="300" y="10" width="24" height="196" rx="6" fill="#efe9f6" stroke="{purple}" stroke-width="1.2"/>')
s.append(f'<text font-family="Helvetica, Arial, sans-serif" font-size="9.5" font-weight="700" fill="{purple}" transform="translate(316,108) rotate(-90)" text-anchor="middle">barrera placentaria</text>')
rows=[('O₂ (difusión simple)',1,red),('Nutrientes y electrolitos',1,red),('IgG desde la semana 14',1,red),('Monóxido de carbono',1,red),('Fármacos, virus, alcohol',1,orange),('CO₂ y desechos',-1,blue)]
for i,(lab,d,c) in enumerate(rows):
    y=80+i*23
    if d==1: s.append(arrow(120,y,398,y,c,2.2,'5 3' if c==orange else '')); s.append(txt(294,y-4,lab,9.5,c,'end',700))
    else: s.append(arrow(398,y,120,y,c,2.2)); s.append(txt(294,y-4,lab,9.5,c,'end',700))
save('func-intercambio',s)

# ── 2. Hormonas en el tiempo (esquema cualitativo) ──
W,H=520,206; L,R,T,B=26,112,28,36; pw,ph=W-L-R,H-T-B
X=lambda w:L+w/40*pw; Y=lambda v:T+ph-v*ph
s=svg(W,H); s.append(txt(W-4,12,'esquema cualitativo, sin escala',8.5,muted,'end',600))
s.append(f'<rect x="{X(24):.1f}" y="{T}" width="{X(28)-X(24):.1f}" height="{ph}" fill="{orange}" opacity=".13"/>')
s.append(txt((X(24)+X(28))/2,T-14,'24–28: tamizaje de',8.5,orange,'middle',700)); s.append(txt((X(24)+X(28))/2,T-4,'diabetes gestacional',8.5,orange,'middle',700))
s.append(f'<rect x="{X(7):.1f}" y="{T}" width="{X(9)-X(7):.1f}" height="{ph}" fill="{purple}" opacity=".12"/>')
s.append(txt(X(8),T-14,'7–9: relevo',8.5,purple,'middle',700)); s.append(txt(X(8),T-4,'lúteo-placentario',8.5,purple,'middle',700))
for w in range(0,41,4): s.append(txt(X(w),H-20,str(w),9,muted)); s.append(f'<line x1="{X(w):.1f}" x2="{X(w):.1f}" y1="{T+ph}" y2="{T+ph+4}" stroke="{muted}"/>')
s.append(f'<line x1="{L}" x2="{X(40)}" y1="{T+ph}" y2="{T+ph}" stroke="{muted}"/>'); s.append(txt(L+pw/2,H-6,'semanas de gestación',9,muted))
import math
def curve(f,c,lab,w=2.8,dy=4):
    pts=' '.join(f'{X(t/4):.1f},{Y(f(t/4)):.1f}' for t in range(0,161))
    s.append(f'<polyline points="{pts}" fill="none" stroke="{c}" stroke-width="{w}" stroke-linejoin="round"/>')
    if lab: s.append(txt(X(40)+6,Y(f(40))+dy,lab,10,c,'start',800))
hcg=lambda w: 0.92*math.exp(-((w-10)/3.6)**2) + (0.2*(1-math.exp(-max(w-8,0)/3)) if w>8 else 0)
curve(hcg,red,'hCG')
s.append(txt(X(13.2),Y(0.86),'hCG: máximo',9,red,'start',800)); s.append(txt(X(13.2),Y(0.86)+11,'≈ semana 10',9,red,'start',700))
curve(lambda w: 0.03+0.94*(w/40)**2.4,purple,'Estriol',dy=-2)
curve(lambda w: 0.06+0.8*(w/40)**1.35,blue,'Progesterona',dy=6)
curve(lambda w: 0.03+0.62*(w/40)**1.6,green,'Somatomamotropina',2.4,6)
save('func-hormonas',s)

# ── 3. Línea del tiempo de la inmunoglobulina anti-D ──
W,H=470,80; s=svg(W,H); X=lambda w:16+w/42*(W-40)
s.append(f'<line x1="{X(0)}" x2="{X(42)}" y1="46" y2="46" stroke="{muted}" stroke-width="3" stroke-linecap="round"/>')
for w in (0,10,20,30,40): s.append(txt(X(w),64,str(w),9,muted))
s.append(txt(X(21),77,'semanas',8.5,muted))
s.append(f'<circle cx="{X(28):.1f}" cy="46" r="8" fill="{blue}"/>'); s.append(txt(X(28)+6,30,'Semana 28: anti-D',10,blue,'end',800))
s.append(f'<line x1="{X(28):.1f}" x2="{X(28):.1f}" y1="33" y2="38" stroke="{blue}" stroke-width="1.5"/>')
s.append(f'<circle cx="{X(40):.1f}" cy="46" r="8" fill="{red}"/>'); s.append(txt(X(40)+10,12,'Parto: otra dosis en ≤ 72 h si el bebé es Rh+',10,red,'end',800))
s.append(f'<line x1="{X(40):.1f}" x2="{X(40):.1f}" y1="16" y2="38" stroke="{red}" stroke-width="1.5"/>')
save('func-antid',s)

# ── 4. Escala de Kramer: silueta propia con zonas ──
W,H=200,300; s=svg(W,H)
Z={1:'#fde9a6',2:'#f9d36e',3:'#f2b84b',4:'#e8952e',5:'#d4691f'}
cx=100
def zone(n,d): s.append(f'<path d="{d}" fill="{Z[n]}" stroke="#fff" stroke-width="1.5"/>')
# piernas (zona 3 muslos, 4 piernas, 5 pies)
for sgn in (-1,1):
    x=cx+sgn*22
    zone(3,f'M{x-15},176 h30 v56 h-30 z'); zone(4,f'M{x-13},232 h26 v42 h-26 z'); zone(5,f'M{x-15},274 h30 v14 a6 6 0 0 1 -6 6 h-18 a6 6 0 0 1 -6 -6 z')
# brazos (zona 4) y manos (zona 5)
for sgn in (-1,1):
    x0=cx-62 if sgn<0 else cx+44
    zone(4,f'M{x0},86 h18 v86 h-18 z'); zone(5,f'M{x0},172 h18 v10 a9 9 0 0 1 -18 0 z')
# tronco: zona 2 (hasta el ombligo) y 3 (del ombligo hacia abajo)
zone(2,f'M{cx-44},82 h88 v52 h-88 z'); zone(3,f'M{cx-44},134 h88 v44 h-88 z')
# cabeza y cuello (zona 1)
zone(1,f'M{cx-10},62 h20 v22 h-20 z'); s.append(f'<circle cx="{cx}" cy="38" r="30" fill="{Z[1]}" stroke="#fff" stroke-width="1.5"/>')
s.append(f'<circle cx="{cx}" cy="134" r="2.6" fill="{navy}"/>'); s.append(txt(cx+8,137,'ombligo',7.5,navy,'start',600))
for n,(x,y) in {1:(cx,44),2:(cx,112),3:(cx,160),4:(cx-53,130),5:(cx+22,286)}.items():
    s.append(f'<circle cx="{x}" cy="{y-4}" r="9" fill="#fff" opacity=".9"/>'); s.append(txt(x,y,str(n),11,navy,'middle',800))
save('func-kramer',s)

# ── 5. Volumen de líquido amniótico ──
W,H=300,190; L,R,T,B=40,12,14,30; pw,ph=W-L-R,H-T-B
X=lambda w:L+(w-8)/(40-8)*pw; Y=lambda v:T+ph-v/2200*ph
s=svg(W,H)
s.append(f'<rect x="{L}" y="{Y(2200):.1f}" width="{pw}" height="{Y(1500)-Y(2200):.1f}" fill="{red}" opacity=".09"/>'); s.append(txt(L+6,Y(1650),'POLIHIDRAMNIOS  1 500–2 000 mL',9,red,'start',800))
s.append(f'<rect x="{X(28):.1f}" y="{Y(400):.1f}" width="{X(40)-X(28):.1f}" height="{Y(0)-Y(400):.1f}" fill="{orange}" opacity=".14"/>'); s.append(txt(X(40)-3,Y(170),'OLIGOHIDRAMNIOS &lt; 400 mL',9,orange,'end',800))
for v in (0,500,1000,1500,2000):
    s.append(f'<line x1="{L}" x2="{W-R}" y1="{Y(v):.1f}" y2="{Y(v):.1f}" stroke="{grid}"/>'); s.append(txt(L-4,Y(v)+3,f'{v:,}'.replace(',',' '),8.5,muted,'end',500))
for w in (10,20,30,40): s.append(txt(X(w),H-14,str(w),9,muted))
s.append(txt(L+pw/2,H-2,'semanas',9,muted))
pts=[(10,30),(20,450),(37,900)]
s.append(f'<polyline points="{" ".join(f"{X(w):.1f},{Y(v):.1f}" for w,v in pts)}" fill="none" stroke="{blue}" stroke-width="2.8"/>')
s.append(f'<line x1="{X(37):.1f}" x2="{X(37):.1f}" y1="{Y(1000):.1f}" y2="{Y(800):.1f}" stroke="{blue}" stroke-width="5" stroke-linecap="round"/>')
for (w,v),lab in zip(pts,['30 mL','450 mL','800–1 000 mL']):
    s.append(f'<circle cx="{X(w):.1f}" cy="{Y(v):.1f}" r="3.6" fill="{blue}"/>'); s.append(txt(X(w)+(6 if w<37 else -8),Y(v)-8,lab,9.5,blue,'start' if w<37 else 'end',800))
save('func-liquido',s)

# ── 6. Ciclo del líquido: deglución y orina ──
W,H=270,196; s=svg(W,H); cx,cy=135,86
s.append(f'<circle cx="{cx}" cy="{cy}" r="50" fill="#e6eef9"/>'); s.append(txt(cx,cy-2,'LÍQUIDO',10.5,blue,'middle',800)); s.append(txt(cx,cy+11,'AMNIÓTICO',10.5,blue,'middle',800))
s.append(f'<path d="M{cx+46},{cy-30} A56 56 0 0 1 {cx+34},{cy+44}" fill="none" stroke="{blue}" stroke-width="3" marker-end="url(#a{blue[1:]})"/>')
s.append(f'<path d="M{cx-46},{cy+30} A56 56 0 0 1 {cx-34},{cy-44}" fill="none" stroke="{orange}" stroke-width="3" marker-end="url(#a{orange[1:]})"/>')
s.append(txt(cx+40,16,'el feto deglute ≈ 400 mL/día',9.5,blue,'middle',800))
s.append(txt(cx-40,cy+66,'la orina fetal lo repone',9.5,orange,'middle',800))
s.append(txt(cx,H-22,'No deglute (atresia esofágica) → se acumula',9,red,'middle',700))
s.append(txt(cx,H-8,'No orina (agenesia renal) → falta',9,orange,'middle',700))
save('func-ciclo',s)
print('ok')
