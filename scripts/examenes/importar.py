#!/usr/bin/env python3
"""Importa los exámenes resueltos de la plataforma UAD (PDF «Revisión del intento»)
como preguntas de MedCore.

Uso:
  node scripts/examenes/temas.mjs /tmp/temas.json
  python3 scripts/examenes/importar.py "<carpeta del semestre>" /tmp/temas.json \\
      scripts/examenes/correcciones-<periodo>.json src/data/examenes-<periodo>-quizzes.ts --periodo 1

Para cada materia busca la carpeta «Examenes» o «Exámenes», con una subcarpeta por
semana. Cada pregunta:
  • se limpia (encabezados de página, glifos, opciones repetidas por salto de página);
  • se descarta si es «DE REGALO» o si se repite;
  • se pasa a minúsculas si venía todo en MAYÚSCULAS (respetando siglas);
  • recibe las correcciones del archivo JSON (clave equivocada, errata, nota);
  • se asigna al tema de esa semana del plan con más palabras clave en común.
"""
import argparse, difflib, glob, json, os, re, subprocess, sys, tempfile, unicodedata

# ── Lectura del PDF ──────────────────────────────────────────────────────────
def norm(s): return re.sub(r'\s+', ' ', s).strip()

def leer_pdf(pdf):
    with tempfile.NamedTemporaryFile(suffix='.txt') as t:
        subprocess.run(['pdftotext', '-layout', pdf, t.name], check=True)
        raw = open(t.name, encoding='utf-8').read()
    raw = re.sub(r'[-]', '', raw)  # íconos de la plataforma
    lines = [l for l in raw.split('\n')
             if not re.match(r'^\s*\d+/\d+/\d+, \d+:\d+', l)
             and 'medicinavirtual.uad.mx' not in l and 'Tablero - Mis cursos' not in l
             and 'Revisión del intento' not in l]
    txt = '\n'.join(lines)
    blocks = re.split(r'\n\s*Pregunta (\d+)\s*\n', txt)
    qs = []
    for i in range(1, len(blocks), 2):
        n = int(blocks[i]); b = blocks[i + 1]
        m = re.search(r'La(?:s)? respuestas? correctas? (?:es|son)\s*:?\s*(.*?)(?:\n\s*\n|\Z)', b, re.S)
        ans = norm(m.group(1)).split(' La respuesta correcta es')[0].strip() if m else None
        body = b[:m.start()] if m else b
        body = re.sub(r'^.*?Puntúa[^\n]*\n', '', body, flags=re.S)
        body = re.sub(r'(Marcar pregunta|Seleccione una:|Seleccione una o más:|Pregunta \d+)', '', body)
        parts = re.split(r'\n\s*([a-e])\.\s+', body)
        stem = norm(parts[0]); od = {}
        for j in range(1, len(parts), 2): od[parts[j]] = norm(parts[j + 1])
        opts = [od[k] for k in sorted(od)]
        q = dict(n=n, stem=stem, opts=opts, ans=ans)
        if qs and qs[-1]['n'] == n:
            if not qs[-1]['opts']: qs[-1] = q
        else:
            qs.append(q)
    return qs

# ── Limpieza ─────────────────────────────────────────────────────────────────
def limpiar(q):
    s = q['stem']
    s = re.sub(r'^(Correcta|Incorrecta|Parcialmente correcta)\s+Puntúa [0-9.]+ sobre [0-9.]+\s*', '', s)
    s = re.sub(r'\s*Examen Semana \w*$', '', s)
    s = re.sub(r'^[A-ZÁÉÍÓÚ]\s+(?=¿)', '', s)
    if q['opts']:  # «… a <primera opción>» pegada al final del enunciado
        s = re.sub(r'\s+a\s+' + re.escape(q['opts'][0].rstrip('.')) + r'\.?$', '', s, flags=re.I)
    half = len(s) // 2  # enunciado repetido dos veces por salto de página
    for cut in range(max(10, half - 3), half + 4):
        a, b = s[:cut].strip(' :'), s[cut:].strip(' :')
        if a and b.startswith(a[:40]) and len(a) > 20:
            s = b if len(b) >= len(a) else a; break
    q['stem'] = s.replace('&gt;', '>').replace('&lt;', '<').replace('&amp;', '&')
    opts = []
    for i, o in enumerate(q['opts']):
        for o2 in q['opts'][i + 1:]:  # «texto c Texto de la opción siguiente»
            k = o.find(' ' + o2[:12])
            if k > 0 and re.search(r'\s[a-e]\s?$', o[:k + 1]): o = o[:k].rstrip()[:-1].rstrip()
        o = re.sub(r'\s[a-e]$', '', o)
        opts.append(o.replace('&gt;', '>').replace('&lt;', '<').replace('&amp;', '&'))
    q['opts'] = opts
    a = (q['ans'] or '').replace('&gt;', '>').replace('&amp;', '&').rstrip('.').lower()
    ci = None
    for k, o in enumerate(opts):
        if o.rstrip('.').lower() == a: ci = k
    if ci is None:
        for k, o in enumerate(opts):
            if a and (a in o.lower() or o.lower().rstrip('.') in a): ci = k; break
    q['ci'] = ci
    return q

# ── MAYÚSCULAS → oración ─────────────────────────────────────────────────────
SIGLAS = ['ADN', 'ARN', 'ARNm', 'ARNt', 'ARNr', 'ATP', 'ADP', 'AMP', 'GTP', 'GDP', 'UTP', 'UDP', 'CTP', 'CDP', 'GMP',
          'NADPH', 'NADH', 'NAD', 'FADH2', 'FAD', 'FMN', 'VLDL', 'LDL', 'HDL', 'IDL', 'HSL', 'LPL', 'LCAT', 'LCA',
          'SR-B1', 'CPT-I', 'FAS', 'PKA', 'AMPc', 'GH', 'LH', 'FSH', 'TSH', 'ACTH', 'GnRH', 'T3', 'T4', 'CO2', 'O2',
          'NH4+', 'Na+', 'K+', 'Mg2+', 'Fe2+', 'Zn2+', 'GAG', 'NANA', 'CK-MB', 'CK-MM', 'CK-BB', 'CK', 'NPY', 'AgRP',
          'POMC', 'CART', 'TXA2', 'IgG', 'IgE', 'ApoB-100', 'MWC', 'SGLT-1', 'SGLT-2', 'GLUT-4', 'GLUT-2', 'FA',
          'Km', 'Keq', '5-FU', 'G-C', 'A-T', 'B-ADN', 'Z-ADN', 'A-ADN', 'D-ADN', 'Rh', 'PEG', 'PBN', 'RCIU', 'NPI',
          'Tm', 'II', 'III', 'IV', 'VI', 'VII', 'IX', 'XII', 'OMS', 'LIC', 'LEC', 'HCG', 'hCG', 'L-DOPA', 'B6', 'B1',
          'B4', 'B12', 'NPY/AgRP', 'POMC/CART', 'Koshland', 'Fischer', 'Monod-Wyman-Changeux', 'Hurler', 'Hunter',
          'Bohr', 'Krebs', 'Michaelis-Menten', 'Golgi', 'Wharton', 'Laron']
SIGMAP = {s.upper(): s for s in SIGLAS}
REEMPLAZOS = [(r'\bph\b', 'pH'), (r'\bpka del\b', 'pKa del'), (r'mosm/kg', 'mOsm/kg'), (r'meq/lt', 'mEq/L'),
              (r'\b0o c\b', '0 °C'), (r'\bd-(\w)', r'D-\1'), (r'\bl-(\w)', r'L-\1'), (r'\bbeta-2', 'beta-2'),
              (r'apolipoproteína a-1', 'apolipoproteína A-I'), (r'\banti-rh\b', 'anti-Rh')]

def es_mayus(s):
    letras = [c for c in s if c.isalpha()]
    return len(letras) > 8 and sum(c.isupper() for c in letras) / len(letras) > 0.85

def oracion(s):
    t = s.lower()
    def sig(m):
        w = m.group(0); return SIGMAP.get(w.upper(), w)
    t = re.sub(r"[A-Za-zÁÉÍÓÚÑÜáéíóúñü0-9+/\-]+", sig, t)
    for a, b in REEMPLAZOS: t = re.sub(a, b, t)
    t = re.sub(r'(^|[¿¡.]\s*)([a-záéíóúñ])', lambda m: m.group(1) + m.group(2).upper(), t)
    return t

# ── Asignación de tema ───────────────────────────────────────────────────────
VACIAS = set('''cual cuál cuales cuáles como cómo donde dónde que qué para por porque entre sobre desde hacia hasta
siguiente siguientes ejemplo ejemplos excepto todas todos ninguna ninguno anteriores tiene tienen principal
principales forma formas llama llaman denomina denominan define definen parte partes tipo tipos este esta estos
estas cuando durante puede pueden mediante través nombre recibe recibir caracteriza característica función
which what this that these with from they their there following except'''.split())

def tokens(s):
    s = unicodedata.normalize('NFD', s.lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return {w for w in re.findall(r'[a-z0-9]{4,}', s) if w not in VACIAS}

def asignar(q, candidatos, temas):
    tq = tokens(q['stem'] + ' ' + (q['opts'][q['ci']] if q['ci'] is not None else ''))
    mejor, puntos = candidatos[0], -1
    for tid in candidatos:
        t = temas.get(tid)
        if not t: continue
        p = sum(3 for w in tq if w in t['_head']) + sum(1 for w in tq if w in t['_body'])
        if p > puntos: mejor, puntos = tid, p
    return mejor

# ── Principal ────────────────────────────────────────────────────────────────
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('semestre'); ap.add_argument('temas'); ap.add_argument('correcciones'); ap.add_argument('salida')
    ap.add_argument('--periodo', type=int, required=True)
    a = ap.parse_args()
    data = json.load(open(a.temas))
    temas = {t['id']: dict(t, _head=tokens(t['head']), _body=tokens(t['body'])) for t in data['topics']}
    plan = [p for p in data['plan'] if p['periodo'] == a.periodo]
    corr = json.load(open(a.correcciones)) if os.path.exists(a.correcciones) else {}
    salida, resumen, usadas = [], [], set()
    for carpeta in sorted(glob.glob(os.path.join(a.semestre, '*', 'Ex*menes'))):
        materia = os.path.basename(os.path.dirname(carpeta)).replace(' DEF', '')
        nombres = {p['name']: p for p in plan}
        hit = difflib.get_close_matches(materia, list(nombres), n=1, cutoff=0.4)
        if not hit: print('  sin materia en el plan:', materia, file=sys.stderr); continue
        subj = nombres[hit[0]]
        for pdf in sorted(glob.glob(os.path.join(carpeta, '*', '*.pdf'))):
            sem = int(re.sub(r'\D', '', os.path.basename(os.path.dirname(pdf))) or 0)
            cands = next((w['topicIds'] for w in subj['semanas'] if w['n'] == sem), []) or [t for w in subj['semanas'] for t in w['topicIds']]
            vistos, k = set(), 0
            for q in leer_pdf(pdf):
                q = limpiar(q)
                clave = f"{subj['id']}:{sem}:{q['n']}"
                c = corr.get(clave, {}); usadas.add(clave)
                if c.get('excluir') or 'DE REGALO' in q['stem'].upper(): continue
                if es_mayus(q['stem']):
                    q['stem'] = oracion(q['stem']); q['opts'] = [oracion(o) if es_mayus(o) or len(o) < 40 else o for o in q['opts']]
                for f in ('stem', 'opts', 'ci'):
                    if f in c: q[f] = c[f]
                if q['ci'] is None or len(q['opts']) < 2:
                    print('  sin clave:', clave, q['stem'][:60], file=sys.stderr); continue
                firma = (q['stem'] + '|' + q['opts'][q['ci']]).lower()
                if firma in vistos: continue
                vistos.add(firma); k += 1
                nota = c.get('nota', '')
                tf = sorted(o.lower() for o in q['opts']) == ['falso', 'verdadero']
                q['n_orig'] = q['n']
                salida.append({
                    'id': f"ex-{subj['id']}-s{sem}-q{k}", 'topicId': c.get('tema') or asignar(q, cands, temas),
                    'type': 'true-false' if tf else 'multiple-choice', 'question': q['stem'], 'options': q['opts'],
                    'correctIndex': q['ci'], 'difficulty': 'medium',
                    'explanation': nota or f"Respuesta del examen de la Semana {sem}.",
                    'examen': {'materia': subj['id'], 'semana': sem}, '_n': q['n']})
            resumen.append((subj['name'], sem, k))
    sobrantes = set(corr) - usadas
    if sobrantes: print('  correcciones sin pregunta:', sorted(sobrantes), file=sys.stderr)
    with open(a.salida, 'w') as f:
        f.write(f"/* Generado por scripts/examenes/importar.py a partir de los exámenes resueltos del periodo {a.periodo}.\n"
                " * No editar a mano: corrige en scripts/examenes/correcciones-*.json y vuelve a generar. */\n\n"
                "import type { Question } from '../types'\n\n"
                f"export const examenesPeriodo{a.periodo}: Question[] = ")
        if os.environ.get('DEPURAR'): json.dump(salida, open(os.environ['DEPURAR'], 'w'), ensure_ascii=False)
        for x in salida: x.pop('_n', None)
        f.write(json.dumps(salida, ensure_ascii=False, indent=1))
        f.write('\n')
    for r in resumen: print(f'  {r[0]} · semana {r[1]}: {r[2]}')
    print(f'{len(salida)} preguntas')

if __name__ == '__main__':
    main()
