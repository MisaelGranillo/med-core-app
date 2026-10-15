#!/usr/bin/env python3
"""Genera miniaturas (480 px de ancho, WebP) de los pósters del Atlas en
public/atlas/thumbs/ para la cuadrícula. Idempotente: solo rehace las que
faltan o son más viejas que el original. Uso: python3 scripts/atlas-thumbs.py"""
from pathlib import Path
from PIL import Image

src = Path(__file__).resolve().parent.parent / 'public' / 'atlas'
out = src / 'thumbs'
out.mkdir(exist_ok=True)
made = 0
for f in sorted(src.iterdir()):
    if f.suffix.lower() not in ('.webp', '.png', '.jpg', '.jpeg'):
        continue
    t = out / (f.stem + '.webp')
    if t.exists() and t.stat().st_mtime >= f.stat().st_mtime:
        continue
    im = Image.open(f).convert('RGB')
    w = 480
    h = round(im.height * w / im.width)
    im.resize((w, h), Image.LANCZOS).save(t, 'WEBP', quality=78, method=6)
    made += 1
print(f'miniaturas nuevas: {made}')
