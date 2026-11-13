# Modelos de la lámina «Función placentaria, líquido amniótico y gemelos»: corte transversal del
# cordón umbilical definitivo y las tres disposiciones de membranas en gemelos (dicoriónico-
# diamniótico, monocoriónico-diamniótico y monocoriónico-monoamniótico). Cortes en el plano x-z
# extruidos en y (se ven con view "0,0.05,1"). Nombres sin «arter/vein» para que el visor no los oculte.
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lib import *
OUT = os.path.dirname(os.path.abspath(__file__)) + '/'

def poly(name, pts, a0=-0.3, a1=0.3):
    me = bpy.data.meshes.new(name); bm = bmesh.new()
    f = [bm.verts.new((u, a0, v)) for u, v in pts]; b = [bm.verts.new((u, a1, v)) for u, v in pts]
    bm.faces.new(f); bm.faces.new(list(reversed(b))); n = len(pts)
    for i in range(n): bm.faces.new([f[i], f[(i + 1) % n], b[(i + 1) % n], b[i]])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:]); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new(name, me); bpy.context.collection.objects.link(o); return o
def rect(x0, x1, z0, z1): return [(x0, z0), (x1, z0), (x1, z1), (x0, z1)]
def arc(cx, cz, r1, r2, a0, a1, n=48, sx=1.0):
    o = [(cx + sx * r2 * math.cos(math.radians(a0 + (a1 - a0) * i / n)), cz + r2 * math.sin(math.radians(a0 + (a1 - a0) * i / n))) for i in range(n + 1)]
    i = [(cx + sx * r1 * math.cos(math.radians(a1 - (a1 - a0) * k / n)), cz + r1 * math.sin(math.radians(a1 - (a1 - a0) * k / n))) for k in range(n + 1)]
    return o + i
def ellipse(cx, cz, rx, rz, n=48): return [(cx + rx * math.cos(2 * math.pi * i / n), cz + rz * math.sin(2 * math.pi * i / n)) for i in range(n)]
def ring(name, cx, cz, r1, r2, sx=1.0, n=72, a0=-0.3, a1=0.3):
    # anillo completo como dos medias lunas (un polígono con agujero no se puede extruir así)
    poly(name + ' sup', arc(cx, cz, r1, r2, 0, 180, n // 2, sx), a0, a1)
    poly(name + ' inf', arc(cx, cz, r1, r2, 180, 360, n // 2, sx), a0, a1)

# ── A. Corte transversal del cordón umbilical definitivo ──
reset()
ring('Amnios', 0, 0, 1.0, 1.07)
poly('Gelatina de Wharton', ellipse(0, 0, 1.0, 1.0, 96), a0=0.3, a1=0.34)          # detrás, como fondo
for k, x in enumerate((-0.4, 0.4)):
    ring('Vaso umbilical A%d' % (k + 1), x, -0.22, 0.08, 0.22)                      # pared muscular gruesa
    poly('Sangre desoxigenada %d' % (k + 1), ellipse(x, -0.22, 0.08, 0.08, 32), -0.05, 0.05)
ring('Vaso umbilical V', 0, 0.36, 0.25, 0.31)                                       # pared delgada, luz amplia
poly('Sangre oxigenada', ellipse(0, 0.36, 0.25, 0.25, 48), -0.05, 0.05)
poly('Alantoides', ellipse(0, -0.62, 0.07, 0.05, 24))
export(OUT + 'cordon-corte.glb')

# ── B. Gemelos: tres disposiciones de membranas (un modelo cada una) ──
def feto(name, cx, cz, s=1.0):
    poly(name + ' cabeza', ellipse(cx - 0.05 * s, cz + 0.12 * s, 0.13 * s, 0.12 * s))
    poly(name + ' cuerpo', ellipse(cx + 0.05 * s, cz - 0.08 * s, 0.11 * s, 0.17 * s))
def cordon(name, x, z0, z1):
    poly(name, rect(x - 0.025, x + 0.025, z0, z1))

# B1. Dicoriónico-diamniótico: dos unidades completas
reset()
for tag, cx in (('A', -1.2), ('B', 1.2)):
    poly('Placenta ' + tag, arc(cx, 0, 1.0, 1.28, 55, 125, 30))
    ring('Corion ' + tag, cx, 0, 0.94, 1.0)
    ring('Amnios ' + tag, cx, -0.03, 0.82, 0.87)
    poly('Liquido amniotico ' + tag, ellipse(cx, -0.03, 0.82, 0.82), a0=0.3, a1=0.34)
    feto('Feto ' + tag, cx, -0.3, 1.7)
    cordon('Cordon ' + tag, cx + 0.2, -0.42, 0.98)
export(OUT + 'gemelos-dcda.glb')

# B2. Monocoriónico-diamniótico: un corion y una placenta, dos amnios
reset()
SX = 1.75
poly('Placenta', arc(0, 0, 1.0, 1.28, 55, 125, 40, SX))
ring('Corion', 0, 0, 0.94, 1.0, SX)
for tag, cx in (('A', -0.74), ('B', 0.74)):
    ring('Amnios ' + tag, cx, -0.06, 0.67, 0.72)
    poly('Liquido amniotico ' + tag, ellipse(cx, -0.06, 0.67, 0.67), a0=0.3, a1=0.34)
    feto('Feto ' + tag, cx, -0.3, 1.3)
    cordon('Cordon ' + tag, cx + 0.18, -0.4, 0.98)
export(OUT + 'gemelos-mcda.glb')

# B3. Monocoriónico-monoamniótico: un corion, una placenta y un solo amnios
reset()
poly('Placenta', arc(0, 0, 1.0, 1.28, 55, 125, 40, SX))
ring('Corion', 0, 0, 0.94, 1.0, SX)
ring('Amnios', 0, -0.03, 0.85, 0.9, SX * 0.97)
poly('Liquido amniotico', ellipse(0, -0.03, 0.85 * SX * 0.97, 0.85, 72), a0=0.3, a1=0.34)
for tag, cx in (('A', -0.6), ('B', 0.6)):
    feto('Feto ' + tag, cx, -0.3, 1.4)
    cordon('Cordon ' + tag, cx + 0.2, -0.42, 0.98)
export(OUT + 'gemelos-mcma.glb')
