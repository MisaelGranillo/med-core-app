import bpy, glob, os
HERE=os.path.dirname(os.path.abspath(__file__))
bpy.ops.wm.read_factory_settings(use_empty=True)
for f in sorted(glob.glob(HERE+'/hra/*.glb')):
    bpy.ops.import_scene.gltf(filepath=f)
for o in bpy.data.objects: print('OBJ', o.name, o.type, tuple(round(x,3) for x in o.dimensions))
bpy.ops.export_scene.gltf(filepath=HERE+'/utero-anexos.glb', export_format='GLB')
