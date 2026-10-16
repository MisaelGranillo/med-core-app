# Sustituye una figura de un póster (por su imagen ana/x.png) por un bloque auto3d o una imagen 3D.
import re, json, pathlib
HERE = pathlib.Path(__file__).resolve().parent
def _container(s, img):
    i = s.find(f'{{{{img:{img}}}}}')
    if i == -1: i = s.index(f'"img":"{img}"')
    # 1) <script type="callout">…</script>
    a = s.rfind('<script type="callout">', 0, i); b = s.rfind('</script>', 0, i)
    if a != -1 and a > b: return a, s.index('</script>', i) + len('</script>'), None
    # 2) <div class="callouts" style="width:Wpx;height:Hpx…">…</div> (cierra al mismo sangrado)
    a = s.rfind('<div class="callouts"', 0, i)
    if a != -1 and i - a < 400:
        line0 = s.rfind('\n', 0, a) + 1; ind = s[line0:a]
        m = re.search(r'\n' + re.escape(ind) + r'</div>', s[i:]); end = i + m.end()
        st = re.search(r'width:(\d+)px;height:(\d+)px', s[a:a + 200])
        return a, end, (int(st.group(1)), int(st.group(2))) if st else None
    # 3) <img …> suelta
    a = s.rfind('<img', 0, i); return a, s.index('>', i) + 1, 'img'
def swap(path, img, spec=None, newimg=None, style=None):
    p = HERE / path; s = p.read_text(); a, b, info = _container(s, img)
    if spec is not None:
        if isinstance(info, tuple): spec.setdefault('cw', info[0]); spec.setdefault('height', info[1] - 12); spec.setdefault('ch', info[1])
        rep = '<script type="auto3d">' + json.dumps(spec, ensure_ascii=False) + '</script>'
    else:
        old = s[a:b]; st = style or (re.search(r'style="([^"]*)"', old) or [None, ''])[1]
        rep = f'<img src="{{{{img:{newimg}}}}}" style="{st}">'
    p.write_text(s[:a] + rep + s[b:]); print('swap', path, img, '→', spec['img'] if spec else newimg, info)
