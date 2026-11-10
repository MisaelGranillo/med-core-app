# Genera los SVG de la lámina del periodo fetal (ana/fetal-*.svg). Uso: python3 fetal_svg.py ana
import json, sys
navy='#13295b'; red='#c8242c'; muted='#6b7280'; grid='#e5e8ef'
def txt(x,y,s,size=11,fill=navy,anchor='middle',w=600):
    return f'<text font-family="Helvetica, Arial, sans-serif" x="{x}" y="{y}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{w}">{s}</text>'
# ── Curvas de crecimiento (tabla de la clase: puntos medios) ──
weeks=[10.5,14.5,18.5,22.5,26.5,30.5,34.5,37.5]
lcc=[6.5,11.5,17,21.5,25.5,29,32.5,35.5]
peso=[27.5,130,350,660,1100,1750,2550,3200]
def chart(vals,ymax,yticks,unit,color,title,W=300,H=170):
    L,R,T,B=38,10,22,28; pw,ph=W-L-R,H-T-B
    X=lambda w:L+(w-8)/(40-8)*pw; Y=lambda v:T+ph-(v/ymax)*ph
    s=[f'<svg viewBox="0 0 {W} {H}" width="{W}" height="{H}" xmlns="http://www.w3.org/2000/svg">']
    s.append(txt(L,13,title,11.5,navy,'start',700))
    for t in yticks:
        s.append(f'<line x1="{L}" x2="{W-R}" y1="{Y(t):.1f}" y2="{Y(t):.1f}" stroke="{grid}"/>')
        s.append(txt(L-4,Y(t)+3.5,f'{t:,}'.replace(',',' '),9,muted,'end',500))
    for w in [12,16,20,24,28,32,36,40]:
        s.append(txt(X(w),H-12,str(w),9,muted,'middle',500))
    s.append(txt(L+pw/2,H-1,'semanas',9,muted,'middle',500))
    pts=' '.join(f'{X(w):.1f},{Y(v):.1f}' for w,v in zip(weeks,vals))
    s.append(f'<polyline points="{pts}" fill="none" stroke="{color}" stroke-width="2.6" stroke-linejoin="round"/>')
    for w,v in zip(weeks,vals): s.append(f'<circle cx="{X(w):.1f}" cy="{Y(v):.1f}" r="3" fill="{color}"/>')
    s.append(txt(W-R,Y(yticks[-1])-4,unit,9,muted,'end',500))
    return s,X,Y,'</svg>'
s,X,Y,end=chart(lcc,40,[0,10,20,30,40],'cm','#2f6db5','Longitud cefalocaudal')
s.append(f'<rect x="{X(12):.1f}" y="22" width="{X(20)-X(12):.1f}" height="120" fill="#2f6db5" opacity=".08"/>')
s.append(txt((X(12)+X(20))/2,36,'meses 3 a 5: crece más',9.5,'#2f6db5','middle',700))
open(sys.argv[1]+'/fetal-lcc.svg','w').write('\n'.join(s+[end]))
s,X,Y,end=chart(peso,3500,[0,1000,2000,3000],'g','#c8242c','Peso')
s.append(f'<rect x="{X(30):.1f}" y="22" width="{X(40)-X(30):.1f}" height="120" fill="#c8242c" opacity=".08"/>')
s.append(txt(X(30)-4,58,'últimos 2–2.5 meses →',9.5,'#c8242c','end',700))
open(sys.argv[1]+'/fetal-peso.svg','w').write('\n'.join(s+[end]))
# ── Proporción de la cabeza ──
W,H=300,160; s=[f'<svg viewBox="0 0 {W} {H}" width="{W}" height="{H}" xmlns="http://www.w3.org/2000/svg">']
for i,(lab,frac,sub) in enumerate([('Inicio 3.er mes','1/2','de la LCC'),('Inicio 5.º mes','1/3','de la LVT'),('Nacimiento','1/4','de la LVT')]):
    x=30+i*95; tot=118; f=eval(frac); hh=tot*f
    s.append(f'<rect x="{x}" y="{12+hh}" width="44" height="{tot-hh}" rx="6" fill="#f3c6cc"/>')
    s.append(f'<rect x="{x}" y="12" width="44" height="{hh}" rx="6" fill="#e48896"/>')
    s.append(txt(x+22,12+hh/2+5,frac,14,'#fff','middle',800))
    s.append(txt(x+22,H-18,lab,10,navy,'middle',700)); s.append(txt(x+22,H-6,sub,9,muted,'middle',500))
s.append('</svg>'); open(sys.argv[1]+'/fetal-cabeza.svg','w').write('\n'.join(s))
# ── Clasificación por edad gestacional ──
W,H=470,62; s=[f'<svg viewBox="0 0 {W} {H}" width="{W}" height="{H}" xmlns="http://www.w3.org/2000/svg">']
segs=[(32,37,'#e8912e','Pretérmino','< 37'),(37,39,'#9ec3ea','Término temprano','37–38 6/7'),(39,41,'#3f6fb5','Término completo','39–40 6/7'),(41,42,'#7a5ba8','Tardío','41–41 6/7'),(42,44,'#c8242c','Postérmino','≥ 42')]
X=lambda w:10+(w-32)/(44-32)*(W-20)
for a,b,c,lab,rng in segs:
    s.append(f'<rect x="{X(a):.1f}" y="18" width="{X(b)-X(a)-2:.1f}" height="16" rx="3" fill="{c}"/>')
    s.append(txt((X(a)+X(b))/2,12,lab,9.5,navy,'middle',700)); s.append(txt((X(a)+X(b))/2,48,rng,9,muted,'middle',600))
s.append(f'<line x1="{X(40):.1f}" x2="{X(40):.1f}" y1="14" y2="38" stroke="#13295b" stroke-width="2" stroke-dasharray="3 2"/>')
s.append(txt(X(40),60,'FPP: 40 semanas',9,navy,'middle',700))
s.append('</svg>'); open(sys.argv[1]+'/fetal-eg.svg','w').write('\n'.join(s))
# ── Esquema de percentiles (aproximado) ──
W,H=330,200; L,R,T,B=40,12,14,30; pw,ph=W-L-R,H-T-B
wk=[28,32,35,37,40,42]; p10=[850,1450,1900,2300,2900,3000]; p50=[1100,1800,2400,2900,3400,3600]; p90=[1400,2200,2900,3400,3900,4100]
X=lambda w:L+(w-28)/(42-28)*pw; Y=lambda v:T+ph-(v-500)/(4500-500)*ph
s=[f'<svg viewBox="0 0 {W} {H}" width="{W}" height="{H}" xmlns="http://www.w3.org/2000/svg">']
for t in [1000,2000,3000,4000]:
    s.append(f'<line x1="{L}" x2="{W-R}" y1="{Y(t):.1f}" y2="{Y(t):.1f}" stroke="{grid}"/>'); s.append(txt(L-4,Y(t)+3.5,f'{t:,}'.replace(',',' '),9,muted,'end',500))
for w in [28,32,36,40,42]: s.append(txt(X(w),H-16,str(w),9,muted,'middle',500))
s.append(txt(L+pw/2,H-3,'semanas de gestación',9,muted,'middle',500)); s.append(txt(L,T-3,'g',9,muted,'end',500))
band=' '.join(f'{X(w):.1f},{Y(v):.1f}' for w,v in zip(wk,p90))+' '+' '.join(f'{X(w):.1f},{Y(v):.1f}' for w,v in reversed(list(zip(wk,p10))))
s.append(f'<polygon points="{band}" fill="#3f6fb5" opacity=".10"/>')
for vals,lab,c,dash in [(p90,'p90','#3f6fb5','4 3'),(p50,'p50','#3f6fb5',''),(p10,'p10','#c8242c','')]:
    pts=' '.join(f'{X(w):.1f},{Y(v):.1f}' for w,v in zip(wk,vals))
    s.append(f'<polyline points="{pts}" fill="none" stroke="{c}" stroke-width="2" {"stroke-dasharray=%s"%chr(34)+dash+chr(34) if dash else ""}/>')
    s.append(txt(W-R-2,Y(vals[-1])-4,lab,9,c,'end',700))
s.append(f'<line x1="{L}" x2="{W-R}" y1="{Y(2500):.1f}" y2="{Y(2500):.1f}" stroke="#e8912e" stroke-width="1.6" stroke-dasharray="5 3"/>')
s.append(txt(L+4,Y(2500)-4,'2 500 g',9,'#b5651d','start',700))
for w,v,lab,c in [(35,2300,'A','#e8912e'),(40,2300,'B','#c8242c'),(40,3500,'C','#2e8b57')]:
    s.append(f'<circle cx="{X(w):.1f}" cy="{Y(v):.1f}" r="6" fill="{c}" stroke="#fff" stroke-width="1.5"/>'); s.append(txt(X(w),Y(v)+3.5,lab,8.5,'#fff','middle',800))
s.append('</svg>'); open(sys.argv[1]+'/fetal-pct.svg','w').write('\n'.join(s))
print('ok')
