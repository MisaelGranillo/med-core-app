import re,sys,html
s=open(sys.argv[1]).read()
s=re.sub(r'<style.*?</style>','',s,flags=re.S); s=re.sub(r'data:image/[^"\')]+','DATA',s)
s=re.sub(r'<(br|/p|/li|/tr|/div|/h\d)[^>]*>','\n',s); s=re.sub(r'<td[^>]*>',' | ',s); s=re.sub(r'<span class="sw" style="background:([^"]+)">','[\\1] ',s)
s=re.sub(r'<[^>]+>','',s); s=html.unescape(s)
print('\n'.join(l.strip() for l in s.splitlines() if l.strip()))
