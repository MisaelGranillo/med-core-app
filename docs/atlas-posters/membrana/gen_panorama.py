# Genera las fuentes HTML de las láminas de Aparatos y sistemas y de la Célula (src/pan-*.html, src/cel-*.html).
import json, pathlib
SRC = pathlib.Path.home() / 'med-core-app/docs/atlas-posters/membrana/src'
CSS = """<style>
svg text { font-family: 'Inter'; }
.page { gap: 10px; }
.hero { flex: 1 1 auto !important; }
.row.hero > section, section.hero { display: flex; flex-direction: column; }
.row.hero > section > .callouts, section.hero > .callouts { margin: auto !important; }
.row.hero > .col > .grow { flex: 1; }
.page > .foot { margin-top: 0; }
.lst { margin: 0; padding-left: 16px; font-size: 12.8px; line-height: 1.4; }
.lst li { margin: 0 0 3px; }
.lst li { margin: 0 0 2px; }
table td { font-size: 12.4px; padding: 6px 7px; }
th { font-size: 10.5px; }
.card .t { font-size: 13px; } .card .d { font-size: 12px; }
.sum div { font-size: 12px; }
.page > section, .page > div.row { }
.ph { font-size: 15px; }
.steps { display: flex; align-items: stretch; gap: 4px; }
.steps div { flex: 1; background: #f6f8fc; border-radius: 7px; padding: 8px 9px; font-size: 12px; }
.steps b { display: block; font-size: 13px; color: var(--navy); }
.steps span.ar { flex: 0 0 auto; background: none; padding: 0; align-self: center; color: var(--red); font-weight: 800; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.cap { font-size: 9.6px; color: var(--muted); margin: 0; text-align: center; }
</style>"""
def a3d(img, height, cw, labels, side, L=None, gap=34, extra=None):
    d = {"img": img, "height": height, "cw": cw, "gap": gap, "labels": labels, "side": side}
    if L is not None: d["L"] = L
    if extra: d.update(extra)
    return '<script type="auto3d">' + json.dumps(d, ensure_ascii=False) + '</script>'
def steps(items):
    out = []
    for i, (t, d) in enumerate(items):
        if i: out.append('<span class="ar">→</span>')
        out.append(f'<div><b>{t}</b>{d}</div>')
    return '<div class="steps">' + ''.join(out) + '</div>'
def table(head, rows):
    h = '<tr>' + ''.join(f'<th>{x}</th>' for x in head) + '</tr>' if head else ''
    return '<table>' + h + ''.join('<tr>' + ''.join(f'<td class="k">{r[0]}</td>' + ''.join(f'<td>{c}</td>' for c in r[1:])) + '</tr>' for r in rows) + '</table>'
def summ(items):
    return '<div class="sum">' + ''.join(f'<div>{{{{icon:{i}}}}}<span>{t}</span></div>' for i, t in items) + '</div>'
def page(fn, eyebrow, h1, tag, body, foot):
    html = f'''<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><link rel="stylesheet" href="membrana.css">
{CSS}
</head><body><div class="page">
<header>
  <p class="eyebrow">{eyebrow}</p>
  <h1>{h1}</h1>
  <p class="tag">{tag}</p>
</header>
{body}
<p class="foot">{foot}</p>
</div></body></html>'''
    (SRC / fn).write_text(html); print('ok', fn)
def P(n, title, inner, small='', style='', cls='panel'):
    s = f' <small>— {small}</small>' if small else ''
    st = f' style="{style}"' if style else ''
    return f'<section class="{cls}"{st}>\n  <div class="ph"><span class="n">{n}</span>{title}{s}</div>\n  {inner}\n</section>'
def row(*sections, hero=False): return f'<div class="row{" hero" if hero else ""}">\n' + '\n'.join(sections) + '\n</div>'
ZA = 'Modelos 3D: Z-Anatomy (CC BY-SA 4.0)'

# ───────── 1 Digestivo ─────────
dig = row(
 P(1, 'Tubo digestivo y glándulas anexas', a3d('ana3d/dig-ant.png', 830, 600,
   {"len":["Lengua",""],"par":["Parótida","glándula salival"],"eso":["Esófago","≈ 25 cm"],"hig":["Hígado","≈ 1.5 kg"],"ves":["Vesícula biliar",""],"duo":["Duodeno","≈ 25 cm"],"cas":["Colon ascendente",""],"apx":["Apéndice","fosa ilíaca derecha"],
    "est":["Estómago",""],"pan":["Páncreas","detrás del estómago"],"ctr":["Colon transverso",""],"yey":["Yeyuno e íleon","≈ 6 m"],"cde":["Colon descendente",""],"sig":["Colon sigmoides",""]},
   {"len":"left","par":"left","eso":"left","hig":"left","ves":"left","duo":"left","cas":"left","apx":"left","est":"right","pan":"right","ctr":"right","yey":"right","cde":"right","sig":"right"}, L=140, gap=36),
   'vista anterior · modelo 3D', style='flex:1.3'),
 '<section class="col" style="flex:.7">' +
 P(2, 'Digestión por sitio', table(['Sitio','Secreción','Qué digiere'],[
   ['Boca','Amilasa salival','Almidón'],['Estómago','HCl (pH ≈ 1.5–3.5) y pepsina','Proteínas'],['Páncreas','Amilasa, lipasa, tripsina; HCO₃⁻','Los tres; neutraliza el ácido'],
   ['Hígado','Bilis (sales biliares)','Emulsiona grasas'],['Intestino delgado','Disacaridasas, peptidasas','Termina la digestión']])) +
 P(3, 'Dónde se absorbe', '<ul class="lst"><li><b>Duodeno</b>: hierro y calcio.</li><li><b>Yeyuno</b>: la mayoría de azúcares, aminoácidos y grasas.</li><li><b>Íleon</b>: <b>vitamina B12</b> (con factor intrínseco) y sales biliares.</li><li><b>Colon</b>: agua y electrolitos; vitaminas de la microbiota.</li></ul>', cls='panel grow') +
 '</section>', hero=True)
dig += '\n' + row(
 P(4, 'Irrigación arterial', table(['Arteria','Irriga'],[['Tronco celíaco','Esófago abdominal, estómago, duodeno proximal, hígado, páncreas, bazo'],['Mesentérica superior','Duodeno distal al colon transverso (2/3)'],['Mesentérica inferior','Último tercio del transverso al recto superior']]), style='flex:1.1'),
 P(5, 'Funciones', '<ul class="lst"><li><b>Ingestión</b> y digestión mecánica (masticación, peristaltismo).</li><li><b>Digestión química</b> por enzimas.</li><li><b>Absorción</b> de nutrientes, agua y electrolitos.</li><li><b>Excreción</b> de heces.</li><li>Barrera inmune: tejido linfoide asociado al intestino.</li></ul>', style='flex:.9'))
dig += '\n' + P(6, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Anemia perniciosa</b>: la gastritis autoinmune destruye las células parietales; sin factor intrínseco no se absorbe la B12 en el íleon → anemia megaloblástica.</p><p style="margin:0"><b>Apendicitis</b>: dolor que empieza en el epigastrio y migra a la fosa ilíaca derecha (punto de McBurney).</p></div>', cls='clin')
dig += '\n' + P(7, 'Resumen clave', summ([('Drop','Estómago: <b>HCl y pepsina</b>.'),('Flask','Páncreas: enzimas para <b>todo</b>.'),('Target','B12 → <b>íleon</b>.'),('Heartbeat','Celíaca · AMS · AMI.'),('Waves','Colon: <b>agua</b>.')]))
page('pan-digestivo.html','MedCore — Atlas de Aparatos y Sistemas','Aparato Digestivo','Un tubo de la boca al ano y tres glándulas que lo alimentan de enzimas y bilis.',dig,f'MedCore · Atlas · Panorama · {ZA}')

# ───────── 2 Respiratorio ─────────
res = row(
 P(1, 'Vías respiratorias y pulmones', a3d('ana3d/res-ant.png', 440, 455,
   {"far":["Faringe",""],"lar":["Laringe","cartílago tiroides"],"tra":["Tráquea","C6 → T4–T5"],"lsd":["Lóbulo superior","pulmón derecho"],"lmd":["Lóbulo medio","solo el derecho"],"lid":["Lóbulo inferior",""],
    "lsi":["Lóbulo superior","pulmón izquierdo"],"lii":["Lóbulo inferior",""]},
   {"far":"left","lar":"left","tra":"left","lsd":"left","lmd":"left","lid":"left","lsi":"left","lii":"left"}, L=120, gap=40),
   'vista anterior · modelo 3D', style='flex:1.05'),
 P(2, 'Árbol bronquial', a3d('ana3d/res-arbol.png', 365, 455,
   {"tra":["Tráquea",""],"bp":["Bronquio principal","izquierdo"],"bl":["Bronquio lobar",""],"bs":["Bronquio segmentario",""]},
   {"tra":"right","bp":"right","bl":"right","bs":"right"}, gap=42, L=0) +
   '<p style="font-size:12.2px;margin:4px 0 0">El bronquio principal <b>derecho</b> es más corto, ancho y vertical: ahí suelen caer los cuerpos extraños.</p>' +
   '<div class="two" style="margin-top:6px"><div class="card"><div><p class="t">Pulmón derecho</p><p class="d">3 lóbulos · 2 cisuras · 10 segmentos</p></div></div><div class="card"><div><p class="t">Pulmón izquierdo</p><p class="d">2 lóbulos · 1 cisura · língula</p></div></div></div>',
   'modelo 3D', style='flex:.95'), hero=True)
res += '\n' + row(
 P(3, 'Dos porciones', table(['Porción','Incluye','Función'],[['Conductora','Nariz → bronquiolos terminales','Conduce, calienta, humedece y filtra'],['Respiratoria','Bronquiolos respiratorios → alvéolos','Intercambio gaseoso (hematosis)']]), style='flex:1.1'),
 P(4, 'Volúmenes del adulto', table(None,[['Corriente (VC)','≈ 500 mL'],['Reserva inspiratoria','≈ 3000 mL'],['Reserva espiratoria','≈ 1100 mL'],['Residual','≈ 1200 mL'],['Capacidad pulmonar total','≈ 5800–6000 mL']]), style='flex:.9'))
res += '\n' + row(
 P(5, 'Mecánica', '<ul class="lst"><li><b>Inspiración</b> (activa): el diafragma (nervio frénico, C3–C5) baja y los intercostales externos elevan las costillas.</li><li><b>Espiración</b> en reposo: pasiva, por retracción elástica.</li><li>Forzada: abdominales e intercostales internos.</li></ul>', style='flex:1'),
 P(6, 'Hematosis', '<ul class="lst"><li>El O₂ pasa del alvéolo a la sangre y el CO₂ al revés, por difusión.</li><li>Barrera de ≈ 0.5 µm: neumocito I, membranas basales, endotelio.</li><li>El CO₂ viaja sobre todo como <b>bicarbonato</b> (≈ 70 %).</li></ul>', style='flex:1'))
res += '\n' + P(7, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Aspiración de un cuerpo extraño</b>: se aloja con más frecuencia en el bronquio principal derecho.</p><p style="margin:0"><b>Neumotórax</b>: entra aire al espacio pleural, se pierde la presión negativa y el pulmón se colapsa.</p></div>', cls='clin')
res += '\n' + P(8, 'Resumen clave', summ([('Wind','Derecho: <b>3 lóbulos</b>.'),('Target','Cuerpo extraño → <b>bronquio derecho</b>.'),('Lightning','Diafragma: <b>C3–C5</b>.'),('Drop','VC ≈ <b>500 mL</b>.'),('Atom','CO₂ como <b>HCO₃⁻</b>.')]))
page('pan-respiratorio.html','MedCore — Atlas de Aparatos y Sistemas','Aparato Respiratorio','Una vía que conduce el aire y un epitelio de 0.5 µm donde se intercambian los gases.',res,f'MedCore · Atlas · Panorama · {ZA}')

# ───────── 3 Urinario ─────────
uri = row(
 P(1, 'Riñones y vías urinarias', a3d('ana3d/uri-ant.png', 440, 520,
   {"sup":["Glándula suprarrenal",""],"rid":["Riñón","T12–L3 · retroperitoneal"],"ure":["Uréter","≈ 25–30 cm"],"vej":["Vejiga",""],"uret":["Uretra",""],
    "ao":["Aorta abdominal",""],"vci":["Vena cava inferior",""],"pel":["Pelvis renal",""]},
   {"sup":"left","rid":"left","ure":"left","vej":"left","uret":"left","ao":"right","vci":"right","pel":"right"}, L=150, gap=40),
   'vista anterior · modelo 3D', style='flex:1.1'),
 '<section class="col" style="flex:.9">' +
 P(2, 'La nefrona', '<ul class="lst"><li><b>Corpúsculo</b> (glomérulo + cápsula de Bowman): filtra el plasma.</li><li><b>Túbulo proximal</b>: reabsorbe ≈ 65 % del Na⁺ y del agua, toda la glucosa y los aminoácidos.</li><li><b>Asa de Henle</b>: crea el gradiente para concentrar la orina.</li><li><b>Túbulo distal y colector</b>: ajuste fino; la aldosterona reabsorbe Na⁺ y la ADH reabsorbe agua.</li></ul><p style="font-size:12.2px;margin:4px 0 0">≈ 1 millón de nefronas por riñón.</p>') +
 P(3, 'Cifras', table(None,[['Flujo renal','≈ 20–25 % del gasto cardiaco'],['Filtración glomerular','≈ 125 mL/min (≈ 180 L/día)'],['Orina','≈ 1–2 L/día']]), cls='panel grow') +
 '</section>', hero=True)
uri += '\n' + P(4, 'Sistema renina-angiotensina-aldosterona', steps([('↓ Presión o Na⁺','La detecta el aparato yuxtaglomerular'),('Renina','Angiotensinógeno → angiotensina I'),('ECA (pulmón)','Angiotensina I → angiotensina II'),('Angiotensina II','Vasoconstricción, sed, ADH'),('Aldosterona','Reabsorbe Na⁺ y agua; excreta K⁺')]))
uri += '\n' + row(
 P(5, 'Funciones del riñón', '<ul class="lst"><li>Excreta urea, creatinina y fármacos.</li><li>Regula agua, electrolitos y equilibrio ácido-base.</li><li>Endocrino: <b>eritropoyetina</b>, <b>calcitriol</b> y renina.</li><li>Gluconeogénesis en el ayuno prolongado.</li></ul>', style='flex:1'),
 P(6, 'Correlación clínica', '<p style="font-size:12.6px">Los <b>IECA</b> y los <b>ARA-II</b> bajan la presión bloqueando este sistema.</p><p style="font-size:12.6px;margin:0">Un <b>cálculo</b> se atora en los estrechamientos del uréter: unión pieloureteral, cruce de los vasos ilíacos y entrada a la vejiga.</p>', style='flex:1', cls='clin'))
uri += '\n' + P(7, 'Resumen clave', summ([('Drop','FG ≈ <b>125 mL/min</b>.'),('Target','Proximal: <b>65 %</b> del Na⁺.'),('Key','ADH → <b>agua</b>.'),('Lightning','Angiotensina II: <b>vasoconstricción</b>.'),('Heartbeat','EPO y <b>calcitriol</b>.')]))
page('pan-urinario.html','MedCore — Atlas de Aparatos y Sistemas','Aparato Urinario','Dos riñones que filtran 180 L al día y devuelven casi todo a la sangre.',uri,f'MedCore · Atlas · Panorama · {ZA}')

# ───────── 4 Reproductor ─────────
rep = row(
 P(1, 'Masculino', a3d('ana3d/rep-masc.png', 330, 455,
   {"vej":["Vejiga",""],"ves":["Vesícula seminal",""],"pro":["Próstata",""],"dd":["Conducto deferente",""],"cc":["Cuerpo cavernoso",""],"cs":["Cuerpo esponjoso","rodea la uretra"],"gl":["Glande",""],"epi":["Epidídimo",""],"tes":["Testículo",""]},
   {"vej":"left","ves":"left","pro":"left","dd":"left","cc":"left","cs":"left","gl":"left","epi":"left","tes":"left"}, L=120, gap=30),
   'vista lateral · modelo 3D', style='flex:1'),
 P(2, 'Femenino', a3d('fotos/femenino.jpg', 370, 455,
   {"tro":["Trompa uterina",""],"ova":["Ovario",""],"vej":["Vejiga",""],"ure":["Uretra",""],"ute":["Útero",""],"dou":["Fondo de saco","rectouterino (Douglas)"],"cer":["Cérvix",""],"vag":["Vagina",""],"rec":["Recto",""]},
   {"tro":"right","ova":"right","vej":"right","ure":"right","ute":"right","dou":"right","cer":"right","vag":"right","rec":"right"}, L=0, gap=34),
   'corte sagital · ilustración', style='flex:1'), hero=True)
rep += '\n' + row(
 P(3, 'Del testículo al exterior', steps([('Túbulos seminíferos','Espermatogénesis ≈ 64–74 días'),('Epidídimo','Maduran y ganan movilidad'),('Conducto deferente','Peristaltismo'),('Conducto eyaculador','Se une la vesícula seminal'),('Uretra','Prostática → peneana')]) +
   '<p style="font-size:12.2px;margin:6px 0 0"><b>Leydig</b>: testosterona (LH). <b>Sertoli</b>: sostienen la espermatogénesis y forman la barrera hematotesticular (FSH). Semen: vesículas seminales (fructosa, la mayor parte del volumen) y próstata.</p>', style='flex:1.15'),
 P(4, 'Ciclo menstrual (≈ 28 días)', table(['Fase','Hormona','Endometrio'],[['Folicular (1–14)','FSH; estrógenos del folículo','Menstrual → proliferativa'],['Ovulación (≈ 14)','Pico de LH','—'],['Lútea (15–28)','Progesterona del cuerpo lúteo','Secretora']]), style='flex:.85'))
rep += '\n' + P(5, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Embarazo ectópico</b>: el embrión se implanta fuera del útero, casi siempre en la ampolla de la trompa; puede romperla y sangrar.</p><p style="margin:0"><b>Hiperplasia prostática benigna</b>: la próstata crece alrededor de la uretra y causa chorro débil y nicturia en hombres mayores.</p></div>', cls='clin')
rep += '\n' + P(6, 'Resumen clave', summ([('Key','LH → <b>Leydig</b>.'),('Shield','Sertoli: <b>barrera</b>.'),('Lightning','Pico de LH → <b>ovulación</b>.'),('Drop','Lútea: <b>progesterona</b>.'),('Target','Ectópico → <b>ampolla</b>.')]))
page('pan-reproductor.html','MedCore — Atlas de Aparatos y Sistemas','Aparato Reproductor','Gónadas que producen gametos y hormonas, y conductos que los llevan a su destino.',rep,f'MedCore · Atlas · Panorama · Masculino: {ZA} · Femenino: BruceBlaus (Blausen Medical, CC BY 3.0), sin rótulos originales')

# ───────── 5 Cardiovascular ─────────
car = row(
 P(1, 'Exterior', a3d('ana3d/car-ant.png', 400, 455,
   {"vcs":["Vena cava superior",""],"ad":["Aurícula derecha",""],"vd":["Ventrículo derecho",""],"vci":["Vena cava inferior",""],"aa":["Aorta ascendente",""],"tp":["Tronco pulmonar",""],"ai":["Aurícula izquierda","orejuela"],"vi":["Ventrículo izquierdo","forma el ápex"]},
   {"vcs":"left","ad":"left","vd":"left","vci":"left","aa":"left","tp":"left","ai":"left","vi":"left"}, L=120, gap=42),
   'vista anterior · modelo 3D', style='flex:1'),
 P(2, 'Interior', a3d('ana3d/car-cut.png', 345, 455,
   {"ad":["Aurícula derecha",""],"tri":["Válvula tricúspide","AV derecha"],"ao":["Aorta",""],"vao":["Válvula aórtica","semilunar"],"mit":["Válvula mitral","AV izquierda"],"vi":["Ventrículo izquierdo","pared más gruesa"],"pap":["Músculo papilar","y cuerdas tendinosas"]},
   {"ad":"right","tri":"right","ao":"right","vao":"right","mit":"right","vi":"right","pap":"right"}, L=0, gap=42),
   'corte frontal · modelo 3D', style='flex:1'), hero=True)
car += '\n' + row(
 P(3, 'Dos circulaciones', '<p style="font-size:12.6px;margin:0 0 4px"><b>Menor (pulmonar)</b>: VD → tronco pulmonar → pulmones → venas pulmonares → AI.</p><p style="font-size:12.6px;margin:0"><b>Mayor (sistémica)</b>: VI → aorta → tejidos → venas cavas → AD.</p><p style="font-size:12.2px;margin:6px 0 0;color:var(--muted)">Las arterias pulmonares llevan sangre <b>pobre</b> en O₂; las venas pulmonares, sangre oxigenada.</p>', style='flex:1'),
 P(4, 'Cifras', table(None,[['Gasto cardiaco','≈ 5 L/min = FC × volumen sistólico'],['FC en reposo','60–100 lpm'],['Volumen sistólico','≈ 70 mL'],['PA óptima','&lt; 120/80 mmHg']]), style='flex:1'))
car += '\n' + P(5, 'Sistema de conducción y ECG', steps([('Nodo sinusal','Marcapasos: 60–100 lpm'),('Aurículas','Onda P'),('Nodo AV','Retrasa ≈ 0.1 s · intervalo PR 0.12–0.20 s'),('Haz de His y ramas','Septo'),('Purkinje','Ventrículos: QRS &lt; 0.12 s · repolarización: T')]))
car += '\n' + P(6, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Infarto</b>: la descendente anterior irriga la pared anterior y el septo; su oclusión da el infarto más extenso.</p><p style="margin:0"><b>Ruidos</b>: S1 = cierre de mitral y tricúspide (inicio de la sístole); S2 = cierre de aórtica y pulmonar.</p></div>', cls='clin')
car += '\n' + P(7, 'Resumen clave', summ([('Heartbeat','Marcapasos: <b>nodo sinusal</b>.'),('Gauge','GC = <b>FC × VS</b>.'),('Lightning','P · QRS · <b>T</b>.'),('Drop','Venas pulmonares: <b>O₂</b>.'),('Target','S1 = <b>AV</b> · S2 = semilunares.')]))
page('pan-cardiovascular.html','MedCore — Atlas de Aparatos y Sistemas','Sistema Cardiovascular','Una bomba doble con su propio marcapasos, en serie con dos circuitos.',car,f'MedCore · Atlas · Panorama · {ZA}')

# ───────── 6 Nervioso ─────────
ner = row(
 P(1, 'Lóbulos del hemisferio', a3d('ana3d/ner-lat.png', 290, 455,
   {"fr":["Frontal",""],"pre":["Giro precentral","motor primario"],"te":["Temporal",""],"tr":["Tronco encefálico",""],
    "pos":["Giro poscentral","somatosensorial"],"pa":["Parietal",""],"oc":["Occipital",""],"cb":["Cerebelo",""]},
   {"fr":"left","pre":"left","te":"left","tr":"left","pos":"left","pa":"left","oc":"left","cb":"left"}, L=120, gap=32),
   'vista lateral · modelo 3D', style='flex:1'),
 P(2, 'Cara medial', a3d('ana3d/ner-med.png', 290, 455,
   {"pin":["Epífisis (pineal)",""],"cb":["Cerebelo",""],"bul":["Bulbo raquídeo",""],"pon":["Puente",""],"mes":["Mesencéfalo",""],
    "cin":["Giro del cíngulo",""],"cc":["Cuerpo calloso",""],"ta":["Tálamo",""],"hy":["Hipotálamo",""],"hip":["Hipófisis",""]},
   {"pin":"right","cb":"right","bul":"right","pon":"right","mes":"right","cin":"right","cc":"right","ta":"right","hy":"right","hip":"right"}, L=0, gap=26),
   'corte sagital · modelo 3D', style='flex:1'), hero=True)
ner += '\n' + row(
 P(3, 'Qué hace cada región', table(['Región','Función principal'],[['Frontal','Movimiento voluntario, lenguaje expresivo (Broca), planeación y personalidad'],['Parietal','Sensibilidad corporal, orientación espacial'],['Temporal','Audición, comprensión del lenguaje (Wernicke), memoria (hipocampo)'],['Occipital','Visión'],['Cerebelo','Coordinación, equilibrio, tono'],['Tronco','Centros respiratorio y cardiovascular; pares craneales III–XII'],['Hipotálamo','Temperatura, hambre, sed; controla la hipófisis']]), style='flex:1.2'),
 P(4, 'Sistema nervioso autónomo', table(['','Simpático','Parasimpático'],[['Origen','Toracolumbar (T1–L2)','Craneosacro (III, VII, IX, X; S2–S4)'],['Ganglios','Cerca de la médula','Cerca del órgano'],['Posganglionar','Noradrenalina','Acetilcolina'],['Efecto','Lucha o huida','Reposo y digestión']]), style='flex:.8'))
ner += '\n' + P(5, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>EVC de la arteria cerebral media izquierda</b>: debilidad de cara y brazo derechos y, por estar el lenguaje en ese hemisferio en la mayoría, afasia.</p><p style="margin:0"><b>Lesión cerebelosa</b>: ataxia del mismo lado, temblor de intención y marcha inestable.</p></div>', cls='clin')
ner += '\n' + P(6, 'Resumen clave', summ([('Brain','Precentral: <b>motor</b>.'),('Target','Poscentral: <b>sensitivo</b>.'),('Eye','Occipital: <b>visión</b>.'),('Scales','Cerebelo: <b>coordinación</b>.'),('Lightning','Simpático: <b>T1–L2</b>.')]))
page('pan-nervioso.html','MedCore — Atlas de Aparatos y Sistemas','Sistema Nervioso','Cada región tiene su tarea: por eso la clínica localiza la lesión.',ner,f'MedCore · Atlas · Panorama · {ZA}')

# ───────── 7 Membrana ─────────
mem = P(1, 'Modelo de mosaico fluido', a3d('fotos/membrana.png', 270, 955,
   {"can":["Proteína de canal",""],"col":["Colesterol",""],"cab":["Cabeza hidrofílica","fosfato"],"gll":["Glucolípido",""],"per":["Proteína periférica",""],
    "glp":["Glucoproteína","glucocáliz"],"pin":["Proteína integral",""],"col2":["Colas hidrofóbicas","ácidos grasos"],"hel":["Proteína transmembrana","hélice α"],"cit":["Citoesqueleto",""]},
   {"can":"left","col":"left","cab":"left","gll":"left","per":"left","glp":"right","pin":"right","col2":"right","hel":"right","cit":"right"}, L=135, gap=28),
   'Singer y Nicolson, 1972 · ilustración', cls='panel hero')
mem += '\n' + row(
 P(2, 'Componentes', table(['Componente','Función'],[['Fosfolípidos','Bicapa: cabezas al agua, colas hacia dentro'],['Colesterol','Regula la fluidez'],['Proteínas integrales','Canales, transportadores, receptores'],['Proteínas periféricas','Señalización, anclaje al citoesqueleto'],['Glucocáliz','Reconocimiento celular, grupos sanguíneos']]), style='flex:1'),
 P(3, 'Transporte', table(['Tipo','Energía','Ejemplo'],[['Difusión simple','No','O₂, CO₂, esteroides'],['Difusión facilitada','No','GLUT, canales iónicos'],['Ósmosis','No','Agua por acuaporinas'],['Activo primario','ATP directo','Bomba Na⁺/K⁺: 3 Na⁺ fuera, 2 K⁺ dentro'],['Activo secundario','Gradiente de Na⁺','SGLT1: Na⁺ y glucosa'],['Vesicular','ATP','Endocitosis, exocitosis']]), style='flex:1.1'))
mem += '\n' + P(4, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Fibrosis quística</b>: falla el canal de Cl⁻ CFTR; las secreciones se vuelven espesas en pulmón y páncreas.</p><p style="margin:0"><b>Digoxina</b>: inhibe la bomba Na⁺/K⁺; sube el Ca²⁺ dentro del miocito y aumenta la fuerza de contracción.</p></div>', cls='clin')
mem += '\n' + P(5, 'Resumen clave', summ([('Drop','Bicapa <b>anfipática</b>.'),('Gauge','Colesterol: <b>fluidez</b>.'),('Lightning','Na⁺/K⁺: <b>3 fuera, 2 dentro</b>.'),('Key','Facilitada: <b>sin ATP</b>.'),('Lock','CFTR: canal de <b>Cl⁻</b>.')]))
page('cel-membrana.html','MedCore — Atlas de la Célula','Membrana Celular','Una bicapa fluida con proteínas que deciden qué entra y qué sale.',mem,'MedCore · Atlas · Célula · Ilustración: Mariana Ruiz (LadyofHats), dominio público, sin rótulos originales')

# ───────── 8 Célula ─────────
cel = P(1, 'Célula animal', a3d('fotos/celula.png', 420, 955,
   {"mem":["Membrana plasmática",""],"gol":["Aparato de Golgi","modifica y empaca"],"rel":["RE liso","lípidos, detoxificación"],"nuc":["Nucléolo","ARN ribosomal"],"fla":["Flagelo",""],
    "per":["Peroxisoma",""],"env":["Envoltura nuclear","doble membrana con poros"],"rer":["RE rugoso","ribosomas: proteínas"],"mit":["Mitocondria","ATP"],"cen":["Centrosoma","2 centriolos"],"cit":["Citoplasma",""],"ves":["Vesícula secretora","exocitosis"]},
   {"mem":"left","gol":"left","rel":"left","nuc":"left","fla":"left","per":"right","env":"right","rer":"right","mit":"right","cen":"right","cit":"right","ves":"right"}, L=150, gap=32),
   'ilustración', cls='panel hero')
cel += '\n' + row(
 P(2, 'Organelos', table(['Organelo','Función'],[['Núcleo','Guarda el ADN; transcripción'],['Ribosomas','Síntesis de proteínas'],['RE rugoso','Proteínas de secreción y de membrana'],['RE liso','Lípidos, detoxificación, depósito de Ca²⁺'],['Golgi','Modifica, clasifica y empaca'],['Lisosomas','Digestión con hidrolasas ácidas'],['Mitocondrias','Fosforilación oxidativa; ADN propio'],['Peroxisomas','Oxidan ácidos grasos; degradan H₂O₂']]), style='flex:1.15'),
 '<section class="col" style="flex:.85">' +
 P(3, 'Eucariota frente a procariota', table(['','Eucariota','Procariota'],[['Núcleo','Con envoltura','Nucleoide'],['Organelos','Membranosos','No'],['Ribosomas','80S','70S'],['Tamaño','10–100 µm','1–10 µm']])) +
 P(4, 'Citoesqueleto', '<ul class="lst"><li><b>Microtúbulos</b> (tubulina): huso mitótico, cilios, transporte.</li><li><b>Filamentos de actina</b>: forma, movimiento, contracción.</li><li><b>Intermedios</b>: resistencia mecánica (queratina).</li></ul>', cls='panel grow') +
 '</section>')
cel += '\n' + P(5, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Enfermedades lisosomales</b> (Gaucher, Tay-Sachs): falta una hidrolasa y el sustrato se acumula dentro del lisosoma.</p><p style="margin:0"><b>Enfermedades mitocondriales</b>: el ADN mitocondrial se hereda por vía materna; afectan sobre todo músculo y cerebro.</p></div>', cls='clin')
cel += '\n' + P(6, 'Resumen clave', summ([('Dna','Núcleo: <b>ADN</b>.'),('Cube','RER: <b>proteínas</b>.'),('Lightning','Mitocondria: <b>ATP</b>.'),('Bug','Lisosoma: <b>digestión</b>.'),('ArrowsClockwise','Microtúbulos: <b>huso</b>.')]))
page('cel-estructura.html','MedCore — Atlas de la Célula','Estructura de la Célula','Cada organelo es un compartimento con su tarea.',cel,'MedCore · Atlas · Célula · Ilustración: Mariana Ruiz (LadyofHats), dominio público, sin rótulos originales')


# ───── Rediseño de las láminas con dos imágenes: cada imagen en su panel, texto al lado ─────
def fig(n, title, small, block, cw, side, img_right=False):
    a = f'<div style="flex:0 0 {cw}px">{block}</div>'
    b = f'<div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:8px;justify-content:center">{side}</div>'
    inner = '<div style="display:flex;gap:14px;align-items:center">' + (b + a if img_right else a + b) + '</div>'
    return P(n, title, inner, small, cls='panel hero')
def sub(t, html): return f'<div><div class="sh">{t}</div>{html}</div>'

car = fig(1, 'Exterior', 'vista anterior · modelo 3D', a3d('ana3d/car-ant.png', 500, 570,
   {"vcs":["Vena cava superior",""],"tp":["Tronco pulmonar",""],"aa":["Aorta ascendente",""],"ai":["Aurícula izquierda","orejuela"],"ad":["Aurícula derecha",""],"vd":["Ventrículo derecho",""],"vi":["Ventrículo izquierdo","forma el ápex"],"vci":["Vena cava inferior",""]},
   {k:"left" for k in ["vcs","tp","aa","ai","ad","vd","vi","vci"]}, L=150, gap=40), 570,
   sub('Dos circulaciones', '<ul class="lst"><li><b>Menor</b>: VD → tronco pulmonar → pulmones → venas pulmonares → AI.</li><li><b>Mayor</b>: VI → aorta → tejidos → venas cavas → AD.</li><li>Las arterias pulmonares llevan sangre <b>pobre</b> en O₂.</li></ul>') +
   sub('Cifras', table(None,[['Gasto cardiaco','≈ 5 L/min = FC × VS'],['FC en reposo','60–100 lpm'],['Volumen sistólico','≈ 70 mL'],['PA óptima','&lt; 120/80 mmHg']])))
car += '\n' + fig(2, 'Interior', 'corte frontal · modelo 3D', a3d('ana3d/car-cut.png', 450, 580,
   {"ao":["Aorta",""],"vao":["Válvula aórtica","semilunar"],"ad":["Aurícula derecha",""],"tri":["Válvula tricúspide","AV derecha"],"mit":["Válvula mitral","AV izquierda"],"vi":["Ventrículo izquierdo","pared más gruesa"],"pap":["Músculo papilar","y cuerdas tendinosas"]},
   {k:"right" for k in ["ao","vao","ad","tri","mit","vi","pap"]}, L=0, gap=40), 580,
   sub('Sistema de conducción', '<ul class="lst"><li><b>Nodo sinusal</b>: marcapasos, 60–100 lpm.</li><li>Aurículas: <b>onda P</b>.</li><li><b>Nodo AV</b>: retrasa ≈ 0.1 s; PR 0.12–0.20 s.</li><li>Haz de His, ramas y <b>Purkinje</b>: QRS &lt; 0.12 s.</li><li>Repolarización ventricular: <b>onda T</b>.</li></ul>'), img_right=True)
car += '\n' + P(3, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Infarto</b>: la descendente anterior irriga la pared anterior y el septo; su oclusión da el infarto más extenso.</p><p style="margin:0"><b>Ruidos</b>: S1 = cierre de mitral y tricúspide (inicio de la sístole); S2 = cierre de aórtica y pulmonar.</p></div>', cls='clin')
car += '\n' + P(4, 'Resumen clave', summ([('Heartbeat','Marcapasos: <b>nodo sinusal</b>.'),('Gauge','GC = <b>FC × VS</b>.'),('Lightning','P · QRS · <b>T</b>.'),('Drop','Venas pulmonares: <b>O₂</b>.'),('Target','S1 = <b>AV</b> · S2 = semilunares.')]))
page('pan-cardiovascular.html','MedCore — Atlas de Aparatos y Sistemas','Sistema Cardiovascular','Una bomba doble con su propio marcapasos, en serie con dos circuitos.',car,f'MedCore · Atlas · Panorama · {ZA}')

res = fig(1, 'Vías respiratorias y pulmones', 'vista anterior · modelo 3D', a3d('ana3d/res-ant.png', 530, 560,
   {"far":["Faringe",""],"lar":["Laringe","cartílago tiroides"],"tra":["Tráquea","C6 → T4–T5"],"lsd":["Lóbulo superior","pulmón derecho"],"lmd":["Lóbulo medio","solo el derecho"],"lid":["Lóbulo inferior","pulmón derecho"],"lsi":["Lóbulo superior","pulmón izquierdo"],"lii":["Lóbulo inferior","pulmón izquierdo"]},
   {k:"left" for k in ["far","lar","tra","lsd","lmd","lid","lsi","lii"]}, L=150, gap=40), 560,
   sub('Dos porciones', table(None,[['Conductora','Nariz → bronquiolos terminales: conduce, calienta, humedece y filtra'],['Respiratoria','Bronquiolos respiratorios → alvéolos: hematosis']])) +
   sub('Mecánica', '<ul class="lst"><li><b>Inspiración</b> (activa): diafragma (frénico, C3–C5) e intercostales externos.</li><li><b>Espiración</b> en reposo: pasiva, por retracción elástica.</li></ul>'))
res += '\n' + fig(2, 'Árbol bronquial', 'modelo 3D', a3d('ana3d/res-arbol.png', 380, 510,
   {"tra":["Tráquea",""],"bp":["Bronquio principal","izquierdo"],"bl":["Bronquio lobar",""],"bs":["Bronquio segmentario",""]},
   {k:"right" for k in ["tra","bp","bl","bs"]}, L=0, gap=46), 510,
   sub('Volúmenes del adulto', table(None,[['Corriente','≈ 500 mL'],['Reserva inspiratoria','≈ 3000 mL'],['Reserva espiratoria','≈ 1100 mL'],['Residual','≈ 1200 mL'],['Capacidad pulmonar total','≈ 6000 mL']])) +
   sub('Hematosis', '<ul class="lst"><li>O₂ y CO₂ cruzan por difusión una barrera de ≈ 0.5 µm.</li><li>El CO₂ viaja sobre todo como <b>bicarbonato</b> (≈ 70 %).</li><li>Derecho: 3 lóbulos y 10 segmentos; izquierdo: 2 lóbulos y língula.</li></ul>'), img_right=True)
res += '\n' + P(3, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Cuerpo extraño</b>: el bronquio principal derecho es más corto, ancho y vertical; ahí se aloja con más frecuencia.</p><p style="margin:0"><b>Neumotórax</b>: entra aire al espacio pleural, se pierde la presión negativa y el pulmón se colapsa.</p></div>', cls='clin')
res += '\n' + P(4, 'Resumen clave', summ([('Wind','Derecho: <b>3 lóbulos</b>.'),('Target','Cuerpo extraño → <b>bronquio derecho</b>.'),('Lightning','Diafragma: <b>C3–C5</b>.'),('Drop','Corriente ≈ <b>500 mL</b>.'),('Atom','CO₂ como <b>HCO₃⁻</b>.')]))
page('pan-respiratorio.html','MedCore — Atlas de Aparatos y Sistemas','Aparato Respiratorio','Una vía que conduce el aire y un epitelio de 0.5 µm donde se intercambian los gases.',res,f'MedCore · Atlas · Panorama · {ZA}')

rep = fig(1, 'Masculino', 'vista lateral · modelo 3D', a3d('ana3d/rep-masc.png', 450, 600,
   {"vej":["Vejiga",""],"ves":["Vesícula seminal",""],"pro":["Próstata",""],"dd":["Conducto deferente",""],"cc":["Cuerpo cavernoso",""],"cs":["Cuerpo esponjoso","rodea la uretra"],"gl":["Glande",""],"epi":["Epidídimo",""],"tes":["Testículo",""]},
   {k:"left" for k in ["vej","ves","pro","dd","cc","cs","gl","epi","tes"]}, L=150, gap=40), 600,
   sub('Del testículo al exterior', '<ul class="lst"><li><b>Túbulos seminíferos</b>: espermatogénesis (≈ 64–74 días).</li><li><b>Epidídimo</b>: maduran y ganan movilidad.</li><li><b>Conducto deferente</b> → <b>eyaculador</b> (se une la vesícula seminal) → uretra.</li></ul>') +
   sub('Células del testículo', '<ul class="lst"><li><b>Leydig</b>: testosterona, bajo la LH.</li><li><b>Sertoli</b>: sostienen la espermatogénesis y forman la barrera hematotesticular (FSH).</li><li>Semen: vesículas seminales (fructosa, la mayor parte) y próstata.</li></ul>'))
rep += '\n' + fig(2, 'Femenino', 'corte sagital · ilustración', a3d('fotos/femenino.jpg', 460, 560,
   {"tro":["Trompa uterina",""],"ova":["Ovario",""],"ute":["Útero",""],"dou":["Fondo de saco","rectouterino (Douglas)"],"cer":["Cérvix",""],"vej":["Vejiga",""],"rec":["Recto",""],"vag":["Vagina",""],"ure":["Uretra",""]},
   {k:"right" for k in ["tro","ova","ute","dou","cer","vej","rec","vag","ure"]}, L=0, gap=40), 560,
   sub('Ciclo menstrual (≈ 28 días)', table(['Fase','Hormona','Endometrio'],[['Folicular (1–14)','FSH; estrógenos','Menstrual → proliferativa'],['Ovulación (≈ 14)','Pico de LH','—'],['Lútea (15–28)','Progesterona del cuerpo lúteo','Secretora']])), img_right=True)
rep += '\n' + P(3, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Embarazo ectópico</b>: el embrión se implanta fuera del útero, casi siempre en la ampolla de la trompa; puede romperla y sangrar.</p><p style="margin:0"><b>Hiperplasia prostática benigna</b>: la próstata crece alrededor de la uretra y causa chorro débil y nicturia en hombres mayores.</p></div>', cls='clin')
rep += '\n' + P(4, 'Resumen clave', summ([('Key','LH → <b>Leydig</b>.'),('Shield','Sertoli: <b>barrera</b>.'),('Lightning','Pico de LH → <b>ovulación</b>.'),('Drop','Lútea: <b>progesterona</b>.'),('Target','Ectópico → <b>ampolla</b>.')]))
page('pan-reproductor.html','MedCore — Atlas de Aparatos y Sistemas','Aparato Reproductor','Gónadas que producen gametos y hormonas, y conductos que los llevan a su destino.',rep,f'MedCore · Atlas · Panorama · Masculino: {ZA} · Femenino: BruceBlaus (Blausen Medical, CC BY 3.0), sin rótulos originales')

ner = fig(1, 'Lóbulos del hemisferio', 'vista lateral · modelo 3D', a3d('ana3d/ner-lat.png', 400, 600,
   {"pos":["Giro poscentral","somatosensorial"],"pre":["Giro precentral","motor primario"],"fr":["Frontal",""],"pa":["Parietal",""],"oc":["Occipital",""],"te":["Temporal",""],"tr":["Tronco encefálico",""],"cb":["Cerebelo",""]},
   {k:"left" for k in ["pos","pre","fr","pa","oc","te","tr","cb"]}, L=145, gap=36), 600,
   sub('Qué hace cada lóbulo', table(None,[['Frontal','Movimiento, lenguaje expresivo (Broca), planeación'],['Parietal','Sensibilidad, orientación espacial'],['Temporal','Audición, comprensión (Wernicke), memoria'],['Occipital','Visión'],['Cerebelo','Coordinación y equilibrio']])))
ner += '\n' + fig(2, 'Cara medial', 'corte sagital · modelo 3D', a3d('ana3d/ner-med.png', 400, 600,
   {"cin":["Giro del cíngulo",""],"cc":["Cuerpo calloso",""],"ta":["Tálamo",""],"pin":["Epífisis (pineal)",""],"hy":["Hipotálamo",""],"hip":["Hipófisis",""],"mes":["Mesencéfalo",""],"pon":["Puente",""],"cb":["Cerebelo",""],"bul":["Bulbo raquídeo",""]},
   {k:"right" for k in ["cin","cc","ta","pin","hy","hip","mes","pon","cb","bul"]}, L=0, gap=30), 600,
   sub('Sistema nervioso autónomo', table(['','Simpático','Parasimpático'],[['Origen','T1–L2','III, VII, IX, X; S2–S4'],['Posganglionar','Noradrenalina','Acetilcolina'],['Efecto','Lucha o huida','Reposo y digestión']])) +
   sub('Tronco e hipotálamo', '<ul class="lst"><li>Tronco: centros respiratorio y cardiovascular; pares III–XII.</li><li>Hipotálamo: temperatura, hambre, sed; controla la hipófisis.</li></ul>'), img_right=True)
ner += '\n' + P(3, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>EVC de la arteria cerebral media izquierda</b>: debilidad de cara y brazo derechos y, por estar el lenguaje en ese hemisferio en la mayoría, afasia.</p><p style="margin:0"><b>Lesión cerebelosa</b>: ataxia del mismo lado, temblor de intención y marcha inestable.</p></div>', cls='clin')
ner += '\n' + P(4, 'Resumen clave', summ([('Brain','Precentral: <b>motor</b>.'),('Target','Poscentral: <b>sensitivo</b>.'),('Eye','Occipital: <b>visión</b>.'),('Scales','Cerebelo: <b>coordinación</b>.'),('Lightning','Simpático: <b>T1–L2</b>.')]))
page('pan-nervioso.html','MedCore — Atlas de Aparatos y Sistemas','Sistema Nervioso','Cada región tiene su tarea: por eso la clínica localiza la lesión.',ner,f'MedCore · Atlas · Panorama · {ZA}')

# ───── Urinario: imagen con texto al lado ─────
uri = fig(1, 'Riñones y vías urinarias', 'vista anterior · modelo 3D', a3d('ana3d/uri-ant.png', 620, 560,
   {"sup":["Glándula suprarrenal",""],"rid":["Riñón","T12–L3 · retroperitoneal"],"pel":["Pelvis renal",""],"ao":["Aorta abdominal",""],"vci":["Vena cava inferior",""],"ure":["Uréter","≈ 25–30 cm"],"vej":["Vejiga",""],"uret":["Uretra",""]},
   {k:"left" for k in ["sup","rid","pel","ao","vci","ure","vej","uret"]}, L=160, gap=44), 560,
   sub('La nefrona', '<ul class="lst"><li><b>Corpúsculo</b> (glomérulo + cápsula de Bowman): filtra el plasma.</li><li><b>Túbulo proximal</b>: reabsorbe ≈ 65 % del Na⁺ y del agua, toda la glucosa y los aminoácidos.</li><li><b>Asa de Henle</b>: crea el gradiente para concentrar la orina.</li><li><b>Distal y colector</b>: ajuste fino; aldosterona (Na⁺) y ADH (agua).</li><li>≈ 1 millón de nefronas por riñón.</li></ul>') +
   sub('Cifras', table(None,[['Flujo renal','≈ 20–25 % del gasto cardiaco'],['Filtración glomerular','≈ 125 mL/min (≈ 180 L/día)'],['Orina','≈ 1–2 L/día']])))
uri += '\n' + P(2, 'Sistema renina-angiotensina-aldosterona', steps([('↓ Presión o Na⁺','La detecta el aparato yuxtaglomerular'),('Renina','Angiotensinógeno → angiotensina I'),('ECA (pulmón)','Angiotensina I → II'),('Angiotensina II','Vasoconstricción, sed, ADH'),('Aldosterona','Reabsorbe Na⁺ y agua; excreta K⁺')]))
uri += '\n' + row(
 P(3, 'Funciones del riñón', '<ul class="lst"><li>Excreta urea, creatinina y fármacos.</li><li>Regula agua, electrolitos y equilibrio ácido-base.</li><li>Endocrino: <b>eritropoyetina</b>, <b>calcitriol</b> y renina.</li><li>Gluconeogénesis en el ayuno prolongado.</li></ul>', style='flex:1'),
 P(4, 'Correlación clínica', '<p style="font-size:12.6px">Los <b>IECA</b> y los <b>ARA-II</b> bajan la presión bloqueando este sistema.</p><p style="font-size:12.6px;margin:0">Un <b>cálculo</b> se atora en los estrechamientos del uréter: unión pieloureteral, cruce de los vasos ilíacos y entrada a la vejiga.</p>', style='flex:1', cls='clin'))
uri += '\n' + P(5, 'Resumen clave', summ([('Drop','FG ≈ <b>125 mL/min</b>.'),('Target','Proximal: <b>65 %</b> del Na⁺.'),('Key','ADH → <b>agua</b>.'),('Lightning','Angiotensina II: <b>vasoconstricción</b>.'),('Heartbeat','EPO y <b>calcitriol</b>.')]))
page('pan-urinario.html','MedCore — Atlas de Aparatos y Sistemas','Aparato Urinario','Dos riñones que filtran 180 L al día y devuelven casi todo a la sangre.',uri,f'MedCore · Atlas · Panorama · {ZA}')

# ───── Membrana: panel extra de gradientes y vesículas ─────
mem = P(1, 'Modelo de mosaico fluido', a3d('fotos/membrana.png', 300, 955,
   {"can":["Proteína de canal",""],"col":["Colesterol",""],"cab":["Cabeza hidrofílica","fosfato"],"gll":["Glucolípido",""],"per":["Proteína periférica",""],
    "glp":["Glucoproteína","glucocáliz"],"pin":["Proteína integral",""],"col2":["Colas hidrofóbicas","ácidos grasos"],"hel":["Proteína transmembrana","hélice α"],"cit":["Citoesqueleto",""]},
   {"can":"left","col":"left","cab":"left","gll":"left","per":"left","glp":"left","pin":"left","col2":"left","hel":"left","cit":"left"}, L=200, gap=26), 'Singer y Nicolson, 1972 · ilustración', cls='panel hero')
mem += '\n' + row(
 P(2, 'Componentes', table(['Componente','Función'],[['Fosfolípidos','Bicapa: cabezas al agua, colas hacia dentro'],['Colesterol','Regula la fluidez'],['Proteínas integrales','Canales, transportadores, receptores'],['Proteínas periféricas','Señalización, anclaje al citoesqueleto'],['Glucocáliz','Reconocimiento celular, grupos sanguíneos']]), style='flex:1'),
 P(3, 'Transporte', table(['Tipo','Energía','Ejemplo'],[['Difusión simple','No','O₂, CO₂, esteroides'],['Difusión facilitada','No','GLUT, canales iónicos'],['Ósmosis','No','Agua por acuaporinas'],['Activo primario','ATP directo','Bomba Na⁺/K⁺: 3 Na⁺ fuera, 2 K⁺ dentro'],['Activo secundario','Gradiente de Na⁺','SGLT1: Na⁺ y glucosa']]), style='flex:1.1'))
mem += '\n' + row(
 P(4, 'Gradientes que mantiene la membrana', table(['Ion','Fuera','Dentro'],[['Na⁺','≈ 142 mM','≈ 10–14 mM'],['K⁺','≈ 4 mM','≈ 140 mM'],['Ca²⁺','≈ 2.5 mM','≈ 0.0001 mM'],['Cl⁻','≈ 105 mM','≈ 5–10 mM']]) + '<p style="font-size:12.2px;margin:6px 0 0">Potencial de reposo de la neurona: <b>≈ −70 mV</b> (dentro negativo).</p>', style='flex:1'),
 P(5, 'Transporte en vesículas', '<ul class="lst"><li><b>Fagocitosis</b>: partículas grandes (macrófagos, neutrófilos).</li><li><b>Pinocitosis</b>: líquido extracelular.</li><li><b>Endocitosis mediada por receptor</b>: vesículas con clatrina; así entra el LDL.</li><li><b>Exocitosis</b>: secreción de hormonas y neurotransmisores.</li></ul>', style='flex:1'))
mem += '\n' + P(6, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Fibrosis quística</b>: falla el canal de Cl⁻ CFTR; las secreciones se vuelven espesas en pulmón y páncreas.</p><p style="margin:0"><b>Hipercolesterolemia familiar</b>: falla el receptor de LDL; el colesterol no entra a las células y se acumula en la sangre.</p></div>', cls='clin')
mem += '\n' + P(7, 'Resumen clave', summ([('Drop','Bicapa <b>anfipática</b>.'),('Gauge','Colesterol: <b>fluidez</b>.'),('Lightning','Na⁺/K⁺: <b>3 fuera, 2 dentro</b>.'),('Key','Facilitada: <b>sin ATP</b>.'),('Lock','CFTR: canal de <b>Cl⁻</b>.')]))
page('cel-membrana.html','MedCore — Atlas de la Célula','Membrana Celular','Una bicapa fluida con proteínas que deciden qué entra y qué sale.',mem,'MedCore · Atlas · Célula · Ilustración: Mariana Ruiz (LadyofHats), dominio público, sin rótulos originales')

# ───── Célula: panel extra de ruta secretora ─────
cel = P(1, 'Célula animal', a3d('fotos/celula.png', 420, 955,
   {"mem":["Membrana plasmática",""],"gol":["Aparato de Golgi","modifica y empaca"],"rel":["RE liso","lípidos, detoxificación"],"nuc":["Nucléolo","ARN ribosomal"],"fla":["Flagelo",""],
    "per":["Peroxisoma",""],"env":["Envoltura nuclear","doble membrana con poros"],"rer":["RE rugoso","ribosomas: proteínas"],"mit":["Mitocondria","ATP"],"cen":["Centrosoma","2 centriolos"],"cit":["Citoplasma",""],"ves":["Vesícula secretora","exocitosis"]},
   {"mem":"left","gol":"left","rel":"left","nuc":"left","fla":"left","per":"right","env":"right","rer":"right","mit":"right","cen":"right","cit":"right","ves":"right"}, L=145, gap=38), 'ilustración', cls='panel hero')
cel += '\n' + P(2, 'Ruta de una proteína de secreción', steps([('Núcleo','El gen se transcribe a ARNm'),('RE rugoso','Los ribosomas la sintetizan; se pliega'),('Vesícula','Viaja al Golgi'),('Golgi','Cara cis → trans: glucosilación y empaque'),('Vesícula secretora','Exocitosis en la membrana')]))
cel += '\n' + row(
 P(3, 'Organelos', table(['Organelo','Función'],[['Núcleo','Guarda el ADN; transcripción'],['Ribosomas','Síntesis de proteínas'],['RE rugoso','Proteínas de secreción y de membrana'],['RE liso','Lípidos, detoxificación, depósito de Ca²⁺'],['Golgi','Modifica, clasifica y empaca'],['Lisosomas','Digestión con hidrolasas ácidas'],['Mitocondrias','Fosforilación oxidativa; ADN propio'],['Peroxisomas','Oxidan ácidos grasos; degradan H₂O₂']]), style='flex:1.15'),
 '<section class="col" style="flex:.85">' +
 P(4, 'Eucariota frente a procariota', table(['','Eucariota','Procariota'],[['Núcleo','Con envoltura','Nucleoide'],['Organelos','Membranosos','No'],['Ribosomas','80S','70S'],['Tamaño','10–100 µm','1–10 µm']])) +
 P(5, 'Citoesqueleto', '<ul class="lst"><li><b>Microtúbulos</b> (tubulina): huso mitótico, cilios, transporte.</li><li><b>Actina</b>: forma, movimiento, contracción.</li><li><b>Intermedios</b>: resistencia mecánica (queratina).</li></ul>', cls='panel grow') +
 '</section>')
cel += '\n' + P(6, 'Correlación clínica', '<div class="two" style="font-size:12.6px"><p style="margin:0"><b>Enfermedades lisosomales</b> (Gaucher, Tay-Sachs): falta una hidrolasa y el sustrato se acumula dentro del lisosoma.</p><p style="margin:0"><b>Enfermedades mitocondriales</b>: el ADN mitocondrial se hereda por vía materna; afectan sobre todo músculo y cerebro.</p></div>', cls='clin')
cel += '\n' + P(7, 'Resumen clave', summ([('Dna','Núcleo: <b>ADN</b>.'),('Cube','RER: <b>proteínas</b>.'),('Lightning','Mitocondria: <b>ATP</b>.'),('Bug','Lisosoma: <b>digestión</b>.'),('ArrowsClockwise','Microtúbulos: <b>huso</b>.')]))
page('cel-estructura.html','MedCore — Atlas de la Célula','Estructura de la Célula','Cada organelo es un compartimento con su tarea.',cel,'MedCore · Atlas · Célula · Ilustración: Mariana Ruiz (LadyofHats), dominio público, sin rótulos originales')
