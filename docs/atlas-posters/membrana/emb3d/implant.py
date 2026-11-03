import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lib import *
import random
OUT=os.path.dirname(os.path.abspath(__file__))+'/'
def join(objs, name):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs: o.select_set(True)
    bpy.context.view_layer.objects.active=objs[0]; bpy.ops.object.join(); objs[0].name=name; return objs[0]
def disc(cz, r=0.5, amn=True, s=1.0):
    h=cyl('Hipoblasto',(0,0,cz),r,0.1*s)
    e=cyl('Epiblasto',(0,0,cz-0.12*s),r,0.14*s)
    if amn: sph('Cavidad amniotica',(0,0,cz-0.25*s),1,(r*0.8,r*0.8,0.09*s))
def endo(top, holes):
    en=box('Endometrio',(0,0,top-2.1),(4.8,4.8,4.2))
    for hcut in holes: boolean(en,hcut,keep=True)
    return en
def ring_spheres(prefix, c, R, n, r, zmin=-9, zmax=9, seed=1, dz=0):
    random.seed(seed); out=[]
    for i in range(n):
        th=random.uniform(0,2*math.pi); ph=random.uniform(0.2,math.pi-0.2)
        p=Vector((R*math.sin(ph)*math.cos(th), R*math.sin(ph)*math.sin(th), R*math.cos(ph)*0.92))+Vector(c)
        if zmin<p.z<zmax: out.append(ico('%s %d'%(prefix,i),tuple(p),r*random.uniform(0.8,1.2),2,(1,1,0.7)))
    return out
def lagunas(sin, c, R, n, r, seed):
    bl=join(ring_spheres('Lagunas con sangre',c,R,n,r,seed=seed),'Lagunas con sangre')
    cp=sin.copy(); cp.data=sin.data.copy(); bpy.context.collection.objects.link(cp)
    boolean(bl, cp, 'INTERSECT')
    cp2=bl.copy(); cp2.data=bl.data.copy(); bpy.context.collection.objects.link(cp2)
    boolean(sin, cp2)
    return bl
def plane_spheres(prefix, c, R, n, r, seed=1, x=-0.03):
    random.seed(seed); out=[]
    for i in range(n):
        a=2*math.pi*i/n+random.uniform(-0.08,0.08)
        rr=R+random.uniform(-0.07,0.04)
        p=(x-random.uniform(0,0.03), c[1]+rr*math.cos(a), c[2]+rr*math.sin(a)*0.92)
        out.append(ico('%s %d'%(prefix,i),p,r*random.uniform(0.85,1.15),2,(0.6,1.3,1)))
    return out
def carve(target, tool):
    cp=tool.copy(); cp.data=tool.data.copy(); bpy.context.collection.objects.link(cp)
    for m in list(cp.modifiers): cp.modifiers.remove(m)
    return boolean(target, cp)
def tube(name, pts, r):
    cu=bpy.data.curves.new(name,'CURVE'); cu.dimensions='3D'; cu.bevel_depth=r; cu.bevel_resolution=4; cu.use_fill_caps=True
    sp=cu.splines.new('BEZIER'); sp.bezier_points.add(len(pts)-1)
    for bp,p in zip(sp.bezier_points,pts): bp.co=p; bp.handle_left_type=bp.handle_right_type='AUTO'
    o=bpy.data.objects.new(name,cu); bpy.context.collection.objects.link(o)
    bpy.context.view_layer.objects.active=o; o.select_set(True); bpy.ops.object.convert(target='MESH'); return o

# ── Día 8 ──
reset(); C=(0,0,0.3)
sin=sph('Sincitiotrofoblasto',(0,0,0.0),1.45,(1,1,0.82)); noisy(sin,0.12,0.35,1)
boolean(sin, box('_top',(0,0,1.6+0.35),(10,10,3.2)))
boolean(sin, sph('_c',C,1.0))
cito=shell('Citotrofoblasto',1.0,0.9,C)
disc(C[2]-0.55)
hole=sph('_h',C,1.0); hole2=sin.copy(); hole2.data=sin.data.copy(); bpy.context.collection.objects.link(hole2)
en=endo(0.25,[hole,hole2]); bpy.data.objects.remove(hole,do_unlink=True); bpy.data.objects.remove(hole2,do_unlink=True)
cut_all(); export(OUT+'dia8.glb')

# ── Día 9 ──
reset(); C=(0,0,-0.65)
sin=sph('Sincitiotrofoblasto',C,1.4,(1,1,0.95)); noisy(sin,0.1,0.35,2)
lag=ring_spheres('_lag',C,1.2,30,0.13,seed=4)+plane_spheres('_lagp',C,1.2,14,0.12,4)
for l in lag: boolean(sin,l)
boolean(sin, sph('_c',C,1.0))
cito=shell('Citotrofoblasto',1.0,0.92,C)
heu=shell('Membrana de Heuser',0.92,0.87,C); boolean(heu, box('_b',(0,0,C[2]-0.45-1.5),(10,10,3)))
disc(C[2]-0.55)
coag=sph('Coagulo de fibrina',(0,0,0.62),1,(0.45,0.45,0.13))
hole=sin.copy(); hole.data=sin.data.copy(); bpy.context.collection.objects.link(hole)
h2=sph('_h',C,1.0)
en=endo(0.62,[hole,h2]); bpy.data.objects.remove(hole,do_unlink=True); bpy.data.objects.remove(h2,do_unlink=True)
cut_all(); export(OUT+'dia9.glb')

# ── Días 11–12 ──
reset(); C=(0,0,-0.75)
sin=sph('Sincitiotrofoblasto',C,1.5,(1,1,0.95)); noisy(sin,0.1,0.35,3)
boolean(sin, sph('_c',C,1.05))
bl=plane_spheres('Lagunas p',C,1.21,20,0.1,5)
for b in bl: carve(sin,b); cut(b)
blood=join(bl,'Lagunas con sangre')
cito=shell('Citotrofoblasto',1.05,0.98,C)
mes=shell('Mesodermo extraembrionario',0.98,0.74,C)
for v in ring_spheres('_esp',C,0.86,22,0.1,seed=7,zmin=C[2]-0.2): boolean(mes,v)
heu=shell('Saco vitelino primitivo',0.74,0.7,C); boolean(heu, box('_b',(0,0,C[2]-0.38-1.5),(10,10,3)))
disc(C[2]-0.48,0.4)
hole=sph('_h1',C,1.47,(1,1,0.95))
h2=sph('_h',C,1.05)
en=endo(0.6,[hole,h2]); bpy.data.objects.remove(hole,do_unlink=True); bpy.data.objects.remove(h2,do_unlink=True)
sins=[]
for k,pts in enumerate([[(-0.07,-2.35,0.1),(-0.07,-1.9,-0.3),(-0.07,-1.45,-0.55)],[(-0.07,2.35,-1.7),(-0.07,1.85,-1.35),(-0.07,1.42,-1.05)],[(-0.07,-2.35,-2.2),(-0.07,-1.7,-1.9),(-0.07,-1.2,-1.65)],[(-0.07,2.35,0.2),(-0.07,1.75,-0.05),(-0.07,1.35,-0.3)]]):
    sins.append(tube('Sinusoides %d'%k,[Vector(p) for p in pts],0.14))
for t in sins: carve(en,t); cut(t)
sn=join(sins,'Sinusoides maternos')
cut_all(); export(OUT+'dia12.glb')

# ── Día 13 ──
reset(); C=(0,0,-0.85)
sin=sph('Sincitiotrofoblasto',C,1.62,(1,1,0.95)); noisy(sin,0.1,0.35,8)
boolean(sin, sph('_c',C,1.12))
bl=plane_spheres('Lagunas p',C,1.36,22,0.085,9)
for b in bl: carve(sin,b); cut(b)
blood=join(bl,'Lagunas con sangre')
cito=shell('Citotrofoblasto',1.12,1.05,C)
vill=[]
random.seed(11)
for i in range(0):
    th=random.uniform(0,2*math.pi); ph=random.uniform(0.15,math.pi-0.15)
    d=Vector((math.sin(ph)*math.cos(th), math.sin(ph)*math.sin(th), math.cos(ph)*0.95))
    p=Vector(C)+d*1.25
    bpy.ops.mesh.primitive_cylinder_add(vertices=12, radius=0.085, depth=0.36, location=p)
    o=bpy.context.active_object; o.rotation_mode='QUATERNION'; o.rotation_quaternion=d.to_track_quat('Z','Y'); vill.append(o)
for i in range(18):
    a=2*math.pi*(i+0.5)/18
    d=Vector((0,math.cos(a),math.sin(a)*0.95)); p=Vector(C)+d*1.24+Vector((-0.03,0,0))
    bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=0.07, depth=0.34, location=p)
    o=bpy.context.active_object; o.rotation_mode='QUATERNION'; o.rotation_quaternion=d.to_track_quat('Z','Y'); vill.append(o)
for v in vill: carve(sin,v); cut(v)
vl=join(vill,'Vellosidades primarias')
pc=shell('Placa corionica',1.05,0.99,C)
ped=cyl('Pediculo de fijacion',(0,0,C[2]-0.78),0.13,0.42)
disc(C[2]-0.38,0.36,True,0.9)
ys=shell('Saco vitelino definitivo',0.3,0.26,(0,0,C[2]-0.05)); boolean(ys, box('_bb',(0,0,C[2]-0.05-0.3-0.5+0.04),(2,2,1)))
q=sph('Quiste exocelomico',(-0.2,0.45,C[2]+0.45),0.11)
hole=sph('_h1',C,1.58,(1,1,0.95))
h2=sph('_h',C,1.12)
en=endo(0.95,[hole,h2]); bpy.data.objects.remove(hole,do_unlink=True); bpy.data.objects.remove(h2,do_unlink=True)
cut_all(); export(OUT+'dia13.glb')
