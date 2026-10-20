# Uso: python3 comp.py <lámina>.json  → out/<lámina>.png (base/ = lámina original sin fotos; sel/ = micrografías)
# Sustituye ilustraciones de un póster por micrografías reales, con el esquema original como recuadro.
# spec JSON: {"src": póster, "out": png, "items": [{"img","box":[x0,y0,x1,y1],"f":[fx,fy],"z":zoom,"inset":true,"inset_s":0.4,"inset_pos":"br"}], "foot": {...}}
import sys, json, os
from PIL import Image, ImageDraw, ImageFilter, ImageFont
spec = json.load(open(sys.argv[1]))
BASE = os.path.dirname(os.path.abspath(sys.argv[1])); os.makedirs(os.path.join(BASE, 'out'), exist_ok=True)
P = Image.open(os.path.join(BASE, spec['src'])).convert('RGB'); orig = P.copy()
def rr_mask(w, h, r):
    m = Image.new('L', (w, h), 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, w - 1, h - 1), r, fill=255); return m
for it in spec['items']:
    x0, y0, x1, y1 = it['box']; W, H = x1 - x0, y1 - y0
    ph = Image.open(os.path.join(os.path.dirname(sys.argv[1]), 'sel') + '/' + it['img'] + '.jpg').convert('RGB')
    if 'crop' in it: ph = ph.crop(tuple(int(v * s) for v, s in zip(it['crop'], (ph.width, ph.height, ph.width, ph.height))))
    z = it.get('z', 1.0); k = max(W / ph.width, H / ph.height) * z
    ph = ph.resize((max(W, round(ph.width * k)), max(H, round(ph.height * k))), Image.LANCZOS)
    fx, fy = it.get('f', [0.5, 0.5]); cx, cy = fx * ph.width, fy * ph.height
    l = int(min(max(cx - W / 2, 0), ph.width - W)); t = int(min(max(cy - H / 2, 0), ph.height - H))
    ph = ph.crop((l, t, l + W, t + H))
    if it.get('inset', True):
        sch = orig.crop((x0, y0, x1, y1)); s = it.get('inset_s', 0.38)
        bb = Image.eval(sch.convert('L'), lambda v: 255 if v < 246 else 0).getbbox()
        if bb: sch = sch.crop(bb)
        sw = round(W * s); sh = round(sch.height * sw / sch.width)
        if sh > H * 0.55: sh = round(H * 0.55); sw = round(sch.width * sh / sch.height)
        sch = sch.resize((sw, sh), Image.LANCZOS)
        pad = 6; card = Image.new('RGB', (sw + 2 * pad, sh + 2 * pad), 'white'); card.paste(sch, (pad, pad))
        ImageDraw.Draw(card).rectangle((0, 0, card.width - 1, card.height - 1), outline=(205, 210, 222))
        m = 8; pos = it.get('inset_pos', 'br')
        px = W - card.width - m if 'r' in pos else m; py = H - card.height - m if 'b' in pos else m
        ph.paste(card, (px, py))
    P.paste(ph, (x0, y0), rr_mask(W, H, it.get('r', 10)))
for e in spec.get('erase_extra', []): ImageDraw.Draw(P).rectangle(tuple(e), fill='white')
for c in spec.get('cells', []):
    cx, cy, D = c['c'][0], c['c'][1], c['d']; e = c.get('erase')
    if e: ImageDraw.Draw(P).rectangle(tuple(e), fill='white')
    sx, sy, sr = c['src']
    ph = Image.open(os.path.join(os.path.dirname(sys.argv[1]), 'sel') + '/' + c['img'] + '.jpg').convert('RGB').crop((sx - sr, sy - sr, sx + sr, sy + sr)).resize((D, D), Image.LANCZOS)
    m = Image.new('L', (D * 4, D * 4), 0); ImageDraw.Draw(m).ellipse((0, 0, D * 4 - 1, D * 4 - 1), fill=255); m = m.resize((D, D), Image.LANCZOS)
    P.paste(ph, (cx - D // 2, cy - D // 2), m)
    ImageDraw.Draw(P).ellipse((cx - D // 2 - 1, cy - D // 2 - 1, cx + D // 2, cy + D // 2), outline=tuple(c.get('ring', [205, 210, 222])), width=3)
    FT = '/Users/misaelgranillo/Library/Fonts/Inter-VariableFont_opsz,wght.ttf'
    fb = ImageFont.truetype(FT, 22); fb.set_variation_by_name('Bold'); fr = ImageFont.truetype(FT, 20); fr.set_variation_by_name('Regular')
    d = ImageDraw.Draw(P); k = D / (2 * sr)
    for L in c.get('labels', []):
        px, py = cx + (L['p'][0] - sx) * k, cy + (L['p'][1] - sy) * k; lx, ly = L['at']; right = L.get('align', 'right') == 'right'
        tw = max(d.textlength(L['t'], font=fb), d.textlength(L.get('s', ''), font=fr))
        tx = lx - tw if right else lx
        d.text((tx if not right else lx - d.textlength(L['t'], font=fb), ly - 24), L['t'], font=fb, fill=(19, 41, 91))
        if L.get('s'): d.text((lx - d.textlength(L['s'], font=fr) if right else lx, ly + 2), L['s'], font=fr, fill=(29, 36, 51))
        x0 = lx + 6 if right else lx - 6
        d.line([(x0, ly - 6), (px, py)], fill=(34, 34, 34), width=2); d.ellipse((px - 4, py - 4, px + 4, py + 4), fill=(34, 34, 34))
f = spec.get('foot')
if f:
    x0, y0, x1, y1 = f['box']; ImageDraw.Draw(P).rectangle((x0, y0, x1, y1), fill='white')
    sz = f.get('size', 19); d = ImageDraw.Draw(P)
    while True:
        font = ImageFont.truetype(f.get('font', '/System/Library/Fonts/Helvetica.ttc'), sz); w = d.textlength(f['text'], font=font)
        if w <= (x1 - x0) - 20 or sz <= 14: break
        sz -= 1
    f['size'] = sz
    d.text(((x0 + x1) / 2 - w / 2, y0 + (y1 - y0 - f.get('size', 19)) / 2), f['text'], fill=tuple(f.get('color', [150, 156, 170])), font=font)
P.save(os.path.join(BASE, spec['out'])); print('ok', spec['out'])
