# Modelos de la tercera semana y el periodo embrionario: disco trilaminar cortado,
# tres cortes de la neurulación y embrión del día 22 en vista dorsal.
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lib import *
import bmesh
OUT=os.path.dirname(os.path.abspath(__file__))+'/'
def prism(name, pts, y0=-0.3, y1=0.3):
    # polígono en el plano x-z extruido a lo largo de y
    me=bpy.data.meshes.new(name); bm=bmesh.new()
    f=[bm.verts.new((x,y0,z)) for x,z in pts]; b=[bm.verts.new((x,y1,z)) for x,z in pts]
    bm.faces.new(f); bm.faces.new(list(reversed(b)))
    n=len(pts)
    for i in range(n): bm.faces.new([f[i],f[(i+1)%n],b[(i+1)%n],b[i]])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:]); bm.to_mesh(me); bm.free()
    o=bpy.data.objects.new(name,me); bpy.context.collection.objects.link(o); return o
def rect(x0,x1,z0,z1): return [(x0,z0),(x1,z0),(x1,z1),(x0,z1)]
def arc(cx,cz,r1,r2,a0,a1,n=24):
    o=[(cx+r2*math.cos(math.radians(a0+(a1-a0)*i/n)), cz+r2*math.sin(math.radians(a0+(a1-a0)*i/n))) for i in range(n+1)]
    i=[(cx+r1*math.cos(math.radians(a1-(a1-a0)*k/n)), cz+r1*math.sin(math.radians(a1-(a1-a0)*k/n))) for k in range(n+1)]
    return o+i
def circle(cx,cz,r,n=32): return [(cx+r*math.cos(2*math.pi*i/n), cz+r*math.sin(2*math.pi*i/n)) for i in range(n)]
def mirror(pts): return [(-x,z) for x,z in reversed(pts)]
def both(name, pts, **k):
    a=prism(name+' i', pts, **k); b=prism(name+' d', mirror(pts), **k); return a,b
def lateral_mesoderm():
    both('Mesodermo intermedio', rect(0.95,1.2,0.35,0.65))
    both('Placa lateral somatica', rect(1.25,2.0,0.6,0.78))
    both('Placa lateral esplacnica', rect(1.25,2.0,0.18,0.36))
    both('Aorta dorsal', circle(0.42,0.22,0.07))
def base():
    prism('Endodermo', rect(-2.0,2.0,0.0,0.1))
    prism('Notocorda', circle(0,0.32,0.11))

# ── Corte 1: placa neural ──
reset(); base(); lateral_mesoderm()
both('Mesodermo paraxial', rect(0.25,0.9,0.2,0.75))
prism('Placa neural', rect(-0.55,0.55,0.82,1.12))
both('Ectodermo', rect(0.55,2.0,0.85,0.98))
export(OUT+'neur1.glb')
# ── Corte 2: pliegues y surco neural ──
reset(); base(); lateral_mesoderm()
both('Mesodermo paraxial', rect(0.25,0.9,0.2,0.75))
prism('Placa neural', arc(0,1.32,0.36,0.58,198,342))
both('Ectodermo', [(0.62,1.12),(1.2,0.98),(2.0,0.86),(2.0,0.74),(1.2,0.86),(0.6,0.98)])
both('Cresta neural', circle(0.6,1.16,0.09))
export(OUT+'neur2.glb')
# ── Corte 3: tubo neural cerrado ──
reset(); base(); lateral_mesoderm()
prism('Tubo neural', arc(0,1.0,0.16,0.4,0,360,40)[:41]+arc(0,1.0,0.16,0.4,0,360,40)[41:])
prism('Ectodermo', [(-2.0,1.5),(2.0,1.5),(2.0,1.62),(-2.0,1.62)])
both('Cresta neural', circle(0.42,1.36,0.09))
both('Esclerotoma', [(0.16,0.2),(0.85,0.2),(0.85,0.7),(0.5,0.85),(0.43,0.62),(0.16,0.48)])
both('Dermomiotoma', [(0.5,0.95),(0.9,0.8),(1.05,1.1),(0.62,1.3)])
export(OUT+'neur3.glb')
# ── Disco trilaminar (corte transversal por la línea primitiva) ──
reset()
def disc(name, z0, h, s=(1.0,1.6)):
    o=cyl(name,(0,0,z0+h/2),1.0,h,96); o.scale=(s[0],s[1],1); bpy.context.view_layer.objects.active=o; bpy.ops.object.transform_apply(scale=True); return o
ecto=disc('Ectodermo',0.5,0.28); meso=disc('Mesodermo',0.24,0.26,(0.96,1.55)); endo=disc('Endodermo',0.0,0.24)
# surco de la línea primitiva y fosita del nodo
g=box('_g',(0,-0.75,0.78),(0.16,1.4,0.32)); boolean(ecto,g)
nodo=sph('Nodo primitivo',(0,-0.02,0.78),0.16,(1,1,0.6)); boolean(nodo, sph('_f',(0,-0.02,0.86),0.08))
# notocorda en la línea media craneal (en el plano del mesodermo) y placa precordal
noto=cyl('Notocorda',(0,0.5,0.37),0.1,0.95,24); noto.rotation_euler=(math.pi/2,0,0)
bpy.context.view_layer.objects.active=noto; bpy.ops.object.transform_apply(rotation=True)
boolean(meso, box('_nm',(0,0.5,0.37),(0.24,0.97,0.4)))
pre=sph('Placa precordal',(0,1.1,0.37),0.12,(1.2,1,0.9))
# membranas: sin mesodermo en los extremos craneal y caudal
boolean(meso, cyl('_mo',(0,1.38,0.37),0.14,0.5)); boolean(meso, cyl('_mc',(0,-1.42,0.37),0.14,0.5))
# células en matraz que entran por la línea primitiva
for k,(x,z) in enumerate([(-0.09,0.6),(0.09,0.6),(-0.2,0.45),(0.2,0.45),(-0.3,0.34),(0.3,0.34)]):
    c=sph('Celulas en matraz %d'%k,(x,-0.62,z),0.07,(0.75,0.75,1.6))
# corte transversal: se conserva la mitad craneal
for o in list(bpy.data.objects):
    if o.type=='MESH': boolean(o, box('_cut',(0,-0.6-50,0),(100,100,100)))
export(OUT+'disco3.glb')
# ── Embrión del día 22 (vista dorsal) ──
reset()
base_=cyl('Ectodermo',(0,0,-0.06),1.0,0.12,96); base_.scale=(0.85,2.1,1); bpy.context.view_layer.objects.active=base_; bpy.ops.object.transform_apply(scale=True)
# tubo neural cerrado en la parte media
t=cyl('Tubo neural',(0,0.1,0.05),0.14,1.3,32); t.rotation_euler=(math.pi/2,0,0); bpy.context.view_layer.objects.active=t; bpy.ops.object.transform_apply(rotation=True)
# pliegues abiertos en los extremos (neuroporos)
def ridge(name,pts,r=0.07):
    cu=bpy.data.curves.new(name,'CURVE'); cu.dimensions='3D'; cu.bevel_depth=r; cu.bevel_resolution=4; cu.use_fill_caps=True
    sp=cu.splines.new('BEZIER'); sp.bezier_points.add(len(pts)-1)
    for bp,p in zip(sp.bezier_points,pts): bp.co=p; bp.handle_left_type=bp.handle_right_type='AUTO'
    o=bpy.data.objects.new(name,cu); bpy.context.collection.objects.link(o); bpy.context.view_layer.objects.active=o; o.select_set(True); bpy.ops.object.convert(target='MESH'); o.select_set(False); return o
for s in (-1,1):
    ridge('Pliegue neural craneal',[(s*0.1,0.75,0.08),(s*0.3,1.2,0.1),(s*0.42,1.65,0.1),(s*0.25,1.95,0.08)],0.08)
    ridge('Pliegue neural caudal',[(s*0.1,-0.55,0.08),(s*0.16,-1.0,0.07),(s*0.12,-1.45,0.06)],0.06)
prism_plate=cyl('Placa neural',(0,1.35,0.0),1.0,0.04,48); prism_plate.scale=(0.34,0.55,1); bpy.context.view_layer.objects.active=prism_plate; bpy.ops.object.transform_apply(scale=True)
pl2=cyl('Placa neural caudal',(0,-1.0,0.0),1.0,0.04,48); pl2.scale=(0.12,0.45,1); bpy.context.view_layer.objects.active=pl2; bpy.ops.object.transform_apply(scale=True)
for i in range(7):
    y=0.6-i*0.19
    for s in (-1,1): sph('Somita %d'%i,(s*0.3,y,0.03),0.085,(1.15,0.9,0.75))
export(OUT+'emb22.glb')
