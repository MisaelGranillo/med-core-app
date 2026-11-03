import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lib import *
reset()
zona=shell('Zona pelucida', 1.18, 1.1)
tro=shell('Trofoblasto', 1.06, 0.98)
# embrioblasto: cúmulo de células en el polo superior
import random; random.seed(3)
cells=[]
for i in range(26):
    th=random.uniform(0,2*math.pi); ph=random.uniform(0,0.55)
    r=random.uniform(0.62,0.9)
    p=(r*math.sin(ph)*math.cos(th), r*math.sin(ph)*math.sin(th), r*math.cos(ph))
    cells.append(ico('Embrioblasto %d'%i, p, random.uniform(0.15,0.2), 2))
bpy.ops.object.select_all(action='DESELECT')
for c in cells: c.select_set(True)
bpy.context.view_layer.objects.active=cells[0]; bpy.ops.object.join(); cells[0].name='Embrioblasto'
cut_all()
export(os.path.dirname(os.path.abspath(__file__))+'/blastocisto.glb')
