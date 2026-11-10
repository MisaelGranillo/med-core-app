# Modelos de las cavidades corporales: plegamiento lateral (corte intermedio y cerrado),
# cavidades torácicas, diafragma por componentes y defectos de la pared abdominal.
# El corte inicial (tubo neural cerrado, celoma entre las hojas) es neur3.glb de tercera.py.
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lib import *
import bmesh
OUT = os.path.dirname(os.path.abspath(__file__)) + '/'

def poly(name, pts, axis='y', a0=-0.3, a1=0.3):
    # polígono extruido: en el plano x-z a lo largo de y (cortes) o en x-y a lo largo de z (diafragma)
    me = bpy.data.meshes.new(name); bm = bmesh.new()
    P = (lambda u, v, w: (u, w, v)) if axis == 'y' else (lambda u, v, w: (u, v, w))
    f = [bm.verts.new(P(u, v, a0)) for u, v in pts]; b = [bm.verts.new(P(u, v, a1)) for u, v in pts]
    bm.faces.new(f); bm.faces.new(list(reversed(b))); n = len(pts)
    for i in range(n): bm.faces.new([f[i], f[(i + 1) % n], b[(i + 1) % n], b[i]])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:]); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new(name, me); bpy.context.collection.objects.link(o); return o
def rect(x0, x1, z0, z1): return [(x0, z0), (x1, z0), (x1, z1), (x0, z1)]
def arc(cx, cz, r1, r2, a0, a1, n=24, sx=1.0):
    o = [(cx + sx * r2 * math.cos(math.radians(a0 + (a1 - a0) * i / n)), cz + r2 * math.sin(math.radians(a0 + (a1 - a0) * i / n))) for i in range(n + 1)]
    i = [(cx + sx * r1 * math.cos(math.radians(a1 - (a1 - a0) * k / n)), cz + r1 * math.sin(math.radians(a1 - (a1 - a0) * k / n))) for k in range(n + 1)]
    return o + i
def circle(cx, cz, r, n=32, sx=1.0): return [(cx + sx * r * math.cos(2 * math.pi * i / n), cz + r * math.sin(2 * math.pi * i / n)) for i in range(n)]
def mirror(pts): return [(-x, z) for x, z in reversed(pts)]
def both(name, pts, **k): return poly(name + ' d', pts, **k), poly(name + ' i', mirror(pts), **k)

def axial():
    poly('Tubo neural', arc(0, 1.08, 0.12, 0.28, 0, 360, 40))
    poly('Notocorda', circle(0, 0.72, 0.09))
    both('Somita', circle(0.52, 0.88, 0.2))
    both('Mesodermo intermedio', circle(0.78, 0.5, 0.1))
    both('Aorta dorsal', circle(0.2, 0.46, 0.07))

# ── Corte 2: los pliegues laterales descienden ──
reset(); axial()
both('Ectodermo', arc(0, 0.12, 1.25, 1.33, 90, -35, 30, 0.9))
both('Placa lateral somatica', arc(0, 0.12, 1.13, 1.25, 40, -35, 30, 0.9))
both('Endodermo', arc(0, -0.16, 0.34, 0.42, 0, 90))
both('Endodermo saco', rect(0.34, 0.42, -0.78, -0.16))
both('Placa lateral esplacnica', arc(0, -0.16, 0.42, 0.54, 0, 66))
both('Esplacnica saco', rect(0.42, 0.54, -0.78, -0.16))
export(OUT + 'pleg2.glb')

# ── Corte 3: pared cerrada al final de la 4.ª semana ──
reset(); axial()
poly('Ectodermo', arc(0, 0.12, 1.25, 1.33, 90, -270, 72, 0.9))
both('Placa lateral somatica', arc(0, 0.12, 1.13, 1.25, 40, -90, 40, 0.9))
poly('Endodermo', arc(0, -0.45, 0.12, 0.2, 0, 360, 40))
poly('Placa lateral esplacnica', arc(0, -0.45, 0.2, 0.32, 0, 360, 40))
poly('Mesenterio dorsal', rect(-0.05, 0.05, -0.14, 0.4))
export(OUT + 'pleg3.glb')

# ── Cavidades torácicas (corte transversal, separación terminada) ──
reset()
poly('Pared toracica', arc(0, 0, 1.55, 1.75, 90, -270, 80))
poly('Columna', circle(0, 1.12, 0.24))
poly('Aorta', circle(0.24, 0.66, 0.1))
poly('Esofago', arc(-0.06, 0.6, 0.04, 0.1, 0, 360, 30))
poly('Pericardio fibroso', arc(0, -0.45, 0.72, 0.8, 90, -270, 64))
poly('Corazon', circle(0, -0.45, 0.58, 48))
both('Pulmon', [(0.45, 0.85), (0.8, 0.98), (1.15, 0.78), (1.36, 0.3), (1.4, -0.2), (1.24, -0.75), (0.98, -1.08), (0.86, -0.92), (0.9, -0.45), (0.62, 0.05), (0.42, 0.45)])
both('Nervio frenico', circle(0.71, -0.2, 0.05))
export(OUT + 'torax.glb')

# ── Diafragma (vista inferior): de dónde viene cada parte ──
reset()
def ell(cx, cy, rx, ry, a0=0, a1=360, n=48):
    return [(cx + rx * math.cos(math.radians(a0 + (a1 - a0) * i / n)), cy + ry * math.sin(math.radians(a0 + (a1 - a0) * i / n))) for i in range(n + 1)]
ring = ell(0, 0, 1.8, 1.38, 0, 360, 72) + list(reversed(ell(0, 0, 1.55, 1.15, 0, 360, 72)))
poly('Pared corporal', ring, axis='z', a0=0.0, a1=0.1)
poly('Tabique transverso', ell(0, -0.25, 1.51, 0.9, 180, 360, 48), axis='z', a0=0.02, a1=0.14)
yb = 1.15 * math.sin(math.radians(75))
for s, tag in ((1, 'd'), (-1, 'i')):
    pts = [(0.32, -0.25), (1.51, -0.25)] + ell(0, 0, 1.55, 1.15, -12.5, 75, 24) + [(0.32, yb)]
    pts = [(s * x, y) for x, y in pts]
    poly('Membrana pleuroperitoneal ' + tag, pts if s > 0 else list(reversed(pts)), axis='z', a0=0.02, a1=0.14)
poly('Mesenterio del esofago', [(-0.32, -0.25), (0.32, -0.25), (0.32, 1.13), (-0.32, 1.13)], axis='z', a0=0.03, a1=0.15)
for nm, (x, y, r) in {'Esofago': (0, 0.3, 0.13), 'Aorta': (0, 0.92, 0.12), 'Vena cava inferior': (0.5, -0.62, 0.12)}.items():
    cyl(nm, (x, y, 0.08), r, 0.3, 32)
export(OUT + 'diafragma.glb')

# ── Defectos de la pared: gastrosquisis y onfalocele (vista de frente) ──
def ycyl(name, loc, r, h):
    c = cyl(name, loc, r, h, 32); c.rotation_euler = (math.pi / 2, 0, 0)
    bpy.context.view_layer.objects.active = c; bpy.ops.object.transform_apply(rotation=True); return c
def wall():
    w = sph('Pared abdominal', (0, 0, 0), 1.0, (1.4, 0.35, 1.2), 64, 40)
    return boolean(w, box('_c', (0, -50.05, 0), (100, 100, 100)))
reset(); w = wall()
boolean(w, ycyl('_h', (0.42, 0.3, -0.12), 0.17, 0.8))
ycyl('Cordon umbilical', (0.0, 0.95, 0.0), 0.12, 1.2)
random.seed(4)
for i, (dx, dz) in enumerate([(0.1, 0.05), (0.32, 0.12), (0.2, -0.18), (0.42, -0.12), (0.05, -0.32), (0.3, -0.38), (0.5, 0.15)]):
    sph('Asas intestinales %d' % i, (0.42 + dx - 0.25, 0.48 + random.uniform(-0.04, 0.08), -0.12 + dz), 0.12, (1.35, 1, 0.8))
export(OUT + 'gastrosquisis.glb')
reset(); wall()
sph('Saco amniotico', (0, 0.62, 0), 0.5, (1, 0.62, 1))
ycyl('Cordon umbilical', (0.0, 1.55, 0.0), 0.12, 1.3)
for i, (x, z) in enumerate([(-0.2, -0.08), (0.18, -0.06), (0.0, -0.28), (-0.22, -0.3), (0.22, -0.3), (0.0, 0.05)]):
    sph('Asas intestinales %d' % i, (x, 0.62, z), 0.13, (1.25, 0.9, 0.8))
sph('Higado', (0, 0.62, 0.24), 0.2, (1.6, 0.8, 0.7))
export(OUT + 'onfalocele.glb')
