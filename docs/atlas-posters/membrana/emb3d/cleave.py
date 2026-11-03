import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lib import *
import random
OUT=os.path.dirname(os.path.abspath(__file__))+'/'
def zona(): return shell('Zona pelucida',1.18,1.1)
def cell(name,p,r): return sph(name,p,r,(1,1,1),40,24)
def sep(objs, k=0.94):
    for o in objs: o.scale=(k,k,k)
# cigoto
reset(); zona(); cell('Ovocito',(0,0,0),1.0)
sph('Pronucleo femenino',(-0.32,0.0,0.12),0.26); sph('Pronucleo masculino',(0.3,0.05,0.1),0.26)
sph('Cuerpo polar 1',(0.15,0.95,0.55),0.16); sph('Cuerpo polar 2',(-0.25,1.0,0.45),0.13)
export(OUT+'cigoto.glb')
# 2 células
reset(); zona(); cell('Blastomera 1',(-0.48,0,0),0.62); cell('Blastomera 2',(0.48,0,0),0.62); export(OUT+'c2.glb')
# 4 células (tetraédrico)
reset(); zona()
for i,p in enumerate([(0.45,0.45,0.3),(-0.45,-0.45,0.3),(0.45,-0.45,-0.3),(-0.45,0.45,-0.3)]): cell('Blastomera %d'%i,p,0.52)
export(OUT+'c4.glb')
# 8 células
reset(); zona()
for i,p in enumerate([(sx*0.42,sy*0.42,sz*0.42) for sx in (-1,1) for sy in (-1,1) for sz in (-1,1)]): cell('Blastomera %d'%i,p,0.44)
export(OUT+'c8.glb')
# mórula: 20 células compactadas
reset(); zona(); random.seed(2)
pts=[]
golden=math.pi*(3-math.sqrt(5))
for i in range(18):
    y=1-2*(i+0.5)/18; r=math.sqrt(1-y*y); th=golden*i
    pts.append((0.62*r*math.cos(th),0.62*y,0.62*r*math.sin(th)))
pts+= [(0,0,0.12),(0,0,-0.12)]
for i,p in enumerate(pts): cell('Blastomera %d'%i,p,0.36 if i<18 else 0.3)
export(OUT+'morula.glb')
# eclosión: blastocisto saliendo por una abertura de la zona (cortado)
reset()
z=shell('Zona pelucida',1.18,1.1); boolean(z, sph('_hole',(0,1.15,0.35),0.55))
tro=shell('Trofoblasto',1.06,0.98)
random.seed(3); cells=[]
for i in range(26):
    th=random.uniform(0,2*math.pi); ph=random.uniform(0,0.55); r=random.uniform(0.62,0.9)
    cells.append(ico('Embrioblasto %d'%i,(r*math.sin(ph)*math.cos(th), r*math.sin(ph)*math.sin(th), r*math.cos(ph)),random.uniform(0.15,0.2),2))
bpy.ops.object.select_all(action='DESELECT')
for c in cells: c.select_set(True)
bpy.context.view_layer.objects.active=cells[0]; bpy.ops.object.join(); cells[0].name='Embrioblasto'
bump=sph('Trofoblasto salida',(0,1.12,0.38),0.5); boolean(bump, sph('_i',(0,1.12,0.38),0.42))
cut_all(skip=()); export(OUT+'eclosion.glb')
