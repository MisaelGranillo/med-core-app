import bpy, bmesh, math, random
from mathutils import Vector
def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
def sph(name, loc=(0,0,0), r=1.0, scale=(1,1,1), seg=48, ring=32):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg, ring_count=ring, radius=r, location=loc)
    o=bpy.context.active_object; o.name=name; o.scale=scale
    bpy.ops.object.transform_apply(scale=True); bpy.ops.object.shade_smooth(); return o
def ico(name, loc, r, sub=3, scale=(1,1,1)):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=sub, radius=r, location=loc)
    o=bpy.context.active_object; o.name=name; o.scale=scale; bpy.ops.object.transform_apply(scale=True); bpy.ops.object.shade_smooth(); return o
def cyl(name, loc, r, h, seg=64):
    bpy.ops.mesh.primitive_cylinder_add(vertices=seg, radius=r, depth=h, location=loc)
    o=bpy.context.active_object; o.name=name; bpy.ops.object.shade_smooth(); return o
def box(name, loc, size):
    bpy.ops.mesh.primitive_cube_add(location=loc); o=bpy.context.active_object; o.name=name; o.scale=[s/2 for s in size]
    bpy.ops.object.transform_apply(scale=True); return o
def boolean(a, b, op='DIFFERENCE', keep=False):
    m=a.modifiers.new('b','BOOLEAN'); m.operation=op; m.object=b; m.solver='EXACT'
    bpy.context.view_layer.objects.active=a; bpy.ops.object.modifier_apply(modifier=m.name)
    if not keep: bpy.data.objects.remove(b, do_unlink=True)
    return a
def shell(name, ro, ri, loc=(0,0,0), scale=(1,1,1)):
    o=sph(name, loc, ro, scale); i=sph(name+'_in', loc, ri, scale); return boolean(o,i)
def noisy(o, strength=0.08, size=0.4, seed=1):
    t=bpy.data.textures.new('n'+o.name,'CLOUDS'); t.noise_scale=size
    m=o.modifiers.new('d','DISPLACE'); m.texture=t; m.strength=strength; m.mid_level=0.5
    bpy.context.view_layer.objects.active=o; bpy.ops.object.modifier_apply(modifier=m.name)
    r=o.modifiers.new('r','REMESH'); r.mode='VOXEL'; r.voxel_size=0.03
    bpy.ops.object.modifier_apply(modifier=r.name); bpy.ops.object.shade_smooth(); return o
def cut(o, plane_x=0.0):
    c=box('_cutter', (plane_x+50,0,0), (100,100,100))
    return boolean(o, c)
def cut_all(skip=('Lagunas con sangre','Vellosidades primarias','Sinusoides maternos')):
    for o in list(bpy.data.objects):
        if o.type=='MESH' and o.name not in skip: cut(o)
def export(path):
    bpy.ops.export_scene.gltf(filepath=path, export_format='GLB', export_apply=True)
