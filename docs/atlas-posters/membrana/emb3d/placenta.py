# Modelos de la placenta y las membranas fetales: útero al tercer mes (corte), corte de la
# placenta con cotiledones y circulación, arterias espirales (remodelada y no remodelada),
# vellosidad temprana y madura, y placenta a término (caras fetal y materna).
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lib import *
import bmesh
OUT = os.path.dirname(os.path.abspath(__file__)) + '/'

def poly(name, pts, a0=-0.3, a1=0.3):
    # polígono en el plano x-z extruido a lo largo de y
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
def ellipse(cx, cz, rx, rz, n=40): return [(cx + rx * math.cos(2 * math.pi * i / n), cz + rz * math.sin(2 * math.pi * i / n)) for i in range(n)]

# ── A. Útero al final del tercer mes (corte sagital) ──
reset()
SX = 0.82
poly('Miometrio', arc(0, 0, 1.62, 1.95, 0, 360, 90, SX))
poly('Decidua parietal', arc(0, 0, 1.5, 1.62, 128, 412, 70, SX))
poly('Decidua basal', arc(0, 0, 1.24, 1.62, 52, 128, 30, SX))
# saco coriónico apoyado en el fondo uterino
C = (0, 0.32)
poly('Corion frondoso', arc(C[0], C[1], 0.86, 0.95, 52, 128, 24))
for k in range(9):
    a = math.radians(56 + k * 8.5); r0 = 0.95
    x, z = C[0] + r0 * math.cos(a), C[1] + r0 * math.sin(a)
    poly('Vellosidades %d' % k, ellipse(x + 0.11 * math.cos(a), z + 0.11 * math.sin(a), 0.055, 0.13))
poly('Corion leve', arc(C[0], C[1], 0.86, 0.95, 128, 412, 60))
poly('Decidua capsular', arc(C[0], C[1], 0.95, 1.03, 140, 400, 60))
poly('Amnios', arc(0, 0.26, 0.78, 0.84, 0, 360, 80))
# feto y cordón
poly('Feto cabeza', ellipse(-0.12, 0.05, 0.24, 0.22))
poly('Feto cuerpo', ellipse(0.12, -0.18, 0.2, 0.3))
poly('Cordon umbilical', rect(-0.04, 0.04, 0.2, 1.22))
export(OUT + 'utero3m.glb')

# ── B. Corte de la placenta madura ──
reset()
poly('Amnios', rect(-2.2, 2.2, 1.18, 1.24))
poly('Placa corionica', rect(-2.2, 2.2, 0.98, 1.18))
poly('Decidua basal', rect(-2.2, 2.2, -0.22, 0.02))
poly('Miometrio', rect(-2.2, 2.2, -0.7, -0.22))
for x in (-1.45, 0.0, 1.45):
    poly('Tabique decidual', [(x - 0.16, 0.02), (x + 0.16, 0.02), (x + 0.04, 0.62), (x - 0.04, 0.62)])
# vellosidades de anclaje (troncos) con ramas libres
for x in (-0.72, 0.72):
    poly('Vellosidad de anclaje', rect(x - 0.07, x + 0.07, 0.02, 0.98))
    for (dz, s) in [(0.8, 1), (0.62, -1), (0.45, 1), (0.28, -1)]:
        bx = x + s * 0.24
        poly('Vellosidades libres', [(x, dz - 0.03), (bx, dz + 0.05), (bx + s * 0.06, dz + 0.11), (x, dz + 0.06)] if s > 0 else [(bx + s * 0.06, dz + 0.11), (bx, dz + 0.05), (x, dz - 0.03), (x, dz + 0.06)])
        poly('Vellosidades libres', ellipse(bx + s * 0.05, dz + 0.08, 0.07, 0.05))
# sangre materna detrás (espacio intervelloso)
poly('Espacio intervelloso', rect(-2.2, 2.2, 0.02, 0.98), a0=0.3, a1=0.34)
# arterias espirales y venas endometriales
for n, x0 in enumerate((-1.05, 0.38)):
    pts = [(x0 + 0.09 * math.sin(i * 1.4), -0.7 + i * 0.1) for i in range(9)]
    for i in range(len(pts) - 1):
        (xa, za), (xb, zb) = pts[i], pts[i + 1]
        poly('Espiral uterina %d-%d' % (n, i), [(xa - 0.05, za), (xb - 0.05, zb + 0.02), (xb + 0.05, zb + 0.02), (xa + 0.05, za)], a0=-0.32, a1=0.32)
for x0 in (-0.35, 1.05):
    poly('Vena endometrial', rect(x0 - 0.05, x0 + 0.05, -0.7, 0.02), a0=-0.32, a1=0.32)
poly('Cordon umbilical', rect(-0.12, 0.12, 1.24, 1.75))
export(OUT + 'placenta-corte.glb')

# ── C. Arteria espiral remodelada y no remodelada (cortes transversales, un modelo cada una) ──
reset()
poly('Pared del vaso', arc(0, 0, 0.42, 0.5, 0, 360, 60))
for k in range(14):
    a = 2 * math.pi * k / 14
    poly('Trofoblasto endovascular %d' % k, ellipse(0.38 * math.cos(a), 0.38 * math.sin(a), 0.05, 0.04))
poly('Sangre', ellipse(0, 0, 0.33, 0.33, 60), a0=-0.05, a1=0.05)
export(OUT + 'arteria-remodelada.glb')
reset()
poly('Pared muscular', arc(0, 0, 0.13, 0.5, 0, 360, 60))
poly('Endotelio', arc(0, 0, 0.1, 0.13, 0, 360, 40))
poly('Sangre', ellipse(0, 0, 0.1, 0.1, 30), a0=-0.05, a1=0.05)
export(OUT + 'arteria-sin-remodelar.glb')

# ── D. Vellosidad temprana y madura (un modelo cada una) ──
reset()
poly('Sincitiotrofoblasto', arc(0, 0, 0.52, 0.6, 0, 360, 60))
poly('Citotrofoblasto', arc(0, 0, 0.42, 0.52, 0, 360, 60))
poly('Tejido conectivo', ellipse(0, 0, 0.42, 0.42, 60), a0=-0.2, a1=0.2)
for k, (dx, dz) in enumerate([(-0.15, 0.12), (0.17, 0.05), (0.0, -0.18)]):
    poly('Capilar fetal %d' % k, arc(dx, dz, 0.05, 0.08, 0, 360, 30))
export(OUT + 'vellosidad-temprana.glb')
reset()
poly('Sincitiotrofoblasto', arc(0, 0, 0.55, 0.59, 0, 360, 60))
poly('Tejido conectivo', ellipse(0, 0, 0.55, 0.55, 60), a0=-0.2, a1=0.2)
for k, a in enumerate((20, 100, 200, 300)):
    r = math.radians(a)
    poly('Capilar fetal %d' % k, arc(0.44 * math.cos(r), 0.44 * math.sin(r), 0.06, 0.1, 0, 360, 30))
poly('Nudo sincitial', ellipse(0.62 * math.cos(math.radians(150)), 0.62 * math.sin(math.radians(150)), 0.08, 0.06))
export(OUT + 'vellosidad-madura.glb')

# ── E. Placenta a término: caras fetal y materna ──
reset()
d = cyl('Placenta', (0, 0, 0), 1.0, 0.3, 96); d.scale = (1.05, 1.0, 1.0)
bpy.context.view_layer.objects.active = d; bpy.ops.object.transform_apply(scale=True)
bpy.ops.object.modifier_add(type='BEVEL'); d.modifiers[-1].width = 0.08; d.modifiers[-1].segments = 6
bpy.ops.object.modifier_apply(modifier=d.modifiers[-1].name); bpy.ops.object.shade_smooth()
random.seed(7)
# cara materna (abajo): cotiledones
pts = [(0, 0)] + [(0.45 * math.cos(2 * math.pi * k / 6), 0.45 * math.sin(2 * math.pi * k / 6)) for k in range(6)] + [(0.82 * math.cos(2 * math.pi * k / 11 + 0.2), 0.82 * math.sin(2 * math.pi * k / 11 + 0.2)) for k in range(11)]
for k, (x, y) in enumerate(pts):
    sph('Cotiledon %d' % k, (x, y, -0.13), 0.21 + random.uniform(-0.02, 0.03), (1.0, 1.0, 0.45), 32, 16)
# cara fetal (arriba): cordón y vasos radiales
c = cyl('Cordon umbilical', (0.12, 0.05, 0.75), 0.09, 1.3, 32)
def vessel(name, pts, r):
    cu = bpy.data.curves.new(name, 'CURVE'); cu.dimensions = '3D'; cu.bevel_depth = r; cu.bevel_resolution = 3; cu.use_fill_caps = True
    sp = cu.splines.new('BEZIER'); sp.bezier_points.add(len(pts) - 1)
    for bp, p in zip(sp.bezier_points, pts): bp.co = p; bp.handle_left_type = bp.handle_right_type = 'AUTO'
    o = bpy.data.objects.new(name, cu); bpy.context.collection.objects.link(o)
    bpy.context.view_layer.objects.active = o; o.select_set(True); bpy.ops.object.convert(target='MESH'); o.select_set(False); return o
for k in range(8):
    a = 2 * math.pi * k / 8 + 0.3
    mid = (0.12 + 0.45 * math.cos(a + 0.15), 0.05 + 0.45 * math.sin(a + 0.15), 0.165)
    end = (0.85 * math.cos(a), 0.85 * math.sin(a), 0.155)
    vessel('Vaso corionico A %d' % k, [(0.12, 0.05, 0.17), mid, end], 0.022)
    vessel('Vaso corionico V %d' % k, [(0.12, 0.05, 0.168), (mid[0] + 0.05, mid[1] - 0.04, 0.162), (end[0] * 0.95 + 0.04, end[1] * 0.95, 0.152)], 0.028)
export(OUT + 'placenta-termino.glb')
