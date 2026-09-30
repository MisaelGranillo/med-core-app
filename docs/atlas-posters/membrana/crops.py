# Regenera ana/*.png (recortes de las láminas base de docs/atlas-fuentes) — python3 crops.py
import re, base64, pathlib
from flood import crop
F = str(pathlib.Path(__file__).resolve().parents[1].parent / 'atlas-fuentes') + '/'
pathlib.Path(__file__).resolve().parent.joinpath('ana').mkdir(exist_ok=True)
crop(F+'huesos-craneo-base.png', {'craneo-lat': (30,36,472,486), 'craneo-ant': (505,36,815,506), 'craneo-base': (218,492,632,992)}, masks={'craneo-base': [(330,0,414,30)]})
crop(F+'huesos-cara-base.png', {'cara-ant': (180,0,665,535), 'cara-lat': (0,540,365,970)})
crop(F+'columna-vertebral-base.png', {'col-lat': (92,48,288,1028), 'col-lumbar': (422,52,782,358), 'col-cervical': (422,388,782,638), 'col-sacro': (472,662,738,1004)})
crop(F+'miembro-superior-oseo-base.png', {'ms-arm': (75,60,460,850), 'ms-humero': (628,312,732,692), 'ms-antebrazo': (333,668,512,1006), 'ms-mano': (572,742,772,1006)}, masks={'ms-arm': [(255,272,385,790)]})
crop(F+'miembro-inferior-oseo-base.png', {'mi-femur': (40,50,250,970), 'mi-pierna': (300,45,545,980), 'mi-pie': (590,425,812,978)})
crop(F+'artrologia-clasificacion-base.png', {'art-esf': (150,0,430,392), 'art-cond': (600,0,832,392), 'art-selar': (160,412,422,745), 'art-plana': (590,412,832,745), 'art-troc': (175,765,402,1104), 'art-trocoide': (600,765,832,1104)})
crop(F+'articulacion-temporomandibular-base.png', {'atm': (0,0,1024,1070)})
crop(F+'articulaciones-columna-base.png', {'artc-col': (328,176,1462,2066)}, thresh=22, anycolor=True)
crop(F+'articulaciones-miembro-inferior-base.png', {'artc-cadera': (120,0,960,1060)})
crop(F+'articulaciones-miembro-superior-base.png', {'artc-hombro': (176,390,1525,1701)})
# El coxal solo existe incrustado en la lámina anterior (hueso-coxal-base.png es otra ilustración)
src = pathlib.Path(__file__).resolve().parent / 'ana' / 'coxal-src.png'
if not src.exists():
    # respaldo: la lámina Cowork con la ilustración incrustada
    html = pathlib.Path.home() / 'Downloads/Cowork task Medcore prompt update 2026-09-29/local_4ebd5559-5f15-45ce-a1aa-f06196748f4a/outputs/poster_hueso-coxal.html'
    b = re.search(r'data:image/png;base64,([A-Za-z0-9+/=]+)', html.read_text()).group(1)
    src.write_bytes(base64.b64decode(b))
crop(str(src), {'coxal-lat': (160,0,375,285), 'coxal-med': (235,285,440,550)}, thresh=22)
