# Recorta vistas de una lámina base y blanquea el fondo por relleno desde los bordes
from PIL import Image, ImageDraw
import pathlib
HERE = pathlib.Path(__file__).resolve().parent
def whiten(img, thresh=28, step=20, anycolor=False):
    im = img.convert('RGB'); w, h = im.size; ref = im.getpixel((0, 0))
    seeds = [(x, 0) for x in range(0, w, step)] + [(x, h - 1) for x in range(0, w, step)] + \
            [(0, y) for y in range(0, h, step)] + [(w - 1, y) for y in range(0, h, step)]
    for s in seeds:
        r, g, b = im.getpixel(s)
        near = abs(r - ref[0]) + abs(g - ref[1]) + abs(b - ref[2]) < 30
        if ((anycolor and near) or (r > 200 and g > 200 and b > 200)) and (r, g, b) != (255, 0, 255):
            # color centinela: PIL no rellena si el color nuevo está dentro del umbral del de la semilla
            ImageDraw.floodfill(im, s, (255, 0, 255), thresh=thresh)
    px = im.load()
    for y in range(h):
        for x in range(w):
            if px[x, y] == (255, 0, 255): px[x, y] = (255, 255, 255)
    return im
def crop(src, boxes, thresh=28, masks=None, anycolor=False):
    im = Image.open(src).convert('RGB')
    for n, b in boxes.items():
        c = whiten(im.crop(b), thresh, anycolor=anycolor)
        for box in (masks or {}).get(n, []): ImageDraw.Draw(c).rectangle(box, fill='white')
        c.save(HERE / 'ana' / f'{n}.png'); print(n, c.size)
